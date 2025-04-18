import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useWavePatterns } from "@/hooks/useWavePatterns";

const HeroSection: React.FC = () => {
  const patterns = useWavePatterns();

  return (
    <section className="relative min-h-[80vh] px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center bg-white overflow-hidden">
      {/* Wave Background SVG */}
      <svg 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <defs>
          {/* Gradient Definitions */}
          <linearGradient id="gradientVinyl" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#222222" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#555555" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="gradientCorrugated" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#9EECC1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F2FCE2" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="gradientSilk" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#8fc09c" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="gradientCharcoal" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#333333" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#666666" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Wave Patterns */}
        {patterns.map((pattern, index) => (
          <path
            key={pattern.id}
            className="transition-transform"
            d={pattern.pattern}
            fill={pattern.fill}
            style={{
              animation: `float ${pattern.duration}s ease-in-out infinite`,
              animationDelay: `${pattern.delay}s`,
            }}
          />
        ))}
      </svg>

      {/* Content */}
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
};

export default HeroSection;
