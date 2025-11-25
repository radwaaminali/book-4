
import React from 'react';
import { motion } from 'framer-motion';
import { BookSheetData } from '../types';
import { PageContent } from './PageContent';

interface BookSheetProps {
  data: BookSheetData;
  isFlipped: boolean;
  zIndex: number;
  isDark: boolean;
  onFlip?: () => void;
}

export const BookSheet: React.FC<BookSheetProps> = ({ data, isFlipped, zIndex, isDark, onFlip }) => {
  return (
    <motion.div
      className="absolute top-0 w-full h-full transform-style-3d origin-left cursor-pointer md:cursor-pointer touch-none"
      style={{ zIndex }}
      animate={{ 
        rotateY: isFlipped ? -180 : 0 
      }}
      transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1.000] }}
      // On desktop, click triggers flip. On mobile, swipe handles it via parent, 
      // but click still works for corners if user prefers tapping.
      onClick={onFlip} 
    >
      {/* Front Face */}
      <div 
        className="absolute inset-0 backface-hidden shadow-md rounded-lg md:rounded-r-lg md:rounded-l-none overflow-hidden"
        style={{ 
          background: isDark ? '#0F172A' : '#FFFFFF',
          // Simulate spine shadow on the left edge
          boxShadow: 'inset 10px 0 20px -10px rgba(0,0,0,0.2)' 
        }}
      >
        <PageContent data={data.front} isDark={isDark} />
        {/* Shine effect on turn - Desktop Hover Only */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none mix-blend-overlay opacity-0 md:group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Back Face */}
      <div 
        className="absolute inset-0 backface-hidden rotate-y-180 shadow-md rounded-lg md:rounded-l-lg md:rounded-r-none overflow-hidden"
        style={{ 
          background: isDark ? '#0F172A' : '#FFFFFF',
          // Simulate spine shadow on the right edge (when flipped)
          boxShadow: 'inset -10px 0 20px -10px rgba(0,0,0,0.2)' 
        }}
      >
        <PageContent data={data.back} isDark={isDark} />
        <div className="absolute inset-0 bg-black/5 pointer-events-none" /> {/* Slight dim for back page realism */}
      </div>
    </motion.div>
  );
};
