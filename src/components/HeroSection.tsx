
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <WavyBackground
        className="min-h-[60vh] px-6 py-20 flex flex-col items-center justify-center"
        containerClassName="relative h-auto w-full"
        colors={
          theme === 'dark' 
            ? [
                "#000000",
                "#333333",
                "#2F4F4F",
                "#9EECC1",
                "#FFFFFF",
              ]
            : [
                "#FFFFFF",
                "#E5E5E5",
                "#C5F0D8",
                "#9EECC1",
                "#333333",
              ]
        }
        waveWidth={100}
        backgroundFill={theme === 'dark' ? '#000000' : '#FFFFFF'}
        blur={12}
        speed="slow"
        waveOpacity={0.7}
      >
        <motion.div 
          className="w-full px-6 md:max-w-full text-center relative z-10 mt-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 text-foreground md:max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Transform Your Business with{' '}
            <span className={`bg-clip-text text-transparent ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-green-300 to-green-500'
                : 'bg-gradient-to-r from-green-600 to-green-800'
            }`}>
              Intelligent Automation
            </span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-xl text-foreground font-medium mb-6 md:max-w-lg mx-auto"
            variants={itemVariants}
          >
            Auto-mate Consultants: Driving Business Efficiency through Cutting-Edge Automation
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button 
              className={`inline-flex items-center ${
                theme === 'dark'
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-green-700 text-white hover:bg-green-800'
              } py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition group text-sm md:text-base w-auto mx-auto`}
              asChild
            >
              <a href="#services">
                Start Your Automation Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </WavyBackground>
      <div 
        className={`h-32 w-screen absolute left-0 right-0 ${
          theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}
        style={{ 
          bottom: '-14px',
          transform: 'translateY(45%)' 
        }}
      ></div>
    </div>
  );
};

export default HeroSection;
