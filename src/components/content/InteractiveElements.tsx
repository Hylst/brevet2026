import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, RotateCw, HelpCircle, Clock, User } from 'lucide-react';
import clsx from 'clsx';
import { useGamificationStore } from '../../store/useGamificationStore';
import { useUIState } from '../../hooks/useUIState';

import { MarkdownContent } from './CourseElements';

// ---------------------------------------------------------------------------
// TIMELINE (Frise chronologique)
// ---------------------------------------------------------------------------
interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ events, className }) => {
  return (
    <div className={clsx("my-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent", className)}>
      {events.map((event, idx) => (
        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-primary text-primary-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
            <Clock className="w-4 h-4" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface p-4 rounded-xl border border-border shadow-md">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-bold text-foreground">{event.title}</h4>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{event.date}</span>
            </div>
            {event.description && <div className="text-sm text-muted mt-2"><MarkdownContent content={event.description} /></div>}
          </div>
        </div>
      ))}
    </div>
  );
};

// ---------------------------------------------------------------------------
// CHARACTER CARD (Fiche personnage historique)
// ---------------------------------------------------------------------------
interface CharacterCardProps {
  name: string;
  dates: string;
  role: string;
  description: string;
  imageUrl?: string;
  className?: string;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ name, dates, role, description, imageUrl, className }) => {
  return (
    <div className={clsx("flex flex-col sm:flex-row gap-4 p-5 rounded-2xl bg-surface border border-border my-6 shadow-md", className)}>
      <div className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-background border border-border flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        ) : (
          <User className="w-12 h-12 text-muted" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <h4 className="text-xl font-bold text-foreground">{name}</h4>
          <span className="text-xs font-bold text-muted bg-background px-2 py-1 rounded-md border border-border">{dates}</span>
        </div>
        <h5 className="text-sm font-semibold text-primary mb-3">{role}</h5>
        <div className="text-sm text-muted leading-relaxed"><MarkdownContent content={description} /></div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MINI QUIZ (QCM intégré directement dans le cours)
// ---------------------------------------------------------------------------
interface MiniQuizProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  subjectId?: string;
  chapterId?: string;
  className?: string;
}

// Simple string hash function for generating a unique ID based on the question
import { useScoreStore } from '../../store/useScoreStore';

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

export const MiniQuiz: React.FC<MiniQuizProps> = ({ question, options, correctAnswer, explanation, subjectId = 'unknown', chapterId = 'unknown', className }) => {
  const quizId = `miniquiz_${hashString(question)}`;
  const progressCtx = useLessonProgress();
  
  const [selected, setSelected] = useUIState<number | null>(quizId, null);
  const isAnswered = selected !== null;
  
  React.useEffect(() => {
    if (progressCtx) {
      progressCtx.registerRequirement(quizId);
    }
  }, [quizId, progressCtx]);

  React.useEffect(() => {
    if (progressCtx) {
      progressCtx.markCompleted(quizId, isAnswered);
    }
  }, [isAnswered, quizId, progressCtx]);

  const addXP = useGamificationStore((state) => state.addXP);
  const addScore = useScoreStore((state) => state.addScore);

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
    
    const isCorrect = idx === correctAnswer;
    if (isCorrect) {
      addXP(10); // Award 10 XP for a correct answer in a mini-quiz
    }
    
    addScore(quizId, subjectId, chapterId, isCorrect);
  };

  const reset = () => {
    setSelected(null);
  };

  return (
    <div className={clsx("bg-surface/80 border border-border rounded-2xl p-5 my-6 shadow-lg", className)}>
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-primary/20 p-2 rounded-lg shrink-0">
          <HelpCircle className="w-5 h-5 text-primary" />
        </div>
        <h4 className="font-bold text-foreground text-lg leading-tight pt-1"><MarkdownContent content={question} /></h4>
      </div>

      <div className="space-y-2">
        {options.map((option, idx) => {
          let stateClass = "bg-background/50 border-border text-muted hover:border-border-hover hover:bg-surface";
          
          if (isAnswered) {
            if (idx === correctAnswer) {
              stateClass = "bg-success/20 border-success text-success";
            } else if (idx === selected) {
              stateClass = "bg-danger/20 border-danger text-danger";
            } else {
              stateClass = "opacity-50 grayscale bg-background border-border";
            }
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              aria-pressed={selected === idx}
              aria-disabled={isAnswered}
              className={clsx(
                "w-full p-3 text-left rounded-xl border transition-all duration-200 flex justify-between items-center text-sm font-medium",
                stateClass
              )}
            >
              <span><MarkdownContent content={option} /></span>
              {isAnswered && idx === correctAnswer && <Check className="w-4 h-4 shrink-0" />}
              {isAnswered && idx === selected && idx !== correctAnswer && <X className="w-4 h-4 shrink-0" />}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="overflow-hidden"
            aria-live="polite"
          >
            <div className="mt-4 pt-4 border-t border-border">
              <div className={clsx(
                "text-sm font-bold mb-2",
                selected === correctAnswer ? "text-success" : "text-danger"
              )}>
                {selected === correctAnswer ? "✨ Bonne réponse !" : "❌ Mauvaise réponse."}
              </div>
              {explanation && (
                <div className="text-sm text-muted leading-relaxed mb-4">
                  <MarkdownContent content={explanation} />
                </div>
              )}
              <button 
                type="button"
                onClick={reset}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-subtle hover:text-muted transition-colors"
              >
                <RotateCw className="w-3 h-3" /> Réessayer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ---------------------------------------------------------------------------
// FLASHCARD (Carte recto/verso pour mémorisation)
// ---------------------------------------------------------------------------
interface FlashcardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export const Flashcard: React.FC<FlashcardProps> = ({ front, back, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button 
      type="button"
      className={clsx("relative w-full h-48 cursor-pointer group perspective-1000 my-6 text-left", className)}
      onClick={() => setIsFlipped(!isFlipped)}
      aria-expanded={isFlipped}
      aria-label="Flashcard"
    >
      <motion.div
        className="w-full h-full relative preserve-3d duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg border border-white/10">
          <div className="text-primary-foreground font-bold text-lg md:text-xl">
            <MarkdownContent content={front} />
          </div>
          <div className="absolute bottom-4 text-primary-foreground/50 text-xs font-medium uppercase tracking-widest flex items-center gap-1">
            <RotateCw className="w-3 h-3" /> Tap pour retourner
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-surface rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg border border-border"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="text-foreground text-base md:text-lg">
            <MarkdownContent content={back} />
          </div>
        </div>
      </motion.div>
    </button>
  );
};
