
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-[80vh] px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=2000')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container max-w-4xl relative z-10">
        <div className="mb-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Transform Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90ee90] to-[#ffffff]">
              Intelligent Automation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
          </p>
        </div>
        <Button 
          className="text-white bg-[#1a472a] hover:bg-[#2a573a] text-lg py-6 px-8 rounded-full transition-all duration-300 group"
        >
          Start Your Automation Journey
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
