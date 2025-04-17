
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="wave-bg px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/7f3f86e8-9c9f-43b0-b816-834fd576d490.png" 
            alt="Auto-mate Consultancy" 
            className="h-24 mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-agency-black">
            Transform Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a472a] to-[#90ee90]">
              Intelligent Automation
            </span>
          </h1>
        </div>
        <p className="text-lg md:text-xl text-agency-gray max-w-2xl mx-auto mb-8">
          We specialize in creating custom automation solutions that streamline your workflows and enhance your business efficiency.
        </p>
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
