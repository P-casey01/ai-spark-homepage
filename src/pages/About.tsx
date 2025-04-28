import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { useIsMobile } from "@/hooks/use-mobile";
import { Clock, DollarSign, Globe, Award } from "lucide-react";

const About = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  const whyUsReasons = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Turnaround",
      description: "Get your website up and running within 24 hours"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost-Effective",
      description: "Competitive pricing without compromising on quality"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Expertise",
      description: "Comprehensive digital solutions for your business growth"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Premium service and ongoing support guaranteed"
    }
  ];
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              About {isMobile ? "Auto-Mate Consultants" : "Auto-mate Consultants"} | Derry
            </h1>
            <p className="text-lg text-muted-foreground">
              Your local Derry experts in AI solutions and professional web design.
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
            <h2 className="text-2xl font-semibold mb-4">Our Mission in Derry</h2>
            <p className="text-muted-foreground mb-6">
              At {isMobile ? "Auto-Mate Consultants" : "Auto-mate Consultants"}, based in Derry, we're dedicated to revolutionizing how local businesses operate with cutting-edge AI and bespoke web design. Our mission is to save you time and money while building a powerful digital presence that drives growth right here in Derry.
            </p>
            <p className="text-muted-foreground">
              We understand the Derry business landscape and the need for a strong digital footprint. Our team provides expert AI integration and web design services to help your business thrive locally and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us for AI & Web Design in Derry?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyUsReasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`p-6 rounded-xl ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
                      : 'bg-white shadow-md'
                  }`}
                >
                  <div className={`mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
