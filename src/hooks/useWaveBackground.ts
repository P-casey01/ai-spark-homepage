
import { useEffect, useState } from 'react';

interface WaveProps {
  top: string;
  colors: string[];
  path: string;
}

const generateWavePath = (width: number, height: number): string => {
  const baseY = height * 0.5;
  const cp1 = { x: width * 0.25, y: baseY + (Math.random() * height * 0.6 - height * 0.3) };
  const cp2 = { x: width * 0.75, y: baseY + (Math.random() * height * 0.6 - height * 0.3) };

  return [
    `M0,${baseY}`,
    `C ${cp1.x},${cp1.y} ${cp2.x},${cp2.y} ${width},${baseY}`,
    `L${width},${height + 10}`,
    `L0,${height + 10}`,
    "Z"
  ].join(" ");
};

export const useWaveBackground = (numWaves: number = 5) => {
  const [waves, setWaves] = useState<WaveProps[]>([]);
  const baseColors = ['#ffffff', '#1c1c1c', '#8fc09c'];
  const waveHeight = window.innerHeight * 0.25;
  const offsetStep = window.innerHeight * 0.05;

  const generateWaves = () => {
    const newWaves = Array.from({ length: numWaves }, (_, i) => {
      const colors = [
        baseColors[i % baseColors.length],
        baseColors[(i + 1) % baseColors.length],
        baseColors[(i + 2) % baseColors.length],
      ];

      return {
        top: `calc(50vh + ${i * offsetStep}px - ${waveHeight / 2}px)`,
        colors,
        path: generateWavePath(window.innerWidth, waveHeight)
      };
    });
    setWaves(newWaves);
  };

  useEffect(() => {
    generateWaves();
    const handleResize = () => generateWaves();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [numWaves]);

  return waves;
};
