"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Particles } from "../registry/magicui/particles";

export default function ParticlesDemo() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    // Dark mode → light purple particles
    // Light mode → indigo particles
    setColor(resolvedTheme === "dark" ? "#c084fc" : "#6366f1");
  }, [resolvedTheme]);

  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-xl border bg-background">
      
      {/* TEXT */}
      <h1 className="pointer-events-none z-10 text-center text-6xl font-bold tracking-tight text-foreground md:text-8xl">
        Particles
      </h1>

      {/* PARTICLES */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={160}
        ease={60}
        color={color}
        refresh
      />
    </div>
  );
}
