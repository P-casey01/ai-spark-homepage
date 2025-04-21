
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Clock, DollarSign, Globe, Award } from "lucide-react";

const About = () => {
  const { theme } = useTheme();

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
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
            <p className="text-lg text-muted-foreground">
              Empowering businesses through efficient digital solutions
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
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At Auto-mate Consultants, we're dedicated to revolutionizing how businesses operate in the digital space. Our mission is to help you save valuable time and money while building a strong digital presence that drives growth and success.
            </p>
            <p className="text-muted-foreground">
              We understand that in today's fast-paced business environment, having a strong digital footprint is crucial. Our team works tirelessly to ensure your business not only establishes but thrives in the digital landscape, helping you reach new customers and markets efficiently.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
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
