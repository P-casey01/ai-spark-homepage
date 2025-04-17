import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => (
  <section className="relative min-h-[80vh] px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center bg-white overflow-hidden">
    {/* Waves container */}
    <div className="absolute inset-0 z-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Clip paths for each ribbon shape */}
          <clipPath id="clipBlack">
            <path d="M0,170 C300,370 400,70 600,160 C800,250 1000,120 1200,180 L1200,400 L0,400 Z" />
          </clipPath>
          <clipPath id="clipWhite">
            <path d="M0,140 C250,340 450,90 650,140 C850,190 1050,60 1200,140 L1200,400 L0,400 Z" />
          </clipPath>
          <clipPath id="clipGreen">
            <path d="M0,120 C200,320 500,80 700,120 C900,160 1100,40 1200,120 L1200,400 L0,400 Z" />
          </clipPath>

          {/* Gradient fills */}
          <linearGradient id="gradBlack" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#222222" />
            <stop offset="100%" stopColor="#333333" />
          </linearGradient>
          <linearGradient id="gradWhite" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EEEEEE" />
          </linearGradient>
          <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9EECC1" />
            <stop offset="100%" stopColor="#90EE90" />
          </linearGradient>

          {/* Line pattern for ribbed effect */}
          <pattern id="ribbonLines" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M0,0 L0,6" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Black ribbon: gradient + ribbed lines clipped to shape */}
        <g className="animate-wave-slow will-change-transform">
          <rect
            clipPath="url(#clipBlack)"
            width="1200"
            height="400"
            fill="url(#gradBlack)"
          />
          <rect
            clipPath="url(#clipBlack)"
            width="1200"
            height="400"
            fill="url(#ribbonLines)"
            opacity="0.8"
          />
        </g>

        {/* White ribbon */}
        <g className="animate-wave-normal will-change-transform">
          <rect
            clipPath="url(#clipWhite)"
            width="1200"
            height="400"
            fill="url(#gradWhite)"
          />
          <rect
            clipPath="url(#clipWhite)"
            width="1200"
            height="400"
            fill="url(#ribbonLines)"
            opacity="0.6"
          />
        </g>

        {/* Green ribbon */}
        <g className="animate-wave-fast will-change-transform">
          <rect
            clipPath="url(#clipGreen)"
            width="1200"
            height="400"
            fill="url(#gradGreen)"
          />
          <rect
            clipPath="url(#clipGreen)"
            width="1200"
            height="400"
            fill="url(#ribbonLines)"
            opacity="0.6"
          />
        </g>
      </svg>
    </div>

    {/* Foreground content */}
    <div className="relative z-10 container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
        Transform Your Business with{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-green-400">
          Intelligent Automation
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
      </p>
      <Button className="inline-flex items-center bg-gray-900 text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition group">
        Start Your Automation Journey
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </div>
  </section>
);

export default HeroSection;
