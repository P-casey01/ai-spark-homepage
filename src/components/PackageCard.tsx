
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

interface Feature {
  name: string;
}

interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  features: Feature[];
  popular?: boolean;
  ctaText?: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  description,
  price,
  features,
  popular = false,
  ctaText = "Get Started",
}) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className={`package-card relative ${
        theme === 'dark' 
          ? 'bg-card text-card-foreground' 
          : 'bg-white text-agency-black'
      } rounded-xl shadow-lg p-3 md:p-5 ${
        popular ? 'border-agency-mint border-2' : `border ${theme === 'dark' ? 'border-border' : 'border-gray-100'}`
      } transition-all duration-200`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span className="bg-agency-mint text-agency-black text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      <div className="flex-1 space-y-3">
        <div className="text-center">
          <h3 className={`text-lg md:text-xl font-bold ${theme === 'dark' ? 'text-foreground' : 'text-agency-black'} mb-1`}>{title}</h3>
          <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-muted-foreground' : 'text-agency-gray'} mb-2`}>{description}</p>
          <div className="mb-3">
            <span className={`text-2xl md:text-3xl font-bold ${theme === 'dark' ? 'text-foreground' : 'text-agency-black'}`}>{price}</span>
          </div>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-agency-mint shrink-0 mt-0.5" />
              <span className={theme === 'dark' ? 'text-muted-foreground' : 'text-agency-gray'}>{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <Button 
          className={`w-full ${
            popular 
              ? 'bg-agency-mint text-agency-black hover:bg-agency-mint/90' 
              : theme === 'dark'
                ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' 
                : 'bg-agency-darkgray text-white hover:bg-agency-black'
          } text-sm md:text-base py-1 md:py-2`}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
