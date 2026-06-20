import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Timer, BookOpen } from 'lucide-react';
import clsx from 'clsx';
import { Button } from '../ui/Button';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface QuizQuestionProps {
  question: any;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | null;
  isAnswered: boolean;
  timeLeft: number | null;
  theme: { background: string; text: string; border: string };
  onOptionClick: (index: number) => void;
  onNext: () => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  isAnswered,
  timeLeft,
  theme,
  onOptionClick,
  onNext
}) => {
  return (
    <div className="flex-1 flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col"
        >
            {question.originalSubjectName && (
                <div className="mb-4 inline-flex">
                    <span 
                      className={clsx(
                          "text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full",
                          question.originalSubjectTheme ? `${question.originalSubjectTheme.text} ${question.originalSubjectTheme.background}/10 border border-current/20` : "text-muted bg-surface border border-border"
                      )}
                    >
                        {question.originalSubjectName}
                    </span>
                </div>
            )}
            <div className="text-xl md:text-2xl font-bold text-foreground mb-8 leading-relaxed prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{question.text}</ReactMarkdown>
            </div>

            <div className="space-y-3 flex-1">
                {question.options.map((option: string, idx: number) => {
                    let stateClass = "bg-surface-hover/50 border-border-hover text-muted hover:border-subtle hover:bg-surface-hover";
                    
                    if (isAnswered) {
                        if (idx === question.correctAnswer) {
                            stateClass = "bg-success/10 border-success text-success ring-1 ring-success/50";
                        } else if (idx === selectedOption) {
                            stateClass = "bg-danger/10 border-danger text-danger";
                        } else {
                            stateClass = "opacity-50 grayscale bg-surface border-border";
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => onOptionClick(idx)}
                            disabled={isAnswered}
                            aria-pressed={selectedOption === idx}
                            aria-disabled={isAnswered}
                            className={clsx(
                                "w-full p-5 text-left rounded-2xl border-2 transition-all duration-200 flex justify-between items-start gap-3 group relative",
                                stateClass
                            )}
                        >
                            <span className="font-medium relative z-10 flex-1 prose prose-sm dark:prose-invert max-w-none prose-p:my-0">
                                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{option}</ReactMarkdown>
                            </span>
                            {isAnswered && idx === question.correctAnswer && <Check className="w-5 h-5 relative z-10 shrink-0 ml-3" />}
                        </button>
                    );
                })}
            </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 min-h-[120px]" aria-live="polite">
          <AnimatePresence>
              {isAnswered && (
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                  >
                      {timeLeft === 0 && (
                          <div className="text-danger text-sm font-bold flex items-center gap-2 mb-2">
                              <Timer className="w-4 h-4" /> Temps écoulé !
                          </div>
                      )}
                      {question.explanation && (
                          <div className={clsx(
                             "p-5 rounded-2xl border-2 bg-surface shadow-sm leading-relaxed text-slate-200",
                             theme.border
                          )}>
                              <div className={clsx("flex items-center gap-2 mb-2 font-bold text-xs uppercase tracking-wider", theme.text)}>
                                  <BookOpen className="w-3.5 h-3.5" />
                                  Explication
                              </div>
                              <div className="prose prose-sm dark:prose-invert max-w-none">
                                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{question.explanation}</ReactMarkdown>
                              </div>
                          </div>
                      )}
                      <Button 
                          fullWidth 
                          size="lg"
                          themeColorClass={theme.background}
                          onClick={onNext}
                          rightIcon={<ArrowRight className="w-5 h-5" />}
                      >
                          {currentIndex === totalQuestions - 1 ? 'Résultats' : 'Suivant'}
                      </Button>
                  </motion.div>
              )}
          </AnimatePresence>
      </div>
    </div>
  );
};
