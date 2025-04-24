"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { createNoise3D } from "simplex-noise";
import { useTheme } from "@/hooks/use-theme";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill,
  blur = 12,
  speed = "slow",
  waveOpacity = 0.7,
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
  const { theme } = useTheme();
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.0005; // Slower speed
      case "fast":
        return 0.003;
      default:
        return 0.0005;
    }
  }, [speed]);

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth + 100; // Add extra width to ensure coverage
    h = ctx.canvas.height = window.innerHeight * 1.2; // Increased height for more coverage
    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    let resizeTimer: number;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        w = ctx.canvas.width = window.innerWidth + 100; // Add extra width to ensure coverage
        h = ctx.canvas.height = window.innerHeight * 1.2; // Increased height for more coverage
        ctx.filter = `blur(${blur}px)`;
      }, 200);
    });
    render();
  };

  const defaultColors = useMemo(() => 
    theme === 'dark' 
      ? [
          "#000000", // Black
          "#333333", // Dark Grey
          "#2F4F4F", // Dark green
          "#9EECC1", // Light green
          "#FFFFFF", // White
        ]
      : [
          "#FFFFFF", // White
          "#E5E5E5", // Light Grey
          "#C5F0D8", // Very Light green
          "#9EECC1", // Light green
          "#333333", // Dark Grey
        ]
  , [theme]);

  const waveColors = colors ?? defaultColors;
  
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 70; // Increased default width from 50 to 70
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
  let lastTime = 0;
  const render = (time = 0) => {
    animationId = requestAnimationFrame(render);
    // Throttle rendering to ~30 FPS
    if (time - lastTime < 1000 / 30) return;
    lastTime = time;
    ctx.fillStyle = backgroundFill || (theme === 'dark' ? "#000000" : "#FFFFFF");
    ctx.globalAlpha = waveOpacity || 0.4; // Decreased default opacity from 0.5 to 0.4
    ctx.fillRect(0, 0, w, h);
    drawWave(3); // Reduced number of waves from 5 to 3
  };

  useEffect(() => {
    const onVisChange = () => {
      if (document.hidden) cancelAnimationFrame(animationId);
      else render(performance.now());
    };
    document.addEventListener('visibilitychange', onVisChange);
    return () => document.removeEventListener('visibilitychange', onVisChange);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      init();
    }
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [theme]); // Re-initialize when theme changes

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
          "absolute inset-0 z-0 w-screen blur-[12px] dark:filter-none",
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
          top: "0", // Ensure it starts at the very top
          margin: "0", // Remove any margin
          padding: "0", // Remove any padding
        }}
      ></canvas>
      <div className={cn("relative z-10 w-full", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
