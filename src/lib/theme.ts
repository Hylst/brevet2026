import { SubjectId } from '../types';

export interface SubjectTheme {
  id: SubjectId;
  colors: {
    primary: string;      // Icons, Highlights
    background: string;   // Card backgrounds (light)
    border: string;       // Borders
    text: string;         // Headings
    gradient: string;     // Hero backgrounds
    prose: string;        // Markdown prose class
  };
}

const THEMES: Record<string, SubjectTheme['colors']> = {
  maths: {
    primary: 'text-blue-400',
    background: 'bg-blue-500', // Used for semantic mapping, actual class construction handles opacity
    border: 'border-blue-500',
    text: 'text-blue-400',
    gradient: 'from-blue-600 to-indigo-700',
    prose: 'prose-headings:text-blue-400 prose-strong:text-blue-300'
  },
  histoire: {
    primary: 'text-amber-400',
    background: 'bg-amber-600',
    border: 'border-amber-600',
    text: 'text-amber-400',
    gradient: 'from-amber-600 to-orange-700',
    prose: 'prose-headings:text-amber-400 prose-strong:text-amber-300'
  },
  geo: {
    primary: 'text-teal-400',
    background: 'bg-teal-600',
    border: 'border-teal-600',
    text: 'text-teal-400',
    gradient: 'from-teal-600 to-cyan-700',
    prose: 'prose-headings:text-teal-400 prose-strong:text-teal-300'
  },
  emc: {
    primary: 'text-sky-400',
    background: 'bg-sky-600',
    border: 'border-sky-600',
    text: 'text-sky-400',
    gradient: 'from-sky-600 to-blue-700',
    prose: 'prose-headings:text-sky-400 prose-strong:text-sky-300'
  },
  francais: {
    primary: 'text-rose-400',
    background: 'bg-rose-600',
    border: 'border-rose-600',
    text: 'text-rose-400',
    gradient: 'from-rose-600 to-pink-700',
    prose: 'prose-headings:text-rose-400 prose-strong:text-rose-300'
  },
  physique: {
    primary: 'text-violet-400',
    background: 'bg-violet-600',
    border: 'border-violet-600',
    text: 'text-violet-400',
    gradient: 'from-violet-600 to-purple-700',
    prose: 'prose-headings:text-violet-400 prose-strong:text-violet-300'
  },
  svt: {
    primary: 'text-emerald-400',
    background: 'bg-emerald-600',
    border: 'border-emerald-600',
    text: 'text-emerald-400',
    gradient: 'from-emerald-600 to-green-700',
    prose: 'prose-headings:text-emerald-400 prose-strong:text-emerald-300'
  },
  techno: {
    primary: 'text-slate-400',
    background: 'bg-slate-600',
    border: 'border-slate-600',
    text: 'text-slate-400',
    gradient: 'from-slate-600 to-slate-800',
    prose: 'prose-headings:text-slate-400 prose-strong:text-slate-300'
  },
  oral: {
    primary: 'text-fuchsia-400',
    background: 'bg-fuchsia-600',
    border: 'border-fuchsia-600',
    text: 'text-fuchsia-400',
    gradient: 'from-fuchsia-600 to-purple-700',
    prose: 'prose-headings:text-fuchsia-400 prose-strong:text-fuchsia-300'
  },
  methodologie: {
    primary: 'text-cyan-400',
    background: 'bg-cyan-600',
    border: 'border-cyan-600',
    text: 'text-cyan-400',
    gradient: 'from-cyan-600 to-blue-700',
    prose: 'prose-headings:text-cyan-400 prose-strong:text-cyan-300'
  },
  default: {
    primary: 'text-muted',
    background: 'bg-muted',
    border: 'border-border',
    text: 'text-foreground',
    gradient: 'from-surface to-surface-hover',
    prose: 'prose-headings:text-foreground'
  }
};

export const getTheme = (subjectId: string) => {
  return THEMES[subjectId] || THEMES.default;
};