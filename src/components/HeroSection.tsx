
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";

const HeroSection: React.FC = () => {
  return (
    <WavyBackground
      className="min-h-[55vh] md:min-h-[80vh] px-4 py-8 md:py-16 flex flex-col items-center justify-center overflow-hidden"
      containerClassName="relative"
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
        <div className="bg-white bg-opacity-70 p-3 rounded-lg mb-3 md:p-0 md:bg-transparent">
          <h1 className="text-xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-6 text-gray-900">
            Transform Your Business with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-green-500 font-extrabold">
              Intelligent Automation
            </span>
          </h1>
          <p className="text-sm md:text-xl text-gray-800 font-medium mb-3 md:mb-8">
            Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
          </p>
        </div>
        <Button className="inline-flex items-center bg-gray-900 text-white py-1.5 md:py-4 px-3 md:px-8 rounded-full shadow-lg hover:shadow-xl transition group text-xs md:text-base">
          Start Your Automation Journey
          <ArrowRight className="ml-1 md:ml-2 w-3 h-3 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </WavyBackground>
  );
};

export default HeroSection;
