/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from "react";

const ScrollAnimation = ({
  children,
  animation = "fade-up",
  duration = 600,
  delay = 0,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)",
  threshold = 0.2,
  once = true,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      data-animation={animation}
      className={`scroll-animate ${visible ? "show" : ""}`}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: easing,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
