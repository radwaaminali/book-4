import React, { useState, useEffect } from 'react';
import { BookSheetData } from '../types';
import { BookSheet } from './BookSheet';
import { ChevronLeft, ChevronRight, RotateCcw, Hand } from 'lucide-react';
import { motion, PanInfo, AnimatePresence } from 'framer-motion';

interface FlipBookProps {
  sheets: BookSheetData[];
  isDark: boolean;
}

export const FlipBook: React.FC<FlipBookProps> = ({ sheets, isDark }) => {
  // Master state is now pageIndex (0 to TotalPages - 1)
  const [pageIndex, setPageIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect Mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goPrev();
      if (e.key === 'ArrowLeft') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pageIndex, isMobile]);

  // Dismiss swipe hint
  useEffect(() => {
    if (pageIndex > 0) {
      setShowSwipeHint(false);
    }
  }, [pageIndex]);

  const totalPages = sheets.length * 2;

  const goNext = () => {
    const step = isMobile ? 1 : 2;
    if (pageIndex < totalPages - 1) {
      setPageIndex(prev => Math.min(prev + step, totalPages - 1));
    }
  };

  const goPrev = () => {
    const step = isMobile ? 1 : 2;
    if (pageIndex > 0) {
      setPageIndex(prev => Math.max(prev - step, 0));
    }
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const SWIPE_THRESHOLD = 50;
    if (info.offset.x < -SWIPE_THRESHOLD) { // Swipe Left -> Next
      goNext();
    } else if (info.offset.x > SWIPE_THRESHOLD) { // Swipe Right -> Prev
      goPrev();
    }
  };

  // Derived State for 3D Flips
  const currentSheetIndex = isMobile 
    ? Math.round(pageIndex / 2) 
    : Math.floor((pageIndex + 1) / 2);

  // Mobile Shift Logic
  // When pageIndex is even (Front Page), shift is 0.
  // When pageIndex is odd (Back Page), shift is 100% to view the left side of the axis.
  const mobileShiftX = (isMobile && pageIndex % 2 !== 0) ? '100%' : '0%';

  return (
    <div className="flex flex-col items-center justify-center w-full h-full perspective-1500 overflow-visible relative">
      
      {/* Swipe Gesture Area - Full screen touch target for easier swiping */}
      <motion.div 
        className="relative w-full h-full flex items-center justify-center touch-pan-y"
        onPanEnd={handleDragEnd}
      >
        {/* Book Container */}
        {/* 
            Desktop: Double Spread width
            Mobile: Single Page Width, framed nicely.
        */}
        <motion.div 
            className="relative transform-style-3d transition-transform duration-500
                       w-[85vw] max-w-[400px] aspect-[1/1.5] max-h-[70vh]
                       md:max-h-none md:max-w-none md:h-auto md:w-[800px] lg:w-[1000px] md:aspect-[1.5/1]"
            animate={{ x: mobileShiftX }}
            transition={{ type: "spring", stiffness: 180, damping: 24 }}
        >
          
          {/* Mobile Spine Visual (The "Binding" axis) */}
          <div className="md:hidden absolute top-0 bottom-0 left-[-6px] w-[12px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-sm z-30 shadow-xl border-y border-gray-400 dark:border-slate-500"></div>

          {/* Right Stack Base (Back Cover Visual for depth) */}
          <div className="absolute right-0 w-full md:w-1/2 h-full bg-white dark:bg-slate-800 rounded-lg md:rounded-r-lg md:rounded-l-none shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] border border-gray-200 dark:border-gray-700"></div>
          
          {/* Left Stack Base (Desktop only visual) */}
          <div className="hidden md:block absolute left-0 w-1/2 h-full bg-white dark:bg-slate-800 rounded-l-lg shadow-2xl border-r border-gray-200 dark:border-gray-700"></div>

          {/* Sheets Layer */}
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full transform-style-3d">
            {sheets.map((sheet, index) => {
              const zIndex = currentSheetIndex > index 
                 ? index 
                 : (sheets.length - index) + sheets.length;

              return (
                <BookSheet 
                  key={sheet.id}
                  data={sheet}
                  isFlipped={currentSheetIndex > index}
                  zIndex={zIndex}
                  isDark={isDark}
                  onFlip={() => {
                    // Click to flip logic (Desktop only)
                    if (!isMobile) {
                        if (currentSheetIndex === index) goNext(); 
                        if (currentSheetIndex === index + 1) goPrev();
                    }
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Swipe Hint Overlay (Mobile Only) */}
      <AnimatePresence>
        {showSwipeHint && pageIndex === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-32 md:hidden pointer-events-none flex flex-col items-center gap-2 z-40"
          >
            <motion.div
              animate={{ x: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Hand className="text-white drop-shadow-lg w-8 h-8 rotate-90" />
            </motion.div>
            <span className="text-white text-xs font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">اسحب للتقليب</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Controls */}
      <div className="hidden md:flex mt-12 items-center gap-6">
        <button 
          onClick={goPrev}
          disabled={pageIndex === 0}
          className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-slate-700 text-xfuse-pink transition-all active:scale-95"
          aria-label="Previous"
        >
          <ChevronRight size={24} />
        </button>
        
        <div className="text-sm font-poppins text-gray-500 dark:text-gray-400 min-w-[100px] text-center">
             Page {pageIndex + 1} / {totalPages}
        </div>

        <button 
          onClick={goNext}
          disabled={pageIndex >= totalPages - 1}
          className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-slate-700 text-xfuse-pink transition-all active:scale-95"
          aria-label="Next"
        >
          <ChevronLeft size={24} />
        </button>

        {pageIndex >= totalPages - 2 && (
            <button 
             onClick={() => setPageIndex(0)}
             className="ml-4 flex items-center gap-2 px-4 py-2 bg-xfuse-pink text-white rounded-full text-sm font-bold shadow-lg hover:bg-pink-600 transition-colors"
            >
                <RotateCcw size={16} />
                <span>إعادة</span>
            </button>
        )}
      </div>

      {/* Mobile Page Controls (Floating Above Book) */}
      <div className="md:hidden absolute bottom-10 w-full flex items-center justify-center gap-6 z-50 pointer-events-none">
         <div className="flex items-center gap-6 bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-md px-6 py-3 rounded-full pointer-events-auto shadow-2xl border border-white/10 ring-1 ring-white/5">
            <button 
                onClick={goPrev}
                disabled={pageIndex === 0}
                className="text-white dark:text-gray-200 disabled:opacity-30 active:scale-90 transition-transform p-1"
            >
                <ChevronRight size={24} />
            </button>

            <span className="text-white dark:text-gray-100 text-sm font-bold font-poppins min-w-[50px] text-center tracking-wider">{pageIndex + 1} <span className="text-gray-500">/</span> {totalPages}</span>

            <button 
                onClick={goNext}
                disabled={pageIndex >= totalPages - 1}
                className="text-white dark:text-gray-200 disabled:opacity-30 active:scale-90 transition-transform p-1"
            >
                <ChevronLeft size={24} />
            </button>
         </div>
      </div>
    </div>
  );
};