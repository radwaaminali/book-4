import React from 'react';
import { PageData, StatItem, PersonaItem, SwotItem, TimelineItem } from '../types';
import { TrendingUp, Globe, Video, DollarSign, Target, User, Mail, Activity, ArrowRight } from 'lucide-react';

interface PageContentProps {
  data: PageData;
  isDark: boolean;
}

// Icons Map
const IconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-4 h-4 md:w-6 md:h-6" />,
  Globe: <Globe className="w-4 h-4 md:w-6 md:h-6" />,
  Video: <Video className="w-4 h-4 md:w-6 md:h-6" />,
  DollarSign: <DollarSign className="w-4 h-4 md:w-6 md:h-6" />,
  Target: <Target className="w-4 h-4 md:w-6 md:h-6" />,
};

// --- Sub Components ---

const StatItemView: React.FC<{ item: StatItem }> = ({ item }) => (
  <div className="flex flex-col items-center p-2 md:p-5 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700 w-full active:scale-[0.98] transition-transform md:hover:scale-[1.02]">
    <div className={`mb-1 md:mb-3 ${item.color || 'text-gray-500'}`}>
      {item.icon && IconMap[item.icon] ? IconMap[item.icon] : <Activity />}
    </div>
    <div className="text-base md:text-2xl font-bold text-slate-900 dark:text-white font-poppins">{item.value}</div>
    <div className="text-[9px] md:text-sm text-gray-500 dark:text-gray-400 font-cairo text-center leading-relaxed mt-1">{item.label}</div>
  </div>
);

const SwotCard: React.FC<{ item: SwotItem }> = ({ item }) => {
    const colors = {
    S: 'border-l-4 border-green-500 bg-green-50/50 dark:bg-green-900/10',
    W: 'border-l-4 border-red-500 bg-red-50/50 dark:bg-red-900/10',
    O: 'border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-900/10',
    T: 'border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-900/10',
  };
  return (
    <div className={`p-2 md:p-4 rounded mb-2 md:mb-3 text-right ${colors[item.type]}`}>
      <div className="flex items-center gap-2 mb-1 md:mb-2">
        <span className="font-bold text-xs md:text-base font-poppins">{item.type} - {item.title}</span>
      </div>
      <ul className="list-disc list-inside text-[10px] md:text-xs text-gray-700 dark:text-gray-300 font-cairo leading-relaxed">
        {item.points.map((p, i) => <li key={i} className="mb-0.5">{p}</li>)}
      </ul>
    </div>
  );
};

const TimelineRow: React.FC<{ item: TimelineItem }> = ({ item }) => (
  <div className="flex gap-3 md:gap-4 mb-3 md:mb-6 relative">
    <div className="w-14 md:w-20 flex-shrink-0 text-left">
      <span className="text-[9px] md:text-xs font-bold text-xfuse-pink font-cairo bg-xfuse-pink/10 px-2 py-1 rounded">{item.week}</span>
    </div>
    <div className="border-r-2 border-gray-200 dark:border-gray-700 pr-3 md:pr-4 pb-1 md:pb-2">
      <h4 className="text-xs md:text-base font-bold text-slate-800 dark:text-white font-cairo">{item.title}</h4>
      <p className="text-[10px] md:text-sm text-gray-500 dark:text-gray-400 font-cairo mt-1 leading-relaxed">{item.desc}</p>
    </div>
  </div>
);

const PersonaMini: React.FC<{ item: PersonaItem }> = ({ item }) => (
  <div className="flex items-center gap-3 md:gap-4 p-2 md:p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 mb-2 md:mb-4 active:bg-gray-50 dark:active:bg-slate-700/50 transition-colors">
    <img src={item.image} alt={item.name} className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover shadow-sm" />
    <div>
      <h4 className="text-xs md:text-base font-bold text-slate-900 dark:text-white font-cairo">{item.name}</h4>
      <p className="text-[9px] md:text-sm text-xfuse-cyan font-poppins">{item.role}</p>
      <p className="text-[9px] md:text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed italic">"{item.quote}"</p>
    </div>
  </div>
);

// --- Main Page Render ---

