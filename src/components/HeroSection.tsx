
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="wave-bg px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-agency-black">
          Empower Your Business with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-agency-darkgray to-agency-mint">
            AI & Web Automation
          </span>
        </h1>
        <p className="text-lg md:text-xl text-agency-gray max-w-2xl mx-auto mb-8">
          We build custom AI tools to streamline your workflows and enhance your web presence, bringing your business into the AI future.
        </p>
        <Button 
          className="text-white bg-agency-black hover:bg-agency-darkgray text-lg py-6 px-8 rounded-full transition-all duration-300 group"
        >
          Let's Build Your Automation
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
