import React, { useEffect } from 'react';
import { useGamificationStore, getXPForNextLevel, getXPForCurrentLevel } from '../../store/useGamificationStore';
import { Flame, Star, Trophy, Heart, LogOut, User, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { Tooltip } from '../ui/Tooltip';
import { useNavigate } from 'react-router-dom';

export const TopBar: React.FC = () => {
  const { xp, level, streak, checkStreak, lives, checkLives } = useGamificationStore();
  const navigate = useNavigate();

  useEffect(() => {
    checkStreak();
    checkLives();
    const interval = setInterval(checkLives, 60000); // Check lives every minute
    return () => clearInterval(interval);
  }, [checkStreak, checkLives]);

  const currentLevelXP = getXPForCurrentLevel(level);
  const nextLevelXP = getXPForNextLevel(level);
  const progress = Math.min(100, Math.max(0, ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100));

  return (
    <div className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Level & XP */}
        <Tooltip content={`Niveau ${level}: ${xp} / ${nextLevelXP} XP`}>
          <div className="flex flex-col" aria-label={`Niveau ${level}, progression ${progress}%`}>
            <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-1">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-xs text-white">
                {level}
              </div>
              <span className="hidden sm:inline">Niveau {level}</span>
            </div>
            <div className="w-24 sm:w-32 h-2 bg-surface-hover rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-primary-hover"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </Tooltip>
      </div>

      <div className="flex items-center gap-3">
        {/* Lives */}
        <Tooltip content={`Vies (${lives}/24) : Vous perdez une vie en cas de mauvaise réponse au quiz. Elles se rechargent au fil du temps.`}>
          <div className="flex items-center gap-1 text-danger font-bold cursor-help" aria-label={`${lives} vies restantes sur 24`}>
            <Heart className="w-5 h-5 fill-danger" />
            <span className="text-sm">{lives}</span>
          </div>
        </Tooltip>

        {/* Streak */}
        <Tooltip content="Flamme : Votre série d'apprentissage ! Révisez un peu tous les jours pour augmenter ce compteur et gagner des bonus.">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-hover rounded-full border border-warning/20 cursor-help" aria-label={`Série de révisions actuelle : ${streak} jours`}>
            <Flame className={`w-4 h-4 ${streak > 0 ? 'text-warning fill-warning' : 'text-muted'}`} />
            <span className={`text-sm font-bold ${streak > 0 ? 'text-warning' : 'text-muted'}`}>
              {streak}
            </span>
          </div>
        </Tooltip>
        
        {/* Actions */}
        <Tooltip content="Vos Succès : Retrouvez tous les badges et trophées débloqués.">
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-hover text-warning border border-warning/20 hover:bg-warning/20 transition-colors" aria-label="Voir les badges">
            <Trophy className="w-4 h-4" />
          </button>
        </Tooltip>

        <Tooltip content="À propos de Hylst Brevet : Méthodologie et infos.">
          <button onClick={() => navigate('/legal')} className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-hover text-muted border border-border hover:bg-surface transition-colors" aria-label="À propos">
            <Info className="w-4 h-4" />
          </button>
        </Tooltip>

        <Tooltip content="Mon Profil et Paramètres : Ajustez vos préférences d'apprentissage.">
          <button onClick={() => navigate('/settings')} className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-hover text-primary border border-primary/20 hover:bg-primary/20 transition-colors" aria-label="Profil et Paramètres">
            <User className="w-4 h-4" />
          </button>
        </Tooltip>
        
        <Tooltip content="Quitter l'application (Déconnexion).">
          <button onClick={() => navigate('/login')} className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-hover text-danger border border-danger/20 hover:bg-danger/20 transition-colors" aria-label="Déconnexion">
            <LogOut className="w-4 h-4" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};
