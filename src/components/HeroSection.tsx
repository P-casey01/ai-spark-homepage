
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useTheme } from "@/hooks/use-theme";

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <WavyBackground
      className="min-h-[85vh] px-6 py-20 flex flex-col items-center justify-center overflow-hidden relative"
      containerClassName="relative h-auto w-full"
      colors={
        theme === 'dark' 
          ? [
              "#000000", // Black
              "#333333", // Dark Grey
              "#2F4F4F", // Dark green
              "#9EECC1", // Light green
              "#FFFFFF", // White
            ]
          : [
              "#FFFFFF", // White
              "#E5E5E5", // Light Grey
              "#C5F0D8", // Very Light green
              "#9EECC1", // Light green
              "#333333", // Dark Grey
            ]
      }
      waveWidth={100}
      backgroundFill={theme === 'dark' ? '#000000' : '#FFFFFF'}
      blur={12}
      speed="slow"
      waveOpacity={0.7}
    >
      {/* Dark overlay for text area */}
      <div 
        className={`absolute inset-x-0 top-0 h-[70%] z-0 ${
          theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}
      />
      
      <div className="container mx-auto px-6 md:max-w-3xl text-center z-10 mt-20 pt-12">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 text-foreground md:max-w-2xl mx-auto drop-shadow-lg">
          Transform Your Business with{' '}
          <span className={`bg-clip-text text-transparent ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-green-300 to-green-500'
              : 'bg-gradient-to-r from-green-600 to-green-800'
          } drop-shadow-md`}>
            Intelligent Automation
          </span>
        </h1>
        <p className="text-base md:text-xl text-foreground font-medium mb-3 md:max-w-lg mx-auto drop-shadow-md">
          Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
        </p>
        <Button className={`inline-flex items-center ${
          theme === 'dark'
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-green-700 text-white hover:bg-green-800'
        } py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition group text-sm md:text-base w-auto mx-auto`}>
          Start Your Automation Journey
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </WavyBackground>
  );
};

export default HeroSection;

