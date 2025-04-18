
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
    <div className="w-full max-w-4xl mx-auto pt-2">
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center pb-1 pt-3">
          <CardTitle className="text-xl md:text-3xl font-serif text-agency-black block">
            Not sure what AI solution you need?
          </CardTitle>
          <p className="text-agency-gray mt-0 flex items-center justify-center gap-2 font-sans text-sm">
            <MessageCircle className="h-4 w-4" />
            we built this to help
          </p>
        </CardHeader>
        <CardContent className="pb-3 px-3 md:px-4">
          <div className="relative flex flex-col gap-2">
            <div className="flex gap-2 relative">
              <Input
                placeholder="Describe your business..."
                value={businessDescription}
                onChange={(e) => setBusinessDescription(e.target.value)}
                className="py-4 text-sm rounded-full font-sans text-agency-gray"
              />
              <div className="hidden md:block">
                <Button
                  onClick={generateIdeas}
                  disabled={loading}
                  className="bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white rounded-full px-6 whitespace-nowrap font-sans absolute top-1/2 right-2 -translate-y-1/2"
                >
                  {loading ? "Generating..." : "Generate Ideas"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="md:hidden">
              <Button
                onClick={generateIdeas}
                disabled={loading}
                className="w-full bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white rounded-full px-6 whitespace-nowrap font-sans text-sm"
              >
                {loading ? "Generating..." : "Generate"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {loading && <IdeaGenerationLoader />}

          {ideas.length > 0 && (
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-7 w-7 rounded-full bg-[#6c5ce7] flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-serif text-agency-black">AI-Generated Ideas</h3>
              </div>

              {ideas.map((idea, index) => (
                <Card key={index} className="p-2">
                  <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'} items-start gap-2`}>
                    <div className={`${isMobile ? 'w-full' : 'flex-1'}`}>
                      <h4 className="font-serif text-base mb-1 text-agency-black">{idea.title}</h4>
                      <p className="text-agency-gray mb-1 font-sans text-xs">{idea.description}</p>
                      <div className="flex items-center gap-2 text-xs font-sans text-agency-gray">
                        <span className="bg-[#f0eeff] text-[#6c5ce7] px-2 py-0.5 rounded-full">
                          {idea.complexity} Complexity
                        </span>
                        <span>Est. Time: {idea.estimatedTime}</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => showRoadmap(idea)}
                      variant="outline"
                      className={`${isMobile ? 'w-full mt-2' : 'shrink-0'} font-sans text-xs py-1`}
                    >
                      View Roadmap
                      <ArrowRight className="ml-1 h-3 w-3" />
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
