import React, { useState, useRef, TouchEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

interface CaseStudy {
  title: string;
  industry: string;
  description: string;
  themeColor: string;
  textColor: string;
  tags: string[];
  link: string;
  features: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Home Find & Explore",
    industry: "Travel & Tourism Tech",
    description: "A modern explorer's hub for discovering off-beat destinations around the world.",
    themeColor: "#4AA5D0", // Ocean blue
    textColor: "text-white",
    tags: ["Travel", "Maps", "Community"],
    link: "https://home-find-explore.lovable.app",
    features: [
      "Personalized \"for you\" destination suggestions",
      "Interactive, filterable world map view",
      "User-submitted itineraries and reviews"
    ]
  },
  {
    title: "Portfoliorama: Creative Showcase",
    industry: "Design & Creative Agencies",
    description: "A polished gallery template for showcasing visual work.",
    themeColor: "#D94F70", // Creative pink
    textColor: "text-white",
    tags: ["Design", "Gallery", "Testimonials"],
    link: "https://portfoliorama-creative-showcase.lovable.app",
    features: [
      "Masonry or grid gallery layouts",
      "Filterable categories (e.g., photography, illustration)",
      "Embedded video/audio previews and client testimonials slider"
    ]
  },
  {
    title: "Agenda Spark Demo",
    industry: "Productivity & Event Planning",
    description: "Dashboard interface for meeting and event management.",
    themeColor: "#5658DD", // Productive purple
    textColor: "text-white",
    tags: ["Productivity", "Calendar", "Events"],
    link: "https://agenda-spark-demo.lovable.app",
    features: [
      "Agenda builder with drag-and-drop cards",
      "Calendar integration (Google/Outlook sync)",
      "Real-time action-item tracking and reminders"
    ]
  },
  {
    title: "Cozy Eats Online",
    industry: "Food Delivery & Restaurants",
    description: "Warm, mobile-first ordering experience for eateries.",
    themeColor: "#FA8334", // Warm orange
    textColor: "text-white",
    tags: ["Food", "Mobile", "Delivery"],
    link: "https://cozy-eats-online.lovable.app",
    features: [
      "Interactive menu with daily specials",
      "One-click checkout optimized for mobile",
      "Order status tracker and push notifications"
    ]
  },
  {
    title: "Path Upward Learn",
    industry: "Education & E-Learning",
    description: "Engaging LMS portal for both self-paced and cohort courses.",
    themeColor: "#43AA8B", // Educational green
    textColor: "text-white",
    tags: ["Education", "Courses", "Learning"],
    link: "https://path-upward-learn.lovable.app",
    features: [
      "Course catalog with progress dashboards",
      "Interactive quizzes and downloadable certificates",
      "Discussion forums for peer/instructor Q&A"
    ]
  },
  {
    title: "Comfort Zone Connect",
    industry: "Wellness & Community Platforms",
    description: "Safe, supportive social network for mental-health peer groups.",
    themeColor: "#90BE6D", // Calming green
    textColor: "text-white",
    tags: ["Wellness", "Community", "Support"],
    link: "https://comfort-zone-connect.lovable.app",
    features: [
      "Private \"rooms\" or channels per topic",
      "Event listings with RSVP management",
      "Resource library (articles, worksheets, videos)"
    ]
  },
  {
    title: "Legal Trust Nexus",
    industry: "Legal Services & Law Firms",
    description: "Clean, authoritative consultancy template for attorneys.",
    themeColor: "#2D3047", // Professional navy
    textColor: "text-white",
    tags: ["Legal", "Consultancy", "Trust"],
    link: "https://legal-trust-nexus.lovable.app",
    features: [
      "Service overview and practice-area pages",
      "Case-study gallery with filter tags",
      "Secure, GDPR-compliant client intake forms"
    ]
  },
  {
    title: "Health Track Pro",
    industry: "Healthcare & Medical Services",
    description: "Patient-centered platform for medical practice management.",
    themeColor: "#4D9DE0", // Medical blue
    textColor: "text-white",
    tags: ["Healthcare", "Medical", "Patients"],
    link: "https://health-track-pro.lovable.app",
    features: [
      "Patient portal with appointment scheduling",
      "Secure messaging and document sharing",
      "Insurance verification and payment processing"
    ]
  },
  {
    title: "Finance Flow Dashboard",
    industry: "Finance & FinTech",
    description: "Visual analytics platform for personal and business finance.",
    themeColor: "#1A535C", // Financial teal
    textColor: "text-white",
    tags: ["Finance", "Analytics", "Dashboard"],
    link: "https://finance-flow-dashboard.lovable.app",
    features: [
      "Interactive charts and financial forecasting",
      "Budget tracking with spending categories",
      "Automated report generation and insights"
    ]
  },
  {
    title: "Eco Shop Template",
    industry: "Retail & E-Commerce",
    description: "Sustainable shopping experience for eco-conscious brands.",
    themeColor: "#3BB273", // Eco green
    textColor: "text-white",
    tags: ["Retail", "Sustainable", "E-Commerce"],
    link: "https://eco-shop-template.lovable.app",
    features: [
      "Product sustainability scoring system",
      "Carbon footprint calculator for shipping",
      "Wishlist and favorites with social sharing"
    ]
  }
];

export default function CustomerCases() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      nextSlide();
    }

    if (touchStartX.current - touchEndX.current < -75) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12 md:mb-16">
        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
          Portfolio Showcase
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Industry Templates</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore our versatile templates, expertly crafted for diverse industries and ready to bring your vision to life.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div 
          className="overflow-hidden rounded-lg shadow-lg dark:shadow-none border border-gray-200 dark:border-gray-700"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {caseStudies.map((study, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card className="overflow-hidden flex flex-col h-full border-0 shadow-none rounded-none bg-white dark:bg-gray-800">
                  <CardHeader 
                    className="p-8 h-40 md:h-48 flex items-center justify-center rounded-t-lg"
                    style={{ backgroundColor: study.themeColor }}
                  >
                    <CardTitle className={`text-2xl md:text-3xl font-semibold text-center ${study.textColor}`}>{study.industry}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8 flex-grow flex flex-col">
                    <h4 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{study.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-base">{study.description}</p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">Key Features</h5>
                      <ul className="space-y-2">
                        {study.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 text-sm">
                            <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                      <a 
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button variant="outline" size="sm">
                          Visit Website
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-md z-10 border border-gray-300 dark:border-gray-600 h-10 w-10 hidden md:inline-flex"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-md z-10 border border-gray-300 dark:border-gray-600 h-10 w-10 hidden md:inline-flex"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>

        <div className="flex justify-center gap-2 mt-6">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out",
                index === currentIndex ? "w-6 bg-blue-600 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              )}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
