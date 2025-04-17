
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg 
          className="absolute w-full h-full"
          viewBox="0 0 1200 400" 
          preserveAspectRatio="none"
        >
          <path
            className="animate-wave-slow"
            d="M0,100 C300,300 400,100 600,100 C800,100 1000,300 1200,100 L1200,400 L0,400 Z"
            fill="#1a472a"
            opacity="0.3"
          />
          <path
            className="animate-wave-normal"
            d="M0,150 C400,50 500,250 800,150 C1000,50 1200,150 1200,150 L1200,400 L0,400 Z"
            fill="#90ee90"
            opacity="0.2"
          />
          <path
            className="animate-wave-fast"
            d="M0,200 C200,100 600,300 1000,200 L1200,200 L1200,400 L0,400 Z"
            fill="#000000"
            opacity="0.1"
          />
        </svg>
      </div>
      
      <div className="container max-w-4xl relative z-10">
        <div className="mb-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1a472a]">
            Transform Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a472a] to-[#90ee90]">
              Intelligent Automation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
          </p>
        </div>
        <Button 
          className="text-white bg-[#1a472a] hover:bg-[#133219] text-lg py-6 px-8 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl"
        >
          Start Your Automation Journey
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

