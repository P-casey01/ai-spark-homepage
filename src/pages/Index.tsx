import React, { Suspense, lazy } from "react";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import HeroSection from "@/components/HeroSection";
import SocialIcons from '@/components/SocialIcons';

// Dynamic imports with prefetch hints
const AIChatBar = lazy(() => import(
  /* webpackChunkName: "ai-chat-bar" */
  /* webpackPrefetch: true */
  "@/components/AIChatBar"
));
const PackagesSection = lazy(() => import(
  /* webpackChunkName: "packages-section" */
  /* webpackPrefetch: true */
  "@/components/PackagesSection"
));
const CustomerCases = lazy(() => import(
  /* webpackChunkName: "customer-cases" */
  /* webpackPrefetch: true */
  "@/components/CustomerCases"
));

const Index = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  // Intersection observers to defer loading offscreen sections
  const [chatRef, chatInView] = useInView({ triggerOnce: true, rootMargin: '0px 0px -200px 0px' });
  const [packagesRef, packagesInView] = useInView({ triggerOnce: true, rootMargin: '0px 0px -200px 0px' });
  const [casesRef, casesInView] = useInView({ triggerOnce: true, rootMargin: '0px 0px -200px 0px' });

  return (
    <div className="min-h-screen bg-background transition-colors duration-200">
      <div className="pt-0 mt-0">
        <HeroSection />
        <div className="container mx-auto px-4 py-1 bg-background">
          <div ref={chatRef} className="mt-20 md:mt-28">
            {chatInView && (
              <Suspense fallback={<div className="text-center py-10">Loading chat...</div>}>
                <AIChatBar />
              </Suspense>
            )}
          </div>
          <div ref={packagesRef} className="mt-20 md:mt-28">
            {packagesInView && (
              <Suspense fallback={<div className="text-center py-10">Loading packages...</div>}>
                <PackagesSection />
              </Suspense>
            )}
          </div>
          <div ref={casesRef} className="mt-20 md:mt-28">
            {casesInView && (
              <Suspense fallback={<div className="text-center py-10">Loading customer cases...</div>}>
                <CustomerCases />
              </Suspense>
            )}
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
              <SocialIcons iconClass="h-5 w-5" />
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

export default React.memo(Index);
