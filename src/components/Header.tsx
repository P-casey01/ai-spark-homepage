
import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-agency-black" : "text-agency-gray";
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
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
            <Link to="/" className="text-xl font-bold text-agency-black">Auto-mate Consultants</Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={`px-4 py-2 hover:text-agency-black transition-colors ${isActive('/')}`}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog" className={`px-4 py-2 hover:text-agency-black transition-colors ${isActive('/blog')}`}>
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#services" className="px-4 py-2 text-agency-gray hover:text-agency-black transition-colors">
                  Services
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#contact" className="px-4 py-2 text-agency-gray hover:text-agency-black transition-colors">
                  Contact
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
