
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface AutomationIdea {
  title: string;
  description: string;
  complexity: string;
  estimatedTime: string;
  roadmap?: string[];
}

const AIChatBar = () => {
  const [businessDescription, setBusinessDescription] = useState('');
  const [ideas, setIdeas] = useState<AutomationIdea[]>([]);
  const [loading, setLoading] = useState(false);

  const generateIdeas = async () => {
    if (!businessDescription.trim()) {
      toast.error("Please describe your business first");
      return;
    }

    setLoading(true);
    
    try {
      // Simulated API call - replace with actual OpenAI API call
      // This is just a mock response for demonstration
      const mockIdeas = [
        {
          title: "AI Chatbot for Tour Inquiries",
          description: "Implement an AI chatbot on the website to answer frequently asked questions about tour schedules, pricing, and meeting points.",
          complexity: "Medium Complexity",
          estimatedTime: "4-6 weeks",
          roadmap: []
        },
        {
          title: "AI-Powered Tour Recommendation Engine",
          description: "Use AI to analyze customer data (e.g., past tour preferences, demographics) and recommend specific tours that align with their interests.",
          complexity: "Medium Complexity",
          estimatedTime: "4-6 weeks",
          roadmap: []
        },
        {
          title: "AI Route Optimization for Historical Tours",
          description: "Utilize AI to analyze historical records and maps, optimizing tour routes to minimize walking distance while covering the most historically significant sites.",
          complexity: "Medium Complexity",
          estimatedTime: "4-6 weeks",
          roadmap: []
        }
      ];

      setIdeas(mockIdeas);
      toast.success("Generated automation ideas!");
    } catch (error) {
      toast.error("Failed to generate ideas. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const showRoadmap = async (index: number) => {
    // In a real implementation, this would make another API call to get detailed roadmap
    toast.success("Fetching detailed roadmap...");
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-4xl font-serif">
            Not sure what AI solution you need?
          </CardTitle>
          <p className="text-agency-gray mt-2 flex items-center justify-center gap-2">
            <MessageCircle className="h-5 w-5" />
            we built this to help
          </p>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Input
              placeholder="Describe your business..."
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e.target.value)}
              className="pr-32 py-6 text-lg rounded-full"
            />
            <Button
              onClick={generateIdeas}
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white rounded-full px-6"
            >
              Generate AI Ideas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {ideas.length > 0 && (
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-[#6c5ce7] flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">AI-Generated Ideas</h3>
              </div>

              {ideas.map((idea, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{idea.title}</h4>
                      <p className="text-agency-gray mb-3">{idea.description}</p>
                      <div className="flex items-center gap-4 text-sm text-agency-gray">
                        <span className="bg-[#f0eeff] text-[#6c5ce7] px-3 py-1 rounded-full">
                          {idea.complexity}
                        </span>
                        <span>Est. Time: {idea.estimatedTime}</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => showRoadmap(index)}
                      variant="outline"
                      className="shrink-0"
                    >
                      View Roadmap
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChatBar;
