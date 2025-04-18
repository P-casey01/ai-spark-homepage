
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
      className={`package-card relative bg-slate-800 rounded-xl shadow-lg p-3 md:p-5 ${
        popular ? 'border-emerald-500 border-2' : 'border border-slate-700'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span className="bg-emerald-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      <div className="flex-1 space-y-3">
        <div className="text-center">
          <h3 className="text-lg md:text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm md:text-base text-slate-300 mb-2">{description}</p>
          <div className="mb-3">
            <span className="text-2xl md:text-3xl font-bold text-white">{price}</span>
          </div>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-300">{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <Button 
          className={`w-full ${
            popular 
              ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-600' 
              : 'bg-slate-700 text-white hover:bg-slate-600'
          } text-sm md:text-base py-1 md:py-2`}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
