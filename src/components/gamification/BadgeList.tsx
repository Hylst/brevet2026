import React, { useState } from 'react';
import { useGamificationStore, AVAILABLE_BADGES, Badge } from '../../store/useGamificationStore';
import { motion, useAnimation, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import { Lock, Medal, X, Flame, Sparkles, Moon, Sun, Calculator, Feather, Hourglass, Compass, Globe, Zap, Target } from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';
import { playBadgeClickSound } from '../../services/soundService';
import confetti from 'canvas-confetti';

const getBadgeTheme = (id: string) => {
  if (id.includes('streak')) return { icon: <Flame className="w-full h-full text-orange-500 opacity-20" />, color: "from-orange-500/20 to-red-500/20", anim: { rotate: [0, 5, -5, 0], scale: [1, 1.1, 1], transition: { duration: 0.5, repeat: Infinity } } };
  if (id.includes('maths')) return { icon: <Calculator className="w-full h-full text-blue-500 opacity-20" />, color: "from-blue-500/20 to-cyan-500/20", anim: { y: [0, -10, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } } };
  if (id.includes('francais')) return { icon: <Feather className="w-full h-full text-purple-500 opacity-20" />, color: "from-purple-500/20 to-pink-500/20", anim: { rotate: [0, 10, -10, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } } };
  if (id.includes('histoire')) return { icon: <Hourglass className="w-full h-full text-amber-500 opacity-20" />, color: "from-amber-500/20 to-yellow-500/20", anim: { rotate: [0, 180, 180, 0], transition: { duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 1] } } };
  if (id.includes('geo')) return { icon: <Compass className="w-full h-full text-green-500 opacity-20" />, color: "from-emerald-500/20 to-teal-500/20", anim: { rotate: [0, 360], transition: { duration: 8, repeat: Infinity, ease: "linear" } } };
  if (id.includes('emc')) return { icon: <Globe className="w-full h-full text-indigo-500 opacity-20" />, color: "from-indigo-500/20 to-blue-500/20", anim: { rotate: [0, -360], transition: { duration: 10, repeat: Infinity, ease: "linear" } } };
  if (id.includes('sciences')) return { icon: <Zap className="w-full h-full text-yellow-500 opacity-20" />, color: "from-yellow-500/20 to-orange-500/20", anim: { scale: [1, 1.2, 1], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'], transition: { duration: 0.8, repeat: Infinity } } };
  if (id === 'night_owl') return { icon: <Moon className="w-full h-full text-violet-500 opacity-20" />, color: "from-violet-900/40 to-indigo-900/40", anim: { y: [0, 5, 0], rotate: [0, -5, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } } };
  if (id === 'early_bird') return { icon: <Sun className="w-full h-full text-yellow-500 opacity-20" />, color: "from-yellow-400/20 to-orange-400/20", anim: { rotate: [0, 90, 180, 270, 360], transition: { duration: 10, repeat: Infinity, ease: "linear" } } };
  if (id === 'first_lesson') return { icon: <Sparkles className="w-full h-full text-amber-500 opacity-20" />, color: "from-amber-400/20 to-yellow-300/20", anim: { scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7], transition: { duration: 1.5, repeat: Infinity } } };
  return { icon: <Target className="w-full h-full text-primary opacity-20" />, color: "from-primary/20 to-primary-focus/20", anim: { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity } } };
};

const ExpandedBadge: React.FC<{ badge: Badge; onClose: () => void }> = ({ badge, onClose }) => {
  const theme = getBadgeTheme(badge.id);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        layoutId={`badge-container-${badge.id}`}
        className={clsx("relative w-full max-w-sm md:max-w-md rounded-[3rem] p-10 md:p-12 flex flex-col items-center text-center overflow-hidden border shadow-2xl bg-surface", "bg-gradient-to-br " + theme.color)}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-surface/80 hover:bg-surface border border-border transition-colors z-20 text-foreground"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Dynamic Background Element */}
        <motion.div 
          initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 360, scale: 1.8, opacity: 1 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-[150%] h-[150%] flex items-center justify-center pointer-events-none -z-10"
        >
          {theme.icon}
        </motion.div>

        <motion.div 
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
        >
           <motion.div 
              animate={theme.anim as any}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center text-6xl md:text-7xl mb-6 shadow-inner border bg-gradient-to-br from-warning to-warning/80 border-warning/50 relative z-10"
           >
             <motion.div layoutId={`badge-icon-${badge.id}`}>
               {badge.icon}
             </motion.div>
           </motion.div>
        </motion.div>
        
        <motion.h2 
          layoutId={`badge-title-${badge.id}`}
          className="font-black text-3xl md:text-4xl mb-4 text-warning"
        >
          {badge.name}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-foreground font-medium leading-relaxed relative z-10"
        >
          {badge.description}
        </motion.p>
      </motion.div>
      
      <ConfettiEffect badgeId={badge.id} />
    </motion.div>
  );
};

