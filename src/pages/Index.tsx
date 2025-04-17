import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import AIChatBar from "@/components/AIChatBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-[72px]">
        <HeroSection />
        <div className="container px-4 py-12">
          <AIChatBar />
          <div className="mt-20">
            <PackagesSection />
          </div>
        </div>
        
        <footer className="bg-agency-black text-white py-12 mt-20">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold mb-2">AI Spark Agency</h2>
                <p className="text-gray-400">Bringing businesses into the AI future</p>
              </div>
              <div className="flex gap-8">
                <div>
                  <h3 className="text-sm font-bold uppercase text-agency-mint mb-3">Connect</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
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
            <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} AI Spark Agency. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
