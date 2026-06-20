import React, { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../data/content';
import { markSheetRead, getProgress } from '../services/storageService';
import { getTheme } from '../lib/theme';
import { ID_MIGRATION_MAP } from '../constants';
import { useGamificationStore } from '../store/useGamificationStore';
import { LessonContent } from '../components/LessonContent';
import { PageTransition } from '../components/PageTransition';
import { FeedbackForm } from '../components/ui/FeedbackForm';
import { ChevronLeft, CheckCircle, BookOpen, Check, ArrowDown, ArrowUp, AlertCircle } from 'lucide-react';
import clsx from 'clsx';
import confetti from 'canvas-confetti';
import { SEO } from '../components/ui/SEO';
import { LessonProgressContext } from '../contexts/LessonProgressContext';

// Cache bust: 2
export const RevisionSheet: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Gamification tracking requirements
  const [requirements, setRequirements] = useState<Record<string, boolean>>({});

  const registerRequirement = useCallback((id: string) => {
    setRequirements(prev => {
      if (prev[id] !== undefined) return prev;
      return { ...prev, [id]: false };
    });
  }, []);

  const markRequirementCompleted = useCallback((id: string, completed: boolean) => {
    setRequirements(prev => {
      if (prev[id] === completed) return prev;
      return { ...prev, [id]: completed };
    });
  }, []);

  const allRequirementsMet = Object.values(requirements).every(Boolean);

  const context = useMemo(() => {
    if (!topicId) return null;
    const mappedId = ID_MIGRATION_MAP[topicId] || topicId;

    for (const sub of SUBJECTS) {
      let t = sub.topics.find(t => t.id === mappedId);
      if (t) return { topic: t, subject: sub };
    }
    return null;
  }, [topicId]);

  const progressContextValue = useMemo(() => ({
    registerRequirement,
    markCompleted: markRequirementCompleted,
    requirements
  }), [registerRequirement, markRequirementCompleted, requirements]);


  const { addXP, awardBadge } = useGamificationStore();

  useEffect(() => {
    if (context && context.topic.id !== topicId) {
      navigate(`/sheet/${context.topic.id}`, { replace: true });
      return;
    }

    // Reset requirements when loading a new topic
    setRequirements({});
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (topicId) {
      const progress = getProgress();
      if (progress.completedTopics.includes(topicId)) {
        setIsCompleted(true);
      } else {
        setIsCompleted(false);
      }
    }
  }, [topicId, context, navigate]);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleComplete = () => {
    if (!allRequirementsMet) return; // Prevent completion if not all requirements are met
    if (topicId && !isCompleted) {
      const isNew = markSheetRead(topicId);
      if (isNew) {
        addXP(20);
        awardBadge('first_lesson');
        setIsCompleted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#22c55e', '#3b82f6', '#eab308']
        });
      }
    }
  };

  if (!context || !context.topic.content) {
    return (
      <div className="p-8 text-center text-slate-400">
        <h1>Fiche introuvable</h1>
      </div>
    );
  }

  const { topic, subject } = context;
  const theme = getTheme(subject.id);

  return (
    <PageTransition className="min-h-screen bg-background pb-safe">
      <SEO 
        title={`${topic.title} — ${subject.name} | Brevet 2026`} 
        description={topic.description || `Fiche de révision sur ${topic.title} en ${subject.name} pour le Brevet des Collèges 2026.`}
        url={`https://hylst.fr/brevet2026/sheet/${topic.id}`}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          name: topic.title,
          description: topic.description,
          url: `https://hylst.fr/brevet2026/sheet/${topic.id}`,
          inLanguage: 'fr',
          isAccessibleForFree: true,
          educationalLevel: 'Collège — 3ème',
          learningResourceType: 'Fiche de révision',
          teaches: topic.title,
          educationalAlignment: {
            '@type': 'AlignmentObject',
            alignmentType: 'educationalSubject',
            targetName: subject.name
          },
          author: { '@type': 'Person', name: 'Geoffroy Streit', url: 'https://hylst.fr' }
        }}
      />
      {/* Sticky Header */}
      <div className={clsx("sticky top-0 backdrop-blur-2xl border-b border-border px-4 py-3 flex items-center gap-4 z-50 transition-all bg-background/80")}>
        <button 
          onClick={() => navigate(-1)} 
          aria-label="Retour"
          className={clsx("p-2 -ml-2 rounded-full hover:bg-surface-hover transition-colors", theme.text)}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <BookOpen className={clsx("w-3.5 h-3.5", theme.text)} />
              <p className={clsx("text-xs font-bold uppercase tracking-wider", theme.text)}>{subject.name}</p>
            </div>
            <h1 className="font-bold text-foreground truncate text-base sm:text-lg leading-tight">{topic.title}</h1>
        </div>
      </div>

      <div className="px-5 py-8 max-w-3xl mx-auto">
        {/* Title Section */}
        <div className="mb-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border mb-4">
            <span className={clsx("w-2 h-2 rounded-full", theme.background)}></span>
            <span className="text-xs font-medium text-muted">{topic.category || 'Général'}</span>
          </div>
          
          <button 
            onClick={scrollToBottom}
            className="absolute top-0 right-0 p-2 text-muted hover:text-foreground transition-colors opacity-60 hover:opacity-100 flex items-center gap-1.5 text-xs font-medium rounded-lg hover:bg-surface border border-transparent hover:border-border"
            title="Aller tout en bas"
          >
            <ArrowDown className="w-4 h-4" />
            <span className="hidden sm:inline">Aller en bas</span>
          </button>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4 pr-12">
            {topic.title}
          </h1>
          <p className="text-lg text-muted font-medium leading-relaxed">
            {topic.description}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-border via-border-hover to-border mb-10"></div>

        <LessonProgressContext.Provider value={progressContextValue}>
          <LessonContent content={topic.content} subjectId={subject.id} chapterId={topic.id} />
        </LessonProgressContext.Provider>


        {/* Completion Section */}
        <div className="mt-20 mb-12">
          {!isCompleted ? (
            <div className="flex flex-col items-center justify-center p-8 border border-border bg-surface/50 rounded-3xl text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">As-tu tout compris ?</h3>
              <p className="text-muted mb-6 max-w-md">Valide cette fiche pour gagner de l'XP et suivre ta progression.</p>
              {!allRequirementsMet && (
                <div className="mb-4 flex items-center gap-2 text-warning bg-warning/10 px-4 py-2 rounded-lg border border-warning/20">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Certains exercices ou quiz de la fiche ne sont pas terminés.</span>
                </div>
              )}
              <button
                onClick={handleComplete}
                disabled={!allRequirementsMet}
                className={clsx(
                  "px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 shadow-xl flex items-center gap-2",
                  !allRequirementsMet ? "bg-muted cursor-not-allowed opacity-50" : clsx(theme.background, "hover:scale-105 hover:opacity-90")
                )}
              >
                <Check className="w-5 h-5" />
                Marquer comme terminé (+20 XP)
              </button>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-8 sm:p-10 text-center shadow-2xl animate-in fade-in zoom-in duration-500">
                <div className={clsx("absolute inset-0 opacity-10 bg-gradient-to-br", theme.gradient)}></div>
                <div className="relative flex flex-col items-center gap-4">
                    <div className={clsx("w-16 h-16 rounded-full flex items-center justify-center bg-background shadow-inner border border-border", theme.text)}>
                        <CheckCircle className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="font-extrabold text-2xl text-foreground mb-2">Fiche terminée !</h3>
                        <p className="text-base text-muted font-medium max-w-sm mx-auto">
                          Excellent travail. Ce module a été ajouté à ta progression globale.
                        </p>
                    </div>
                    <button 
                      onClick={() => navigate(-1)}
                      className={clsx(
                        "mt-4 px-8 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg",
                        theme.background,
                        "hover:opacity-90"
                      )}
                    >
                      Continuer les révisions
                    </button>
                </div>
            </div>
          )}
        </div>
        
        {/* Feedback Section */}
        <FeedbackForm subjectId={subject.id} chapterId={topic.id} />

        <div className="flex justify-center mt-8 mb-4 border-t border-border pt-8" ref={bottomRef}>
          <button 
            onClick={scrollToTop}
            className="px-4 py-2 text-muted hover:text-foreground transition-colors opacity-60 hover:opacity-100 flex items-center gap-2 text-sm font-medium rounded-xl hover:bg-surface border border-transparent hover:border-border"
          >
            <ArrowUp className="w-4 h-4" />
            Remonter en haut
          </button>
        </div>
      </div>
    </PageTransition>
  );
};