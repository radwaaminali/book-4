
export type SectionType = 
  | 'COVER'
  | 'INTRO'
  | 'STATS' 
  | 'CARDS' 
  | 'PERSONAS' 
  | 'TABLE' 
  | 'SWOT' 
  | 'TIMELINE' 
  | 'GALLERY'
  | 'CONTACT'
  | 'STANDARD';

export interface StatItem {
  label: string;
  value: string;
  icon?: string;
  color?: string;
}

export interface PersonaItem {
  name: string;
  role: string;
  image: string;
  details: string;
  quote?: string;
}

export interface TimelineItem {
  week: string;
  title: string;
  desc: string;
}

export interface SwotItem {
  type: 'S' | 'W' | 'O' | 'T';
  title: string;
  points: string[];
}

export interface PageData {
  id: string;
  type: SectionType;
  title: string;
  subtitle?: string;
  content?: string;
  pageNumber?: number;
  image?: string;
  stats?: StatItem[];
  personas?: PersonaItem[];
  timeline?: TimelineItem[];
  swot?: SwotItem[];
}

export interface BookSheetData {
  id: number;
  front: PageData;
  back: PageData;
}
