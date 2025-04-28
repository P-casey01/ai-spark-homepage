import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, Facebook, Linkedin } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { useIsMobile } from '@/hooks/use-mobile'; 
import { debounce } from '@/utils/debounce';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import SocialIcons from './SocialIcons';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  const location = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = debounce(() => setIsScrolled(window.scrollY > 10), 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeSheet = () => setIsSheetOpen(false);

  const headerClasses = `
    sticky top-0 z-50 w-full transition-all duration-300 ease-in-out 
    ${isScrolled ? (theme === 'dark' ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-md shadow-md') : 'bg-transparent'}
  `;

  const navLinkClasses = (href: string) => `
    px-5 py-2 text-sm font-medium rounded-md
    ${location.pathname === href ? (theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black') : ''}
    ${theme === 'dark' ? 'hover:bg-gray-700 focus:bg-gray-700' : 'hover:bg-gray-200 focus:bg-gray-200'}
    transition-colors
  `;

  const mobileNavLinkClasses = (href: string) => `
    block px-4 py-3 rounded-md text-base font-medium 
    ${location.pathname === href ? (theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-black')}
  `;
  
  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {isMobile ? (
          // Mobile header layout
          <div className="flex items-center justify-between h-20">
            <div className="flex justify-start items-center">
              <span className={`text-lg sm:text-xl font-medium whitespace-nowrap ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Auto-Mate Consultants
              </span>
            </div>
            
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className={`w-[280px] sm:w-[320px] ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
                <SheetHeader className="flex justify-between items-center mb-6">
                  <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
                  <Button variant="ghost" size="icon" onClick={closeSheet} aria-label="Close menu">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetHeader>
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={mobileNavLinkClasses(link.href)}
                      onClick={closeSheet}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className={`border-t pt-4 mt-4 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                    <a
                      href="https://www.facebook.com/profile.php?id=61558944215453"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className={`flex items-center px-4 py-3 rounded-md text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-black'}`}
                      onClick={closeSheet}
                    >
                      <Facebook className="h-5 w-5 mr-3" />
                      Facebook
                    </a>
                    <a
                      href="https://www.linkedin.com/company/auto-mate-consultants/about/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className={`flex items-center px-4 py-3 rounded-md text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-black'}`}
                      onClick={closeSheet}
                    >
                      <Linkedin className="h-5 w-5 mr-3" />
                      LinkedIn
                    </a>
                    <Button
                      variant="ghost"
                      onClick={() => { toggleTheme(); closeSheet(); }}
                      aria-label="Toggle theme"
                      className={`w-full justify-start flex items-center px-4 py-3 rounded-md text-base font-medium mt-2 ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-black'}`}
                    >
                      {theme === 'dark' ? <Sun className="h-5 w-5 mr-3" /> : <Moon className="h-5 w-5 mr-3" />}
                      Toggle Theme
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          // Desktop header with properly spaced navigation and centered logo
          <div className="relative h-20 flex items-center justify-between">
            {/* Site title on the left */}
            <div className="flex-shrink-0">
              <span className={`text-lg sm:text-xl font-medium whitespace-nowrap ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Auto-Mate Consultants
              </span>
            </div>
            
            {/* Centered logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <img
                className="h-12 w-auto"
                loading="lazy"
                src={theme === 'dark' ? "/lovable-uploads/optimized/other-logo.webp" : "/lovable-uploads/optimized/navbar-logo.webp"}
                alt="Auto-Mate Consultants Logo"
              />
            </div>
            
            {/* Navigation on the right with proper spacing */}
            <nav className="flex items-center space-x-6">
              <div className="hidden md:flex items-center -space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={navLinkClasses(link.href)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center space-x-3">
                <SocialIcons iconClass="h-5 w-5" />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default React.memo(Header);
