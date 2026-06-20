import React, { useEffect, useState } from 'react';
import { GraduationCap, Flame, Menu, X, Home, BookOpen, Settings, Info, User, LogOut, Heart } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useGamificationStore, getXPForNextLevel, getXPForCurrentLevel } from '../store/useGamificationStore';
import { useAuthStore } from '../store/useAuthStore';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import { InfoModal } from './ui/InfoModal';

export const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const xp = useGamificationStore(state => state.xp);
  const level = useGamificationStore(state => state.level);
  const streak = useGamificationStore(state => state.streak);
  const checkStreak = useGamificationStore(state => state.checkStreak);
  const lives = useGamificationStore(state => state.lives);
  const checkLives = useGamificationStore(state => state.checkLives);
  
  const { user, logout } = useAuthStore();
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  useEffect(() => {
    checkStreak();
    checkLives();
    // Re-check lives every minute
    const interval = setInterval(() => checkLives(), 60000);
    return () => clearInterval(interval);
  }, [checkStreak, checkLives]);

  const currentLevelXP = getXPForCurrentLevel(level);
  const nextLevelXP = getXPForNextLevel(level);
  const progress = Math.min(100, Math.max(0, ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Accueil', path: '/' },
    { icon: BookOpen, label: 'Matières', path: '/subjects' },
    { icon: Settings, label: 'Options', path: '/settings' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 -ml-2 text-foreground hover:bg-surface rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-br from-primary to-indigo-600 p-2 rounded-xl shadow-lg shadow-primary/20 border border-primary/20 shrink-0"
              >
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <span className="font-extrabold text-xl text-foreground tracking-tight hidden sm:flex items-center">
                {'Brevet'.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    animate={{
                      y: [0, -3, 0],
                      color: ["var(--color-foreground)", "var(--color-primary)", "var(--color-foreground)"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span 
                  className="text-primary inline-block ml-1"
                  animate={{ 
                    scale: [1, 1.15, 1],
                    rotate: [0, 5, -5, 0],
                    filter: [
                      "hue-rotate(0deg) drop-shadow(0 0 2px var(--color-primary))",
                      "hue-rotate(90deg) drop-shadow(0 0 12px var(--color-primary))",
                      "hue-rotate(0deg) drop-shadow(0 0 2px var(--color-primary))"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  2026
                </motion.span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-6 shrink-0">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={clsx(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary p-2 lg:p-0 rounded-lg lg:rounded-none",
                    isActive ? "text-primary bg-primary/10 lg:bg-transparent" : "text-muted hover:bg-surface lg:hover:bg-transparent"
                  )}
                  title={item.label}
                >
                  <item.icon className="w-5 h-5 lg:w-4 lg:h-4" />
                  <span className="hidden lg:inline">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Gamification Stats & Profile */}
        <div className="flex items-center gap-2 lg:gap-4 justify-end flex-1 min-w-0">
          {/* Level & XP */}
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-1.5">
              <span className="text-muted text-[10px] font-bold uppercase tracking-wider mr-2">{xp} / {nextLevelXP} XP</span>
              <span className="text-xs">Niv {level}</span>
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-primary to-indigo-500 text-[10px] shadow-sm border border-primary/30 text-white">
                {level}
              </div>
            </div>
            <div className="w-24 sm:w-32 h-1.5 bg-surface-hover rounded-full overflow-hidden border border-border-hover">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-indigo-500 relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12"></div>
              </motion.div>
            </div>
          </div>

          {/* Streak & Lives */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface rounded-full border border-warning/20 shadow-sm">
              <Flame className={`w-4 h-4 ${streak > 0 ? 'text-warning fill-warning drop-shadow-[0_0_8px_var(--color-warning)]' : 'text-subtle'}`} />
              <span className={`text-sm font-bold ${streak > 0 ? 'text-warning' : 'text-subtle'}`}>
                {streak}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface rounded-full border border-danger/20 shadow-sm">
              <Heart className={`w-4 h-4 text-danger ${lives > 0 ? 'fill-danger drop-shadow-[0_0_8px_var(--color-danger)]' : 'opacity-50'}`} />
              <span className={`text-sm font-bold ${lives > 0 ? 'text-danger' : 'text-subtle'}`}>
                {lives}
              </span>
            </div>
          </div>

          {/* Info Button */}
          <button 
            onClick={() => setIsInfoModalOpen(true)}
            className="p-2 text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors hidden sm:block"
            aria-label="Informations sur l'application"
          >
            <Info className="w-5 h-5" />
          </button>

          {/* User Profile */}
          {user ? (
            <div className="flex items-center gap-3 pl-2 sm:border-l border-border">
              <Link 
                to="/profile" 
                className="flex items-center gap-3 hover:bg-surface p-1.5 rounded-xl transition-colors group"
                title="Mon Profil"
              >
                <div className="hidden lg:flex flex-col items-end">
                  <span className="text-sm font-bold leading-tight group-hover:text-primary transition-colors">{user.name}</span>
                  <span className="text-[10px] text-muted">{user.isGuest ? 'Mode Invité' : 'Mon Profil'}</span>
                </div>
                {user.avatar && !user.isGuest ? (
                  <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full bg-surface-hover border border-border group-hover:border-primary transition-colors" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-surface-hover border border-border flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <User size={16} />
                  </div>
                )}
              </Link>
              <button 
                onClick={logout} 
                className="p-1.5 text-muted hover:text-danger hover:bg-danger/10 rounded-lg transition-colors ml-1" 
                title="Se déconnecter"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-sm font-medium text-primary hover:text-primary-hover transition-colors pl-2 border-l border-border">
              Connexion
            </Link>
          )}
        </div>
      </div>

      {/* Info Modal */}
      <InfoModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden absolute top-16 left-0 right-0 bg-surface border-b border-border shadow-xl"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    aria-current={isActive ? "page" : undefined}
                    className={clsx(
                      "flex items-center gap-3 p-3 rounded-xl transition-colors",
                      isActive ? "bg-primary/10 text-primary font-bold" : "text-foreground hover:bg-background"
                    )}
                  >
                    <item.icon className={clsx("w-5 h-5", isActive && "fill-current/20")} />
                    {item.label}
                  </Link>
                );
              })}
              <button 
                onClick={() => setIsInfoModalOpen(true)}
                className="flex items-center gap-3 p-3 rounded-xl transition-colors text-foreground hover:bg-background text-left"
              >
                <Info className="w-5 h-5" />
                À propos
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
