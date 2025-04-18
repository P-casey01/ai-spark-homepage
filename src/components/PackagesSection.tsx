
import React from 'react';
import PackageCard from './PackageCard';
import { useTheme } from '@/hooks/use-theme';

const PackagesSection: React.FC = () => {
  const { theme } = useTheme();
  
  const packages = [
    {
      title: "Starter",
      description: "Perfect for small businesses or MVPs",
      price: "£499",
      features: [
        { name: "5-page responsive website" },
        { name: "Basic AI chatbot integration" },
        { name: "1 automation workflow" },
        { name: "30 days support" },
        { name: "3 Years Cyber security protection" },
        { name: "Custom Domain" }
      ]
    },
    {
      title: "Professional",
      description: "Ideal for growing businesses",
      price: "£1,499",
      features: [
        { name: "5-10-page responsive website" },
        { name: "Advanced AI chatbot with training" },
        { name: "3 automation workflows" },
        { name: "90 days support" },
        { name: "3 Years Cyber security protection" },
        { name: "SEO optimization" }
      ],
      popular: true
    },
    {
      title: "Enterprise",
      description: "For large-scale automation needs",
      price: "Custom",
      features: [
        { name: "Unlimited pages" },
        { name: "Custom AI solution development" },
        { name: "Unlimited automation workflows" },
        { name: "Dedicated support" },
        { name: "Full analytics integration" }
      ],
      ctaText: "Contact Sales"
    }
  ];

  return (
    <section className={`py-8 md:py-20 px-4 ${theme === 'dark' ? 'bg-background' : 'bg-gray-50'} transition-colors duration-200`}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className={`text-2xl md:text-4xl font-bold ${theme === 'dark' ? 'text-foreground' : 'text-gray-800'} mb-3`}>
            Choose Your AI Package
          </h2>
          <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Select the perfect package that fits your business needs and start your AI transformation journey today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className="relative">
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
