import React, { useState, useEffect, useRef } from 'react';
import { resetProgress, getProgress, toggleTimerSetting, toggleSoundSetting } from '../services/storageService';
import {
  Trash2, Moon, Wifi, WifiOff, Component, AlertTriangle, Timer, Volume2,
  Settings as SettingsIcon, Download, Upload, CheckCircle, XCircle,
  RefreshCw, Sparkles, ChevronRight, Info, ShieldCheck, AlertCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Tooltip } from '../components/ui/Tooltip';
import clsx from 'clsx';
import { downloadUserDataBackup, importUserData } from '../services/exportService';
import { useUpdateDetection } from '../hooks/useUpdateDetection';
import { APP_VERSION, CHANGELOG } from '../version';
import { FIXES } from '../fixes';
import { motion, AnimatePresence } from 'motion/react';

// ─────────────────────────────────────────────
// Sub-component: Toggle switch
// ─────────────────────────────────────────────
const Toggle: React.FC<{
  enabled: boolean;
  onToggle: () => void;
  ariaLabel: string;
  color?: string;
}> = ({ enabled, onToggle, ariaLabel, color = 'bg-primary' }) => (
  <button
    onClick={onToggle}
    role="switch"
    aria-checked={enabled}
    aria-label={ariaLabel}
    className={clsx(
      'relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300',
      'focus:outline-none focus:ring-4 focus:ring-primary/20',
      enabled ? color : 'bg-surface-hover border border-border',
    )}
  >
    <span
      className={clsx(
        'inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition duration-300',
        enabled ? 'translate-x-6' : 'translate-x-1',
      )}
    />
  </button>
);

// ─────────────────────────────────────────────
// Sub-component: SW Update Banner
// ─────────────────────────────────────────────
const SwUpdateBanner: React.FC<{ onApply: () => void }> = ({ onApply }) => (
  <motion.div
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/40 rounded-2xl text-sm"
  >
    <RefreshCw className="w-5 h-5 text-primary shrink-0 animate-spin" />
    <div className="flex-1">
      <p className="font-bold text-foreground">Mise à jour disponible !</p>
      <p className="text-muted text-xs mt-0.5">
        Une nouvelle version de l'app est prête en arrière-plan.
      </p>
    </div>
    <button
      onClick={onApply}
      className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-xl hover:brightness-110 transition shrink-0"
    >
      Appliquer
    </button>
  </motion.div>
);

