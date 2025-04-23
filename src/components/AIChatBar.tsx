import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import IdeaGenerationLoader from './IdeaGenerationLoader';
import RoadmapModal from './RoadmapModal';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/hooks/use-theme';

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const { theme } = useTheme();

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
    <div ref={ref} className="w-full max-w-4xl mx-auto pt-8 md:pt-12 mt-8 md:mt-12 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Card
          className={
            cn(
              'border-0 shadow-2xl rounded-3xl overflow-hidden',
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900/90 backdrop-blur-md'
                : 'bg-gradient-to-br from-white via-gray-50 to-gray-100/90 backdrop-blur-md'
            )
          }
        >
          <CardHeader className="text-center pb-4 pt-10 md:pt-14">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <CardTitle className={
                cn(
                  'text-2xl sm:text-3xl md:text-4xl font-extrabold flex items-center justify-center gap-3',
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                )
              }>
                <Sparkles className={theme === 'dark' ? 'h-7 w-7 text-green-400' : 'h-7 w-7 text-green-700'} />
                Discover Your Next AI Breakthrough
              </CardTitle>
              <p className={
                cn(
                  'text-base md:text-lg font-medium mt-2',
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                )
              }>
                Unsure where to start? Let us generate tailored automation ideas for your business.
              </p>
            </motion.div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {loading ? (
                <div className="py-10"><IdeaGenerationLoader /></div>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <form onSubmit={(e) => { e.preventDefault(); generateIdeas(); }} className="relative flex flex-col md:flex-row gap-4 items-center justify-center">
                      <textarea
                        value={businessDescription}
                        onChange={(e) => setBusinessDescription(e.target.value)}
                        placeholder="Describe your business, goals, or challenges..."
                        className={
                          cn(
                            'w-full md:w-2/3 min-h-[64px] max-h-40 px-5 py-4 rounded-2xl border text-base transition-all duration-200 resize-none shadow-sm',
                            theme === 'dark'
                              ? 'bg-gray-900/80 border-gray-700 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-green-500/30 focus:border-green-500/30'
                              : 'bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-green-600/20 focus:border-green-600/20'
                          )
                        }
                      />
                      <Button
                        type="submit"
                        disabled={loading}
                        className={
                          cn(
                            'h-12 px-8 rounded-2xl font-semibold flex items-center gap-2 shadow-md transition-colors duration-200',
                            theme === 'dark'
                              ? 'bg-green-600 hover:bg-green-500 text-white'
                              : 'bg-green-700 hover:bg-green-600 text-white'
                          )
                        }
                      >
                        <Sparkles className="h-5 w-5" />
                        Generate Ideas
                      </Button>
                    </form>
                  </motion.div>
                  {ideas.length > 0 && (
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {ideas.map((idea, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 * index, duration: 0.5 }}
                        >
                          <Card className={
                            cn(
                              'rounded-2xl border-0 shadow-lg transition-all duration-200 hover:scale-[1.025] group',
                              theme === 'dark'
                                ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800/90'
                                : 'bg-gradient-to-br from-white via-gray-50 to-gray-100/90'
                            )
                          }>
                            <div className="p-6 flex flex-col gap-3">
                              <div className="flex items-center gap-2 mb-2">
                                <MessageCircle className={theme === 'dark' ? 'h-5 w-5 text-green-400' : 'h-5 w-5 text-green-700'} />
                                <h4 className={
                                  cn(
                                    'font-bold text-lg',
                                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                                  )
                                }>{idea.title}</h4>
                              </div>
                              <p className={
                                cn(
                                  'mb-2 text-base',
                                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                )
                              }>{idea.description}</p>
                              <div className="flex flex-wrap items-center gap-2 text-xs">
                                <span className={
                                  cn(
                                    'px-3 py-1 rounded-full border font-semibold',
                                    theme === 'dark'
                                      ? 'bg-green-900/30 text-green-400 border-green-500/20'
                                      : 'bg-green-100 text-green-700 border-green-400/20'
                                  )
                                }>
                                  {idea.complexity} Complexity
                                </span>
                                <span className={
                                  cn(
                                    'px-3 py-1 rounded-full border',
                                    theme === 'dark'
                                      ? 'bg-gray-700/30 text-gray-300 border-gray-600/20'
                                      : 'bg-gray-200 text-gray-700 border-gray-400/20'
                                  )
                                }>
                                  Est. Time: {idea.estimatedTime}
                                </span>
                              </div>
                              <Button
                                onClick={() => showRoadmap(idea)}
                                variant="outline"
                                className={
                                  cn(
                                    'mt-4 w-full font-sans text-sm py-2 rounded-xl border transition-all duration-200 flex items-center justify-center gap-2',
                                    theme === 'dark'
                                      ? 'bg-gray-800/60 text-white border-gray-700 hover:bg-green-600 hover:text-white hover:border-green-500'
                                      : 'bg-white/60 text-gray-900 border-gray-300 hover:bg-green-700 hover:text-white hover:border-green-600'
                                  )
                                }
                              >
                                View Roadmap
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
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
