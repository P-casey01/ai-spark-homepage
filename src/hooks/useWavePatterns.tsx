
import { useEffect, useState } from 'react';

interface WavePattern {
  id: string;
  pattern: string;
  fill: string;
  duration: number;
  delay: number;
}

export const useWavePatterns = () => {
  const [patterns, setPatterns] = useState<WavePattern[]>([]);

  useEffect(() => {
    const generatePatterns = () => {
      const width = window.innerWidth;
      const basePatterns: WavePattern[] = [
        {
          id: 'vinyl',
          pattern: `M0,50 Q${width * 0.2},30 ${width * 0.5},50 T${width},50 V100 H0 Z`,
          fill: 'url(#gradientVinyl)',
          duration: 8,
          delay: -1
        },
        {
          id: 'corrugated',
          pattern: `M0,45 Q${width * 0.25},65 ${width * 0.5},45 T${width},45 V100 H0 Z`,
          fill: 'url(#gradientCorrugated)',
          duration: 9,
          delay: -2
        },
        {
          id: 'silk',
          pattern: `M0,55 Q${width * 0.3},35 ${width * 0.5},55 T${width},55 V100 H0 Z`,
          fill: 'url(#gradientSilk)',
          duration: 10,
          delay: -3
        },
        {
          id: 'charcoal',
          pattern: `M0,40 Q${width * 0.15},60 ${width * 0.5},40 T${width},40 V100 H0 Z`,
          fill: 'url(#gradientCharcoal)',
          duration: 11,
          delay: -4
        }
      ];
      setPatterns(basePatterns);
    };

    generatePatterns();
    window.addEventListener('resize', generatePatterns);
    return () => window.removeEventListener('resize', generatePatterns);
  }, []);

  return patterns;
};
