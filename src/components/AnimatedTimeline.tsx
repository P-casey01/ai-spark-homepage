import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValueEvent, Variants } from "framer-motion"; // Import Variants
import { CheckCircle } from 'lucide-react';

// Interfaces remain the same
interface TimelineItem {
  title: string;
  description: string;
  day: string;
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
}

// --- Helper Components ---

// TimelineContent (No changes needed)
const TimelineContent: React.FC<{
  item: TimelineItem;
  isLast: boolean;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  mobile?: boolean;
}> = ({ item, isLast, isHovered, onMouseEnter, onMouseLeave, mobile }) => (
  <motion.div
    className={`p-6 bg-card/80 backdrop-blur-md rounded-xl border border-border/80 shadow-lg transition-colors duration-300 ${isHovered ? 'ring-2 ring-green-500/30' : ''} ${isLast ? 'border-green-500/50 shadow-green-500/20' : ''}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    whileHover={!mobile ? { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 15 } } : {}}
  >
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${isLast ? 'bg-green-600/20 text-green-300 border border-green-500/30' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
      {item.day}
    </span>
    <h3 className={`text-lg font-semibold mb-2 ${mobile ? 'md:text-xl' : 'md:text-xl'}`}>{item.title}</h3>
    <p className="text-sm text-muted-foreground">{item.description}</p>
  </motion.div>
);

// --- Animation Variants ---
const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Removed staggerChildren to make dot and content appear simultaneously
      // staggerChildren: 0.2, 
      when: "beforeChildren", // Ensure parent animates before children start (though children might have delays)
    },
  },
};

const dotVariants: Variants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.1 } // Small delay to ensure parent is visible
  },
};

const contentVariants = (isLeft: boolean): Variants => ({
  hidden: { opacity: 0, x: isLeft ? -30 : 30 },
  visible: {
    opacity: 1,
    x: 0,
    // Make content appear slightly after dot, matching dot's delay
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 }, 
  },
});

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    // Delay line slightly after dot/content appear
    transition: { duration: 0.4, ease: "linear", delay: 0.2 }, 
  },
};

// Component for a single Desktop Timeline Item
const AnimatedDesktopItem: React.FC<{
  item: TimelineItem;
  index: number;
  isLast: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}> = ({ item, index, isLast, hoveredIndex, setHoveredIndex }) => {
  const centerColumnRef = useRef(null); 
  const isInView = useInView(centerColumnRef, { amount: 0.3 });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className="contents" 
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants} 
    >
      {/* Left Content Area */}
      <div className={`col-span-4 flex items-center ${isLeft ? 'justify-end' : 'justify-start'} row-start-${index + 1} py-4`}>
        {isLeft && (
          <motion.div 
            variants={contentVariants(isLeft)}
            className={`max-w-md w-full text-right`}
          >
            <TimelineContent
              item={item}
              isLast={isLast}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </motion.div>
        )}
      </div>

      {/* Center Column: Dot and Line Segments - Attach ref here */}
      <div 
        ref={centerColumnRef} 
        className={`col-span-1 flex flex-col items-center row-start-${index + 1}`}
      >
        {/* Dot - interactive element */}
        <motion.div
          className={`relative z-10 my-1 flex-shrink-0`}
          variants={dotVariants}
          whileHover={{ scale: 1.3 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div 
            className={`w-5 h-5 rounded-full flex items-center justify-center cursor-pointer 
              ${hoveredIndex === index ? 'ring-4 ring-green-500/30' : ''} 
              ${isLast ? 'bg-green-600' : 'bg-green-500 shadow-lg shadow-green-500/40'}
            `}
          >
            {isLast && <CheckCircle className="w-3 h-3 text-white" />}
          </div>
        </motion.div>
        
        {/* Line segment BELOW dot - Animated */}
        {/* This line will connect to the next dot */}
        {!isLast && (
          <div className="w-1 flex-grow">
            <motion.div
              className="h-full w-full bg-green-500"
              style={{ transformOrigin: 'top' }}
              variants={lineVariants} 
            />
          </div>
        )}
      </div>

      {/* Right Content Area */}
      <div className={`col-span-4 flex items-center ${!isLeft ? 'justify-start' : 'justify-end'} row-start-${index + 1} py-4`}>
        {!isLeft && (
          <motion.div 
            variants={contentVariants(isLeft)}
            className={`max-w-md w-full text-left`}
          >
            <TimelineContent
              item={item}
              isLast={isLast}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Component for a single Mobile Timeline Item
const AnimatedMobileItem: React.FC<{
  item: TimelineItem;
  index: number;
  isLast: boolean;
}> = ({ item, index, isLast }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { amount: 0.3 }); 

  return (
    <motion.div 
      ref={itemRef}
      // Use consistent vertical padding instead of min-height
      className="relative pl-12 pb-16 last:pb-0" // Increased pb-16 (adjust as needed)
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
    >
      {/* Mobile Dot */}
      <motion.div
        className="absolute left-[1.1rem] top-[1.25rem] transform -translate-y-1/2 z-10"
        variants={dotVariants}
        aria-hidden="true"
      >
        <div className={`w-5 h-5 rounded-full flex items-center justify-center 
          ${isLast ? 'bg-green-600' : 'bg-green-500 shadow-lg shadow-green-500/40'}`}
        >
          {isLast && <CheckCircle className="w-3 h-3 text-white" />}
        </div>
      </motion.div>
      
      {/* Line segment BELOW dot */}
      {!isLast && (
        <motion.div
          // Ensure line spans correctly between dots based on padding
          className="absolute left-6 top-[1.25rem] bottom-[-4rem] w-1 bg-green-500" // Adjusted bottom: pb-16 is 4rem
          style={{ transformOrigin: 'top' }}
          variants={lineVariants}
          aria-hidden="true"
        />
      )}
      
      {/* Mobile Content Card */}
      <motion.div
        variants={contentVariants(false)} // Mobile content always comes from left
        className="relative z-[5]"
      >
        <TimelineContent
          item={item}
          isLast={isLast}
          isHovered={false} // No hover state needed for mobile trigger
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          mobile
        />
      </motion.div>
    </motion.div>
  );
};

// --- Main Timeline Component ---

const AnimatedTimeline: React.FC<AnimatedTimelineProps> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isLastItem = (index: number) => index === items.length - 1;

  if (!items || items.length === 0) {
    return <div className="text-center py-12 text-muted-foreground">No timeline items to display.</div>;
  }

  // Define a fixed row height for consistent spacing (adjust value as needed)
  const rowHeight = "200px"; 

  return (
    <>
      {/* Desktop Timeline */}
      <div
        className="relative hidden md:grid w-full max-w-5xl mx-auto grid-cols-9 gap-x-8 py-12"
        role="list"
        aria-label="Project Timeline"
        // Use grid-auto-rows for consistent row height
        style={{ gridAutoRows: rowHeight }} // Changed from gridTemplateRows
      >
        {items.map((item, index) => (
          <AnimatedDesktopItem
            key={item.title + index}
            item={item}
            index={index}
            isLast={isLastItem(index)}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>

      {/* Mobile Timeline */}
      <div
        className="md:hidden relative py-8 px-4"
        role="list"
        aria-label="Project Timeline"
      >
        {items.map((item, index) => (
          <AnimatedMobileItem
            key={item.title + index}
            item={item}
            index={index}
            isLast={isLastItem(index)}
          />
        ))}
      </div>
    </>
  );
};

export default AnimatedTimeline;