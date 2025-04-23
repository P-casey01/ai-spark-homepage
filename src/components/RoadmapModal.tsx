import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface RoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
  idea: {
    title: string;
    description: string;
    complexity: string;
    estimatedTime: string;
    roadmap?: string[];
  };
}

const RoadmapModal: React.FC<RoadmapModalProps> = ({ isOpen, onClose, idea }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  {idea.title}
                  <span className="text-sm font-normal text-gray-500">Roadmap</span>
                </motion.div>
              </DialogTitle>
            </DialogHeader>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#f0eeff] text-[#6c5ce7] px-3 py-1 rounded-full text-sm font-medium">
                  {idea.complexity} Complexity
                </span>
                <span className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">
                  Est. Time: {idea.estimatedTime}
                </span>
              </div>
              
              <div className="space-y-4">
                {idea.roadmap?.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md hover:border-[#6c5ce7]/20 transition-all duration-300">
                      <div className="shrink-0">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                          <CheckCircle className="h-6 w-6 text-[#6c5ce7]" />
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium mb-2">{step}</p>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                          style={{ transformOrigin: 'left' }}
                        >
                          <Progress 
                            value={((index + 1) / idea.roadmap!.length) * 100} 
                            className="h-1.5 bg-gray-100"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default RoadmapModal;
