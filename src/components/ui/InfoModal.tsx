import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info, Star, BookOpen, HelpCircle, Lightbulb, User, Calendar } from 'lucide-react';
import clsx from 'clsx';

import { STORAGE_KEYS } from '../../constants';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'about' | 'updates' | 'mechanics' | 'features' | 'content' | 'guide' | 'tips' | 'creator';

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  const tabs = [
    { id: 'about', label: 'À propos', icon: Info },
    { id: 'updates', label: 'Mises à jour', icon: Calendar },
    { id: 'mechanics', label: 'Règles & Système', icon: Star },
    { id: 'features', label: 'Fonctionnalités', icon: Lightbulb },
    { id: 'content', label: 'Contenu', icon: BookOpen },
    { id: 'guide', label: 'Mode d\'emploi', icon: HelpCircle },
    { id: 'creator', label: 'Créateur', icon: User },
  ] as const;

  const handleRestartOnboarding = () => {
    localStorage.removeItem(STORAGE_KEYS.ONBOARDING);
    window.location.reload();
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-surface border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-background/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Informations</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-muted hover:text-foreground hover:bg-background rounded-xl transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              {/* Sidebar Tabs */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border bg-background/30 p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={clsx(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap md:whitespace-normal",
                        isActive
                          ? "bg-primary text-white shadow-lg shadow-primary/20"
                          : "text-muted hover:text-foreground hover:bg-surface"
                      )}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      {tab.label}
                    </button>
                  );
                })}
                <button
                  onClick={handleRestartOnboarding}
                  className="flex md:hidden items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-primary bg-primary/5 border border-dashed border-primary/30 whitespace-nowrap"
                >
                  Tutoriel ✨
                </button>
                
                <div className="hidden md:block mt-auto pt-4 border-t border-border">
                  <button
                    onClick={handleRestartOnboarding}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-primary hover:bg-primary/10 transition-all border border-dashed border-primary/30"
                  >
                    <Star className="w-4 h-4" />
                    Revoir le tutoriel
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-surface">
                {activeTab === 'about' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-3xl font-black text-foreground mb-4">À propos de <span className="text-primary">Hylst Brevet 2026</span></h3>
                    <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground">
                      <p className="text-lg font-medium leading-relaxed mb-6 text-foreground/90">
                        Votre compagnon d'étude numérique ré-imaginé. Hylst Brevet est une Progressive Web App (PWA) de nouvelle génération, conçue pour transformer la préparation fastidieuse du Diplôme National du Brevet en une expérience hautement interactive, structurée et gratifiante. Fini les classeurs surchargés et les fiches perdues : tout est dans votre poche, accessible instantanément.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        <div className="p-5 bg-primary/5 border border-primary/20 rounded-2xl hover:bg-primary/10 transition-colors">
                          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 text-xl shadow-inner">🎯</div>
                          <h4 className="font-bold text-foreground text-lg mb-2">Notre Mission</h4>
                          <p className="text-sm">
                            Démocratiser la réussite scolaire en rendant les révisions intuitives, modernes et accessibles n'importe où, même sans connexion internet (hors-ligne).
                          </p>
                        </div>
                        
                        <div className="p-5 bg-secondary/5 border border-secondary/20 rounded-2xl hover:bg-secondary/10 transition-colors">
                          <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-3 text-xl shadow-inner">🎮</div>
                          <h4 className="font-bold text-foreground text-lg mb-2">Pédagogie Gamifiée</h4>
                          <p className="text-sm">
                            S'inspirant des mécaniques des jeux vidéo, nous récompensons la régularité et l'effort. Chaque action (lecture, quiz) vous rapproche du niveau supérieur.
                          </p>
                        </div>

                        <div className="p-5 bg-success/5 border border-success/20 rounded-2xl hover:bg-success/10 transition-colors md:col-span-2">
                          <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center mb-3 text-xl shadow-inner">🧠</div>
                          <h4 className="font-bold text-foreground text-lg mb-2">Neurosciences & Apprentissage</h4>
                          <p className="text-sm">
                            L'application intègre nativement des concepts issus des neurosciences cognitiques : la répétition espacée (algorithme gérant vos erreurs), l'effet test (omniprésence des quiz), et l'entrelacement (entraînement global croisant les matières).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'updates' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-3xl font-black text-foreground mb-6">Mises à jour</h3>
                    
                    <div className="relative pl-8 space-y-8 before:absolute before:inset-y-0 before:left-[15px] before:w-0.5 before:bg-border">
                      <div className="relative">
                        <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-background shadow-sm"></div>
                        <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm hover:border-primary/30 transition-colors">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <h4 className="font-bold text-xl text-foreground">Version 1.9.1 (Souveraineté & PWA)</h4>
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide border border-primary/20">18 Mai 2026</span>
                          </div>
                          <ul className="space-y-4 text-muted text-sm list-none">
                            <li className="flex items-start gap-3">
                              <span className="text-primary text-lg leading-none mt-0.5">🚀</span>
                              <span><strong>Déploiement Souverain :</strong> Passage de l'application en mode 100% PWA (hors-ligne par défaut). Nettoyage de toutes les dépendances tiers non essentielles. L'architecture est désormais "Backend-Ready".</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-success text-lg leading-none mt-0.5">✨</span>
                              <span><strong>SEO & Métadonnées :</strong> Implémentation massive du SEO avec balises Open Graph (réseaux sociaux) et intégration de données structurées JSON-LD (Schema.org) pour chaque chapitre.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-warning text-lg leading-none mt-0.5">🐛</span>
                              <span><strong>Corrections de bugs :</strong> 
                                <br/>- Réparation des liens vers les schémas interactifs (SVG) qui étaient cassés sur le serveur.
                                <br/>- Correction du débordement de texte dans le bloc "Activité" du tableau de bord.
                                <br/>- Amélioration de la gestion des erreurs du formulaire de contact (Fallback mail interactif).
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'mechanics' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-3xl font-black text-foreground mb-6">Règles & Système de Classement</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 rounded-2xl bg-surface border border-border shadow-sm hover:border-danger/30 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center text-xl shadow-inner border border-danger/20">❤️</div>
                          <h4 className="font-bold text-lg text-foreground">Système de Vies</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-subtle list-disc ml-4 leading-relaxed">
                          <li>Vous disposez d'un maximum de <span className="text-danger font-bold">24 vies</span>.</li>
                          <li>Chaque mauvaise réponse lors d'un quiz consomme <span className="font-bold text-foreground">1 vie</span>.</li>
                          <li>Les vies se rechargent automatiquement à raison de <span className="font-bold text-foreground">1 vie par heure</span>.</li>
                          <li>Si vous tombez à 0, vous devrez attendre pour reprendre les quiz. C'est une mécanique anti-gavage !</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-surface border border-border shadow-sm hover:border-warning/30 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center text-xl shadow-inner border border-warning/20">⭐</div>
                          <h4 className="font-bold text-lg text-foreground">L'Expérience (XP)</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-subtle list-disc ml-4 leading-relaxed">
                          <li><span className="font-bold text-foreground">Lecture :</span> +10 XP lorsque vous marquez une fiche comme lue.</li>
                          <li><span className="font-bold text-foreground">Quiz Correct :</span> +15 XP par bonne réponse.</li>
                          <li><span className="font-bold text-foreground">Série (Combo) :</span> Bonus multiplicateur en enchaînant les bonnes réponses.</li>
                          <li>Atteindre le max d'XP passe votre niveau et restaure toutes vos vies !</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-surface border border-border shadow-sm hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl shadow-inner border border-primary/20">⏱️</div>
                          <h4 className="font-bold text-lg text-foreground">Mode Examen (Chronomètre)</h4>
                        </div>
                        <p className="text-sm text-subtle mb-3 leading-relaxed">
                          L'application permet d'activer un chronomètre de stress dans les paramètres :
                        </p>
                        <ul className="space-y-2 text-sm text-subtle list-disc ml-4 leading-relaxed">
                          <li><span className="font-bold text-foreground">Timer Global :</span> Simule la pression temporelle de l'épreuve du brevet.</li>
                          <li><span className="font-bold text-foreground">Score parfait :</span> Bonus d'XP non négligeable si vous finissez sans erreur et dans les temps.</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-surface border border-border shadow-sm hover:border-success/30 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-xl shadow-inner border border-success/20">📊</div>
                          <h4 className="font-bold text-lg text-foreground">Entraînement Global (Mock)</h4>
                        </div>
                        <p className="text-sm text-subtle leading-relaxed mb-3">
                          La zone d'entraînement (Mise en Situation) est le cœur du système :
                        </p>
                        <ul className="space-y-2 text-sm text-subtle list-disc ml-4 leading-relaxed">
                          <li><span className="font-bold text-foreground">Session Courte (50 questions) :</span> Idéal pour un entrainement quotidien rapide. Brassage complet.</li>
                          <li><span className="font-bold text-foreground">Session Brevet (100 questions) :</span> La vraie simulation de l'examen. Testez votre endurance !</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <section>
                      <h3 className="text-3xl font-black text-foreground mb-6">Super-Pouvoirs</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 rounded-2xl bg-surface border border-border shadow-sm hover:border-primary/30 transition-colors">
                          <div className="w-12 h-12 rounded-xl bg-success/10 text-success flex items-center justify-center mb-4 text-2xl shadow-inner border border-success/20">📡</div>
                          <h4 className="font-bold text-lg text-foreground mb-2">100% Hors-Ligne (PWA)</h4>
                          <p className="text-sm text-muted">Installez l'application via votre navigateur. Révisez dans les transports, sans épuiser votre forfait.</p>
                        </div>
                        
                        <div className="p-5 rounded-2xl bg-surface border border-border shadow-sm hover:border-primary/30 transition-colors">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 text-2xl shadow-inner border border-primary/20">🏆</div>
                          <h4 className="font-bold text-lg text-foreground mb-2">Gamification & XP</h4>
                          <p className="text-sm text-muted">Le travail paie ! Accumulez de l'XP en lisant et en réussissant des quiz. Chaque palier débloque des succès.</p>
                        </div>
                        
                        <div className="p-5 rounded-2xl bg-surface border border-border shadow-sm hover:border-primary/30 transition-colors">
                          <div className="w-12 h-12 rounded-xl bg-warning/10 text-warning flex items-center justify-center mb-4 text-2xl shadow-inner border border-warning/20">✨</div>
                          <h4 className="font-bold text-lg text-foreground mb-2">Schémas Interactifs</h4>
                          <p className="text-sm text-muted">Oubliez les images statiques. Nos schémas s'animent pour mieux comprendre les mécanismes complexes.</p>
                        </div>
                        
                        <div className="p-5 rounded-2xl bg-surface border border-border shadow-sm hover:border-primary/30 transition-colors">
                          <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 text-2xl shadow-inner border border-purple-500/20">🖨️</div>
                          <h4 className="font-bold text-lg text-foreground mb-2">Grand Livre (Export PDF)</h4>
                          <p className="text-sm text-muted">Accédez au mode de lecture ininterrompue, parfait pour l'impression propre sur papier A4.</p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-2xl font-black text-foreground mb-6">Astuces Ninja 🥷</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-background rounded-2xl border border-border flex gap-4 items-start shadow-sm hover:border-rose-500/30 transition-colors">
                          <div className="p-2 bg-rose-500/10 rounded-xl text-rose-500 mt-0.5 text-xl">🔥</div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1">La Règle de la Flamme</h4>
                            <p className="text-[13px] text-muted leading-relaxed">Une mini-session chaque jour (Streak) est 3x plus efficace qu'un cramming de 4h.</p>
                          </div>
                        </div>

                        <div className="p-4 bg-background rounded-2xl border border-border flex gap-4 items-start shadow-sm hover:border-blue-500/30 transition-colors">
                          <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500 mt-0.5 text-xl">🔍</div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1">Le Zoom Sauveur</h4>
                            <p className="text-[13px] text-muted leading-relaxed">Les schémas peuvent être agrandis sur mobile en touchant l'icône de loupe.</p>
                          </div>
                        </div>

                        <div className="p-4 bg-background rounded-2xl border border-border flex gap-4 items-start shadow-sm hover:border-emerald-500/30 transition-colors">
                          <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-500 mt-0.5 text-xl">✅</div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1">Checklists Confiance</h4>
                            <p className="text-[13px] text-muted leading-relaxed">Cochez chaque case en fin de chapitre pour un boost psychologique prouvé.</p>
                          </div>
                        </div>

                        <div className="p-4 bg-background rounded-2xl border border-border flex gap-4 items-start shadow-sm hover:border-orange-500/30 transition-colors">
                          <div className="p-2 bg-orange-500/10 rounded-xl text-orange-500 mt-0.5 text-xl">📴</div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1">Mode Avion Prôné</h4>
                            <p className="text-[13px] text-muted leading-relaxed">Éliminez les distractions et économisez de la batterie pendant vos sessions.</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === 'content' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-3xl font-black text-foreground">Programme du Brevet</h3>
                    <p className="text-muted text-lg mb-8">Les connaissances essentielles, synthétisées, vulgarisées et organisées pour l'examen de fin de 3ème.</p>
                    
                    <div className="space-y-4">
                      <div className="group flex flex-col md:flex-row gap-4 p-5 md:p-6 bg-surface border border-border rounded-2xl hover:border-primary/40 transition-colors shadow-sm">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary border border-primary/20 shadow-inner group-hover:scale-110 transition-transform">
                          📐
                        </div>
                        <div>
                           <h4 className="font-bold text-lg text-foreground mb-1">Mathématiques</h4>
                           <p className="text-sm text-muted leading-relaxed">Nombres et calculs (Arithmétique, puissances), Organisation et gestion de données (Statistiques, probabilités, proportionnalité), Grandeurs et mesures (Théorèmes de Pythagore et Thalès, volumes, trigonométrie), Algorithmique.</p>
                           <div className="flex gap-2 mt-3 flex-wrap">
                             <span className="text-[10px] px-2 py-1 bg-primary/10 text-primary rounded-full font-bold uppercase tracking-wider">Algèbre</span>
                             <span className="text-[10px] px-2 py-1 bg-primary/10 text-primary rounded-full font-bold uppercase tracking-wider">Géométrie</span>
                           </div>
                        </div>
                      </div>

                      <div className="group flex flex-col md:flex-row gap-4 p-5 md:p-6 bg-surface border border-border rounded-2xl hover:border-danger/40 transition-colors shadow-sm">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-danger/10 flex items-center justify-center text-3xl font-bold text-danger border border-danger/20 shadow-inner group-hover:scale-110 transition-transform">
                          ✍️
                        </div>
                        <div>
                           <h4 className="font-bold text-lg text-foreground mb-1">Français</h4>
                           <p className="text-sm text-muted leading-relaxed">Les notions clés pour l'étude de texte : classes grammaticales, fonctions, valeurs des temps, figures de style incontournables, conjugaison complexe et méthodologie de rédaction (réécriture et rédaction).</p>
                           <div className="flex gap-2 mt-3 flex-wrap">
                             <span className="text-[10px] px-2 py-1 bg-danger/10 text-danger rounded-full font-bold uppercase tracking-wider">Grammaire</span>
                             <span className="text-[10px] px-2 py-1 bg-danger/10 text-danger rounded-full font-bold uppercase tracking-wider">Méthodologie</span>
                           </div>
                        </div>
                      </div>

                      <div className="group flex flex-col md:flex-row gap-4 p-5 md:p-6 bg-surface border border-border rounded-2xl hover:border-warning/40 transition-colors shadow-sm">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-warning/10 flex items-center justify-center text-3xl font-bold text-warning border border-warning/20 shadow-inner group-hover:scale-110 transition-transform">
                          🌍
                        </div>
                        <div>
                           <h4 className="font-bold text-lg text-foreground mb-1">Sciences Humaines (Hist-Géo & EMC)</h4>
                           <p className="text-sm text-muted leading-relaxed">Le monde depuis 1914, la France et l'UE (Dynamiques territoriales, mondialisation). Citoyenneté, République, Défense nationale.</p>
                           <div className="flex gap-2 mt-3 flex-wrap">
                             <span className="text-[10px] px-2 py-1 bg-warning/10 text-warning rounded-full font-bold uppercase tracking-wider">Histoire</span>
                             <span className="text-[10px] px-2 py-1 bg-warning/10 text-warning rounded-full font-bold uppercase tracking-wider">Géographie</span>
                             <span className="text-[10px] px-2 py-1 bg-warning/10 text-warning rounded-full font-bold uppercase tracking-wider">EMC</span>
                           </div>
                        </div>
                      </div>

                      <div className="group flex flex-col md:flex-row gap-4 p-5 md:p-6 bg-surface border border-border rounded-2xl hover:border-success/40 transition-colors shadow-sm">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-success/10 flex items-center justify-center text-3xl font-bold text-success border border-success/20 shadow-inner group-hover:scale-110 transition-transform">
                          🔬
                        </div>
                        <div>
                           <h4 className="font-bold text-lg text-foreground mb-1">Pôle Scientifique (SVT, Physique, Techno)</h4>
                           <p className="text-sm text-muted leading-relaxed">Génétique, évolution, réchauffement climatique. Univers, forces, énergie. Informatique, algorithmique et conception.</p>
                           <div className="flex gap-2 mt-3 flex-wrap">
                             <span className="text-[10px] px-2 py-1 bg-success/10 text-success rounded-full font-bold uppercase tracking-wider">SVT</span>
                             <span className="text-[10px] px-2 py-1 bg-success/10 text-success rounded-full font-bold uppercase tracking-wider">Physique</span>
                             <span className="text-[10px] px-2 py-1 bg-success/10 text-success rounded-full font-bold uppercase tracking-wider">Technologie</span>
                           </div>
                        </div>
                      </div>

                      <div className="group flex flex-col md:flex-row gap-4 p-5 md:p-6 bg-surface border border-border rounded-2xl hover:border-indigo-500/40 transition-colors shadow-sm mt-4">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-3xl font-bold text-indigo-500 border border-indigo-500/20 shadow-inner group-hover:scale-110 transition-transform">
                          🎯
                        </div>
                        <div>
                           <h4 className="font-bold text-lg text-foreground mb-1">Mise en Situation</h4>
                           <p className="text-sm text-muted leading-relaxed">Une compilation de QCMs de diagnostic pour évaluer tes acquis initiaux. Parfait pour identifier tes forces et tes lacunes avant de plonger dans les révisions, ou pour faire un test sous forme de "QCM Global" !</p>
                           <div className="flex gap-2 mt-3 flex-wrap">
                             <span className="text-[10px] px-2 py-1 bg-indigo-500/10 text-indigo-500 rounded-full font-bold uppercase tracking-wider">Diagnostic</span>
                             <span className="text-[10px] px-2 py-1 bg-indigo-500/10 text-indigo-500 rounded-full font-bold uppercase tracking-wider">Test Pratique</span>
                           </div>
                        </div>
                      </div>

                      <div className="group flex flex-col md:flex-row gap-4 p-5 md:p-6 bg-surface border border-border rounded-2xl hover:border-fuchsia-500/40 transition-colors shadow-sm">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center text-3xl font-bold text-fuchsia-500 border border-fuchsia-500/20 shadow-inner group-hover:scale-110 transition-transform">
                          🗣️
                        </div>
                        <div>
                           <h4 className="font-bold text-lg text-foreground mb-1">L'Oral du Brevet</h4>
                           <p className="text-sm text-muted leading-relaxed">Prépare ton épreuve orale avec confiance : comment choisir son sujet (EPI, parcours éducatif), structurer sa présentation, gérer son stress et ses notes, et se préparer aux questions du jury.</p>
                           <div className="flex gap-2 mt-3 flex-wrap">
                             <span className="text-[10px] px-2 py-1 bg-fuchsia-500/10 text-fuchsia-500 rounded-full font-bold uppercase tracking-wider">Aisance à l'oral</span>
                           </div>
                        </div>
                      </div>

                      <div className="group flex flex-col md:flex-row gap-4 p-5 md:p-6 bg-surface border border-border rounded-2xl hover:border-teal-500/40 transition-colors shadow-sm">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-teal-500/10 flex items-center justify-center text-3xl font-bold text-teal-500 border border-teal-500/20 shadow-inner group-hover:scale-110 transition-transform">
                          🧠
                        </div>
                        <div>
                           <h4 className="font-bold text-lg text-foreground mb-1">Méthodologie & Conseils</h4>
                           <p className="text-sm text-muted leading-relaxed">Apprends à apprendre ! Techniques d'organisation, plannings de révision, compréhension des consignes (analyser, justifier, démontrer), et astuces pour le jour J.</p>
                           <div className="flex gap-2 mt-3 flex-wrap">
                             <span className="text-[10px] px-2 py-1 bg-teal-500/10 text-teal-500 rounded-full font-bold uppercase tracking-wider">Apprendre à Apprendre</span>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'guide' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-3xl font-black text-foreground">Mode d'Emploi</h3>
                    <p className="text-muted">Un processus simple en 3 étapes pour maximiser vos résultats, prouvé par les sciences de l'apprentissage.</p>
                    
                    <div className="relative pl-8 space-y-8 before:absolute before:inset-y-0 before:left-[15px] before:w-0.5 before:bg-border">
                      <div className="relative group">
                        <div className="absolute -left-9 top-1 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md ring-4 ring-background group-hover:scale-110 transition-transform">1</div>
                        <h4 className="font-bold text-xl text-foreground mb-2">Assimiler via les Fiches</h4>
                        <p className="text-sm text-subtle bg-surface p-4 rounded-xl border border-border leading-relaxed shadow-sm group-hover:border-primary/30 transition-colors">Naviguez dans vos matières depuis l'accueil. Lisez les résumés et marquez les comme terminés pour gagner de l'XP. Ne vous ruez pas sur les quiz avant d'avoir lu la leçon.</p>
                      </div>
                      
                      <div className="relative group">
                        <div className="absolute -left-9 top-1 w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center font-bold shadow-md ring-4 ring-background group-hover:scale-110 transition-transform">2</div>
                        <h4 className="font-bold text-xl text-foreground mb-2">S'entraîner aux Quiz</h4>
                        <p className="text-sm text-subtle bg-surface p-4 rounded-xl border border-border leading-relaxed shadow-sm group-hover:border-secondary/30 transition-colors">Chaque chapitre propose un Quiz de validation. Faites-le pour accumuler des Points d'Expérience (XP), mais attention à vos vies ! Chaque erreur vous coutera un coeur.</p>
                      </div>
                      
                      <div className="relative group">
                        <div className="absolute -left-9 top-1 w-7 h-7 rounded-full bg-warning text-white flex items-center justify-center font-bold shadow-md ring-4 ring-background group-hover:scale-110 transition-transform">3</div>
                        <h4 className="font-bold text-xl text-foreground mb-2">L'Entrainement Global</h4>
                        <p className="text-sm text-subtle bg-surface p-4 rounded-xl border border-border leading-relaxed shadow-sm group-hover:border-warning/30 transition-colors">Une fois que vous vous sentez prêt, utilisez le mode <strong className="text-foreground">"Mise en Situation"</strong> depuis le menu principal pour générer une session de 50 ou 100 questions piochées au hasard parmi toutes les matières. C'est l'exercice ultime.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'creator' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-3xl font-black text-foreground">L'Équipe & Philosophie</h3>
                    
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl mb-6 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                      <div className="flex gap-4 items-start">
                        <div className="text-3xl">💝</div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1 text-lg">100% Gratuite & Libre</h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            Cette application est <strong>gratuite et le restera</strong>. Elle est libre d'utilisation mais reste imparfaite. Je compte sur mes utilisateurs pour me faire des retours afin de suggérer des corrections, des modifications ou des ajouts.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative overflow-hidden p-8 sm:p-10 bg-gradient-to-br from-surface to-background rounded-3xl border border-border shadow-md text-center group hover:border-primary/30 transition-colors">
                      <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                         <div className="w-48 h-48 rounded-full bg-primary blur-3xl" />
                      </div>
                      <div className="absolute bottom-0 left-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                         <div className="w-48 h-48 rounded-full bg-secondary blur-3xl" />
                      </div>
                      
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center text-white text-3xl font-black shadow-xl ring-4 ring-background mb-6 cursor-pointer hover:scale-110 hover:rotate-6 transition-all">
                          GS
                        </div>
                        <h4 className="text-2xl font-black text-foreground mb-2">Geoffroy Streit</h4>
                        <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Développeur & Concepteur</p>
                        
                        <p className="text-muted max-w-lg mx-auto mb-8 leading-relaxed">
                          Passionné par l'innovation éducative (EdTech) et convaincu que l'apprentissage ne devrait jamais être une corvée. J'ai construit cette application avec une mission claire : donner les meilleurs outils à tous les élèves.
                        </p>
                        
                        <a 
                          href="mailto:geoffroy.streit@gmail.com" 
                          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold rounded-xl hover:scale-105 hover:shadow-xl hover:bg-primary transition-all group/btn"
                        >
                          <svg className="w-5 h-5 group-hover/btn:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          Envoyer un retour (Email)
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};
