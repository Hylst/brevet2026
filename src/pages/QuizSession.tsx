import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../data/content';
import { MOCK_EXAM_EXTRA_QUESTIONS } from '../data/mock-questions';
import { saveQuizScore, saveFailedQuestions, saveCorrectQuestions, getProgress, updateSpacedRepetition, getDueReviewItems } from '../services/storageService';
import { useScoreStore } from '../store/useScoreStore';
import { playCorrectSound, playIncorrectSound } from '../services/soundService';
import { getTheme } from '../lib/theme';
import { useGamificationStore } from '../store/useGamificationStore';
import { PageTransition } from '../components/PageTransition';
import { Button } from '../components/ui/Button';
import { Tooltip } from '../components/ui/Tooltip';
import { X, Check, Calculator, Ban, Timer, Target, ShieldAlert, Award, PenTool, FileText, ChevronDown, Heart } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { ProgressBar } from '../components/ui/ProgressBar';
import { QuizQuestion } from '../components/quiz/QuizQuestion';
import { QuizResults } from '../components/quiz/QuizResults';
import { SEO } from '../components/ui/SEO';

export const QuizSession: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const { addXP, awardBadge } = useGamificationStore();
  const addScore = useScoreStore(state => state.addScore);
  
  const lives = useGamificationStore(state => state.lives);
  const deductLife = useGamificationStore(state => state.deductLife);
  const checkLives = useGamificationStore(state => state.checkLives);

  const isReview = topicId?.startsWith('review-');
  const subjectId = isReview ? topicId?.replace('review-', '') : null;
  const isMockExam = topicId === 'mock-exam';

  const [examFormat, setExamFormat] = useState<'court' | 'complet'>('complet');
  const [hasStarted, setHasStarted] = useState(!isMockExam);
  const [showDraft, setShowDraft] = useState(false);
  const [draftContent, setDraftContent] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    checkLives();
    if (useGamificationStore.getState().lives <= 0) {
      setGameOver(true);
    }
  }, [checkLives]);

  const context = useMemo(() => {
    if (isMockExam) {
      const questionsBySubject: Record<string, any[]> = {};
      SUBJECTS.forEach(s => {
        questionsBySubject[s.id] = [];
        s.topics.forEach(t => {
          if (t.type === 'quiz' && t.questions) {
            t.questions.forEach(q => {
              questionsBySubject[s.id].push({
                  ...q, 
                  originalTopicId: t.id,
                  originalSubjectId: s.id,
                  originalSubjectName: s.name,
                  originalSubjectTheme: getTheme(s.id)
              });
            });
          }
        });
      });

      // We want enough questions for both the short (50) and long (200) formats.
      // Gather all available questions across core subjects.
      const coreHisto = ['histoire', 'geo', 'emc', 'maths', 'francais', 'physique', 'svt', 'techno'];
      const userProgress = getProgress();
      const correctlyAnswered = userProgress.correctQuestions || [];
      
      const allPools: any[][] = [];
      
      coreHisto.forEach(subjId => {
        if (questionsBySubject[subjId]) {
          // Filter out questions that have already been answered correctly
          const uncompletedQuestions = questionsBySubject[subjId].filter(q => !correctlyAnswered.includes(q.id));
          allPools.push(uncompletedQuestions.sort(() => Math.random() - 0.5));
        }
      });

      // Inject extra hand-crafted difficult questions
      let extra = MOCK_EXAM_EXTRA_QUESTIONS.map((q: any) => ({
         ...q,
         originalTopicId: 'mock-exam',
         originalSubjectId: 'general',
         originalSubjectName: 'Général',
         originalSubjectTheme: { background: 'bg-indigo-500', text: 'text-indigo-500', border: 'border-indigo-500', gradient: 'from-indigo-500 to-blue-500' }
      }));
      extra = extra.filter(q => !correctlyAnswered.includes(q.id));
      allPools.push(extra.sort(() => Math.random() - 0.5));
      
      // Interleave the questions so any slice of size N will be balanced across subjects
      let interleaved: any[] = [];
      let activePools = allPools.filter(p => p.length > 0);
      let maxLen = Math.max(...activePools.map(p => p.length), 0);
      for (let i = 0; i < maxLen; i++) {
        for (let p of activePools) {
          if (i < p.length) interleaved.push(p[i]);
        }
      }
      
      return {
        subject: { id: 'mock', name: 'Entraînement', icon: 'Timer', topics: [] } as any,
        topic: {
          id: 'mock-exam',
          title: 'Préparation Globale',
          description: 'Évaluation générale sur toutes les matières',
          type: 'quiz' as const,
          questions: interleaved
        }
      };
    }

    if (isReview) {
      const subject = SUBJECTS.find(s => s.id === subjectId);
      if (!subject) return null;
      
      const dueItems = getDueReviewItems(subjectId);
      const failedQuestions: any[] = [];
      
      // First, try to get due items from spaced repetition
      if (dueItems.length > 0) {
        dueItems.forEach(item => {
          const t = subject.topics.find(top => top.id === item.topicId);
          if (t && t.type === 'quiz' && t.questions) {
            const q = t.questions.find(quest => quest.id === item.questionId);
            if (q) failedQuestions.push({...q, originalTopicId: t.id});
          }
        });
      }
      
      // If no due items, fallback to failed questions for backward compatibility or immediate review
      if (failedQuestions.length === 0) {
        const progress = getProgress();
        subject.topics.forEach(t => {
          if (t.type === 'quiz' && t.questions) {
            const failedIds = progress.failedQuestions?.[t.id] || [];
            failedIds.forEach(id => {
              const q = t.questions!.find(q => q.id === id);
              if (q) failedQuestions.push({...q, originalTopicId: t.id});
            });
          }
        });
      }
      
      if (failedQuestions.length === 0) return null;
      
      // Shuffle failed questions
      const shuffled = failedQuestions.sort(() => Math.random() - 0.5).slice(0, 20); // max 20 questions
      
      return {
        subject,
        topic: {
          id: topicId!,
          title: 'Révision espacée',
          description: 'Revois les questions au moment optimal pour ta mémoire',
          type: 'quiz' as const,
          questions: shuffled
        }
      };
    }
    
    const standardContext = SUBJECTS.flatMap(s => s.topics.map(t => ({ topic: t, subject: s }))).find(ctx => ctx.topic.id === topicId);
    if (!standardContext) return undefined;
    
    // Filter out already correctly answered questions for standard quizzes
    const userProgress = getProgress();
    const correctlyAnswered = userProgress.correctQuestions || [];
    return {
      subject: standardContext.subject,
      topic: {
        ...standardContext.topic,
        questions: standardContext.topic.questions?.filter(q => !correctlyAnswered.includes(q.id))
      }
    };
  }, [topicId, isReview, subjectId]);

  const topic = useMemo(() => {
    if (!context?.topic) return undefined;
    
    let finalQuestions = context.topic.questions;
    if (isMockExam && context.topic.questions) {
      // Slice the interleaved array to get a balanced subset
      const sliced = context.topic.questions.slice(0, examFormat === 'court' ? 50 : 100);
      // Shuffle the subset so the subjects appear in random order
      finalQuestions = [...sliced].sort(() => Math.random() - 0.5);
    }
    
    return {
      ...context.topic,
      questions: finalQuestions
    } as typeof context.topic;
  }, [context, isMockExam, examFormat]);

  const subject = context?.subject;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<{id: string, topicId: string}[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<{id: string, topicId: string}[]>([]);

  const currentQuestion = topic?.questions?.[currentIndex];

  useEffect(() => {
    if (!currentQuestion) return;
    
    const progress = getProgress();
    const isTimerEnabled = progress.settings?.timerEnabled !== false;
    
    if (isMockExam) {
      setTimeLeft(30); // 30 seconds enforced per question in mock exam
    } else if (currentQuestion.timeLimit && isTimerEnabled) {
      setTimeLeft(currentQuestion.timeLimit);
    } else {
      setTimeLeft(null);
    }
  }, [currentIndex, currentQuestion, isMockExam]);

  useEffect(() => {
    if (timeLeft === null || isAnswered) return;
    if (timeLeft <= 0) {
      handleTimeOut();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isAnswered]);

  const handleTimeOut = () => {
    if (!currentQuestion || !topic) return;
    setIsAnswered(true);
    setSelectedOption(-1);
    const originalTopicId = (currentQuestion as any).originalTopicId || topic.id;
    const qSubjectId = (currentQuestion as any).originalSubjectId || subject?.id || 'unknown';

    setWrongAnswers(prev => [...prev, { id: currentQuestion.id, topicId: originalTopicId }]);
    playIncorrectSound();
    updateSpacedRepetition(currentQuestion.id, originalTopicId, 0);
    addScore(currentQuestion.id, qSubjectId, originalTopicId, false);
    deductLife();
  };

  const handleOptionClick = (index: number) => {
    if (isAnswered || !currentQuestion || !topic) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const originalTopicId = (currentQuestion as any).originalTopicId || topic.id;
    const qSubjectId = (currentQuestion as any).originalSubjectId || subject?.id || 'unknown';

    if (index === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
      setCorrectAnswers(prev => [...prev, { id: currentQuestion.id, topicId: originalTopicId }]);
      playCorrectSound();
      
      const isFast = currentQuestion.timeLimit && timeLeft !== null && timeLeft >= currentQuestion.timeLimit * 0.7;
      updateSpacedRepetition(currentQuestion.id, originalTopicId, isFast ? 5 : 4);
      addScore(currentQuestion.id, qSubjectId, originalTopicId, true);

      // Award speed demon if answered correctly with more than 70% time left
      if (isFast) {
        awardBadge('speed_demon');
      }
    } else {
      setWrongAnswers(prev => [...prev, { id: currentQuestion.id, topicId: originalTopicId }]);
      playIncorrectSound();
      updateSpacedRepetition(currentQuestion.id, originalTopicId, 1);
      addScore(currentQuestion.id, qSubjectId, originalTopicId, false);
      deductLife();
    }
  };

  const handleNext = () => {
    if (!topic || !subject) return;
    if (currentIndex < (topic.questions?.length || 0) - 1) {
      if (lives <= 0) {
        addXP(5 + score * 3);
        setGameOver(true);
        return;
      }
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      const finalScore = Math.round((score / topic.questions!.length) * 100);
      
      if (!isReview && !isMockExam) {
        saveQuizScore(topic.id, finalScore);
        saveFailedQuestions(topic.id, wrongAnswers.map(w => w.id));
        saveCorrectQuestions(correctAnswers.map(c => c.id));
      } else {
        // In review or mock exam mode, we need to update failed questions across multiple topics
        const progress = getProgress();
        const newFailedQuestions = { ...progress.failedQuestions };
        
        // Remove correctly answered questions from failed lists
        correctAnswers.forEach(ca => {
          if (newFailedQuestions[ca.topicId]) {
            newFailedQuestions[ca.topicId] = newFailedQuestions[ca.topicId].filter(id => id !== ca.id);
          }
        });
        
        // Add wrong answers to failed list (important for mock exam to capture new mistakes)
        wrongAnswers.forEach(wa => {
          if (!newFailedQuestions[wa.topicId]) {
            newFailedQuestions[wa.topicId] = [];
          }
          if (!newFailedQuestions[wa.topicId].includes(wa.id)) {
            newFailedQuestions[wa.topicId].push(wa.id);
          }
        });
        
        // Save the updated failed questions
        const affectedTopics = new Set([...correctAnswers.map(c => c.topicId), ...wrongAnswers.map(w => w.topicId)]);
        affectedTopics.forEach(tId => {
          saveFailedQuestions(tId, newFailedQuestions[tId] || []);
        });

        // Save correct choices globally
        saveCorrectQuestions(correctAnswers.map(c => c.id));
      }
      
      const earnedXP = 15 + (score * 5);
      addXP(earnedXP);

      if (finalScore === 100 && !isReview) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#22c55e', '#3b82f6', '#eab308']
        });
        
        if (isMockExam) {
          awardBadge('perfect_mock');
        } else {
          // Check if ALL quizzes for this subject are 100%
          const updatedProgress = getProgress();
          const allSubjectQuizzes = subject.topics.filter(t => t.type === 'quiz');
          const allQuizzesCompleted = allSubjectQuizzes.length > 0 && allSubjectQuizzes.every(q => 
            (q.id === topic.id ? finalScore : (updatedProgress.quizScores[q.id] || 0)) === 100
          );

          if (allQuizzesCompleted) {
            const badgeMap: Record<string, string> = {
              'maths': 'maths_100',
              'francais': 'francais_100',
              'histoire': 'histoire_100',
              'geo': 'geo_100',
              'emc': 'emc_100',
              'physique': 'physique_100',
              'svt': 'svt_100',
              'techno': 'techno_100'
            };
            const badgeId = badgeMap[subject.id];
            if (badgeId) awardBadge(badgeId);
          }
        }
      } else if (finalScore === 100 && isReview) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#22c55e', '#3b82f6', '#eab308']
        });
      }
    }
  };

  if (!topic || !subject || topic.type !== 'quiz' || !topic.questions || topic.questions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 text-center">
        <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mb-6 border-4 border-border">
          <Check className="w-10 h-10 text-success" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Tout est parfait !</h2>
        <p className="text-muted mb-8 max-w-md">{isReview ? "Tu n'as aucune erreur à réviser pour le moment." : "Tu as déjà répondu juste à toutes les questions de ce sujet."} Continue comme ça !</p>
        <Button onClick={() => navigate(-1)} variant="secondary">
          Retour
        </Button>
      </div>
    );
  }

  if (gameOver) {
    return (
      <PageTransition className="min-h-screen bg-background flex flex-col items-center justify-center p-8 text-center">
        <motion.div 
           initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
           animate={{ scale: 1, opacity: 1, rotate: 0 }}
           className="w-32 h-32 bg-danger/10 rounded-full flex items-center justify-center mb-6 border-4 border-danger/20"
        >
          <Heart className="w-12 h-12 text-danger opacity-50" />
          <X className="w-16 h-16 text-danger absolute" />
        </motion.div>
        <h2 className="text-3xl font-extrabold text-foreground mb-4">Plus de vies !</h2>
        <p className="text-lg text-muted mb-8 max-w-md">
           Tu as épuisé toutes tes vies. Attends qu'elles se rechargent pour continuer à t'entraîner (1 vie / heure). Profites-en pour relire le cours !
        </p>
        <Button onClick={() => navigate(-1)} size="lg" themeColorClass="bg-danger text-white hover:bg-danger-hover">
          Retour aux cours
        </Button>
      </PageTransition>
    );
  }

  if (isMockExam && !hasStarted) {
    return (
      <PageTransition className="min-h-screen bg-background flex flex-col p-4 sm:p-6 overflow-y-auto">
        <SEO title="Examen Blanc - Hylst Brevet 2026" description="Testez vos connaissances sur l'ensemble du programme avec un examen blanc chronométré." />
        <div className="h-16 flex items-center justify-between sticky top-0 z-10 mb-6">
           <button onClick={() => navigate('/')} className="p-2 -ml-2 text-muted hover:text-foreground transition-colors bg-surface/80 backdrop-blur-md rounded-full shadow-sm">
               <X className="w-6 h-6" />
            </button>
           <div className="w-8" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full text-center space-y-10 pb-10">
            <motion.div 
               initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
               animate={{ scale: 1, opacity: 1, rotate: 0 }}
               transition={{ type: "spring", stiffness: 200, damping: 15 }}
               className="relative"
            >
               <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center p-1 shadow-2xl shadow-red-500/30 transform rotate-3">
                 <div className="w-full h-full bg-surface rounded-xl flex items-center justify-center border-4 border-background -rotate-3">
                    <FileText className="w-14 h-14 text-red-500" />
                 </div>
               </div>
               <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute -top-4 -right-4 bg-warning text-warning-foreground font-extrabold px-3 py-1 rounded-full text-sm shadow-lg rotate-12"
               >
                  DÉFI !
               </motion.div>
            </motion.div>
            
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-center w-full mt-2 mb-8 relative">
               <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-500/10 blur-[60px] rounded-full pointer-events-none"></div>
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded-full text-sm font-bold mb-4 uppercase tracking-wider backdrop-blur-sm border border-red-500/20">
                 <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                 L'Exercice Ultime
               </div>
               <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">Entraînement Global</h1>
               <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed">
                 Oubliez les révisions par chapitre. Un algorithme d'entrelacement va piocher équitablement dans une banque de <strong>plus de 400 questions</strong> couvrant l'<strong>intégralité du programme</strong> (Maths, Français, HG, Sciences).
               </p>
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
               <motion.div whileHover={{ y: -5 }} className="p-5 bg-surface rounded-[1.5rem] border border-border shadow-sm hover:shadow-md transition-all hover:border-primary/30 group">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="p-2.5 rounded-xl bg-primary/10 shadow-inner border border-primary/20 group-hover:bg-primary/20 transition-colors">
                       <Target className="w-6 h-6 text-primary" />
                     </div>
                     <h3 className="font-bold text-lg text-foreground">Brassage Total</h3>
                  </div>
                  <p className="text-sm text-subtle leading-relaxed">Les questions sont mélangées de façon imprévisible, forçant votre cerveau à changer de contexte constamment.</p>
               </motion.div>
               <motion.div whileHover={{ y: -5 }} className="p-5 bg-surface rounded-[1.5rem] border border-border shadow-sm hover:shadow-md transition-all hover:border-warning/30 group">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="p-2.5 rounded-xl bg-warning/10 shadow-inner border border-warning/20 group-hover:bg-warning/20 transition-colors">
                       <Timer className="w-6 h-6 text-warning" />
                     </div>
                     <h3 className="font-bold text-lg text-foreground">Mode Examen</h3>
                  </div>
                  <p className="text-sm text-subtle leading-relaxed">Si le minuteur est activé, vous simulez la pression du temps. Habituez-vous à lire vite et à répondre juste.</p>
               </motion.div>
               <motion.div whileHover={{ y: -5 }} className="p-5 bg-surface rounded-[1.5rem] border border-border shadow-sm hover:shadow-md transition-all hover:border-danger/30 group">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="p-2.5 rounded-xl bg-danger/10 shadow-inner border border-danger/20 group-hover:bg-danger/20 transition-colors">
                       <ShieldAlert className="w-6 h-6 text-danger" />
                     </div>
                     <h3 className="font-bold text-lg text-foreground">Zéro Retour</h3>
                  </div>
                  <p className="text-sm text-subtle leading-relaxed">Contrairement aux révisions, vos erreurs consomment vos vies. Si vous tombez à 0, l'épreuve s'arrête.</p>
               </motion.div>
               <motion.div whileHover={{ y: -5 }} className="p-5 bg-surface rounded-[1.5rem] border border-border shadow-sm hover:shadow-md transition-all hover:border-success/30 group">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="p-2.5 rounded-xl bg-success/10 shadow-inner border border-success/20 group-hover:bg-success/20 transition-colors">
                       <Award className="w-6 h-6 text-success" />
                     </div>
                     <h3 className="font-bold text-lg text-foreground">XP Massive</h3>
                  </div>
                  <p className="text-sm text-subtle leading-relaxed">Terminez l'épreuve pour gagner énormément d'XP, et découvrez votre note indicative sur 20 à la fin !</p>
               </motion.div>
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="w-full pt-6 space-y-6 text-left">
               <h3 className="text-center font-bold text-muted-foreground uppercase tracking-widest text-sm mb-2">Configurez votre Épreuve</h3>
               <div className="flex flex-col sm:flex-row gap-4">
                   <button 
                       onClick={() => setExamFormat('court')}
                       className={clsx(
                         "flex-1 p-5 sm:p-6 rounded-[2rem] font-bold transition-all border-2 text-left relative overflow-hidden group", 
                         examFormat === 'court' 
                           ? "border-red-500 bg-red-500/10 text-red-600 dark:text-red-400 shadow-xl shadow-red-500/10 scale-[1.02]" 
                           : "border-border bg-surface text-muted hover:border-border-hover hover:text-foreground"
                         )}
                   >
                       {examFormat === 'court' && (
                         <div className="absolute top-4 right-4">
                            <span className="flex h-4 w-4 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                            </span>
                         </div>
                       )}
                       <div className="text-2xl mb-2 font-black tracking-tight">Session Courte</div>
                       <div className={clsx("font-medium", examFormat === 'court' ? "text-red-500/80" : "text-subtle")}>50 Questions • <span className="opacity-75">~25 min</span></div>
                       <p className={clsx("text-sm mt-3 font-normal leading-relaxed", examFormat === 'court' ? "text-red-500/80" : "text-subtle")}>
                         L'entraînement idéal au quotidien. Parfait pour maintenir vos réflexes cognitifs actifs.
                       </p>
                   </button>
                   <button 
                       onClick={() => setExamFormat('complet')}
                       className={clsx(
                         "flex-1 p-5 sm:p-6 rounded-[2rem] font-bold transition-all border-2 text-left relative overflow-hidden group", 
                         examFormat === 'complet' 
                           ? "border-red-500 bg-red-500/10 text-red-600 dark:text-red-400 shadow-xl shadow-red-500/10 scale-[1.02]" 
                           : "border-border bg-surface text-muted hover:border-border-hover hover:text-foreground"
                         )}
                   >
                       {examFormat === 'complet' && (
                         <div className="absolute top-4 right-4">
                            <span className="flex h-4 w-4 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                            </span>
                         </div>
                       )}
                       <div className="text-2xl mb-2 font-black tracking-tight">Épreuve Brevet</div>
                       <div className={clsx("font-medium", examFormat === 'complet' ? "text-red-500/80" : "text-subtle")}>100 Questions • <span className="opacity-75">~50 min</span></div>
                       <p className={clsx("text-sm mt-3 font-normal leading-relaxed", examFormat === 'complet' ? "text-red-500/80" : "text-subtle")}>
                         Le Test Endurant. Bloquez-vous une heure et simulez la pression de l'examen final sans pause.
                       </p>
                   </button>
               </div>
               <div className="pt-4">
                 <Button size="lg" fullWidth onClick={() => { setHasStarted(true); if (isMockExam) awardBadge('persistent'); }} themeColorClass="bg-gradient-to-br from-red-500 via-rose-600 to-red-700 text-white hover:opacity-90 shadow-2xl shadow-red-500/25 border-0 transform hover:scale-[1.02] transition-transform text-lg py-6 sm:py-7 font-bold uppercase tracking-wider rounded-[2rem]">
                    Démarrer l'Épreuve
                 </Button>
               </div>
            </motion.div>
        </div>
      </PageTransition>
    );
  }

  const theme = isMockExam ? { background: 'bg-red-500', text: 'text-red-500', border: 'border-red-500', gradient: 'from-red-500 to-rose-500' } : getTheme(subject.id);
  const progressPercent = topic.questions.length > 0 ? ((currentIndex + (showResult ? 1 : 0)) / topic.questions.length) * 100 : 0;
  const isCalculatorAllowed = currentQuestion?.calculatorAllowed !== false;

  if (showResult) {
    const questionsFailed = topic.questions.filter(q => wrongAnswers.some(wa => wa.id === q.id));

    return (
      <PageTransition className="min-h-screen bg-background flex flex-col p-4 sm:p-6 overflow-y-auto">
        <div className="h-16 px-4 flex items-center justify-between border-b border-border bg-background/50 backdrop-blur sticky top-0 z-10 mb-6">
           <button onClick={() => navigate(-1)} aria-label="Fermer les résultats" className="p-2 -ml-2 text-muted hover:text-foreground transition-colors">
               <X className="w-6 h-6" />
            </button>
            <h1 className="font-bold">Résultats</h1>
           <div className="w-8" />
        </div>
        <QuizResults 
          score={score}
          totalQuestions={topic.questions.length}
          topicTitle={topic.title}
          theme={theme}
          failedQuestions={questionsFailed}
          isMockExam={isMockExam}
          allQuestions={topic.questions}
        />
      </PageTransition>
    );
  }

  if (!currentQuestion) return null;

  return (
    <PageTransition className="min-h-screen bg-background flex flex-col">
      <SEO title={`Quiz: ${topic.title} - Hylst Brevet 2026`} />
      <div className="h-16 px-4 flex items-center justify-between border-b border-border bg-background/50 backdrop-blur">
        <button onClick={() => navigate(-1)} aria-label="Fermer le quiz" className="p-2 -ml-2 text-muted hover:text-foreground transition-colors">
             <X className="w-6 h-6" />
         </button>
         <div className="flex items-center gap-3">
             {currentQuestion.timeLimit && (
              <Tooltip content={`Temps restant : ${timeLeft} secondes`}>
                  <div className={clsx(
                    "flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                    timeLeft !== null && timeLeft < 10 ? "bg-danger/30 text-danger border-danger/80" : "bg-surface-hover border-border-hover text-muted"
                  )} aria-label={`Temps restant : ${timeLeft} secondes`}>
                    <Timer className="w-3 h-3" />
                    <span>{timeLeft}s</span>
                  </div>
              </Tooltip>
            )}
            
            <Tooltip content={isCalculatorAllowed ? "Calculatrice autorisée" : "Calculatrice interdite"}>
              <div className={clsx(
                  "flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                  isCalculatorAllowed 
                      ? "bg-surface-hover border-border-hover text-muted"
                      : "bg-danger/10 border-danger/30 text-danger"
              )} aria-label={isCalculatorAllowed ? "Calculatrice autorisée" : "Calculatrice interdite"}>
                  {isCalculatorAllowed ? <Calculator className="w-3 h-3" /> : <Ban className="w-3 h-3" />}
              </div>
            </Tooltip>
            <div className="text-xs font-bold uppercase tracking-widest text-subtle">
                {currentIndex + 1} / {topic.questions.length}
            </div>
        </div>
        <div className="flex items-center gap-1">
            <Tooltip content="Ouvrir le brouillon">
              <button 
                  onClick={() => setShowDraft(!showDraft)}
                  className={clsx(
                      "p-2 rounded-lg transition-colors",
                      showDraft ? "bg-primary/20 text-primary" : "text-muted hover:bg-surface-hover"
                  )}
                  aria-label="Ouvrir le brouillon"
              >
                  <PenTool className="w-5 h-5" />
              </button>
            </Tooltip>
        </div>
      </div>

      <AnimatePresence>
        {showDraft && (
            <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-surface border-b border-border overflow-hidden"
            >
                <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Zone de brouillon (notes personnelles)</span>
                        <button onClick={() => setDraftContent('')} className="text-[10px] font-bold text-danger hover:underline">Effacer</button>
                    </div>
                    <textarea 
                        className="w-full h-32 bg-background border border-border rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary/50 text-foreground"
                        placeholder="Note ici tes calculs ou tes idées..."
                        value={draftContent}
                        onChange={(e) => setDraftContent(e.target.value)}
                    />
                    <div className="flex justify-center">
                        <button onClick={() => setShowDraft(false)} aria-label="Fermer le brouillon" className="p-1 px-4 hover:bg-surface-hover rounded-full transition-colors">
                             <ChevronDown className="w-4 h-4 text-muted" />
                        </button>
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      <ProgressBar 
        percentage={progressPercent} 
        themeBackgroundClass={theme.background} 
        animated={true} 
      />

      <div className="flex-1 flex flex-col p-6 max-w-2xl mx-auto w-full">
        <QuizQuestion 
          question={currentQuestion}
          currentIndex={currentIndex}
          totalQuestions={topic.questions.length}
          selectedOption={selectedOption}
          isAnswered={isAnswered}
          timeLeft={timeLeft}
          theme={theme}
          onOptionClick={handleOptionClick}
          onNext={handleNext}
        />
      </div>
    </PageTransition>
  );
};