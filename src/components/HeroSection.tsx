
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";

const HeroSection: React.FC = () => {
  return (
    <WavyBackground
      className="min-h-[40vh] px-4 py-12 flex flex-col items-center justify-center overflow-hidden"
      containerClassName="relative h-auto"
      colors={[
        "rgba(34, 34, 34, 0.7)", // More opaque black
        "rgba(85, 85, 85, 0.7)", // More opaque gray
        "#9EECC1", // agency-mint
        "#F2FCE2", // agency-lightmint
        "#8fc09c", // mint variant
      ]}
      waveWidth={90} // Further increased wave width
      backgroundFill="rgba(255, 255, 255, 0.8)"
      blur={10}
      speed="fast"
      waveOpacity={0.6} // Significantly increased opacity
    >
      <div className="container mx-auto px-4 md:max-w-3xl text-center z-10">
        <div className="backdrop-blur-sm bg-white/30 rounded-xl p-3 md:p-6 md:bg-transparent">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 text-gray-900 md:max-w-2xl mx-auto">
            Transform Your Business with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-green-400">
              Intelligent Automation
            </span>
          </h1>
          <p className="text-base md:text-xl text-gray-800 font-medium mb-3 md:max-w-lg mx-auto">
            Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
          </p>
          <Button className="inline-flex items-center bg-gray-900 text-white py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition group text-sm md:text-base w-auto mx-auto">
            Start Your Automation Journey
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </WavyBackground>
  );
};

export default HeroSection;
