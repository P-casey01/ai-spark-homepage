
import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/7f3f86e8-9c9f-43b0-b816-834fd576d490.png" 
              alt="Auto-mate Consultants" 
              className="h-16 w-16 object-contain rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            />
            <span className="text-xl font-bold text-agency-black">Auto-mate Consultants</span>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="px-4 py-2 text-agency-gray hover:text-agency-black transition-colors">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#services" className="px-4 py-2 text-agency-gray hover:text-agency-black transition-colors">
                  Services
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#contact" className="px-4 py-2 text-agency-gray hover:text-agency-black transition-colors">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
