import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubjectById } from '../data/content';
import { getProgress, getDueReviewItems } from '../services/storageService';
import { ChevronLeft, PlayCircle, FileText, CheckCircle2, BookOpen, RefreshCw, BrainCircuit } from 'lucide-react';
import clsx from 'clsx';
import { Topic } from '../types';
import { Card } from '../components/ui/Card';
import { getTheme } from '../lib/theme';
import { PageTransition } from '../components/PageTransition';
import { Mascot } from '../components/ui/Mascot';
import { SEO } from '../components/ui/SEO';

export const SubjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const rawSubject = getSubjectById(id || '');
  const progress = getProgress();

  const subject = useMemo(() => {
    if (!rawSubject) return null;
    return {
      ...rawSubject,
      topics: rawSubject.topics.filter(t => t.level === undefined || t.level === '3eme')
    };
  }, [rawSubject]);

  // Group topics by category
  const groupedTopics = useMemo<Record<string, Topic[]>>(() => {
    if (!subject) return {};
    const groups: Record<string, Topic[]> = {};
    
    subject.topics.forEach(topic => {
      const cat = topic.category || 'Général';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(topic);
    });

    return groups;
  }, [subject]);

  const failedQuestionsCount = useMemo(() => {
    if (!subject || !progress.failedQuestions) return 0;
    let count = 0;
    subject.topics.forEach(topic => {
      const failed = progress.failedQuestions![topic.id];
      if (failed && failed.length > 0) {
        count += failed.length;
      }
    });
    return count;
  }, [subject, progress.failedQuestions]);

  const dueItemsCount = useMemo(() => {
    if (!subject) return 0;
    return getDueReviewItems(subject.id).length;
  }, [subject]);

  if (!subject) {
    return <div className="p-8 text-center text-muted">Matière introuvable</div>;
  }

  const theme = getTheme(subject.id);
  const totalTopics = subject.topics.length;
  const completedTopics = subject.topics.filter(t => progress.completedTopics.includes(t.id)).length;
  const progressPercent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return (
    <PageTransition className="min-h-screen bg-background pb-24">
      <SEO 
        title={`${subject.name} — Brevet 2026`} 
        description={`Réviser ${subject.name} pour le Brevet des Collèges 2026. ${totalTopics} chapitres interactifs avec quiz, fiches et schémas.`}
        url={`https://hylst.fr/brevet2026/subject/${subject.id}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: `${subject.name} — Brevet 2026`,
          description: `Réviser ${subject.name} pour le Diplôme National du Brevet 2026. ${totalTopics} chapitres avec fiches, quiz et schémas interactifs.`,
          url: `https://hylst.fr/brevet2026/subject/${subject.id}`,
          inLanguage: 'fr',
          isAccessibleForFree: true,
          educationalLevel: 'Collège — 3ème',
          provider: { '@type': 'Person', name: 'Geoffroy Streit', url: 'https://hylst.fr' },
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
          hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', inLanguage: 'fr' }
        }}
      />
      {/* Hero Header */}
      <div className={clsx("relative pt-12 pb-24 px-6 overflow-hidden bg-gradient-to-br", theme.gradient)}>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 h-64 bg-black/20 rounded-full blur-2xl pointer-events-none"></div>
        
        <button 
          onClick={() => navigate('/')}
          aria-label="Retour au tableau de bord"
          className="relative z-10 mb-6 p-2.5 bg-black/20 backdrop-blur-md rounded-full hover:bg-black/40 text-white transition-all duration-300 inline-flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
            <Mascot className="mt-2" />
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/20 backdrop-blur-md rounded-xl">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/90 font-medium tracking-wide uppercase text-sm">Programme Officiel</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight shadow-sm">
                {subject.name}
              </h1>
            </div>
          </div>
        </div>
          
        <div className="relative z-10">
          {/* Progress Bar */}
          <div className="mt-8 bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <div className="flex justify-between items-end mb-2">
              <span className="text-white/90 font-medium text-sm">Progression globale</span>
              <span className="text-white font-bold text-lg">{progressPercent}%</span>
            </div>
            <div className="h-2.5 bg-black/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <p className="text-white/70 text-xs mt-2 font-medium">
              {completedTopics} sur {totalTopics} modules terminés
            </p>
          </div>

          <button
            onMouseEnter={() => { import('../lib/audio').then(m => m.playSound('hover')).catch(() => {}) }}
            onClick={() => { import('../lib/audio').then(m => m.playSound('click')).catch(() => {}); navigate(`/book/${subject.id}`) }}
            className="mt-6 w-full py-4 px-4 bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 backdrop-blur-md rounded-2xl text-white font-bold transition-all duration-300 flex items-center justify-center gap-3 border border-white/20 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out" />
            </div>
            <BookOpen className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
            <span className="text-lg relative z-10 transition-colors duration-300">Lire le livre numérique complet</span>
            {progress.completedBooks?.includes(subject.id) && (
              <CheckCircle2 className="w-5 h-5 text-success ml-2 relative z-10 shadow-[0_0_10px_rgba(34,197,94,0.3)] rounded-full" />
            )}
          </button>

          {dueItemsCount > 0 ? (
            <button
              onMouseEnter={() => { import('../lib/audio').then(m => m.playSound('hover')).catch(() => {}) }}
              onClick={() => { import('../lib/audio').then(m => m.playSound('click')).catch(() => {}); navigate(`/quiz/review-${subject.id}`) }}
              className="mt-4 w-full py-4 px-4 bg-primary/20 hover:bg-primary/30 backdrop-blur-md rounded-2xl text-primary font-bold transition-all duration-300 flex items-center justify-center gap-3 border border-primary/30 shadow-lg hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] group relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out" />
              </div>
              <BrainCircuit className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
              <span className="text-lg relative z-10">Révision espacée ({dueItemsCount})</span>
            </button>
          ) : failedQuestionsCount > 0 ? (
            <button
              onMouseEnter={() => { import('../lib/audio').then(m => m.playSound('hover')).catch(() => {}) }}
              onClick={() => { import('../lib/audio').then(m => m.playSound('click')).catch(() => {}); navigate(`/quiz/review-${subject.id}`) }}
              className="mt-4 w-full py-4 px-4 bg-danger/20 hover:bg-danger/30 backdrop-blur-md rounded-2xl text-danger font-bold transition-all duration-300 flex items-center justify-center gap-3 border border-danger/30 shadow-lg hover:shadow-xl hover:shadow-danger/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] group relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-danger/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out" />
              </div>
              <RefreshCw className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-lg relative z-10">Réviser mes erreurs ({failedQuestionsCount})</span>
            </button>
          ) : null}
        </div>
        
        {/* Bottom fade to match background */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Topic List Grouped by Category */}
      <div className="px-4 sm:px-6 space-y-10 -mt-6 relative z-20 max-w-3xl mx-auto">
        {Object.entries(groupedTopics).map(([category, topics]: [string, Topic[]]) => (
          <div key={category} className="space-y-4">
             {category !== 'Général' && (
               <div className="flex items-center gap-4 px-2">
                 <h2 className="text-lg font-bold text-foreground tracking-wide">
                   {category}
                 </h2>
                 <div className="flex-1 h-px bg-border"></div>
               </div>
             )}
             
             <div className="grid gap-3">
               {topics.map((topic) => {
                  const isCompleted = progress.completedTopics.includes(topic.id);
                  const score = progress.quizScores[topic.id];

                  return (
                    <Card
                      key={topic.id}
                      to={topic.type === 'quiz' ? `/quiz/${topic.id}` : `/sheet/${topic.id}`}
                      className={clsx(
                        "flex items-center gap-4 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 border relative overflow-hidden group",
                        isCompleted ? "bg-surface/40 border-border opacity-70 hover:opacity-100" : "bg-surface/80 border-border-hover hover:border-primary/30"
                      )}
                    >
                      {/* Subtle highlight sweep */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out" />
                      </div>
                      
                      <div className={clsx(
                        "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 relative z-10",
                        isCompleted 
                          ? "bg-success/10 text-success border border-success/20" 
                          : `bg-surface-hover text-muted border border-border group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20`
                      )}>
                        <div className={clsx("absolute inset-0 rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500", isCompleted ? "bg-success/50" : "bg-primary/50")} />
                        {isCompleted ? <CheckCircle2 className="w-7 h-7 relative z-10" /> : (
                          topic.type === 'quiz' ? <PlayCircle className="w-7 h-7 ml-0.5 relative z-10 transition-transform duration-500 group-hover:scale-110" /> : <FileText className="w-7 h-7 relative z-10 transition-transform duration-500 group-hover:scale-110" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0 py-1 relative z-10">
                        <div className="flex justify-between items-start mb-1.5 gap-2">
                            <h3 className={clsx(
                              "font-bold truncate text-base transition-colors duration-300",
                              isCompleted ? "text-muted group-hover:text-foreground" : "text-foreground group-hover:text-primary"
                            )}>
                              {topic.title}
                            </h3>
                            {topic.type === 'quiz' && score !== undefined && (
                                <span className={clsx(
                                    "text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110",
                                    score >= 80 ? "bg-success/20 text-success border border-success/20" : "bg-warning/20 text-warning border border-warning/20"
                                )}>
                                    {score}%
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-muted truncate font-medium transition-colors duration-300 group-hover:text-subtle">{topic.description}</p>
                      </div>
                    </Card>
                  );
               })}
             </div>
          </div>
        ))}

        {subject.topics.length === 0 && (
            <div className="text-center py-16 bg-surface/50 rounded-3xl border border-border border-dashed">
                <BookOpen className="w-12 h-12 text-subtle mx-auto mb-4" />
                <p className="text-muted font-medium">Contenu à venir pour {subject.name}...</p>
            </div>
        )}
      </div>
    </PageTransition>
  );
};
