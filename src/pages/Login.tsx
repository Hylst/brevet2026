import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useGamificationStore } from '../store/useGamificationStore';
import { User, ArrowRight, Loader2, Download, Upload, Server, Flame, Shield, Trophy } from 'lucide-react';
import clsx from 'clsx';
import { SEO } from '../components/ui/SEO';
import { downloadUserDataBackup, importUserData } from '../services/exportService';

export const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [favoriteSubject, setFavoriteSubject] = useState('');
  const [mentionGoal, setMentionGoal] = useState('');
  const [notes, setNotes] = useState('');
  const [futureJob, setFutureJob] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const login = useAuthStore(state => state.login);
  const loginAsGuest = useAuthStore(state => state.loginAsGuest);
  const isLoading = useAuthStore(state => state.isLoading);
  const user = useAuthStore(state => state.user);
  
  const xp = useGamificationStore(state => state.xp);
  const level = useGamificationStore(state => state.level);
  const streak = useGamificationStore(state => state.streak);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      await login(email, name, {
        college,
        favoriteSubject,
        mentionGoal,
        notes,
        futureJob
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

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4 pb-24 relative">
      <SEO title="Profil & Sauvegarde - Hylst Brevet 2026" />
      
      {/* Back button */}
      <button 
        onClick={() => navigate('/')} 
        className="absolute top-4 left-4 p-3 bg-surface border border-border rounded-full hover:bg-surface-hover hover:text-primary transition-colors shadow-sm z-50 flex items-center gap-2"
        aria-label="Retour à l'accueil"
      >
        <ArrowRight size={20} className="rotate-180" />
        <span className="text-sm font-bold hidden sm:inline">Retour</span>
      </button>

      <div className="max-w-md w-full">
        <div className="bg-surface border border-border rounded-t-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Shield className="w-48 h-48" />
          </div>

          <div className="flex justify-center mb-6 relative z-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary opacity-20 blur-xl rounded-full group-hover:scale-110 transition-transform"></div>
              <div className="w-20 h-20 bg-surface border-2 border-primary/20 text-primary rounded-3xl flex items-center justify-center shadow-inner relative z-10 transform group-hover:-translate-y-1 transition-transform">
                <User size={40} />
                <div className={clsx(
                  "absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 border-surface shadow-sm",
                  user && user.name !== 'Invité' ? "bg-success text-white" : "bg-warning text-white"
                )}>
                  {user && user.name !== 'Invité' ? '✓' : '!'}
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-black text-center mb-2">{user && user.name !== 'Invité' ? 'Mon Profil' : 'Sauvegarde'}</h1>
          <p className="text-muted text-center mb-6 text-sm max-w-[280px] mx-auto leading-relaxed">
            Vos données vivent <strong>dans votre appareil</strong>. Mettez à jour votre profil ou importez/exportez vos requêtes.
          </p>

          {user && (
            <div className="flex items-center justify-center gap-4 mb-8 bg-background rounded-2xl p-4 border border-border shadow-inner">
               <div className="flex flex-col items-center">
                 <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-1">
                   <Shield size={20} />
                 </div>
                 <span className="text-[10px] text-muted font-bold uppercase tracking-wider">Niveau</span>
                 <span className="font-black text-lg text-foreground">{level}</span>
               </div>
               <div className="w-px h-12 bg-border"></div>
               <div className="flex flex-col items-center">
                 <div className="w-10 h-10 bg-warning/10 text-warning rounded-xl flex items-center justify-center mb-1">
                   <Flame size={20} />
                 </div>
                 <span className="text-[10px] text-muted font-bold uppercase tracking-wider">Série</span>
                 <span className="font-black text-lg text-foreground">{streak} j</span>
               </div>
               <div className="w-px h-12 bg-border"></div>
               <div className="flex flex-col items-center">
                 <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-1">
                   <Trophy size={20} />
                 </div>
                 <span className="text-[10px] text-muted font-bold uppercase tracking-wider">XP</span>
                 <span className="font-black text-lg text-foreground">{xp}</span>
               </div>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 mb-6 relative z-10">
            <div>
              <label className="block text-sm font-bold text-foreground mb-1 ml-1">Prénom / Pseudo</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background border border-border rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                placeholder="Ex: Thomas"
                required
              />
            </div>
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
                <label className="block text-sm font-bold text-foreground mb-1 ml-1">Collège <span className="text-[10px] font-normal opacity-60">(Optionnel)</span></label>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-bold text-foreground mb-1 ml-1">Futur métier / Rêve <span className="text-[10px] font-normal opacity-60">(Optionnel)</span></label>
                <input 
                  type="text" 
                  value={futureJob}
                  onChange={(e) => setFutureJob(e.target.value)}
                  className="w-full bg-background border border-border rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-sm"
                  placeholder="Ex: Médecin, Artiste..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-1 ml-1">Remarques <span className="text-[10px] font-normal opacity-60">(Optionnel)</span></label>
              <textarea 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full bg-background border border-border rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-sm resize-none"
                placeholder="Notes personnelles, objectifs..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-1 ml-1">Objectif Mention</label>
              <div className="grid grid-cols-3 gap-2">
                {['Assez Bien', 'Bien', 'Très Bien'].map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => setMentionGoal(goal)}
                    className={clsx(
                      "py-2 px-1 rounded-xl text-[10px] font-bold border transition-all",
                      mentionGoal === goal 
                        ? "bg-primary text-white border-primary shadow-sm" 
                        : "bg-background text-muted border-border hover:border-primary/30"
                    )}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-hover text-white font-black py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : (user && user.name !== 'Invité' ? 'Mettre à jour mon profil' : 'Créer mon profil local')}
            </button>
          </form>

          {(!user || user.name === 'Invité') && (
            <>
              <div className="relative mb-6">
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
        
        {/* Export / Import Box */}
        <div className="bg-background/80 border border-t-0 border-border rounded-b-3xl p-6 mt-px backdrop-blur-md flex flex-col gap-4 shadow-sm">
          <div className="flex items-center justify-center gap-2 text-sm text-foreground font-bold">
            <Server size={18} className="text-info" />
            <p>Gestion des Données (Local)</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={handleExportData}
              className="flex items-center justify-center gap-2 p-3 bg-surface border border-border rounded-xl text-sm font-bold hover:border-primary/50 hover:text-primary transition-colors group"
            >
              <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              Exporter
            </button>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center justify-center gap-2 p-3 bg-surface border border-border rounded-xl text-sm font-bold hover:border-primary/50 hover:text-primary transition-colors group"
            >
              <Upload size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              Importer
            </button>
            <input 
              type="file" 
              accept=".json" 
              ref={fileInputRef} 
              onChange={handleImportData} 
              className="hidden" 
            />
          </div>
          <p className="text-[11px] text-muted text-center leading-relaxed">
            Téléchargez un fichier <code>.json</code> pour transférer votre XP et votre profil sur un autre appareil (de l'ordi au téléphone par ex) !
          </p>
        </div>

      </div>
    </div>
  );
};