const ConfettiEffect: React.FC<{ badgeId: string }> = ({ badgeId }) => {
  React.useEffect(() => {
      let colors = ['#f59e0b', '#fbbf24'];
      if (badgeId.includes('maths')) colors = ['#3b82f6', '#60a5fa'];
      if (badgeId.includes('streak')) colors = ['#ef4444', '#f97316'];

      const duration = 3000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
  }, [badgeId]);
  return null;
}

const BadgeItem: React.FC<{ badge: Badge; isEarned: boolean; idx: number; compact?: boolean; onClick: () => void }> = ({ badge, isEarned, idx, compact, onClick }) => {
  return (
    <Tooltip content={isEarned ? `Débloqué : ${badge.description}` : `À débloquer : ${badge.description}`}>
      <motion.div
        layoutId={`badge-container-${badge.id}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.05 }}
        whileHover={isEarned ? { scale: 1.05, y: -5 } : { scale: 1.02 }}
        onClick={() => {
           if (isEarned) {
             playBadgeClickSound();
             onClick();
           }
        }}
        className={clsx(
           "relative border flex flex-col items-center text-center transition-all duration-300 w-full focus:outline-none focus:ring-2 focus:ring-warning/50 cursor-pointer overflow-hidden group",
           compact ? "p-3 rounded-xl" : "p-5 rounded-2xl",
           isEarned 
             ? "bg-surface/80 border-warning/30 shadow-lg shadow-warning/10 hover:shadow-xl hover:shadow-warning/20 hover:border-warning/60" 
             : "bg-surface/40 border-border opacity-70 grayscale hover:grayscale-[0.5] hover:opacity-100"
        )}
        tabIndex={0}
        role="article"
      >
        <div className={clsx(
            "rounded-full flex items-center justify-center text-3xl mb-3 shadow-inner border group-hover:scale-110 transition-transform duration-300",
            compact ? "w-10 h-10 text-xl" : "w-14 h-14",
            isEarned ? "bg-gradient-to-br from-warning to-warning/80 border-warning/50" : "bg-surface-hover border-border-hover"
        )}>
            {isEarned ? (
            <motion.span layoutId={`badge-icon-${badge.id}`}>{badge.icon}</motion.span>
            ) : (
            <Lock className={clsx("text-subtle", compact ? "w-4 h-4" : "w-6 h-6")} />
            )}
        </div>
        
        <motion.h4 layoutId={`badge-title-${badge.id}`} className={clsx(
            "font-bold text-sm mb-1 line-clamp-1",
            compact ? "text-xs" : "text-sm mb-1.5",
            isEarned ? "text-warning" : "text-muted"
        )}>
            {badge.name}
        </motion.h4>
        
        <p className={clsx(
            "text-subtle font-medium leading-relaxed",
            compact ? "text-[10px] hidden" : "text-[11px]"
        )}>
            {badge.description}
        </p>
      </motion.div>
    </Tooltip>
  );
};

export const BadgeList: React.FC<{ layout?: 'compact' | 'default' }> = ({ layout = 'default' }) => {
  const { badges } = useGamificationStore();
  const isCompact = layout === 'compact';
  const [selectedBadgeId, setSelectedBadgeId] = useState<string | null>(null);

  const selectedBadge = selectedBadgeId ? AVAILABLE_BADGES.find(b => b.id === selectedBadgeId) : null;

  return (
    <section className={clsx(isCompact ? "" : "mt-8")}>
      {!isCompact && (
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-xl font-extrabold text-foreground flex items-center gap-3">
            <Medal className="w-6 h-6 text-warning" aria-hidden="true" />
            Mes Badges
          </h2>
          <span className="text-xs font-bold text-warning bg-warning/10 px-3 py-1 rounded-full border border-warning/20">
            {badges.length} / {AVAILABLE_BADGES.length}
          </span>
        </div>
      )}
      
      <div className={clsx(
        "grid gap-4",
        isCompact ? "grid-cols-2 lg:grid-cols-2" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      )}>
        {AVAILABLE_BADGES.map((badge, idx) => {
          const isEarned = badges.includes(badge.id);
          return (
            <BadgeItem 
              key={badge.id} 
              badge={badge} 
              isEarned={isEarned} 
              idx={idx} 
              compact={isCompact} 
              onClick={() => setSelectedBadgeId(badge.id)} 
            />
          );
        })}
      </div>

      <AnimatePresence>
        {selectedBadge && (
           <ExpandedBadge 
             badge={selectedBadge} 
             onClose={() => {
               setSelectedBadgeId(null);
             }} 
           />
        )}
      </AnimatePresence>
    </section>
  );
};

