"use client";

import React, { useEffect, useMemo, useRef } from "react";

export const Particles = ({
  className,
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}) => {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const context = useRef(null);
  const circles = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const colorValues = useMemo(() => {
    const values = color.match(/[\da-f]{2}/gi);
    if (values) {
      return values.map((value) => parseInt(value, 16));
    }
    return [0, 0, 0];
  }, [color]);

  useEffect(() => {
    if (!canvasRef.current) return;
    context.current = canvasRef.current.getContext("2d");
  }, []);

  useEffect(() => {
    if (!canvasContainerRef.current || !canvasRef.current || !context.current)
      return;

    // Small delay to ensure proper initialization
    const timer = setTimeout(() => {
      initCanvas();
      // Initialize circles
      circles.current = [];
      for (let i = 0; i < quantity; i++) {
        circles.current.push(circleParams());
      }
      animate();
    }, 100);

    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
      clearTimeout(timer);
    };
  }, [colorValues, refresh, quantity]);

  useEffect(() => {
    onMouseMove();
  }, []);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const onMouseMove = () => {
    if (!canvasRef.current) return;
    canvasRef.current.addEventListener("mousemove", (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      mousePosition.current.x = e.clientX - rect.left;
      mousePosition.current.y = e.clientY - rect.top;
    });
  };

  const resizeCanvas = () => {
    if (!canvasContainerRef.current || !canvasRef.current) return;
    canvasRef.current.width = canvasContainerRef.current.offsetWidth;
    canvasRef.current.height = canvasContainerRef.current.offsetHeight;
    // Clear circles when resizing
    circles.current = [];
    for (let i = 0; i < quantity; i++) {
      circles.current.push(circleParams());
    }
  };

  const circleParams = () => {
    const width = canvasRef.current?.width || window.innerWidth;
    const height = canvasRef.current?.height || window.innerHeight;
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const translateX = 0;
    const translateY = 0;
    const particleSize = Math.floor(Math.random() * 2) + size;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size: particleSize,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const rgb = `rgb(${colorValues.join(", ")})`;

  const drawCircle = (circle) => {
    if (!context.current) return;
    context.current.beginPath();
    context.current.arc(
      circle.x + circle.translateX,
      circle.y + circle.translateY,
      circle.size,
      0,
      2 * Math.PI
    );
    context.current.fillStyle = rgb;
    context.current.globalAlpha = circle.alpha;
    context.current.fill();
  };

  const drawParticles = () => {
    if (!context.current || !canvasRef.current) return;
    circles.current.forEach((circle) => {
      drawCircle(circle);
    });
  };

  const remapValue = (value, start1, end1, start2, end2) => {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };

  const animate = () => {
    if (!context.current || !canvasRef.current) return;
    context.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    circles.current.forEach((circle, i) => {
      // Handle the alpha value
      const edge = [
        circle.x + circle.translateX - circle.size, // distance from left edge
        canvasRef.current.width - circle.x - circle.translateX - circle.size, // distance from right edge
        circle.y + circle.translateY - circle.size, // distance from top edge
        canvasRef.current.height - circle.y - circle.translateY - circle.size, // distance from bottom edge
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
      );
      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) {
          circle.alpha = circle.targetAlpha;
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }

      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;
      circle.translateX +=
        (mousePosition.current.x / (staticity / circle.magnetism) - circle.translateX) /
        ease;
      circle.translateY +=
        (mousePosition.current.y / (staticity / circle.magnetism) - circle.translateY) /
        ease;

      // Check if the particle is out of bounds
      if (
        circle.x < -circle.size ||
        circle.x > canvasRef.current.width + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasRef.current.height + circle.size
      ) {
        // Remove the circle and create a new one
        circles.current.splice(i, 1);
        const newCircle = circleParams();
        drawCircle(newCircle);
        circles.current.push(newCircle);
      } else {
        drawCircle(circle);
      }
    });
    window.requestAnimationFrame(animate);
  };

  return (
    <div className={className} ref={canvasContainerRef}>
      <canvas ref={canvasRef} />
    </div>
  );
};