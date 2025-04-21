
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

const About = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
            <p className="text-lg text-muted-foreground">
              Leading the way in business automation solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`rounded-xl p-8 mb-12 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
                : 'bg-white shadow-md'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Auto-mate Consultants was founded with a vision to revolutionize how businesses operate through intelligent automation. Our journey began with a simple idea: to make automation accessible and effective for businesses of all sizes.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to help organizations across the globe transform their operations through cutting-edge automation solutions that drive efficiency and growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className={`rounded-xl p-8 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
                : 'bg-white shadow-md'
            }`}>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with intelligent automation solutions that drive efficiency, innovation, and sustainable growth.
              </p>
            </div>
            <div className={`rounded-xl p-8 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
                : 'bg-white shadow-md'
            }`}>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Innovation, integrity, and excellence guide everything we do as we help our clients navigate their digital transformation journey.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
