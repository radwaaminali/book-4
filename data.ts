
import { BookSheetData } from './types';

export const bookData: BookSheetData[] = [
  // Sheet 1: Cover & Intro
  {
    id: 1,
    front: {
      id: 'cover',
      type: 'COVER',
      title: 'XFUSE',
      subtitle: 'Market Research 2025',
      content: 'Digital Strategy & Intelligence',
      pageNumber: 0
    },
    back: {
      id: 'intro',
      type: 'INTRO',
      title: 'المقدمة والملخص التنفيذي',
      content: 'يقدم هذا التقرير تحليلاً شاملاً للسوق الرقمي المصري في عام 2025. نركز هنا على الفرص غير المستغلة للنمو وكيف يمكن لـ XFUSE قيادة هذا التحول.\n\n• تحليل عميق للبيانات.\n• استراتيجيات تعتمد على الذكاء الاصطناعي.\n• خارطة طريق للتنفيذ الفوري.',
      pageNumber: 1
    }
  },
  // Sheet 2: Market Overview & Opportunities
  {
    id: 2,
    front: {
      id: 'market',
      type: 'STATS',
      title: 'نظرة عامة على السوق',
      subtitle: 'مؤشرات النمو الرقمي',
      stats: [
        { label: 'نمو التجارة الإلكترونية', value: '+30%', icon: 'TrendingUp', color: 'text-xfuse-cyan' },
        { label: 'انتشار الإنترنت', value: '72%', icon: 'Globe', color: 'text-xfuse-pink' },
        { label: 'استهلاك الفيديو', value: '80%', icon: 'Video', color: 'text-xfuse-accent' },
        { label: 'حجم السوق الإعلاني', value: '$500M', icon: 'DollarSign', color: 'text-green-400' }
      ],
      pageNumber: 2
    },
    back: {
      id: 'opportunities',
      type: 'STANDARD',
      title: 'الفرص المتاحة',
      subtitle: 'أين تكمن الفرصة الذهبية؟',
      content: 'يركز السوق حالياً على الأتمتة والتخصيص. هناك فجوة كبيرة في تقديم خدمات تسويقية تعتمد على البيانات للشركات المتوسطة.\n\nالفرص الرئيسية:\n• أتمتة التسويق (Marketing Automation).\n• التخصيص المفرط (Hyper-personalization).\n• استشارات التحول الرقمي.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      pageNumber: 3
    }
  },
  // Sheet 3: Target Audience & Personas
  {
    id: 3,
    front: {
      id: 'audience',
      type: 'STANDARD',
      title: 'الجمهور المستهدف',
      content: 'نستهدف صناع القرار في الشركات التقنية الناشئة (Tech Startups) وقطاع التطوير العقاري الذين يبحثون عن نتائج قابلة للقياس وليس مجرد تواجد رقمي.\n\nقنوات الوصول:\n• LinkedIn للوصول المباشر (B2B).\n• ندوات الويب (Webinars) التعليمية.\n• تقارير ودراسات حالة حصرية.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
      pageNumber: 4
    },
    back: {
      id: 'personas',
      type: 'PERSONAS',
      title: 'نماذج العملاء (Personas)',
      personas: [
        {
          name: 'أحمد',
          role: 'CEO - Tech Startup',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
          details: 'عملي، يركز على الأرقام. يبحث عن شريك نمو حقيقي.',
          quote: 'أحتاج نتائج، لا وعود.'
        },
        {
          name: 'سارة',
          role: 'Marketing Director',
          image: 'https://images.unsplash.com/photo-1573496359-7013c53bca63?q=80&w=400&auto=format&fit=crop',
          details: 'تحتاج أدوات لإثبات ROI للإدارة. تبحث عن الدقة.',
          quote: 'البيانات هي لغتي.'
        }
      ],
      pageNumber: 5
    }
  },
  // Sheet 4: Competitors & SWOT
  {
    id: 4,
    front: {
      id: 'competitors',
      type: 'STANDARD',
      title: 'تحليل المنافسين',
      content: 'السوق مزدحم بوكالات "الإبداع"، لكنه يفتقر للوكالات القائمة على "البيانات".\n\nالمنافس أ: يركز على الإنتاج البصري (نقاط ضعف: ضعف التحليل).\nالمنافس ب: وكالات تقليدية تحاول التحول الرقمي (نقاط ضعف: بطء الحركة).\n\nXFUSE تتميز بالرشاقة (Agility) والاعتماد الكلي على AI.',
      image: 'https://images.unsplash.com/photo-1553877607-4c4784a9e224?q=80&w=800&auto=format&fit=crop',
      pageNumber: 6
    },
    back: {
      id: 'swot',
      type: 'SWOT',
      title: 'التحليل الرباعي (SWOT)',
      swot: [
        { type: 'S', title: 'Strengths', points: ['فريق متخصص في AI', 'هوية بصرية قوية', 'منهجية تعتمد على البيانات'] },
        { type: 'W', title: 'Weaknesses', points: ['علامة تجارية جديدة', 'موارد محدودة في البداية'] },
        { type: 'O', title: 'Opportunities', points: ['التوسع للخليج', 'نقص الخبراء في السوق', 'أدوات الأتمتة'] },
        { type: 'T', title: 'Threats', points: ['دخول شركات عالمية', 'تغيرات الخوارزميات', 'حرب الأسعار'] }
      ],
      pageNumber: 7
    }
  },
  // Sheet 5: KPIs & 30-Day Plan
  {
    id: 5,
    front: {
      id: 'kpis',
      type: 'STATS',
      title: 'أهداف الحملة و KPIs',
      subtitle: 'مؤشرات الأداء الرئيسية',
      stats: [
        { label: 'Leads Generated', value: '150+', icon: 'Target', color: 'text-xfuse-pink' },
        { label: 'Conversion Rate', value: '3.5%', icon: 'TrendingUp', color: 'text-xfuse-cyan' },
        { label: 'Cost Per Lead', value: '< $15', icon: 'DollarSign', color: 'text-green-400' },
        { label: 'Brand Reach', value: '50k', icon: 'Globe', color: 'text-xfuse-accent' }
      ],
      pageNumber: 8
    },
    back: {
      id: 'plan',
      type: 'TIMELINE',
      title: 'خطة الـ 30 يوم',
      subtitle: 'خارطة طريق للإطلاق',
      timeline: [
        { week: 'الأسبوع 1', title: 'الإطلاق', desc: 'إطلاق الموقع والهوية البصرية.' },
        { week: 'الأسبوع 2', title: 'الوعي', desc: 'حملة LinkedIn Thought Leadership.' },
        { week: 'الأسبوع 3', title: 'المحتوى', desc: 'نشر تقرير حالة السوق 2025.' },
        { week: 'الأسبوع 4', title: 'النمو', desc: 'إطلاق حملة Retargeting.' }
      ],
      pageNumber: 9
    }
  },
  // Sheet 6: Recommendations & CTA
  {
    id: 6,
    front: {
      id: 'recommendations',
      type: 'STANDARD',
      title: 'التوصيات النهائية',
      content: '1. التركيز الكامل على قطاع الـ B2B Tech في المرحلة الأولى.\n2. استخدام المحتوى التعليمي (Educational Content) لبناء الثقة.\n3. استثمار 60% من الميزانية في LinkedIn Ads.\n4. بناء مجتمع رقمي صغير حول العلامة التجارية.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
      pageNumber: 10
    },
    back: {
      id: 'contact',
      type: 'CONTACT',
      title: 'ابدأ رحلتك',
      content: 'المستقبل لا ينتظر. دعنا نبني استراتيجيتك القادمة معاً.',
      pageNumber: 11
    }
  }
];
