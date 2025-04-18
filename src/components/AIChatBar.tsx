import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import IdeaGenerationLoader from './IdeaGenerationLoader';
import RoadmapModal from './RoadmapModal';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const [selectedIdea, setSelectedIdea] = useState<AutomationIdea | null>(null);
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);
  const isMobile = useIsMobile();

  const generateIdeas = async () => {
    if (!businessDescription.trim()) {
      toast.error("Please describe your business first");
      return;
    }

    setLoading(true);
    setIdeas([]);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-automation-ideas', {
        body: { businessDescription },
      });

      if (error) throw error;

      if (data.ideas) {
        const ideasWithRoadmap = data.ideas.map((idea: AutomationIdea) => ({
          ...idea,
          roadmap: idea.roadmap || [
            "Requirements gathering and analysis",
            "System design and architecture",
            "Development and implementation",
            "Testing and quality assurance",
            "Deployment and integration",
            "Training and documentation"
          ]
        }));
        setIdeas(ideasWithRoadmap);
        toast.success("Generated automation ideas!");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to generate ideas. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const showRoadmap = (idea: AutomationIdea) => {
    setSelectedIdea(idea);
    setIsRoadmapOpen(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-4xl font-serif text-agency-black">
            Not sure what AI solution you need?
          </CardTitle>
          <p className="text-agency-gray mt-2 flex items-center justify-center gap-2 font-sans">
            <MessageCircle className="h-5 w-5" />
            we built this to help
          </p>
        </CardHeader>
        <CardContent>
          <div className={cn("relative", isMobile && "mobile-chat-input")}>
            <Input
              placeholder="Describe your business..."
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e.target.value)}
              className="pr-32 py-6 text-lg rounded-full font-sans text-agency-gray"
            />
            <Button
              onClick={generateIdeas}
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white rounded-full px-6 whitespace-nowrap"
            >
              {loading ? "Generating..." : (isMobile ? "Generate" : "Generate AI Ideas")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {loading && <IdeaGenerationLoader />}

          {ideas.length > 0 && (
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-[#6c5ce7] flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-agency-black">AI-Generated Ideas</h3>
              </div>

              {ideas.map((idea, index) => (
                <Card key={index} className="p-4 font-sans">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-agency-black">{idea.title}</h4>
                      <p className="text-agency-gray mb-3">{idea.description}</p>
                      <div className="flex items-center gap-4 text-sm text-agency-gray">
                        <span className="bg-[#f0eeff] text-[#6c5ce7] px-3 py-1 rounded-full">
                          {idea.complexity} Complexity
                        </span>
                        <span>Est. Time: {idea.estimatedTime}</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => showRoadmap(idea)}
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

      {selectedIdea && (
        <RoadmapModal
          isOpen={isRoadmapOpen}
          onClose={() => setIsRoadmapOpen(false)}
          idea={selectedIdea}
        />
      )}
    </div>
  );
};

export default AIChatBar;
