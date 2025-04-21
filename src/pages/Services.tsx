
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Wrench, Users, Globe, Clock } from "lucide-react";

const Services = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Process Automation",
      description: "Streamline your business operations with intelligent automation solutions tailored to your needs."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Team Integration",
      description: "Seamlessly integrate automation tools with your existing team workflows and processes."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Solutions",
      description: "Implement scalable automation solutions that work across your global organization."
    }
  ];

  const timeline = [
    {
      title: "Initial Consultation",
      description: "Meet with our team to discuss your needs and goals",
      day: "Day 1"
    },
    {
      title: "Project Planning",
      description: "We create a detailed roadmap and begin development",
      day: "Day 1"
    },
    {
      title: "Development",
      description: "Rapid development of your custom website",
      day: "Day 1-2"
    },
    {
      title: "Review & Refinement",
      description: "Review the development and make any necessary adjustments",
      day: "Day 2"
    },
    {
      title: "Launch",
      description: "Your website goes live with our full support",
      day: "Within 24 Hours"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our Services
        </motion.h1>
        
        <motion.p 
          className="text-lg text-center mb-16 max-w-2xl mx-auto text-muted-foreground"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We provide comprehensive automation solutions to help your business thrive in the digital age.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={`p-8 rounded-xl ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg' 
                  : 'bg-white shadow-md'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-24 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our 24-Hour Website Development Process
          </h2>
          
          {/* Timeline for desktop view */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500/20 rounded-full" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div 
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className={`p-6 rounded-xl ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg' 
                      : 'bg-white shadow-md'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dark' 
                          ? 'bg-green-900/50 text-green-400' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {item.day}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-green-500" />
              </motion.div>
            ))}
          </div>
          
          {/* Timeline for mobile view - vertical layout */}
          <div className="md:hidden relative">
            <div className="absolute left-4 top-0 h-full w-1 bg-green-500/20 rounded-full" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 * index }}
                className="relative ml-12 mb-8 pl-6"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-2.25rem] top-4 w-4 h-4 rounded-full bg-green-500" />
                
                {/* Timeline connector line */}
                <div className="absolute left-[-0.5rem] top-4 h-1 w-6 bg-green-500/20"></div>
                
                <div className={`p-4 rounded-xl ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg' 
                    : 'bg-white shadow-md'
                }`}>
                  <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark' 
                        ? 'bg-green-900/50 text-green-400' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {item.day}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
