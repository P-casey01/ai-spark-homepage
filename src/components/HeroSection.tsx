
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const waves = [
    {
      id: "wave1",
      d: "M0,120 C280,320 400,80 600,130 C850,180 1000,50 1200,140 L1200,400 L0,400 Z",
      gradient: "gradient1",
      blur: 30,
      duration: 20
    },
    {
      id: "wave2",
      d: "M0,160 C250,100 500,300 800,160 C1050,20 1200,200 1200,200 L1200,400 L0,400 Z",
      gradient: "gradient2",
      blur: 20,
      duration: 15
    },
    {
      id: "wave3",
      d: "M0,200 C200,150 600,350 1000,200 L1200,200 L1200,400 L0,400 Z",
      gradient: "gradient3",
      blur: 10,
      duration: 10
    }
  ];

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#222222" />
              <stop offset="100%" stopColor="#555555" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9EECC1" />
              <stop offset="100%" stopColor="#F2FCE2" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#90EE90" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            
            {waves.map((w) => (
              <filter key={w.id} id={`blur-${w.id}`} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation={w.blur} />
              </filter>
            ))}
            
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
              <feColorMatrix in="noise" type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="discrete" tableValues="0 0.08 0" />
              </feComponentTransfer>
            </filter>
          </defs>

          {waves.map((w) => (
            <motion.path
              key={w.id}
              d={w.d}
              fill={`url(#${w.gradient})`}
              filter={`url(#blur-${w.id})`}
              initial={{ x: 0 }}
              animate={{ x: [0, -200, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: w.duration, 
                ease: "easeInOut" 
              }}
            />
          ))}

          <rect
            width="1200"
            height="400"
            filter="url(#noise)"
            opacity="0.05"
          />
        </svg>
      </div>
      
      <div className="container max-w-4xl relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Transform Your Business with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-green-400">
              Intelligent Automation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
          </p>
        </div>
        <Button 
          className="text-white bg-gray-900 hover:bg-gray-800 text-lg py-6 px-8 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl"
        >
          Start Your Automation Journey
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
