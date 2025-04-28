import React, { Suspense, lazy, useEffect } from "react";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useIsMobile } from "@/hooks/use-mobile"; // Import the hook
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";

// Dynamic imports for large components
const AIChatBar = lazy(() => import("@/components/AIChatBar"));
const PackagesSection = lazy(() => import("@/components/PackagesSection"));
const CustomerCases = lazy(() => import("@/components/CustomerCases"));

const Index = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile(); // Use the hook

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
          <Suspense fallback={<div className="text-center py-10">Loading chat...</div>}>
            <AIChatBar />
          </Suspense>
          <div className="mt-20 md:mt-28">
            <Suspense fallback={<div className="text-center py-10">Loading packages...</div>}>
              <PackagesSection />
            </Suspense>
          </div>
          <div className="mt-20 md:mt-28">
            <Suspense fallback={<div className="text-center py-10">Loading customer cases...</div>}>
              <CustomerCases />
            </Suspense>
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
                src="/lovable-uploads/optimized/other-logo.webp"
                alt={isMobile ? "Auto-Mate Consultants" : "Auto-mate Consultants"} 
                className="h-30 w-30 mb-4 rounded-lg"
                width={120}
                height={120}
                loading="lazy"
              />
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2">{isMobile ? "Auto-Mate Consultants - Derry" : "Auto-mate Consultants - Derry"}</h2>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>AI, Web Design & Business Automation Solutions in Derry</p>
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
                  <li><a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>About {isMobile ? "Auto-Mate" : "Auto-mate"}</a></li>
                  <li><a href="/blog" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Blog</a></li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-lg font-semibold mb-4`}>Connect With Us</h3>
                <div className="flex justify-center gap-6">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a href="https://www.facebook.com/profile.php?id=61558944215453" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <Facebook className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a href="https://www.linkedin.com/company/auto-mate-consultants/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a href="mailto:Piaras@auto-mateconsultants.co.uk" aria-label="Email">
                      <Mail className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a href="tel:+4407783904804" aria-label="Phone">
                      <Phone className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
                    </a>
                  </motion.div>
                </div>
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
                <Linkedin className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
              </motion.div>
            </motion.div>
            <div className={`mt-12 pt-6 ${theme === 'dark' ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-500'} border-t text-center text-sm`}>
              © {new Date().getFullYear()} {isMobile ? "Auto-Mate Consultants" : "Auto-mate Consultants"}. All rights reserved.
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
