import React, { useState, useEffect } from "react";
import { FlipBook } from "./components/FlipBook";
import { bookData } from "./data";
import { Moon, Sun } from "lucide-react";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`min-h-screen w-full flex flex-col transition-colors duration-500 ${
        isDarkMode ? "bg-[#0F172A]" : "bg-[#F8FAFC]"
      } overflow-hidden relative`}
    >
      {/* ✅ الهيدر */}
      <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold">
            X
          </div>
          <span
            className={`font-poppins font-bold text-lg ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            XFUSE
          </span>
        </div>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-slate-300 hover:text-pink-400 transition-colors"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* ✅ منطقة عرض الكتاب */}
      <main className="flex-1 flex items-center justify-center pt-20 md:pt-24 pb-12 md:pb-20">
        <div className="w-full h-full flex items-center justify-center px-2 sm:px-4 md:px-8">
          <FlipBook sheets={bookData} isDark={isDarkMode} />
        </div>
      </main>
    </div>
  );
};

export default App; 
useEffect(() => {
  console.log("🔍 DEBUG INFO:");
  console.log("🧩 FlipBook:", FlipBook);
  console.log("📄 bookData:", bookData);
}, []);

