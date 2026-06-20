import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, AlertTriangle, BookOpen, CheckCircle, XCircle, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Question } from '../../types';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  topicTitle: string;
  theme: { background: string; text: string; primary?: string };
  failedQuestions?: Question[];
  isMockExam?: boolean;
  allQuestions?: any[];
}

export const QuizResults: React.FC<QuizResultsProps> = ({ score, totalQuestions, topicTitle, theme, failedQuestions = [], isMockExam = false, allQuestions }) => {
  const navigate = useNavigate();
  const finalScore = Math.round((score / totalQuestions) * 100);
  const score20 = isMockExam ? Math.round((score / totalQuestions) * 20 * 10) / 10 : null; // rounded to 1 decimal
  const [showRecap, setShowRecap] = useState(false);

  const getMention = () => {
    if (score20 === null) return null;
    if (score20 >= 16) return { name: "Excellent travail ! ✨", color: "text-success", bg: "bg-success/10 border-success/30" };
    if (score20 >= 14) return { name: "Très bon résultat ! 🎈", color: "text-info", bg: "bg-info/10 border-info/30" };
    if (score20 >= 12) return { name: "C'est bien, continue ! 🌟", color: "text-warning", bg: "bg-warning/10 border-warning/30" };
    if (score20 >= 10) return { name: "Encouragements 👍", color: "text-foreground", bg: "bg-surface-hover border-border" };
    return { name: "Quelques points à revoir, courage ! 💪", color: "text-danger", bg: "bg-danger/10 border-danger/30" };
  };
  const mention = isMockExam ? getMention() : null;

  const statsPerSubject = React.useMemo(() => {
    if (!isMockExam || !allQuestions) return null;
    const stats: Record<string, { total: number, failed: number, name: string, theme: any }> = {};
    allQuestions.forEach(q => {
        const sName = q.originalSubjectName || "Autre";
        if (!stats[sName]) {
             stats[sName] = { total: 0, failed: 0, name: sName, theme: q.originalSubjectTheme };
        }
        stats[sName].total++;
    });
    failedQuestions.forEach(q => {
        const sName = (q as any).originalSubjectName || "Autre";
        if (stats[sName]) stats[sName].failed++;
    });
    return Object.values(stats);
  }, [allQuestions, failedQuestions, isMockExam]);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-surface border border-border rounded-3xl p-8 text-center shadow-lg relative overflow-hidden">
        {isMockExam && <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-red-500 to-rose-600 shadow-md" />}

        <motion.div 
          initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className={clsx("w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 border-4 relative shadow-lg", isMockExam ? "bg-red-50 border-red-100 dark:bg-red-900/20 dark:border-red-900/30" : "bg-surface-hover border-border-hover")}
        >
          {isMockExam ? (
             <span className="text-4xl">🏅</span>
          ) : finalScore >= 50 ? (
             <span className="text-4xl">🎉</span>
          ) : (
             <span className="text-4xl">💪</span>
          )}
        </motion.div>
        
        <div>
          <h2 className={clsx("text-2xl font-black mb-2", isMockExam ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600" : "text-foreground")}>
            {isMockExam ? "Préparation Terminée !" : "Quiz terminé !"}
          </h2>
          <p className="text-muted">
            {isMockExam ? "Voici ton bilan sur l'ensemble du programme :" : "Tu as complété :"} <br/><span className={theme.text}>{topicTitle}</span>
          </p>
        </div>

        <div className={clsx("py-8 border-y my-6 relative overflow-hidden", isMockExam ? "border-red-500/20 bg-red-500/5 rounded-2xl mx-4" : "border-border")}>
          {isMockExam && (
             <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -right-10 -top-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" 
             />
          )}
          <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-black text-foreground mb-2 relative z-10"
          >
              {isMockExam ? `${score20}/20` : `${finalScore}%`}
          </motion.div>
          <p className="text-sm text-subtle font-bold uppercase tracking-widest text-center relative z-10">
              {isMockExam ? "Note Globale Indicative" : "Score final"}
          </p>
          
          {isMockExam && mention && (
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                className={clsx("inline-flex items-center justify-center mt-6 px-4 py-2 rounded-xl border-2 font-black text-sm uppercase tracking-wider relative z-10 shadow-sm", mention.bg, mention.color)}
             >
                {mention.name}
             </motion.div>
          )}
        </div>

        {isMockExam && statsPerSubject && (
            <div className="w-full text-left bg-surface-hover rounded-2xl p-5 border border-border mb-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-muted" />
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Détail par domaine</h4>
                </div>
                <div className="space-y-4">
                    {statsPerSubject.map((stat, idx) => {
                        const successRate = ((stat.total - stat.failed) / stat.total) * 100;
                        return (
                            <div key={idx} className="flex flex-col gap-2 relative">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-bold text-foreground">{stat.name}</span>
                                    <span className={clsx("font-bold px-2 py-0.5 rounded-md", successRate >= 50 ? "bg-success/10 text-success" : "bg-danger/10 text-danger")}>
                                        {stat.total - stat.failed} / {stat.total}
                                    </span>
                                </div>
                                <div className="h-2.5 w-full bg-background rounded-full overflow-hidden border border-border/50">
                                     <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${successRate}%` }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 + (idx * 0.1) }}
                                        className={clsx("h-full", stat.theme ? stat.theme.background : "bg-primary")} 
                                     />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )}

        <div className="flex justify-center gap-4">
          <Button variant="secondary" onClick={() => navigate(-1)}>
              Retour
          </Button>
          <Button 
              themeColorClass={theme.background} 
              onClick={() => window.location.reload()}
              leftIcon={<RefreshCw className="w-4 h-4" />}
          >
              Réessayer
          </Button>
        </div>
      </div>

      {failedQuestions.length > 0 && (
        <div className="bg-surface border border-border rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Récapitulatif des erreurs ({failedQuestions.length})
            </h3>
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={() => setShowRecap(!showRecap)}
            >
              {showRecap ? "Masquer" : "Voir les erreurs"}
            </Button>
          </div>

          <AnimatePresence>
            {showRecap && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }} 
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 pt-4 border-t border-border"
              >
                {failedQuestions.map((q, idx) => {
                  const sName = (q as any).originalSubjectName;
                  const sTheme = (q as any).originalSubjectTheme;
                  return (
                  <div key={idx} className="p-4 bg-background rounded-2xl border border-border/50 text-left relative overflow-hidden">
                    {isMockExam && sName && (
                        <div className="mb-3 inline-flex">
                           <span className={clsx("text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded border", sTheme ? `${sTheme.text} ${sTheme.background}/10 border-current/20` : "text-muted bg-surface border-border")}>
                              {sName}
                           </span>
                        </div>
                    )}
                    <div className="font-medium text-foreground mb-3 text-lg">
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                         <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                           {q.text}
                         </ReactMarkdown>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-4">
                      {q.options.map((opt, i) => (
                        <div 
                          key={i}
                          className={clsx(
                            "px-4 py-2.5 rounded-xl border flex items-center justify-between text-sm",
                            i === q.correctAnswer 
                              ? "bg-success/10 border-success text-success-foreground font-medium" 
                              : "bg-surface border-border opacity-50"
                          )}
                        >
                          <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-0">
                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                              {opt}
                            </ReactMarkdown>
                          </div>
                          {i === q.correctAnswer && <CheckCircle className="w-4 h-4 text-success shrink-0" />}
                        </div>
                      ))}
                    </div>

                    {q.explanation && (
                      <div className="mt-4 p-3 bg-surface-hover rounded-xl border border-border text-sm flex items-start gap-3">
                        <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold block mb-1">Explication :</span>
                          <div className="text-muted leading-relaxed prose prose-sm dark:prose-invert max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                              {q.explanation}
                            </ReactMarkdown>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
          
          {failedQuestions.length > 0 && (
            <div className="mt-8 p-6 bg-primary/5 rounded-3xl border border-primary/10 text-center">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-1">Un petit conseil...</h4>
              <p className="text-sm text-subtle italic">
                « Ne te décourage pas pour les erreurs, c'est comme ça qu'on progresse. Reprends tranquillement les fiches de cours correspondantes quand tu te sentiras prêt. »
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