// ─────────────────────────────────────────────
// Sub-component: Nouveautés Modal
// ─────────────────────────────────────────────
const NouveautesModal: React.FC<{
  previousVersion: string | null;
  onClose: () => void;
}> = ({ previousVersion, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="bg-surface border border-border rounded-3xl w-full max-w-md shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 px-6 pt-6 pb-5 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-black text-foreground">Nouveautés v{APP_VERSION}</h2>
            {previousVersion && (
              <p className="text-xs text-muted">
                Mis à jour depuis la v{previousVersion}
              </p>
            )}
          </div>
        </div>
        {/* Export reminder */}
        <div className="flex items-start gap-2 mt-3 p-3 bg-warning/10 border border-warning/30 rounded-xl">
          <ShieldCheck className="w-4 h-4 text-warning shrink-0 mt-0.5" />
          <p className="text-xs text-warning leading-relaxed">
            <strong>Conseil :</strong> Pense à <strong>exporter ta progression</strong> régulièrement 
            (section « Mes Données » ci-dessous) pour pouvoir la restaurer en cas de problème.
          </p>
        </div>
      </div>

      {/* Changelog entries */}
      <div className="max-h-64 overflow-y-auto p-5 space-y-4">
        {CHANGELOG.map((entry) => (
          <div key={entry.version}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                v{entry.version}
              </span>
              <span className="text-xs text-muted">{entry.date}</span>
            </div>
            <ul className="space-y-1.5">
              {entry.highlights.map((item, i) => (
                <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-5 border-t border-border">
        <button
          onClick={onClose}
          className="w-full py-3 bg-primary text-white font-bold rounded-2xl hover:brightness-110 transition"
        >
          C'est parti ! 🚀
        </button>
      </div>
    </motion.div>
  </div>
);

// ─────────────────────────────────────────────
// Sub-component: Voir les Nouveautés button
// ─────────────────────────────────────────────
const ChangelogButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 text-xs text-primary hover:text-primary/80 underline underline-offset-2 font-medium transition"
  >
    <Sparkles className="w-3.5 h-3.5" />
    Voir les nouveautés de la v{APP_VERSION}
  </button>
);

// ─────────────────────────────────────────────
// Sub-component: Suivi des corrections Modal
// ─────────────────────────────────────────────
const SuiviDesCorrectionsModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="bg-surface border border-border rounded-3xl w-full max-w-md shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
    >
      <div className="bg-gradient-to-r from-success/20 to-primary/20 px-6 pt-6 pb-5 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-success/20 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-success" />
          </div>
          <div>
            <h2 className="text-lg font-black text-foreground">Suivi des corrections</h2>
            <p className="text-xs text-muted">Bugs corrigés et améliorations</p>
          </div>
        </div>
        <div className="flex items-start gap-2 mt-3 p-3 bg-info/10 border border-info/30 rounded-xl">
          <Info className="w-4 h-4 text-info shrink-0 mt-0.5" />
          <p className="text-xs text-info leading-relaxed">
            Chaque entrée est horodatée pour que tu puisses suivre l'évolution de l'app.
          </p>
        </div>
      </div>

      <div className="overflow-y-auto p-5 space-y-3 flex-1">
        {FIXES.map((fix, i) => (
          <div key={i} className="flex gap-3 p-3 rounded-2xl bg-background/50 border border-border/50">
            <div className="shrink-0 mt-0.5">
              {fix.type === 'bug' ? (
                <div className="w-8 h-8 rounded-xl bg-danger/10 flex items-center justify-center">
                  <span className="text-danger text-xs font-bold">!</span>
                </div>
              ) : (
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">+</span>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={clsx(
                  "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                  fix.type === 'bug'
                    ? 'bg-danger/10 text-danger'
                    : 'bg-primary/10 text-primary'
                )}>
                  {fix.type === 'bug' ? '🐛 Bug' : '✨ Amélioration'}
                </span>
                <span className="text-[10px] text-muted font-mono">{fix.date}</span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{fix.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 border-t border-border">
        <button
          onClick={onClose}
          className="w-full py-3 bg-foreground text-background font-bold rounded-2xl hover:brightness-110 transition"
        >
          Compris ! 👍
        </button>
      </div>
    </motion.div>
  </div>
);

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export const Settings: React.FC = () => {
  const isOnline = navigator.onLine;
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [progress, setProgress] = useState(getProgress());
  const [showChangelogModal, setShowChangelogModal] = useState(false);
  const [showFixesModal, setShowFixesModal] = useState(false);

  // Import state
  const [importStatus, setImportStatus] = useState<
    'idle' | 'success' | 'error' | 'warning'
  >('idle');
  const [importMessage, setImportMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update detection
  const { swUpdateAvailable, newVersionDetected, previousVersion, applySwUpdate, acknowledgeNewVersion } =
    useUpdateDetection();

  // Auto-show changelog modal when a new version is detected
  useEffect(() => {
    if (newVersionDetected) {
      setShowChangelogModal(true);
    }
  }, [newVersionDetected]);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const handleToggleTimer = () => {
    toggleTimerSetting();
    setProgress(getProgress());
  };

  const handleToggleSound = () => {
    toggleSoundSetting();
    setProgress(getProgress());
  };

  const isTimerEnabled = progress.settings?.timerEnabled !== false;
  const isSoundEnabled = progress.settings?.soundEnabled !== false;

  const handleReset = () => {
    resetProgress();
    window.location.reload();
  };

  // ── Export ──
  const handleExport = () => {
    downloadUserDataBackup();
  };

  // ── Import ──
  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const raw = ev.target?.result as string;
      const result = importUserData(raw);
      if (result.success) {
        if (result.warnings.length > 0) {
          setImportStatus('warning');
          setImportMessage(result.warnings.join(' '));
        } else {
          setImportStatus('success');
          setImportMessage('Données restaurées avec succès. Rechargement…');
          setTimeout(() => window.location.reload(), 1800);
        }
      } else {
        setImportStatus('error');
        const errMsg = (result as { success: false; error: string }).error;
        setImportMessage(errMsg);
      }
    };
    reader.readAsText(file);
    // Reset input so the same file can be re-selected
    e.target.value = '';
  };

  const handleCloseChangelog = () => {
    setShowChangelogModal(false);
    if (newVersionDetected) {
      acknowledgeNewVersion();
    }
  };

  return (
    <div className="p-4 pb-24 space-y-6 max-w-2xl mx-auto">

      {/* ── Header ── */}
      <div className="flex flex-col items-center justify-center mb-6 mt-4 text-center">
        <div className="w-16 h-16 bg-surface border border-border rounded-2xl flex items-center justify-center mb-4 shadow-sm">
          <SettingsIcon className="w-8 h-8 text-primary animate-[spin_10s_linear_infinite]" />
        </div>
        <h1 className="text-3xl font-black text-foreground">Paramètres</h1>
        <p className="text-muted text-sm mt-2">Personnalise ton expérience de révision.</p>
      </div>

      {/* ── SW Update Banner ── */}
      <AnimatePresence>
        {swUpdateAvailable && (
          <SwUpdateBanner onApply={applySwUpdate} />
        )}
      </AnimatePresence>

      {/* ── Ergonomie & Jeu ── */}
      <section className="bg-surface rounded-3xl border border-border overflow-hidden shadow-sm hover:border-primary/30 transition-colors">
        <div className="p-5 flex items-center gap-3 bg-background/50 border-b border-border">
          <span className="text-primary text-xl">⚙️</span>
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">Ergonomie & Jeu</h2>
        </div>
        <div className="divide-y divide-border">
          <div className="p-5 flex items-center justify-between hover:bg-background/20 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
                <Timer className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-bold">Pression du Minuteur</h3>
                <p className="text-xs text-muted max-w-[200px] leading-relaxed mt-1">
                  Stresse avec un temps limité pendant les quiz (XP Bonus).
                </p>
              </div>
            </div>
            <Tooltip content={isTimerEnabled ? 'Désactiver le minuteur' : 'Activer le minuteur'}>
              <Toggle enabled={isTimerEnabled} onToggle={handleToggleTimer} ariaLabel="Activer le minuteur des quiz" />
            </Tooltip>
          </div>

          <div className="p-5 flex items-center justify-between hover:bg-background/20 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shadow-inner">
                <Volume2 className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-foreground font-bold">Effets Sonores</h3>
                <p className="text-xs text-muted mt-1">Sons de réussite et d'échec.</p>
              </div>
            </div>
            <Toggle
              enabled={isSoundEnabled}
              onToggle={handleToggleSound}
              ariaLabel="Activer les effets sonores"
              color="bg-secondary"
            />
          </div>
        </div>
      </section>

      {/* ── Mes Données (Export / Import) ── */}
      <section className="bg-surface rounded-3xl border border-border overflow-hidden shadow-sm">
        <div className="p-5 flex items-center gap-3 bg-background/50 border-b border-border">
          <span className="text-success text-xl">💾</span>
          <div>
            <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">Mes Données</h2>
          </div>
        </div>

        <div className="p-5 space-y-4">

          {/* Callout explicatif */}
          <div className="flex items-start gap-3 p-4 bg-info/10 border border-info/30 rounded-2xl">
            <Info className="w-5 h-5 text-info shrink-0 mt-0.5" />
            <div className="text-sm text-foreground/80 space-y-1.5 leading-relaxed">
              <p>
                <strong className="text-foreground">Ta progression est stockée localement</strong> dans le navigateur (localStorage). Elle n'est envoyée nulle part.
              </p>
              <p>
                <strong className="text-warning">⚠️ Exporter avant chaque mise à jour</strong> est fortement conseillé — notamment si tu fais un <kbd className="text-xs bg-surface border border-border px-1.5 py-0.5 rounded font-mono">Ctrl+F5</kbd> pour forcer le rechargement depuis le serveur, ou si tu réinstalles l'app PWA. Ces opérations peuvent vider le cache et effacer tes données.
              </p>
              <p>
                Le fichier JSON exporté contient ton XP, tes scores, tes badges, ta série et ton état de progression. Il est <strong className="text-foreground">compatible avec les futures versions</strong> de l'app.
              </p>
            </div>
          </div>

          {/* Export */}
          <button
            onClick={handleExport}
            className="w-full flex items-center justify-between p-4 bg-background border border-success/30 rounded-2xl text-foreground hover:border-success hover:bg-success/5 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-success/10 text-success rounded-xl group-hover:scale-110 transition-transform">
                <Download className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-bold block text-sm">Exporter ma progression (JSON)</span>
                <span className="text-xs text-muted mt-0.5 block">
                  Télécharge un fichier de sauvegarde complet.
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Import */}
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={handleImportFile}
              aria-label="Importer un fichier de sauvegarde"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-between p-4 bg-background border border-primary/30 rounded-2xl text-foreground hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform">
                  <Upload className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-bold block text-sm">Restaurer une sauvegarde (JSON)</span>
                  <span className="text-xs text-muted mt-0.5 block">
                    Importe un fichier exporté précédemment.
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Import feedback */}
            <AnimatePresence>
              {importStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={clsx(
                    'mt-3 flex items-start gap-3 p-3 rounded-xl text-sm border',
                    importStatus === 'success' && 'bg-success/10 border-success/30 text-success',
                    importStatus === 'warning' && 'bg-warning/10 border-warning/30 text-warning',
                    importStatus === 'error'   && 'bg-danger/10 border-danger/30 text-danger',
                  )}
                >
                  {importStatus === 'success' && <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />}
                  {importStatus === 'warning' && <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />}
                  {importStatus === 'error'   && <XCircle className="w-4 h-4 shrink-0 mt-0.5" />}
                  <div className="flex-1">
                    <p className="leading-relaxed">{importMessage}</p>
                    {importStatus === 'warning' && (
                      <button
                        className="mt-2 px-3 py-1 bg-warning text-background font-bold text-xs rounded-lg hover:brightness-110 transition"
                        onClick={() => { window.location.reload(); }}
                      >
                        Recharger quand même
                      </button>
                    )}
                  </div>
                  {importStatus !== 'success' && (
                    <button
                      onClick={() => setImportStatus('idle')}
                      aria-label="Fermer"
                      className="text-current opacity-60 hover:opacity-100 transition"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── État système ── */}
      <section className="bg-surface rounded-3xl border border-border overflow-hidden shadow-sm">
        <div className="p-5 flex items-center gap-3 bg-background/50 border-b border-border">
          <span className="text-success text-xl">📡</span>
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">État système</h2>
        </div>
        <div className="divide-y divide-border">
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={clsx('w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner', isOnline ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger')}>
                {isOnline ? <Wifi className="w-6 h-6" /> : <WifiOff className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-foreground font-bold text-sm">Mode {isOnline ? 'En ligne' : 'Hors ligne'}</h3>
                <p className="text-xs text-muted mt-1">{isOnline ? 'Prêt à synchroniser.' : 'Vous êtes déconnecté.'}</p>
              </div>
            </div>
          </div>
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shadow-inner">
                <Moon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-foreground font-bold text-sm">Thème Sombre</h3>
                <p className="text-xs text-muted mt-1">Pour soulager vos yeux.</p>
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase px-2 py-1 bg-surface-hover rounded-full text-muted">Imposé</span>
          </div>
        </div>
      </section>

      {/* ── Conception ── */}
      <section className="bg-surface rounded-3xl border border-border overflow-hidden shadow-sm">
        <div className="p-5 flex items-center gap-3 bg-background/50 border-b border-border">
          <span className="text-purple-500 text-xl">🛠️</span>
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">Conception</h2>
        </div>
        <div className="p-5">
          <button
            onClick={() => navigate('/showcase')}
            className="w-full flex items-center justify-between p-4 bg-background border border-border rounded-2xl text-foreground hover:border-purple-500/30 hover:bg-purple-500/5 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-500/10 rounded-xl text-purple-500 group-hover:scale-110 transition-transform">
                <Component className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-bold block text-sm">Bibliothèque de Composants</span>
                <span className="text-xs text-muted mt-0.5 block">Voir les briques UI de l'app.</span>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* ── Zone Critique ── */}
      <section className="bg-danger/5 border border-danger/20 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-5 flex items-center gap-3 bg-danger/10 border-b border-danger/10">
          <span className="text-danger text-xl">🚨</span>
          <h2 className="text-sm font-bold text-danger uppercase tracking-wider">Zone Critique</h2>
        </div>
        <div className="p-5">
          <div className="flex items-start gap-2 mb-4 p-3 bg-warning/10 border border-warning/20 rounded-xl">
            <AlertTriangle className="w-4 h-4 text-warning shrink-0 mt-0.5" />
            <p className="text-xs text-warning leading-relaxed">
              Avant de réinitialiser, pense à <strong>exporter ta progression</strong> (section « Mes Données » ci-dessus).
            </p>
          </div>
          <button
            onClick={() => setShowConfirm(true)}
            className="w-full flex items-center justify-between p-4 bg-background border border-danger/30 rounded-2xl text-danger hover:bg-danger hover:text-white transition-all group shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-danger/10 text-danger rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors">
                <Trash2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-bold block text-sm">Destruction totale (Remise à Zéro)</span>
                <span className="text-xs mt-0.5 block opacity-80">Stats, XP, Badges, etc.</span>
              </div>
            </div>
          </button>
          <p className="text-[11px] text-danger/70 text-center mt-3 font-medium">
            Attention, Thanos snap.
          </p>
        </div>
      </section>

      {/* ── À propos ── */}
      <section className="text-center space-y-3 pt-6 pb-12">
        <h3 className="text-foreground font-bold text-lg">
          <span className="text-primary">Hylst</span> Brevet 2026
        </h3>
        <p className="text-xs font-mono text-muted bg-surface inline-block px-3 py-1 rounded-full border border-border">
          v{APP_VERSION} — Offline-First PWA
        </p>
        <div className="flex flex-col items-center gap-2 mt-2">
          <ChangelogButton onClick={() => setShowChangelogModal(true)} />
          <button
            onClick={() => setShowFixesModal(true)}
            className="flex items-center gap-2 text-xs text-success hover:text-success/80 underline underline-offset-2 font-medium transition mt-1"
          >
            <CheckCircle className="w-3.5 h-3.5" />
            Suivi des corrections
          </button>
          <button
            onClick={() => navigate('/legal')}
            className="text-xs text-muted hover:text-foreground underline decoration-border underline-offset-4 transition-colors font-medium"
          >
            Mentions Légales & Philosophie
          </button>
        </div>
      </section>

      {/* ── Modals ── */}

      {/* Reset confirmation */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-surface border border-border rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-4 text-danger">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-lg font-bold">Réinitialiser ?</h3>
            </div>
            <p className="text-muted mb-6">
              Es-tu sûr de vouloir effacer toute ta progression ? Cette action est irréversible.
            </p>
            <div className="flex gap-3">
              <Button variant="secondary" fullWidth onClick={() => setShowConfirm(false)}>
                Annuler
              </Button>
              <Button themeColorClass="bg-danger hover:brightness-110 text-white" fullWidth onClick={handleReset}>
                Confirmer
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Nouveautés / Changelog modal */}
      <AnimatePresence>
        {showChangelogModal && (
          <NouveautesModal
            previousVersion={newVersionDetected ? previousVersion : null}
            onClose={handleCloseChangelog}
          />
        )}
      </AnimatePresence>

      {/* Suivi des corrections modal */}
      <AnimatePresence>
        {showFixesModal && (
          <SuiviDesCorrectionsModal onClose={() => setShowFixesModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};