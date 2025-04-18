
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
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
    <div className="w-full max-w-4xl mx-auto pt-8 md:pt-12 mt-8 md:mt-12 relative z-20">
      <Card className="border-0 shadow-xl bg-agency-charcoal/90 backdrop-blur-sm">
        <CardHeader className="text-center pb-4 pt-8 md:pt-10">
          <CardTitle className="text-2xl md:text-3xl font-serif text-white flex items-center justify-center gap-3">
            <Sparkles className="h-6 w-6 text-green-400" />
            Not sure what AI solution you need?
          </CardTitle>
          <p className="text-gray-300 mt-3 flex items-center justify-center gap-2 font-sans text-sm md:text-base">
            <MessageCircle className="h-4 w-4" />
            we built this to help
          </p>
        </CardHeader>
        <CardContent className="pb-8 px-6 md:px-8">
          <div className="relative flex flex-col gap-4">
            <div className="flex gap-2 relative">
              <Input
                placeholder="Describe your business..."
                value={businessDescription}
                onChange={(e) => setBusinessDescription(e.target.value)}
                className="py-6 text-base rounded-full bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 focus:border-green-500/50 focus:ring-green-500/30"
              />
              <div className="hidden md:block">
                <Button
                  onClick={generateIdeas}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 whitespace-nowrap font-sans absolute top-1/2 right-2 -translate-y-1/2 transition-all duration-200 hover:scale-105"
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
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-6 whitespace-nowrap font-sans text-base transition-all duration-200 hover:scale-105"
              >
                {loading ? "Generating..." : "Generate"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {loading && <IdeaGenerationLoader />}

          {ideas.length > 0 && (
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-green-600/20 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="text-xl font-serif text-white">AI-Generated Ideas</h3>
              </div>

              <div className="grid gap-4">
                {ideas.map((idea, index) => (
                  <Card key={index} className="p-5 bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
                    <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'} items-start gap-4`}>
                      <div className={`${isMobile ? 'w-full' : 'flex-1'}`}>
                        <h4 className="font-serif text-lg mb-3 text-white">{idea.title}</h4>
                        <p className="text-gray-300 mb-3 font-sans text-sm leading-relaxed">{idea.description}</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
                          <span className="bg-green-900/30 text-green-400 px-3 py-1.5 rounded-full border border-green-500/20">
                            {idea.complexity} Complexity
                          </span>
                          <span className="text-gray-400 bg-gray-700/30 px-3 py-1.5 rounded-full">
                            Est. Time: {idea.estimatedTime}
                          </span>
                        </div>
                      </div>
                      <Button
                        onClick={() => showRoadmap(idea)}
                        variant="outline"
                        className={`${isMobile ? 'w-full mt-4' : 'shrink-0'} font-sans text-sm py-2 bg-gray-700/50 text-white hover:bg-green-600 hover:text-white border-gray-600/50 transition-all duration-200`}
                      >
                        View Roadmap
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
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
