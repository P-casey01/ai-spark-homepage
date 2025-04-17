import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => (
  <section className="relative min-h-[80vh] px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center bg-white overflow-hidden">
    {/* Waves container */}
    <div className="absolute inset-0 z-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Ribbed line pattern */}
          <pattern id="ribbonLines" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M0,0 L0,6" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
          </pattern>

          {/* Gradients */}
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

          {/* Extended clip paths for seamless animation */}
          <clipPath id="clipBlack">
            <path d="M-600,170 C200,370 400,70 800,160 C1200,250 1600,120 2000,180 L2000,500 L-600,500 Z" />
          </clipPath>
          <clipPath id="clipWhite">
            <path d="M-600,140 C150,340 500,90 900,140 C1300,190 1600,60 2000,140 L2000,500 L-600,500 Z" />
          </clipPath>
          <clipPath id="clipGreen">
            <path d="M-600,120 C100,320 600,80 1000,120 C1400,160 1700,40 2000,120 L2000,500 L-600,500 Z" />
          </clipPath>
        </defs>

        {/* Black ribbon: wide shape with lines */}
        <g className="animate-wave-slow will-change-transform" style={{ transformOrigin: '50% 50%' }}>
          <rect
            clipPath="url(#clipBlack)"
            width="2400"
            height="500"
            fill="url(#gradBlack)"
          />
          <rect
            clipPath="url(#clipBlack)"
            width="2400"
            height="500"
            fill="url(#ribbonLines)"
            opacity="0.8"
          />
        </g>

        {/* White ribbon */}
        <g className="animate-wave-normal will-change-transform" style={{ transformOrigin: '50% 50%' }}>
          <rect
            clipPath="url(#clipWhite)"
            width="2400"
            height="500"
            fill="url(#gradWhite)"
          />
          <rect
            clipPath="url(#clipWhite)"
            width="2400"
            height="500"
            fill="url(#ribbonLines)"
            opacity="0.6"
          />
        </g>

        {/* Green ribbon */}
        <g className="animate-wave-fast will-change-transform" style={{ transformOrigin: '50% 50%' }}>
          <rect
            clipPath="url(#clipGreen)"
            width="2400"
            height="500"
            fill="url(#gradGreen)"
          />
          <rect
            clipPath="url(#clipGreen)"
            width="2400"
            height="500"
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
