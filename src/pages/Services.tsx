import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import AnimatedTimeline from "@/components/AnimatedTimeline";
import { Skeleton } from "@/components/ui/skeleton";
import { Wrench, Users, Globe, Code } from "lucide-react"; // Importing Code icon

const Services = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "AI Process Automation",
      description: "Streamline your Derry business operations with intelligent AI automation solutions tailored to your needs."
    },
    {
      icon: <Code className="w-12 h-12" />, // Changed icon to Code for Web Design
      title: "Custom Web Design",
      description: "Professional web design services in Derry, creating stunning and effective websites for local businesses."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "AI & Web Integration",
      description: "Seamlessly integrate AI tools and web platforms with your existing team workflows in Derry."
    }
  ];

  const timeline = [
    {
      title: "Initial Consultation",
      description: "Quick 30-minute meeting to understand your requirements and goals",
      day: "Hour 1"
    },
    {
      title: "Design & Planning",
      description: "Rapid wireframing and design approval process",
      day: "Hours 2-4"
    },
    {
      title: "Development Sprint",
      description: "Fast-paced development of your custom website",
      day: "Hours 5-16"
    },
    {
      title: "Testing & Optimization",
      description: "Thorough testing and performance optimization",
      day: "Hours 17-20"
    },
    {
      title: "Launch & Deployment",
      description: "Final review, deployment, and go-live",
      day: "Hours 21-24"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our AI & Web Design Services in Derry
        </motion.h1>
        
        <motion.p 
          className="text-lg text-center mb-16 max-w-2xl mx-auto text-muted-foreground"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We provide comprehensive AI automation and web design solutions to help your Derry business thrive.
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
      </motion.div>

      <div className="py-16 bg-gradient-to-b from-transparent to-gray-50/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our 24-Hour Web Design Process for Derry Businesses
          </h2>
          
          <AnimatedTimeline items={timeline} />
        </div>
      </div>
    </div>
  );
};

export default Services;
