import React, { useState, useEffect } from 'react';
import { FlipBook } from './components/FlipBook';
import { bookData } from './data';
import { Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  // Default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`h-[100dvh] w-full flex flex-col transition-colors duration-500 ${isDarkMode ? 'bg-[#1E293B]' : 'bg-[#E2E8F0]'} overflow-hidden relative`}>
      
      {/* Header / Toolbar */}
      <header className="absolute top-0 w-full z-50 p-4 md:p-6 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
             <div className="w-8 h-8 bg-gradient-to-br from-xfuse-pink to-xfuse-cyan rounded flex items-center justify-center text-white font-bold font-poppins shadow-lg">X</div>
             <span className={`font-poppins font-bold text-lg tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>XFUSE</span>
        </div>

        <div className="pointer-events-auto">
             <button 
               onClick={toggleDarkMode}
               className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-slate-600 dark:text-slate-300 hover:text-xfuse-pink transition-colors shadow-lg"
             >
               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
             </button>
        </div>
      </header>

      {/* Main Stage */}
      <main className="flex-1 w-full h-full flex items-center justify-center pt-16 pb-20 md:py-20 overflow-hidden">
        <FlipBook sheets={bookData} isDark={isDarkMode} />
      </main>

    </div>
  );
};

export default App;