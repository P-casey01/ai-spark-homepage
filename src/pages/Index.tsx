
import React from "react";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import AIChatBar from "@/components/AIChatBar";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pt-0">
        <HeroSection />
        <div className="container mx-auto px-4 py-1">
          <AIChatBar />
          
          <div className="mt-20 md:mt-28">
            <PackagesSection />
          </div>
        </div>
        
        <footer className="bg-black text-white py-12 mt-16">
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
                  <p className="text-gray-400">Intelligent Business Automation Solutions</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div>
                  <h3 className="text-sm font-bold uppercase text-agency-mint mb-3">Connect</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Auto-mate</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase text-agency-mint mb-3">Legal</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center space-x-6">
              <Facebook className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <Instagram className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <Linkedin className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <Twitter className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <Mail className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <Phone className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
            </div>
            <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Auto-mate Consultants. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
