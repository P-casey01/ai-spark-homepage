
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
        "rgba(15, 23, 42, 0.9)", // Dark blue
        "rgba(30, 41, 59, 0.8)", // Slate
        "#1a365d", // Darker blue
        "#0f766e", // Dark teal
        "#065f46", // Dark green
      ]}
      waveWidth={100}
      backgroundFill="rgba(15, 23, 42, 0.95)" // Dark background
      blur={12}
      speed="fast"
      waveOpacity={0.7}
    >
      <div className="container mx-auto px-4 md:max-w-3xl text-center z-10">
        <div className="backdrop-blur-sm bg-slate-900/40 rounded-xl p-3 md:p-6">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 text-white md:max-w-2xl mx-auto">
            Transform Your Business with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-emerald-400">
              Intelligent Automation
            </span>
          </h1>
          <p className="text-base md:text-xl text-slate-200 font-medium mb-3 md:max-w-lg mx-auto">
            Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
          </p>
          <Button className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition group text-sm md:text-base w-auto mx-auto">
            Start Your Automation Journey
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </WavyBackground>
  );
};

export default HeroSection;
