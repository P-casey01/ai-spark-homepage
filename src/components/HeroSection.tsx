
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";

const HeroSection: React.FC = () => {
  return (
    <WavyBackground
      className="min-h-[60vh] md:min-h-[80vh] px-4 py-12 md:py-16 flex flex-col items-center justify-center overflow-hidden"
      containerClassName="relative scale-[2] md:scale-100"
      colors={[
        "#222222", // agency-black
        "#555555", // agency-gray
        "#9EECC1", // agency-mint
        "#F2FCE2", // agency-lightmint
        "#8fc09c", // mint variant
      ]}
      waveWidth={50}
      backgroundFill="#FFFFFF"
      blur={10}
      speed="fast"
      waveOpacity={0.3}
    >
      <div className="container mx-auto px-4 max-w-4xl text-center z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900">
          Transform Your Business with{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-green-400">
            Intelligent Automation
          </span>
        </h1>
        <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8">
          Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
        </p>
        <Button className="inline-flex items-center bg-gray-900 text-white py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition group">
          Start Your Automation Journey
          <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </WavyBackground>
  );
};

export default HeroSection;
