import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

interface TimelineItem {
  title: string;
  description: string;
  day: string;
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
}

const AnimatedTimeline: React.FC<AnimatedTimelineProps> = ({ items }) => {
  const [desktopRef, desktopInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const [mobileRef, mobileInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <>
      {/* Desktop Timeline */}
      <div ref={desktopRef} className="relative hidden md:grid w-full grid-cols-9 gap-y-24">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-green-500/20 z-0">
          <motion.div 
            className="h-full w-full bg-green-500"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: desktopInView ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: 'top' }}
          />
        </div>
        {items.map((item, index) => (
          <React.Fragment key={item.title}>
            {/* Left content */}
            <div className={`col-span-4 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} items-center`}> 
              {index % 2 === 0 ? (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={desktopInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="max-w-md w-full text-right"
                >
                  <TimelineContent item={item} />
                </motion.div>
              ) : null}
            </div>
            {/* Center dot */}
            <div className="col-span-1 flex flex-col items-center z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={desktopInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50 mt-0.5"
              />
            </div>
            {/* Right content */}
            <div className={`col-span-4 flex ${index % 2 === 1 ? 'justify-start' : 'justify-end'} items-center`}>
              {index % 2 === 1 ? (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={desktopInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="max-w-md w-full text-left"
                >
                  <TimelineContent item={item} />
                </motion.div>
              ) : null}
            </div>
          </React.Fragment>
        ))}
      </div>
      
      {/* Mobile Timeline */}
      <div ref={mobileRef} className="md:hidden relative">
        <div className="absolute left-4 h-full w-1 bg-green-500/20">
          <motion.div 
            className="h-full w-full bg-green-500 rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: mobileInView ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: 'top' }}
          />
        </div>
        
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            animate={mobileInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative ml-12 mb-8 pl-6"
          >
            <motion.div 
              className="absolute left-[-2.25rem] top-4"
              initial={{ scale: 0 }}
              animate={mobileInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
            </motion.div>
            
            <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border shadow-xl">
              <span className="inline-block px-4 py-2 rounded-full text-green-400 bg-green-500/10 border border-green-500/20 text-sm mb-4">
                {item.day}
              </span>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// Helper component for timeline content
const TimelineContent: React.FC<{ item: TimelineItem }> = ({ item }) => (
  <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <span className="inline-block px-4 py-2 rounded-full text-green-400 bg-green-500/10 border border-green-500/20 text-sm mb-4">
      {item.day}
    </span>
    <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
    <p className="text-muted-foreground">{item.description}</p>
  </div>
);

export default AnimatedTimeline;