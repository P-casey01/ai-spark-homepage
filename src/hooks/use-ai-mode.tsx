
import { useState, useEffect } from 'react';

export const useAIMode = () => {
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);

  useEffect(() => {
    const handleModeToggle = (event: CustomEvent) => {
      setIsAdvancedMode(event.detail.isAdvancedMode);
    };

    window.addEventListener('aiModeToggle', handleModeToggle as EventListener);

    return () => {
      window.removeEventListener('aiModeToggle', handleModeToggle as EventListener);
    };
  }, []);

  return isAdvancedMode;
};
