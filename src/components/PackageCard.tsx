
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
    <div className={`package-card ${popular ? 'border-agency-mint border-2' : ''}`}>
      {popular && (
        <span className="bg-agency-mint text-agency-black text-xs font-bold px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2">
          MOST POPULAR
        </span>
      )}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-agency-black mb-2">{title}</h3>
        <p className="text-agency-gray mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-agency-black">{price}</span>
          {price !== 'Custom' && <span className="text-agency-gray">/month</span>}
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-agency-mint mr-2 shrink-0" />
              <span className="text-agency-gray">{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button 
        className={`w-full ${popular 
          ? 'bg-agency-mint text-agency-black hover:bg-agency-mint/90' 
          : 'bg-agency-darkgray text-white hover:bg-agency-black'}`}
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default PackageCard;
