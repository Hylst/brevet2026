import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useGamificationStore, AVAILABLE_BADGES } from '../store/useGamificationStore';
import { getXPForNextLevel, getXPForCurrentLevel } from '../store/useGamificationStore';
import { User, ArrowRight, Loader2, Download, Upload, Server, Flame, Shield, Trophy, Shuffle, Sparkles, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import clsx from 'clsx';
import { SEO } from '../components/ui/SEO';
import { downloadUserDataBackup, importUserData } from '../services/exportService';
import { motion, AnimatePresence } from 'motion/react';

const AVATAR_STYLES = ['avataaars', 'bottts', 'fun-emoji', 'lorelei', 'notionists', 'adventurer', 'open-peeps'];

export const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [favoriteSubject, setFavoriteSubject] = useState('');
  const [mentionGoal, setMentionGoal] = useState('');
  const [notes, setNotes] = useState('');
  const [futureJob, setFutureJob] = useState('');
  const [avatarStyle, setAvatarStyle] = useState('avataaars');
  const [showExtendedForm, setShowExtendedForm] = useState(false);
  const [showAllBadges, setShowAllBadges] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const login = useAuthStore(state => state.login);
  const loginAsGuest = useAuthStore(state => state.loginAsGuest);
  const isLoading = useAuthStore(state => state.isLoading);
  const user = useAuthStore(state => state.user);

  const xp = useGamificationStore(state => state.xp);
  const level = useGamificationStore(state => state.level);
  const streak = useGamificationStore(state => state.streak);
  const badges = useGamificationStore(state => state.badges);
  const lives = useGamificationStore(state => state.lives);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const nextLevelXP = getXPForNextLevel(level);
  const currentLevelXP = getXPForCurrentLevel(level);
  const xpInLevel = xp - currentLevelXP;
  const xpNeeded = nextLevelXP - currentLevelXP;
  const progressPercent = Math.min(100, (xpInLevel / xpNeeded) * 100);

  const earnedBadges = badges.map(id => AVAILABLE_BADGES.find(b => b.id === id)).filter(Boolean);
  const lockedBadges = AVAILABLE_BADGES.filter(b => !badges.includes(b.id));

  const getAvatarUrl = (seed: string, style: string) =>
    `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&backgroundColor=ffdfbf,c0aede,d1d4f9`;

  useEffect(() => {
    if (user && user.name !== 'Invité') {
      setName(user.name);
      setEmail(user.email || '');
      setCollege(user.college || '');
      setFavoriteSubject(user.favoriteSubject || '');
      setMentionGoal(user.mentionGoal || '');
      setNotes(user.notes || '');
      setFutureJob(user.futureJob || '');
    }
  }, [user]);

  const randomizeAvatar = () => {
    const currentIdx = AVATAR_STYLES.indexOf(avatarStyle);
    const nextIdx = (currentIdx + 1) % AVATAR_STYLES.length;
    setAvatarStyle(AVATAR_STYLES[nextIdx]);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      await login(email, name, {
        college,
        favoriteSubject,
        mentionGoal,
        notes,
        futureJob,
        avatar: getAvatarUrl(name, avatarStyle)
      });
      navigate(from, { replace: true });
    }
  };

  const handleGuest = () => {
    loginAsGuest();
    navigate(from, { replace: true });
  };

  const handleExportData = () => {
    downloadUserDataBackup();
  };

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const result = importUserData(content);

      if (result.success) {
        const msg = result.warnings.length > 0
          ? `✨ Données importées !\n\n${result.warnings.join('\n')}`
          : "✨ Données importées avec succès ! L'application va redémarrer.";
        alert(msg);
        window.location.href = '/';
      } else {
        const err = (result as { success: false; error: string }).error;
        alert(`Erreur lors de l'importation : ${err}`);
        console.error('Import failed:', err);
      }
    };
    reader.readAsText(file);
  };

  const isLoggedIn = user && user.name !== 'Invité';

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-start justify-center p-4 pb-24 relative">
      <SEO title={isLoggedIn ? 'Mon Profil - Hylst Brevet 2026' : 'Profil & Sauvegarde - Hylst Brevet 2026'} />

      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 p-3 bg-surface border border-border rounded-full hover:bg-surface-hover hover:text-primary transition-colors shadow-sm z-50 flex items-center gap-2"
        aria-label="Retour à l'accueil"
      >
        <ArrowRight size={20} className="rotate-180" />
        <span className="text-sm font-bold hidden sm:inline">Retour</span>
      </button>

      <div className="max-w-lg w-full mt-8">
        {/* ── Avatar & Welcome ── */}
        <div className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden mb-4">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
            <Shield className="w-48 h-48" />
          </div>

          <div className="flex flex-col items-center mb-6 relative z-10">
            <div className="relative group mb-4">
              <div className="absolute inset-0 bg-primary opacity-20 blur-xl rounded-full group-hover:scale-110 transition-transform"></div>
              {isLoggedIn ? (
                <div className="relative cursor-pointer" onClick={randomizeAvatar} title="Changer d'avatar">
                  <img
                    src={getAvatarUrl(name, avatarStyle)}
                    alt="Avatar"
                    className="w-24 h-24 rounded-3xl border-2 border-primary/20 shadow-inner bg-background"
                  />
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Shuffle size={14} />
                  </div>
                </div>
              ) : (
                <div className="w-24 h-24 bg-surface border-2 border-primary/20 text-primary rounded-3xl flex items-center justify-center shadow-inner relative z-10">
                  <User size={48} />
                </div>
              )}
            </div>

            <h1 className="text-3xl font-black text-center mb-1">
              {isLoggedIn ? `Salut ${user.name} !` : 'Bienvenue !'}
            </h1>
            <p className="text-muted text-center text-sm max-w-[280px] mx-auto leading-relaxed">
              {isLoggedIn
                ? 'Gère ton profil, explore tes badges et suis ta progression.'
                : 'Crée un profil local pour sauvegarder ta progression et gagner des badges.'}
            </p>
          </div>

          {/* ── Stats Cards ── */}
          {isLoggedIn && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
              <div className="bg-background rounded-2xl p-4 border border-border shadow-inner flex flex-col items-center">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-2">
                  <Shield size={20} />
                </div>
                <span className="text-[10px] text-muted font-bold uppercase tracking-wider">Niveau</span>
                <span className="font-black text-2xl text-foreground mt-0.5">{level}</span>
              </div>
              <div className="bg-background rounded-2xl p-4 border border-border shadow-inner flex flex-col items-center">
                <div className="w-10 h-10 bg-warning/10 text-warning rounded-xl flex items-center justify-center mb-2">
                  <Flame size={20} />
                </div>
                <span className="text-[10px] text-muted font-bold uppercase tracking-wider">Série</span>
                <span className="font-black text-2xl text-foreground mt-0.5">{streak} j</span>
              </div>
              <div className="bg-background rounded-2xl p-4 border border-border shadow-inner flex flex-col items-center">
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-2">
                  <Trophy size={20} />
                </div>
                <span className="text-[10px] text-muted font-bold uppercase tracking-wider">XP</span>
                <span className="font-black text-2xl text-foreground mt-0.5">{xp}</span>
              </div>
              <div className="bg-background rounded-2xl p-4 border border-border shadow-inner flex flex-col items-center">
                <div className="w-10 h-10 bg-danger/10 text-danger rounded-xl flex items-center justify-center mb-2">
                  <Heart size={20} />
                </div>
                <span className="text-[10px] text-muted font-bold uppercase tracking-wider">Vies</span>
                <span className="font-black text-2xl text-foreground mt-0.5">{lives}</span>
              </div>
            </div>
          )}

          {/* ── XP Progress Bar ── */}
          {isLoggedIn && (
            <div className="bg-background rounded-2xl p-4 border border-border shadow-inner">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-muted">Niveau {level}</span>
                <span className="text-xs font-bold text-muted">
                  {xpInLevel} / {xpNeeded} XP
                </span>
              </div>
              <div className="w-full h-2.5 bg-surface-hover rounded-full overflow-hidden border border-border-hover">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-indigo-500 relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12"></div>
                </motion.div>
              </div>
              <p className="text-[10px] text-muted text-center mt-2">
                {nextLevelXP - xp} XP avant le niveau {level + 1}
              </p>
            </div>
          )}
        </div>

        {/* ── Badges Section ── */}
        {isLoggedIn && (
          <div className="bg-surface border border-border rounded-3xl p-6 shadow-xl mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-warning/10 text-warning rounded-lg flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <h2 className="text-lg font-black text-foreground">Badges</h2>
              </div>
              <span className="text-xs font-bold text-muted bg-background px-3 py-1 rounded-full border border-border">
                {earnedBadges.length} / {AVAILABLE_BADGES.length}
              </span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {earnedBadges.slice(0, showAllBadges ? earnedBadges.length : 12).map((badge) => badge && (
                <div
                  key={badge.id}
                  className="flex flex-col items-center p-2 rounded-2xl bg-background border border-primary/20 shadow-sm hover:border-primary/40 transition-colors group"
                  title={`${badge.name} : ${badge.description}`}
                >
                  <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">{badge.icon}</span>
                  <span className="text-[9px] font-bold text-foreground text-center leading-tight">{badge.name}</span>
                </div>
              ))}
              {!showAllBadges && lockedBadges.length > 0 && (
                <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-background/50 border border-dashed border-border">
                  <span className="text-lg mb-1 opacity-30">?</span>
                  <span className="text-[9px] text-muted text-center leading-tight">{lockedBadges.length} cachés</span>
                </div>
              )}
            </div>

            {earnedBadges.length > 12 && (
              <button
                onClick={() => setShowAllBadges(!showAllBadges)}
                className="mt-3 w-full flex items-center justify-center gap-1 text-xs font-bold text-muted hover:text-primary transition-colors py-2"
              >
                {showAllBadges ? (
                  <>Voir moins <ChevronUp size={14} /></>
                ) : (
                  <>Voir tout <ChevronDown size={14} /></>
                )}
              </button>
            )}
          </div>
        )}

        {/* ── Profile Form ── */}
        <div className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-xl mb-4">
          <h2 className="text-xl font-black text-foreground mb-1">
            {isLoggedIn ? 'Modifier mon profil' : 'Créer mon profil'}
          </h2>
          <p className="text-muted text-sm mb-6">
            Ces données restent <strong>uniquement sur ton appareil</strong>.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-foreground mb-1 ml-1">Prénom / Pseudo *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background border border-border rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                placeholder="Ex: Thomas"
                required
              />
            </div>

            <AnimatePresence initial={false}>
              {showExtendedForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 ml-1">Email <span className="text-xs font-normal opacity-70">(Reste en local)</span></label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-background border border-border rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                      placeholder="thomas@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-1 ml-1">Collège</label>
                      <input
                        type="text"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        className="w-full bg-background border border-border rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-sm"
                        placeholder="Ex: Jean Moulin"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-1 ml-1">Matière préférée</label>
                      <select
                        value={favoriteSubject}
                        onChange={(e) => setFavoriteSubject(e.target.value)}
                        className="w-full bg-background border border-border rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-sm appearance-none"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="maths">Mathématiques</option>
                        <option value="francais">Français</option>
                        <option value="histoire">Histoire-Géo</option>
                        <option value="sciences">Sciences</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 ml-1">Futur métier / Rêve</label>
                    <input
                      type="text"
                      value={futureJob}
                      onChange={(e) => setFutureJob(e.target.value)}
                      className="w-full bg-background border border-border rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-sm"
                      placeholder="Ex: Médecin, Artiste..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 ml-1">Remarques</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={2}
                      className="w-full bg-background border border-border rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-sm resize-none"
                      placeholder="Notes personnelles, objectifs..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 ml-1">Objectif Mention</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Assez Bien', emoji: '🥈' },
                        { label: 'Bien', emoji: '🥇' },
                        { label: 'Très Bien', emoji: '👑' },
                      ].map(({ label, emoji }) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => setMentionGoal(label)}
                          className={clsx(
                            "py-3 px-2 rounded-xl text-xs font-bold border transition-all flex flex-col items-center gap-1",
                            mentionGoal === label
                              ? "bg-primary text-white border-primary shadow-sm"
                              : "bg-background text-muted border-border hover:border-primary/30"
                          )}
                        >
                          <span className="text-lg">{emoji}</span>
                          <span>{label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setShowExtendedForm(!showExtendedForm)}
              className="w-full flex items-center justify-center gap-1 text-xs font-bold text-muted hover:text-primary transition-colors py-1"
            >
              {showExtendedForm ? (
                <>Masquer les options avancées <ChevronUp size={14} /></>
              ) : (
                <>Plus d'options <ChevronDown size={14} /></>
              )}
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-hover text-white font-black py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : isLoggedIn ? (
                <>Mettre à jour mon profil</>
              ) : (
                <>Créer mon profil local</>
              )}
            </button>
          </form>

          {!isLoggedIn && (
            <>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-surface text-muted font-medium">Ou</span>
                </div>
              </div>

              <button
                onClick={handleGuest}
                className="w-full bg-background border border-border hover:bg-surface-hover text-foreground font-bold py-4 rounded-2xl transition-colors flex items-center justify-center gap-2"
              >
                <User size={20} />
                Rester en invité anonyme
                <ArrowRight size={16} className="ml-2" />
              </button>
            </>
          )}
        </div>

        {/* ── Export / Import ── */}
        <div className="bg-surface border border-border rounded-3xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-info/10 text-info rounded-lg flex items-center justify-center">
              <Server size={18} />
            </div>
            <h2 className="text-lg font-black text-foreground">Mes données</h2>
          </div>

          <p className="text-xs text-muted mb-4 leading-relaxed">
            Exporte ou importe ta progression complète (XP, badges, quiz) au format JSON.
            Idéal pour passer d'un appareil à un autre ou faire une sauvegarde avant une mise à jour.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleExportData}
              className="flex items-center justify-center gap-2 p-4 bg-background border border-success/30 rounded-2xl text-sm font-bold hover:border-success hover:bg-success/5 transition-all group"
            >
              <Download size={18} className="group-hover:-translate-y-0.5 transition-transform text-success" />
              <span>Exporter</span>
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center justify-center gap-2 p-4 bg-background border border-primary/30 rounded-2xl text-sm font-bold hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <Upload size={18} className="group-hover:-translate-y-0.5 transition-transform text-primary" />
              <span>Importer</span>
            </button>
            <input
              type="file"
              accept=".json"
              ref={fileInputRef}
              onChange={handleImportData}
              className="hidden"
            />
          </div>
        </div>

        {/* ── Guest Warning ── */}
        {!isLoggedIn && (
          <div className="mt-4 p-4 bg-warning/10 border border-warning/20 rounded-2xl">
            <p className="text-xs text-warning text-center leading-relaxed">
              <strong>Mode invité :</strong> ta progression sera perdue si tu effaces les données du navigateur.
              Crée un profil pour sauvegarder ton XP et débloquer des badges !
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
