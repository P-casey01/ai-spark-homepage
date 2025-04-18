
import React, { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Header: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const isActive = (path: string) => {
    return location.pathname === path 
      ? "text-green-400" 
      : theme === 'dark' ? "text-gray-400" : "text-gray-600";
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border transition-colors duration-200">
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
            <Link to="/" className="text-xl font-bold text-foreground">Auto-mate Consultants</Link>
          </div>
          
          {isMobile ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {theme === 'dark' ? 
                  <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" /> : 
                  <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700" />
                }
                <Switch 
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                  className="data-[state=checked]:bg-slate-700"
                />
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-foreground hover:bg-accent"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {theme === 'dark' ? 
                    <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" /> : 
                    <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700" />
                  }
                  <Switch 
                    checked={theme === 'dark'}
                    onCheckedChange={toggleTheme}
                    className="data-[state=checked]:bg-slate-700"
                  />
                  <Label className="text-sm text-muted-foreground">
                    {theme === 'dark' ? 'Dark' : 'Light'}
                  </Label>
                </div>
              </div>
              
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
                    <a href="#services" className={`px-4 py-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-green-400 transition-colors`}>
                      Services
                    </a>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <a href="#contact" className={`px-4 py-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-green-400 transition-colors`}>
                      Contact
                    </a>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}
        </div>
        
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden py-4 bg-background animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-2">
                  {theme === 'dark' ? 
                    <Sun className="h-[1rem] w-[1rem] text-yellow-400" /> : 
                    <Moon className="h-[1rem] w-[1rem] text-slate-700" />
                  }
                  <span className="text-sm font-medium text-foreground">
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </div>
                <Switch 
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                  className="data-[state=checked]:bg-slate-700"
                />
              </div>
              <Link 
                to="/" 
                className={`px-4 py-2 hover:bg-accent rounded-md ${isActive('/')}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className={`px-4 py-2 hover:bg-accent rounded-md ${isActive('/blog')}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="#services" 
                className={`px-4 py-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:bg-accent rounded-md`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className={`px-4 py-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:bg-accent rounded-md`}
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
