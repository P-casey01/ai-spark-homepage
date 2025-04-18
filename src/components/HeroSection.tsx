
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";

const HeroSection: React.FC = () => {
  return (
    <WavyBackground
      className="min-h-[50vh] px-4 py-16 flex flex-col items-center justify-center overflow-hidden"
      containerClassName="relative h-auto w-full"
      colors={[
        "#222222", // Black
        "#555555", // Grey
        "#2F4F4F", // Dark green
        "#9EECC1", // Light green
        "#FFFFFF", // White
      ]}
      waveWidth={100}
      backgroundFill="rgba(17, 17, 17, 0.95)" // Very dark background
      blur={12}
      speed="slow"
      waveOpacity={0.7}
    >
      <div className="container mx-auto px-4 md:max-w-3xl text-center z-10">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 text-white md:max-w-2xl mx-auto">
          Transform Your Business with{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
            Intelligent Automation
          </span>
        </h1>
        <p className="text-base md:text-xl text-gray-200 font-medium mb-3 md:max-w-lg mx-auto">
          Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
        </p>
        <Button className="inline-flex items-center bg-green-600 text-white hover:bg-green-700 py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition group text-sm md:text-base w-auto mx-auto">
          Start Your Automation Journey
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </WavyBackground>
  );
};

export default HeroSection;
