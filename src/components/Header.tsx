
import React, { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-green-400" : "text-gray-400";
  };

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img 
                src="/lovable-uploads/7f3f86e8-9c9f-43b0-b816-834fd576d490.png" 
                alt="Auto-mate Consultants" 
                className="h-16 w-16 object-contain rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              />
            </Link>
            <Link to="/" className="text-xl font-bold text-white">Auto-mate Consultants</Link>
          </div>
          
          {isMobile ? (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:bg-gray-800"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          ) : (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={`px-4 py-2 hover:text-green-400 transition-colors ${isActive('/')}`}>
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/blog" className={`px-4 py-2 hover:text-green-400 transition-colors ${isActive('/blog')}`}>
                    Blog
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#services" className="px-4 py-2 text-gray-400 hover:text-green-400 transition-colors">
                    Services
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#contact" className="px-4 py-2 text-gray-400 hover:text-green-400 transition-colors">
                    Contact
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>
        
        {/* Mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden py-4 bg-black animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`px-4 py-2 hover:bg-gray-800 rounded-md ${isActive('/')}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className={`px-4 py-2 hover:bg-gray-800 rounded-md ${isActive('/blog')}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="#services" 
                className="px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
