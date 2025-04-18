
import React from "react";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import AIChatBar from "@/components/AIChatBar";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  const { theme } = useTheme();
  
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
        
        <footer className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'} py-12 mt-16 transition-colors duration-200`}>
          <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 flex items-center">
                <img 
                  src="/lovable-uploads/7f3f86e8-9c9f-43b0-b816-834fd576d490.png" 
                  alt="Auto-mate Consultants" 
                  className="h-16 w-16 mr-4 rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-bold mb-2">Auto-mate Consultants</h2>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Intelligent Business Automation Solutions</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div>
                  <h3 className="text-sm font-bold uppercase text-agency-mint mb-3">Connect</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Contact Us</a></li>
                    <li><a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>About Auto-mate</a></li>
                    <li><a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Blog</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase text-agency-mint mb-3">Legal</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Privacy</a></li>
                    <li><a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Terms</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center space-x-6">
              <Facebook className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
              <Instagram className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
              <Linkedin className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
              <Twitter className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
              <Mail className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
              <Phone className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors cursor-pointer`} />
            </div>
            <div className={`mt-12 pt-6 ${theme === 'dark' ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-500'} border-t text-center text-sm`}>
              © {new Date().getFullYear()} Auto-mate Consultants. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
