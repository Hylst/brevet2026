import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { ChevronLeft, Scale, Shield, Server, Heart, Cookie, UserCheck, HardDrive, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';

export const Legal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition className="min-h-screen bg-background pb-24">
      <SEO title="Mentions Légales & RGPD - Hylst Brevet 2026" />
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border p-4 flex items-center gap-4 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-surface-hover text-foreground transition-colors group">
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <h1 className="font-bold text-foreground text-xl">Mentions Légales & RGPD</h1>
      </div>

      <div className="p-4 max-w-3xl mx-auto space-y-8 mt-6">
        
        {/* Intro */}
        <section className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-500/10 text-rose-500 rounded-full mb-6 ring-4 ring-rose-500/5 shadow-inner">
                <Heart className="w-10 h-10 animate-pulse" />
            </div>
            <h2 className="text-3xl font-black mb-4">Notre Philosophie (No Bullshit)</h2>
            <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
                Ce site a été conçu avec amour, 100% de café et la volonté d'aider les élèves à réussir. Il est <strong className="text-foreground">totalement gratuit, sans pub, sans pistage, et créé par un humain</strong>, pour des humains.
            </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface border border-border p-6 rounded-3xl shadow-sm hover:border-primary/30 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold flex-1">Mentions Légales</h2>
            </div>
            <div className="space-y-4 text-sm text-muted">
                <p><strong className="text-foreground">Éditeur et Créateur :</strong> Geoffroy Streit</p>
                <div className="p-3 bg-background rounded-xl border border-border">
                  <p className="mb-2"><strong className="text-foreground">Un mot doux ? Un bug à signaler ?</strong></p>
                  <a href="mailto:Geoffroy.streit@gmail.com" className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-sm">
                    Envoyez un super mail ✉️
                  </a>
                </div>
                <p>Projet mis à disposition à des fins purement éducatives et non lucratives.</p>
            </div>
          </div>

          <div className="bg-surface border border-border p-6 rounded-3xl shadow-sm hover:border-info/30 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-500/10 text-slate-500 flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold">L'Hébergement</h2>
            </div>
            <div className="space-y-4 text-sm text-muted">
                <p>Le site est fièrement hébergé sur le <strong className="text-foreground">VPS personnel de Hylst (hylst.fr)</strong> tournant chez Hostinger.</p>
                <div className="p-3 bg-background rounded-xl border border-border text-xs opacity-70">
                   Hostinger International Ltd.<br />
                   61 Lordou Vironos Street, 6023 Larnaca, Chypre
                </div>
            </div>
          </div>
        </div>

        {/* RGPD Fun */}
        <section className="bg-surface border border-border p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden mt-8">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Shield className="w-48 h-48" />
          </div>
          
          <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-success/10 text-success flex items-center justify-center shrink-0 border border-success/20 shadow-inner">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-black">Données & RGPD</h2>
                <p className="text-success font-medium">TL;DR : Vos données restent chez vous ! 🔐</p>
              </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            <div className="flex gap-4">
              <div className="mt-1 text-primary"><HardDrive className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Local First !</h3>
                <p className="text-sm text-muted">Dans un souci de respect absolu, ce site ne collecte RIEN vers un serveur. Votre XP, l'historique de vos quiz, et votre progression sont stockés <strong className="text-foreground">uniquement dans votre navigateur</strong> (LocalStorage).</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 text-warning"><Cookie className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Zéro Cookie Chiant</h3>
                <p className="text-sm text-muted">Ici, on ne mange que des vrais cookies. Pas de gigantesque bandeau énervant à valider, car nous n'avons <strong className="text-foreground">aucun traqueur publicitaire</strong> ni scripts marketing externes.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 text-success"><UserCheck className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-foreground mb-1">100% Déconnecté</h3>
                <p className="text-sm text-muted">L'application s'installe sur votre téléphone (PWA) et vit sa vie. Elle ne "téléphone pas à la maison". Vous pouvez lire tous les cours en Mode Avion.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 text-danger"><Trash2 className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Droit à l'Oubli Flash</h3>
                <p className="text-sm text-muted">Puisque rien n'est chez nous, vous avez le pouvoir de Thanos. Vous pouvez tout effacer en un clic via les <strong className="text-foreground">Paramètres (Réinitialiser l'application)</strong>. Pouf, magie ! 🪄</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};
