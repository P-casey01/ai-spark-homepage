
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

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
  return (
    <div 
      className={`package-card relative bg-white rounded-xl shadow-lg p-4 md:p-6 ${
        popular ? 'border-agency-mint border-2' : 'border border-gray-100'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span className="bg-agency-mint text-agency-black text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      <div className="flex-1 space-y-4">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-agency-black mb-2">{title}</h3>
          <p className="text-sm md:text-base text-agency-gray mb-3">{description}</p>
          <div className="mb-4">
            <span className="text-3xl md:text-4xl font-bold text-agency-black">{price}</span>
          </div>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm md:text-base">
              <Check className="h-5 w-5 text-agency-mint shrink-0 mt-0.5" />
              <span className="text-agency-gray">{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Button 
          className={`w-full ${
            popular 
              ? 'bg-agency-mint text-agency-black hover:bg-agency-mint/90' 
              : 'bg-agency-darkgray text-white hover:bg-agency-black'
          } text-sm md:text-base py-2 md:py-3`}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
