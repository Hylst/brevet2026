import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGamificationStore } from '../../store/useGamificationStore';
import { Star, X } from 'lucide-react';

export const LevelUpModal: React.FC = () => {
  const { level, showLevelUpModal, closeLevelUpModal } = useGamificationStore();

  return (
    <AnimatePresence>
      {showLevelUpModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeLevelUpModal}
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="relative bg-surface border border-border rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            
            <button 
              onClick={closeLevelUpModal}
              className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10">
              <motion.div 
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/30"
              >
                <Star className="w-12 h-12 text-white fill-white" />
              </motion.div>

              <h2 className="text-3xl font-black text-foreground mb-2 uppercase tracking-tight">
                Niveau {level} !
              </h2>
              <p className="text-muted mb-8">
                Félicitations ! Tu as gagné assez d'XP pour passer au niveau supérieur. Continue comme ça !
              </p>

              <button 
                onClick={closeLevelUpModal}
                className="w-full py-3 px-6 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-colors active:scale-95"
              >
                Continuer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
