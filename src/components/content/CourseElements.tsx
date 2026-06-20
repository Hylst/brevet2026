import React, { useState, useEffect, useMemo } from 'react';
import { Info, AlertTriangle, Lightbulb, BookOpen, Calculator, ListOrdered, CheckCircle, PenTool, Check } from 'lucide-react';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { useUIState } from '../../hooks/useUIState';

export const MarkdownContent: React.FC<{ content: React.ReactNode }> = ({ content }) => {
  if (typeof content === 'string') {
    return (
      <span className="markdown-inline">
        <ReactMarkdown 
          remarkPlugins={[remarkMath]} 
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          components={{ p: React.Fragment }}
        >
          {content}
        </ReactMarkdown>
      </span>
    );
  }
  return <>{content}</>;
};


import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';

// ---------------------------------------------------------------------------
// CONCEPT CARD (For illustrations with icons)
// ---------------------------------------------------------------------------
interface ConceptCardProps {
  title: string;
  icon?: string;
  description: string;
  theme?: 'primary' | 'success' | 'warning' | 'info';
}

export const ConceptCard: React.FC<ConceptCardProps> = ({ title, icon = 'BookOpen', description, theme = 'primary' }) => {
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.BookOpen;
  
  const themeStyles = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    info: 'bg-info/10 text-info border-info/20',
  };

  const currentStyle = themeStyles[theme] || themeStyles.primary;

  return (
    <div className={`p-6 rounded-2xl border ${currentStyle} my-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left shadow-sm`}>
      <div className={`p-4 rounded-full bg-background/50 border ${currentStyle} shadow-sm shrink-0`}>
        <IconComponent size={32} strokeWidth={1.5} />
      </div>
      <div>
        <h4 className="text-lg font-bold mb-2 m-0 text-foreground">{title}</h4>
        <div className="text-sm opacity-90 m-0 leading-relaxed text-foreground/80">
           <MarkdownContent content={description} />
        </div>
      </div>
    </div>
  );
};

interface BrevetExerciseProps {
  title?: string;
  question: React.ReactNode;
  draft: React.ReactNode;
  solution: React.ReactNode;
  className?: string;
}

