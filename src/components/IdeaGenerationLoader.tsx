
import React from 'react';

const IdeaGenerationLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full py-8">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-16 h-16 border-4 border-[#6c5ce7] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="absolute top-2 left-2 w-12 h-12">
          <div className="w-12 h-12 border-4 border-[#9b87f5] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
      <p className="text-agency-gray animate-pulse">Generating AI Solutions...</p>
    </div>
  );
};

export default IdeaGenerationLoader;
