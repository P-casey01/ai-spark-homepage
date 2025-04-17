
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-[80vh] px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85)), url('/lovable-uploads/fe99edc9-5a73-4e5d-a32c-dd04f5f07402.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container max-w-4xl relative z-10">
        <div className="mb-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-agency-black">
            Transform Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a472a] to-[#90ee90]">
              Intelligent Automation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-agency-darkgray max-w-2xl mx-auto mb-8">
            Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
          </p>
        </div>
        <Button 
          className="text-white bg-[#1a472a] hover:bg-[#2a573a] text-lg py-6 px-8 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl"
        >
          Start Your Automation Journey
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
