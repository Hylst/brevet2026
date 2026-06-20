import React from 'react';
import { Trophy, Target } from 'lucide-react';
import clsx from 'clsx';
import { Card } from '../ui/Card';
import { Tooltip } from '../ui/Tooltip';
import { useScoreStore } from '../../store/useScoreStore';
import { motion } from 'motion/react';

interface StatCardProps {
  id: string;
  name: string;
  icon: any;
  theme: { background: string; text: string; gradient: string };
  completedCount: number;
  totalCount: number;
}

export const StatCard: React.FC<StatCardProps> = ({ id, name, icon: Icon, theme, completedCount, totalCount }) => {
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  
  // Use primitive selectors to prevent object reference changes and avoid infinite loops
  const scorePercent = useScoreStore(state => {
    const subjectScores = Object.values(state.scores).filter(s => s.subjectId === id);
    const total = subjectScores.length;
    const correct = subjectScores.filter(s => s.isCorrect).length;
    return total > 0 ? Math.round((correct / total) * 100) : 0;
  });

  const quizzesTaken = useScoreStore(state => 
    Object.values(state.scores).filter(s => s.subjectId === id).length
  );

  // Generate a random slight tilt between -2 and 2 degrees
  const randomRotation = React.useMemo(() => (Math.random() - 0.5) * 3, []);
  const randomDelay = React.useMemo(() => Math.random() * 2, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: randomRotation, y: 20 }}
      animate={{ opacity: 1, scale: 1, rotate: randomRotation, y: 0 }}
      whileHover={{ scale: 1.05, rotate: 0, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring", stiffness: 300, damping: 20,
        opacity: { duration: 0.5 },
        scale: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className="h-full flex flex-col"
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: randomDelay }}
        className="h-full flex flex-col"
      >
        <Card
          to={`/subject/${id}`}
          gradient={theme.gradient}
          className="p-6 flex flex-col h-full group relative"
          ariaLabel={`Voir les détails du sujet : ${name}`}
        >
          <div className="flex items-start justify-between mb-4">
            <Tooltip content={name}>
              <div className={clsx(
                "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner group-hover:scale-110 group-hover:-rotate-3 relative", 
                theme.background, 
                "bg-opacity-20 text-white border border-white/5"
              )}>
                {/* Subtle glow behind icon */}
                <div className={clsx("absolute inset-0 rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500", theme.background)} />
                <Icon className={clsx("w-7 h-7 relative z-10 transition-transform duration-500 group-hover:scale-110", theme.text)} />
              </div>
            </Tooltip>
            {percent === 100 && (
              <Tooltip content="Sujet complété !">
                <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center border border-warning/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_var(--color-warning)] shadow-warning/20">
                  <Trophy className="w-4 h-4 text-warning" />
                </div>
              </Tooltip>
            )}
          </div>
          
          <h3 className="text-lg font-bold text-foreground mb-1 tracking-tight">{name}</h3>
          
          {quizzesTaken > 0 && (
            <div className="flex items-center gap-1.5 mb-2">
              <Target className="w-3.5 h-3.5 text-muted" />
              <span className="text-xs text-muted font-medium">Réussite QCM : <span className={clsx(theme.text)}>{scorePercent}%</span></span>
            </div>
          )}
          
          <div className="mt-auto pt-4">
            <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="text-muted">{completedCount}/{totalCount} chap.</span>
                <span className={clsx(theme.text)}>{percent}%</span>
            </div>
            {totalCount > 0 && (
                <div className="h-1.5 bg-surface-hover rounded-full overflow-hidden border border-border-hover">
                    <div 
                      className={clsx("h-full transition-all duration-1000 ease-out", theme.background)} 
                      style={{ width: `${percent}%` }} 
                    />
                </div>
            )}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};
