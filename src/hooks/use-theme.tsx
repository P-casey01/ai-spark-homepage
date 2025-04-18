
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Apply theme to document and localStorage
  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    
    // Remove the old theme class and add the new one
    root.classList.remove('dark', 'light');
    root.classList.add(newTheme);
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    console.log(`Theme switched to: ${newTheme}`);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      // If no saved preference, check system preference
      applyTheme(prefersDark ? 'dark' : 'light');
    }
    
    setMounted(true);
  }, []);

  // The following useEffect ensures theme is properly applied when component mounts
  useEffect(() => {
    if (mounted) {
      const htmlElement = document.documentElement;
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
        htmlElement.classList.remove('light');
      } else {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
      }
    }
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