export const PageContent: React.FC<PageContentProps> = ({ data, isDark }) => {
  // Common Footer
  const Footer = () => (
    <div className="absolute bottom-3 left-4 right-4 md:bottom-4 md:left-8 md:right-8 flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-2 md:pt-3 bg-white/0 backdrop-blur-[0px] pointer-events-none">
      <span className="hidden md:block text-[10px] font-poppins text-gray-400">XFUSE Market Research</span>
      <span className="block md:hidden"></span> 
      <span className="block text-[10px] md:text-sm font-poppins font-bold text-slate-300 dark:text-slate-600">{data.pageNumber}</span>
    </div>
  );

  // Cover Page Special Layout
  if (data.type === 'COVER') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center text-center p-4 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-xfuse-pink/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-xfuse-cyan/20 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 border-2 border-white/10 p-4 md:p-8 rounded-none w-full h-full flex flex-col justify-center items-center">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-tr from-xfuse-pink to-xfuse-cyan rounded mb-4 md:mb-8 flex items-center justify-center text-white font-bold text-lg md:text-2xl font-poppins shadow-lg shadow-xfuse-pink/50">
            X
            </div>
            <h1 className="text-xl md:text-5xl font-bold text-white font-poppins tracking-tighter mb-2 md:mb-4 leading-tight">{data.title}</h1>
            <h2 className="text-xs md:text-xl text-gray-300 font-poppins font-light tracking-widest uppercase mb-4 md:mb-10">{data.subtitle}</h2>
            <div className="h-1 w-12 md:w-20 bg-gradient-to-r from-xfuse-pink to-xfuse-cyan mb-4 md:mb-10"></div>
            <p className="text-[10px] md:text-sm text-gray-400 font-cairo max-w-[95%] md:max-w-[85%] leading-relaxed">{data.content}</p>
        </div>
      </div>
    );
  }

  // Standard Page Layout
  return (
    <div className="h-full w-full p-4 md:p-10 flex flex-col relative bg-white dark:bg-slate-900 overflow-hidden">
      
      {/* Header */}
      <div className="mb-2 md:mb-8 flex-shrink-0">
        <h2 className="text-sm md:text-2xl font-bold font-cairo text-slate-900 dark:text-white mb-1 md:mb-2 leading-snug">{data.title}</h2>
        {data.subtitle && <p className="text-[9px] md:text-sm text-xfuse-pink font-cairo font-medium">{data.subtitle}</p>}
      </div>

      {/* Content Body */}
      {/* 
         Mobile Optimizations:
         - Smaller text ([10px]) to fit more content.
         - Tighter spacing.
      */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pb-6 md:pb-10 -mr-2 pr-2 touch-pan-y">
        {data.content && (
          <div className="prose dark:prose-invert prose-p:text-[10px] md:prose-p:text-base prose-li:text-[10px] md:prose-li:text-base max-w-none mb-2 md:mb-8 font-cairo leading-relaxed md:leading-8 text-gray-600 dark:text-gray-300 whitespace-pre-line">
            {data.content}
          </div>
        )}

        {/* Dynamic Components based on Type */}
        {data.type === 'STATS' && (
          <div className="grid grid-cols-2 gap-2 md:gap-3 mt-1">
            {data.stats?.map((stat, i) => <StatItemView key={i} item={stat} />)}
          </div>
        )}

        {data.type === 'PERSONAS' && (
          <div className="space-y-2 md:space-y-4 mt-1">
             {data.personas?.map((p, i) => <PersonaMini key={i} item={p} />)}
          </div>
        )}

        {data.type === 'SWOT' && (
           <div className="grid grid-cols-1 gap-1.5 md:gap-2 mt-1">
             {data.swot?.map((s, i) => <SwotCard key={i} item={s} />)}
           </div>
        )}

        {data.type === 'TIMELINE' && (
           <div className="mt-2 md:mt-6">
             {data.timeline?.map((t, i) => <TimelineRow key={i} item={t} />)}
           </div>
        )}

        {data.type === 'CONTACT' && (
           <div className="mt-4 md:mt-10 flex flex-col items-center justify-center p-4 md:p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
             <button className="bg-green-500 active:bg-green-700 hover:bg-green-600 text-white px-6 py-2 md:px-8 md:py-4 rounded-full font-bold flex items-center gap-3 transition-all shadow-lg hover:shadow-green-500/30 mb-2 md:mb-4 w-full md:w-auto justify-center text-xs md:text-base">
               <span>تواصل معنا عبر WhatsApp</span>
               <ArrowRight size={16} />
             </button>
             <p className="text-[10px] md:text-sm text-gray-400">info@xfuse.agency</p>
           </div>
        )}

        {data.image && (
          <div className="mt-2 md:mt-8 rounded-lg md:rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 h-28 md:h-48 w-full shrink-0">
            <img src={data.image} alt="visual" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};