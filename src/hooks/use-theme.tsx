import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export const ThemeProvider = ({ 
  children,
  defaultTheme = 'light',
  storageKey = 'theme',
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    
    try {
      const savedTheme = localStorage.getItem(storageKey) as Theme | null;
      if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
        return savedTheme;
      }
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPrefersDark ? 'dark' : defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const [mounted, setMounted] = useState(false);

  const applyTheme = (newTheme: Theme) => {
    try {
      const root = window.document.documentElement;
      root.classList.remove('dark', 'light');
      root.classList.add(newTheme);
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    } catch (error) {
      console.error('Failed to apply theme:', error);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  // Create a default context value instead of rendering children with hidden visibility
  const contextValue = { theme, toggleTheme };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply theme when component mounts
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [mounted, theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(storageKey)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [storageKey]);

  // Return the provider with context values even when not mounted
  // This prevents the "useTheme must be used within ThemeProvider" error
  return (
    <ThemeContext.Provider value={contextValue}>
      {!mounted ? (
        <div style={{ visibility: 'hidden' }}>{children}</div>
      ) : (
        children
      )}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
