import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useWaveBackground } from "@/hooks/useWaveBackground";

const HeroSection: React.FC = () => {
  const waves = useWaveBackground(5);

  return (
    <section className="relative min-h-[80vh] px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center bg-white overflow-hidden">
      {/* Waves container */}
      <div className="absolute inset-0 z-0">
        {waves.map((wave, index) => (
          <div
            key={index}
            className="absolute left-0 right-0"
            style={{
              top: wave.top,
              height: '25vh',
            }}
          >
            {/* Wave background with stripes */}
            <div
              className="absolute inset-0"
              style={{
                background: `repeating-linear-gradient(
                  90deg,
                  rgba(0,0,0,0.05) 0px,
                  rgba(0,0,0,0.05) 3px,
                  transparent 3px,
                  transparent 6px
                )`,
                mixBlendMode: 'multiply',
                clipPath: `path('${wave.path}')`,
              }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(
                    to right,
                    ${wave.colors[0]} 0%,
                    ${wave.colors[1]} 33%,
                    ${wave.colors[2]} 66%,
                    ${wave.colors[0]} 100%
                  )`,
                  opacity: 0.8,
                  clipPath: 'inherit',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
          Transform Your Business with{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-green-400">
            Intelligent Automation
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
        </p>
        <Button className="inline-flex items-center bg-gray-900 text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition group">
          Start Your Automation Journey
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
