import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import AIChatBar from "@/components/AIChatBar";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

const Index = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset for header
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background transition-colors duration-200">
      <div className="pt-0 mt-0">
        <HeroSection />
        <div className="container mx-auto px-4 py-1 bg-background">
          <AIChatBar />
          
          <div className="mt-20 md:mt-28">
            <PackagesSection />
          </div>
        </div>
        
        <motion.footer 
          id="contact"
          className={`bg-background ${theme === 'dark' ? 'text-white' : 'text-gray-800'} py-12 mt-16 transition-colors duration-200`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-4">
            <motion.div
              className="flex flex-col items-center justify-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="/lovable-uploads/7f3f86e8-9c9f-43b0-b816-834fd576d490.png" 
                alt="Auto-mate Consultants" 
                className="h-40 w-40 mb-4 rounded-lg"
              />
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2">Auto-mate Consultants</h2>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Intelligent Business Automation Solutions</p>
              </div>
            </motion.div>
            
            <div className="flex justify-center gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-sm font-bold uppercase text-agency-mint mb-3">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="#contact" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Contact Us</a></li>
                  <li><a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>About Auto-mate</a></li>
                  <li><a href="/blog" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Blog</a></li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-sm font-bold uppercase text-agency-mint mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Privacy</a></li>
                  <li><a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Terms</a></li>
                </ul>
              </motion.div>
            </div>
            <motion.div 
              className="mt-8 flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Facebook className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Instagram className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Linkedin className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Twitter className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Mail className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Phone className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
              </motion.div>
            </motion.div>
            <div className={`mt-12 pt-6 ${theme === 'dark' ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-500'} border-t text-center text-sm`}>
              © {new Date().getFullYear()} Auto-mate Consultants. All rights reserved.
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
