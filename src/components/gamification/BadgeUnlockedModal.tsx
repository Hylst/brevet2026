import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGamificationStore, AVAILABLE_BADGES } from '../../store/useGamificationStore';
import { Award, X } from 'lucide-react';
import { playLevelUpSound } from '../../services/soundService';
import confetti from 'canvas-confetti';

export const BadgeUnlockedModal: React.FC = () => {
  const { showBadgeUnlocked, closeBadgeUnlocked } = useGamificationStore();
  
  const badge = AVAILABLE_BADGES.find(b => b.id === showBadgeUnlocked);

  useEffect(() => {
    if (showBadgeUnlocked && badge) {
      playLevelUpSound();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#fbbf24', '#ffffff']
      });
    }
  }, [showBadgeUnlocked, badge]);

  if (!badge) return null;

  return (
    <AnimatePresence>
      {showBadgeUnlocked && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeBadgeUnlocked}
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="relative bg-surface border border-border rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-warning/20 rounded-full blur-3xl pointer-events-none" />
            
            <button 
              onClick={closeBadgeUnlocked}
              className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10">
              <motion.div 
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: [0, -10, 10, -10, 10, 0], scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.2, rotate: { type: "keyframes", delay: 1, repeat: Infinity, repeatDelay: 2, duration: 1.5 } }}
                className="w-24 h-24 mx-auto bg-gradient-to-br from-warning to-warning-hover rounded-full flex items-center justify-center mb-6 shadow-lg shadow-warning/30 text-4xl border-4 border-warning/50 relative"
              >
                <div className="absolute inset-0 rounded-full border-4 border-warning/30 animate-ping"></div>
                <span className="relative z-10">{badge.icon}</span>
              </motion.div>

              <h2 className="text-2xl font-black text-foreground mb-2 uppercase tracking-tight">
                Badge débloqué !
              </h2>
              <h3 className="text-xl font-bold text-warning mb-2">
                {badge.name}
              </h3>
              <p className="text-muted mb-8">
                {badge.description}
              </p>

              <button 
                onClick={closeBadgeUnlocked}
                className="w-full py-3 px-6 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-colors active:scale-95"
              >
                Génial !
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
