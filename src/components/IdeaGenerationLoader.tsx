import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Lightbulb } from 'lucide-react';

const steps = [
  'Analyzing your input...',
  'Researching possible solutions...',
  'Evaluating best-fit automations...',
  'Finalizing recommendations...'
];

const IdeaGenerationLoader = () => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % steps.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 w-full py-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
      <div className="relative w-20 h-20 mb-4">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="absolute top-2 left-2 w-16 h-16">
          <div className="w-16 h-16 border-4 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Sparkles className="absolute top-6 left-6 w-8 h-8 text-yellow-400 animate-pulse" />
      </div>
      <div className="h-8 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={stepIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-lg font-semibold px-4"
          >
            {steps[stepIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="flex gap-2 mt-4">
        <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
        <span className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce [animation-delay:200ms]"></span>
        <span className="w-3 h-3 bg-yellow-200 rounded-full animate-bounce [animation-delay:400ms]"></span>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <Lightbulb className="w-6 h-6 text-yellow-400 animate-pulse" />
        <p className="text-sm font-light italic">"Great ideas are just a spark away!"</p>
      </div>
    </div>
  );
};

export default IdeaGenerationLoader;
