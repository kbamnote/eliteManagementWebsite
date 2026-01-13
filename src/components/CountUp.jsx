/* eslint-disable react-hooks/immutability */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animateCount();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    let start = 0;
    const startTime = performance.now();

    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {typeof end === "number" && end === 95 ? "%" : ""}
    </span>
  );
};

export default CountUp;
