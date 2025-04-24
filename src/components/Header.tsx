import React, { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path 
      ? "text-green-400" 
      : theme === 'dark' ? "text-gray-400" : "text-gray-600";
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b transition-all duration-300 ${
        scrolled ? "border-border shadow-sm" : "border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-20"> {/* Maintain height */}
          
          {/* Left Section */}
          <div className="flex-1 flex items-center justify-start">
            {isMobile ? (
              // Mobile: Hamburger Menu
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground hover:bg-accent"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            ) : (
              // Desktop: Text
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/" className="text-lg font-bold text-foreground whitespace-nowrap">
                  Auto-Mate Consultants
                </Link>
              </motion.div>
            )}
          </div>

          {/* Center Section: Logo (Always Visible) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link to="/">
              <img 
                src="/lovable-uploads/optimized/navbar-logo.webp" 
                alt="Auto-mate Consultants Logo" 
                className="h-16 w-auto object-contain" // Adjusted height, auto width
                height={64} // Explicit height for performance
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex items-center justify-end">
            {isMobile ? (
              // Mobile: Text (Wrapped)
              <Link to="/" className="text-sm font-bold text-foreground text-right">
                Auto-mate<br/>Consultants
              </Link>
            ) : (
              // Desktop: Navigation & Theme Toggle
              <motion.div 
                className="flex items-center gap-4" // Reduced gap slightly
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link to="/" className={`px-3 py-2 text-sm hover:text-green-400 transition-colors ${isActive('/')}`}>Home</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/services" className={`px-3 py-2 text-sm hover:text-green-400 transition-colors ${isActive('/services')}`}>Services</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/about" className={`px-3 py-2 text-sm hover:text-green-400 transition-colors ${isActive('/about')}`}>About</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/blog" className={`px-3 py-2 text-sm hover:text-green-400 transition-colors ${isActive('/blog')}`}>Blog</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/contact" className={`px-3 py-2 text-sm hover:text-green-400 transition-colors ${isActive('/contact')}`}>Contact</Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Mobile Menu Dropdown (remains the same) */}
        <AnimatePresence>
          {isMobile && mobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 bg-background"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4 pt-4">
                <Link 
                  to="/" 
                  className={`px-4 py-2 hover:bg-accent rounded-md ${isActive('/')}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/services" 
                  className={`px-4 py-2 hover:bg-accent rounded-md ${isActive('/services')}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/about" 
                  className={`px-4 py-2 hover:bg-accent rounded-md ${isActive('/about')}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/blog" 
                  className={`px-4 py-2 hover:bg-accent rounded-md ${isActive('/blog')}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/contact" 
                  className={`px-4 py-2 hover:bg-accent rounded-md ${isActive('/contact')}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                {/* Add theme toggle button in mobile menu */}
                <div className="px-4 py-2 flex items-center justify-center gap-3"> {/* Added justify-center */}
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? 
                      <Sun className="h-5 w-5" /> : 
                      <Moon className="h-5 w-5" />
                    }
                  </button>
                  <span className="text-sm text-muted-foreground">
                    {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  </span>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