export const BrevetExercise: React.FC<BrevetExerciseProps> = ({ title = "Exercice Type Brevet", question, draft, solution, className }) => {
  return (
    <div className={clsx("rounded-2xl border border-primary/30 bg-surface overflow-hidden my-8 shadow-lg", className)}>
      <div className="bg-primary/10 px-5 py-4 border-b border-primary/20 flex items-center gap-3">
        <PenTool className="w-6 h-6 text-primary" />
        <h4 className="font-bold text-primary text-lg">{title}</h4>
      </div>
      <div className="p-5 space-y-6">
        <div>
          <h5 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">L'énoncé</h5>
          <div className="text-foreground bg-background/50 p-4 rounded-xl border border-border">
            <MarkdownContent content={question} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-xs font-bold text-warning uppercase tracking-wider mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" /> Au brouillon
            </h5>
            <div className="text-sm text-muted bg-warning/5 p-4 rounded-xl border border-warning/20 h-full">
              <MarkdownContent content={draft} />
            </div>
          </div>
          <div>
            <h5 className="text-xs font-bold text-success uppercase tracking-wider mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Rédaction finale
            </h5>
            <div className="text-sm text-foreground bg-success/5 p-4 rounded-xl border border-success/20 h-full">
              <MarkdownContent content={solution} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// CALLOUT (Pour les remarques, astuces, attentions)
// ---------------------------------------------------------------------------
export type CalloutType = 'info' | 'warning' | 'tip' | 'success';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const calloutStyles: Record<CalloutType, { bg: string; border: string; text: string; icon: React.ElementType }> = {
  info: { bg: 'bg-primary/10', border: 'border-primary/50', text: 'text-primary', icon: Info },
  warning: { bg: 'bg-warning/10', border: 'border-warning/50', text: 'text-warning', icon: AlertTriangle },
  tip: { bg: 'bg-warning/10', border: 'border-warning/50', text: 'text-warning', icon: Lightbulb },
  success: { bg: 'bg-success/10', border: 'border-success/50', text: 'text-success', icon: CheckCircle },
};

export const Callout: React.FC<CalloutProps> = ({ type = 'info', title, children, className }) => {
  const style = calloutStyles[type];
  const Icon = style.icon;

  return (
    <div className={clsx("p-4 rounded-xl border-l-4 my-4 flex gap-3", style.bg, style.border, className)}>
      <Icon className={clsx("w-6 h-6 shrink-0", style.text)} />
      <div>
        {title && <h4 className={clsx("font-bold mb-1", style.text)}><MarkdownContent content={title} /></h4>}
        <div className="text-foreground text-sm leading-relaxed">
          {React.Children.map(children, child => 
            typeof child === 'string' ? <MarkdownContent content={child} /> : child
          )}
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// DEFINITION BOX (Pour le vocabulaire)
// ---------------------------------------------------------------------------
interface DefinitionBoxProps {
  term: string;
  children: React.ReactNode;
  className?: string;
}

export const DefinitionBox: React.FC<DefinitionBoxProps> = ({ term, children, className }) => {
  return (
    <div className={clsx("relative p-5 rounded-2xl bg-surface/50 border border-border my-6", className)}>
      <div className="absolute -top-3 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg shadow-primary/20">
        <BookOpen className="w-3 h-3" />
        DÉFINITION
      </div>
      <h4 className="text-lg font-bold text-primary mb-2 mt-1"><MarkdownContent content={term} /></h4>
      <div className="text-muted text-sm leading-relaxed">
        {React.Children.map(children, child => 
          typeof child === 'string' ? <MarkdownContent content={child} /> : child
        )}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// FORMULA BOX (Pour les théorèmes et formules)
// ---------------------------------------------------------------------------
interface FormulaBoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormulaBox: React.FC<FormulaBoxProps> = ({ title, children, className }) => {
  return (
    <div className={clsx("p-6 rounded-2xl bg-gradient-to-br from-surface to-background border border-border my-6 text-center relative overflow-hidden shadow-xl", className)}>
      <div className="absolute -right-4 -top-4 opacity-5">
        <Calculator className="w-32 h-32" />
      </div>
      {title && <h4 className="text-sm font-bold text-muted uppercase tracking-widest mb-4"><MarkdownContent content={title} /></h4>}
      <div className="text-xl md:text-2xl font-serif text-foreground relative z-10">
        {React.Children.map(children, child => 
          typeof child === 'string' ? <MarkdownContent content={child} /> : child
        )}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// BREVET CHECKLIST (Pour résumer les acquis en fin de chapitre)
// ---------------------------------------------------------------------------
interface BrevetChecklistProps {
  items: string[];
  className?: string;
}

// Simple string hash function for generating a unique ID based on the items
const hashString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
};

import { useLessonProgress } from '../../contexts/LessonProgressContext';

export const BrevetChecklist: React.FC<BrevetChecklistProps> = ({ items, className }) => {
  const checklistId = `checklist_${hashString(items.join(''))}`;

  const [checked, setChecked] = useUIState<Record<number, boolean>>(checklistId, {});
  const progressCtx = useLessonProgress();

  const allChecked = useMemo(() => {
    if (!items || items.length === 0) return true;
    return items.every((_, idx) => checked[idx]);
  }, [checked, items]);

  useEffect(() => {
    if (progressCtx) {
      progressCtx.registerRequirement(checklistId);
    }
  }, [checklistId, progressCtx]);

  useEffect(() => {
    if (progressCtx) {
      progressCtx.markCompleted(checklistId, allChecked);
    }
  }, [allChecked, checklistId, progressCtx]);

  const allOthersCompleted = useMemo(() => {
    if (!progressCtx) return true;
    const reqs = progressCtx.requirements;
    for (const [id, isCompleted] of Object.entries(reqs)) {
      if (id !== checklistId && !isCompleted) return false;
    }
    return true;
  }, [progressCtx?.requirements, checklistId]);

  const toggleItem = (idx: number) => {
    if (!allOthersCompleted) return;
    setChecked(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className={clsx("rounded-2xl border border-primary/30 bg-primary/5 overflow-hidden my-8", className, !allOthersCompleted && "opacity-75")}>
      <div className="bg-primary/20 px-5 py-4 border-b border-primary/30 flex items-center gap-3">
        <CheckCircle className="w-6 h-6 text-primary" />
        <h4 className="font-bold text-primary text-lg">Checklist du Brevet</h4>
      </div>
      <div className="p-5">
        <p className="text-sm text-muted mb-4 italic">
          {allOthersCompleted 
            ? "Avant de passer à la suite, assure-toi de savoir :" 
            : "⚠️ Complète d'abord les exercices et quiz de la fiche avant de cocher ces critères."}
        </p>
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li 
              key={idx} 
              className={clsx("flex items-start gap-3 text-foreground group", allOthersCompleted ? "cursor-pointer" : "cursor-not-allowed")}
              onClick={() => toggleItem(idx)}
            >
              <div className={clsx(
                "mt-0.5 shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
                !allOthersCompleted && "opacity-50",
                checked[idx] 
                  ? "bg-primary border-primary text-white" 
                  : "border-primary/50 bg-background/50 group-hover:border-primary"
              )}>
                {checked[idx] && <Check className="w-3.5 h-3.5" />}
              </div>
              <div className={clsx("transition-all duration-200", checked[idx] && "opacity-50 line-through")}>
                <MarkdownContent content={item} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
interface MethodBoxProps {
  title: string;
  steps: React.ReactNode[];
  example?: React.ReactNode;
  className?: string;
}

export const MethodBox: React.FC<MethodBoxProps> = ({ title, steps, example, className }) => {
  return (
    <div className={clsx("rounded-2xl border border-success/20 bg-success/5 overflow-hidden my-6", className)}>
      <div className="bg-success/10 px-5 py-3 border-b border-success/20 flex items-center gap-2">
        <ListOrdered className="w-5 h-5 text-success" />
        <h4 className="font-bold text-success uppercase tracking-wide text-sm">{title}</h4>
      </div>
      <div className="p-5">
        <ol className="space-y-4">
          {steps.map((step, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-foreground">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-success/20 text-success font-bold text-xs shrink-0">
                {idx + 1}
              </span>
              <div className="pt-0.5"><MarkdownContent content={step} /></div>
            </li>
          ))}
        </ol>
        {example && (
          <div className="mt-5 pt-4 border-t border-success/20">
            <h5 className="text-xs font-bold text-muted uppercase mb-2">Exemple d'application</h5>
            <div className="text-sm text-muted bg-background/50 p-3 rounded-xl border border-border">
              <MarkdownContent content={example} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
