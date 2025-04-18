
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, CheckCircle } from 'lucide-react';

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-slate-900 text-white border-slate-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">{idea.title} Roadmap</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-900/50 text-emerald-200 px-3 py-1 rounded-full text-sm">
              {idea.complexity} Complexity
            </span>
            <span className="text-slate-300 text-sm">
              Est. Time: {idea.estimatedTime}
            </span>
          </div>
          
          <div className="space-y-4">
            {idea.roadmap?.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-800/80 transition-colors">
                <CheckCircle className="h-6 w-6 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <p className="text-slate-200">{step}</p>
                  <Progress value={((index + 1) / idea.roadmap!.length) * 100} className="mt-2 bg-slate-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoadmapModal;
