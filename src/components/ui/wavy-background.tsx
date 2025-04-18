
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = [
    "#222222", // agency-black
    "#555555", // agency-gray
    "#9EECC1", // agency-mint
    "#F2FCE2", // agency-lightmint
    "#8fc09c", // mint variant
  ],
  waveWidth = 50,
  backgroundFill = "#FFFFFF",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.3,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.004; // Increased speed for more dynamic waves
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth + 100; // Add extra width to ensure coverage
    h = ctx.canvas.height = window.innerHeight * 1.2; // Increased height for more coverage
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth + 100; // Add extra width to ensure coverage
      h = ctx.canvas.height = window.innerHeight * 1.2; // Increased height for more coverage
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = -50; x < w + 50; x += 5) { // Extended drawing range
        var y = noise(x / 600, 0.3 * i, nt) * 250; // Further increased amplitude and adjusted frequency
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Typical mobile breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center overflow-hidden w-full",
        containerClassName,
        isMobile ? "scale-[1.3]" : "" // Adjusted scaling for mobile
      )}
    >
      <canvas
        className={cn(
          "absolute inset-0 z-0 w-screen",
          isMobile ? "scale-[1.3]" : "" // Adjusted canvas scaling
        )}
        ref={canvasRef}
        id="canvas"
        style={{
          height: "60vh", // Further increased to ensure full coverage
          width: "100vw", // Full viewport width
          maxHeight: "800px", // Increased max height
          left: "0", // Ensure left edge alignment
          right: "0", // Ensure right edge alignment
          position: "absolute",
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10 w-full", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
