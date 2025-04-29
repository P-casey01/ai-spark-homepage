import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useTheme } from "@/hooks/use-theme";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Create scroll-based animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform scroll progress into animation values - reduced transform distance to minimize blur
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.5], [0, -20]);
  const buttonY = useTransform(scrollYProgress, [0, 0.5], [0, -5]);
  // Individual opacity transforms
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); 
  const subtitleOpacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0]); 
  const buttonOpacity = useTransform(scrollYProgress, [0.5, 0.95], [1, 0]); 

  // Element entry animations (when first visible) - smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Enhanced text rendering classes for maximum clarity
  const textRenderingClass = "text-crisp-heading";

  return (
    <div className="relative overflow-hidden" style={{ opacity: 1 }} ref={heroRef}>
      <WavyBackground
        className="min-h-[70vh] px-6 md:px-10 py-2 md:py-20 flex flex-col items-center justify-center text-center overflow-hidden"
        containerClassName="relative h-auto w-full overflow-hidden"
        style={{
          maxWidth: '100%',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          fontSize: 'clamp(1rem, 2.5vw, 2rem)',
          lineHeight: '1.5',
        }}
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
        waveWidth={60}
        backgroundFill={theme === 'dark' ? '#000000' : '#FFFFFF'}
        blur={8}
        speed="slow"
        waveOpacity={0.7}
      >
        <motion.div
          className="w-full px-6 md:px-6 md:max-w-full text-center relative z-10 mt-0 md:mt-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ 
            isolation: 'isolate',
            perspectiveOrigin: 'center center',
            perspective: '1000px',
          }} 
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4 text-foreground max-w-[95%] sm:max-w-md md:max-w-2xl mx-auto leading-tight tracking-tight font-heading text-crisp-heading" // Added tracking-tight
            variants={itemVariants}
            style={{ 
              y: titleY, 
              opacity: titleOpacity, 
              willChange: 'transform, opacity',
              letterSpacing: '-0.015em', // Keep existing letter spacing
              backfaceVisibility: 'hidden',
              transform: 'translate3d(0, 0, 0)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility'
            }}
          >
            AI-Powered Automation & Web Design in Derry
            <span className={`block mt-3 bg-clip-text text-transparent text-crisp-heading ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-green-300 to-green-500'
                : 'bg-gradient-to-r from-green-600 to-green-800'
            }`}>
              Transform Your Business
            </span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-foreground font-medium mb-8 max-w-[90%] sm:max-w-md md:max-w-lg mx-auto leading-normal sm:leading-relaxed tracking-normal text-crisp" // Adjusted leading and added tracking
            variants={itemVariants}
            style={{ 
              y: subtitleY, 
              opacity: subtitleOpacity, 
              willChange: 'transform, opacity',
              letterSpacing: '0.01em', // Keep existing letter spacing
              backfaceVisibility: 'hidden',
              transform: 'translate3d(0, 0, 0)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility',
            }}
          >
            Auto-Mate Consultants: Your Derry experts for cutting-edge AI solutions and professional web design services.
          </motion.p>
          <motion.div
            variants={itemVariants}
            style={{ 
              y: buttonY, 
              opacity: buttonOpacity, 
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              className={`inline-flex items-center text-crisp ${
                theme === 'dark'
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-green-700 text-white hover:bg-green-800'
              } py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg hover:shadow-xl transition group text-sm sm:text-base md:text-lg font-medium w-auto max-w-[90%] sm:max-w-xs mx-auto`}
              asChild
            >
              <a href="https://calendly.com/piaras-auto-mateconsultants/30min" target="_blank" rel="noopener noreferrer">
                Start Your Automation Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </WavyBackground>

      <div
        className="h-16 md:h-36 w-screen absolute left-0 right-0 bottom-0 z-10 pointer-events-none"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.01) 0%, #000 100%)'
            : 'linear-gradient(to bottom, rgba(255,255,255,0.01) 0%, #fff 100%)',
          transform: 'translateY(45%)',
        }}
      />
    </div>
  );
};

export default HeroSection;
