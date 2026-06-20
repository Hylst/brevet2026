import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SUBJECTS } from '../data/content';
import { getProgress } from '../services/storageService';
import { getTheme } from '../lib/theme';
import { playSound } from '../lib/audio';
import { PageTransition } from '../components/PageTransition';
import { Mascot } from '../components/ui/Mascot';
import { Calculator, Globe, Atom, Dna, Cpu, Book, Languages, BarChart2, Compass, Mic, Timer, GraduationCap, Flame, Target, Trophy } from 'lucide-react';
import { BadgeList } from '../components/gamification/BadgeList';
import { StatCard } from '../components/dashboard/StatCard';
import { Statistics } from '../components/dashboard/Statistics';
import { SEO } from '../components/ui/SEO';
import { SUBJECT_IDS } from '../constants';
import clsx from 'clsx';

const iconMap: Record<string, any> = {
  Calculator, Globe, Atom, Dna, Cpu, Book, Languages, Compass, Mic
};

export const Dashboard: React.FC = () => {
  const [progress, setProgress] = useState(getProgress());

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  // Memoize filtered subjects to avoid creating new objects on every render
  const filteredSubjects = React.useMemo(() => {
    return SUBJECTS.map(subject => ({
      ...subject,
      topics: subject.topics.filter(t => (t.level === undefined || t.level === '3eme'))
    })).filter(s => s.topics.length > 0) || [];
  }, []);

  // Memoize stats based on filtered subjects and progress
  const { totalModules, completedCount, percentage } = React.useMemo(() => {
    const total = filteredSubjects.reduce((acc, sub) => acc + sub.topics.length, 0);
    const completed = filteredSubjects.reduce((acc, sub) => 
      acc + sub.topics.filter(t => progress.completedTopics.includes(t.id)).length, 0
    );
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { totalModules: total, completedCount: completed, percentage: pct };
  }, [filteredSubjects, progress.completedTopics]);

  return (
    <PageTransition className="p-4 sm:p-6 pb-24 max-w-6xl mx-auto flex flex-col gap-6">
      <SEO 
        title="Tableau de bord - Espace Réussite Brevet 2026"
        description="Commencez à réviser le Brevet des Collèges 2026. Fiches de révision, quiz interactifs et suivi de progression pour toutes les matières."
        url="https://hylst.fr/brevet2026/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Espace Réussite Brevet 2026',
          description: 'Application de révision gratuite et hors-ligne pour le Diplôme National du Brevet (DNB) 2026.',
          url: 'https://hylst.fr/brevet2026/',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Any',
          inLanguage: 'fr',
          isAccessibleForFree: true,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
          author: { '@type': 'Person', name: 'Geoffroy Streit', url: 'https://hylst.fr' },
          about: {
            '@type': 'EducationalOccupationalCredential',
            name: 'Diplôme National du Brevet (DNB)',
            educationalLevel: 'Collège (3ème)'
          }
        }}
      />
      
      {/* Top Bento Grid - Hero & Stats & CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Welcome Card */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 bg-gradient-to-br from-primary via-primary/95 to-primary-focus rounded-[2rem] p-8 text-primary-foreground relative flex flex-col justify-between shadow-xl shadow-primary/20 border border-primary-light/10"
        >
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex justify-between items-start z-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-inner"
              >
                <GraduationCap className="w-5 h-5 text-warning" />
                <span className="text-sm font-bold tracking-wide uppercase">Objectif Brevet 2026</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight">
                Prêt à exceller ?
              </h1>
              <p className="text-primary-foreground/80 font-medium text-lg max-w-md">
                Chaque module complété te rapproche de la mention. Continue sur ta lancée !
              </p>
            </div>
            <motion.div className="hidden sm:block" whileHover={{ scale: 1.05, rotate: 5 }}>
              <Mascot className="w-32 h-32 opacity-90 drop-shadow-2xl" />
            </motion.div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-8 z-10">
            <div>
              <span className="block text-xs font-bold tracking-wider text-primary-foreground/60 uppercase mb-1">Progression Globale</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black">{percentage}%</span>
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="flex justify-between text-sm font-medium mb-2 text-primary-foreground/80">
                <span>Modules terminés</span>
                <span>{completedCount} / {totalModules}</span>
              </div>
              <div className="h-4 bg-black/30 rounded-full overflow-hidden border border-white/5 shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-warning to-yellow-300 rounded-full shadow-[0_0_15px_var(--color-warning)] relative"
                  >
                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12"></div>
                  </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Examen Blanc CTA - Bento Block */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-4 group"
        >
          <Link 
            to="/quiz/mock-exam"
            onMouseEnter={() => playSound('hover')}
            onClick={() => playSound('click')}
            className="flex flex-col h-full justify-between p-8 bg-gradient-to-br from-rose-600 to-red-700 text-white rounded-[2rem] shadow-xl shadow-rose-500/20 hover:shadow-rose-500/40 active:scale-[0.98] transition-all border border-rose-500/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
            <div className="absolute -bottom-10 -right-10 opacity-20 pointer-events-none group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
               <Timer className="w-56 h-56" />
            </div>

            <div className="relative z-10">
               <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm border border-white/10 text-xs font-bold uppercase tracking-wider">
                 <Target className="w-4 h-4 text-white" /> L'Exercice Ultime
               </div>
               <h2 className="text-3xl font-black tracking-tight mb-2">Mise en situation</h2>
               <p className="text-rose-100 font-medium text-sm leading-relaxed mb-6">
                 Testez vos connaissances en conditions réelles avec un entrelacement total des matières.
               </p>
            </div>
            
            <div className="relative z-10 flex flex-col gap-2">
                <span className="w-full bg-black/20 hover:bg-black/30 transition-colors backdrop-blur-sm rounded-xl py-3 px-4 text-sm font-bold flex items-center justify-between border border-white/10">
                  <span className="flex items-center gap-2"><Flame className="w-4 h-4 text-orange-300" /> Mode Intense</span>
                  <span className="text-xs opacity-75">100 Q</span>
                </span>
            </div>
          </Link>
        </motion.section>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        
        {/* Subjects Bento */}
        <section className="lg:col-span-8 flex flex-col gap-8">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-3">
                <Book className="w-7 h-7 text-primary" />
                Vos Révisions
            </h2>
          </div>
          
          {[
            {
              title: "Français & Mathématiques",
              color: "border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-colors",
              headerColor: "text-blue-500 border-blue-500/20 bg-blue-500/10",
              ids: [SUBJECT_IDS.MATHS, SUBJECT_IDS.FRANCAIS]
            },
            {
              title: "Histoire-Géographie & EMC",
              color: "border-amber-500/20 bg-amber-500/5 transition-colors hover:bg-amber-500/10 hover:border-amber-500/30",
              headerColor: "text-amber-500 border-amber-500/20 bg-amber-500/10",
              ids: ['histoire', 'geo', 'emc']
            },
            {
              title: "Sciences & Technologie",
              color: "border-emerald-500/20 bg-emerald-500/5 transition-colors hover:bg-emerald-500/10 hover:border-emerald-500/30",
              headerColor: "text-emerald-500 border-emerald-500/20 bg-emerald-500/10",
              ids: ['physique', 'svt', 'techno']
            },
            {
              title: "Méthodologie & Oral",
              color: "border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/30 transition-colors",
              headerColor: "text-purple-500 border-purple-500/20 bg-purple-500/10",
              ids: ['oral', 'methodologie']
            }
          ].map((group, groupIdx) => {
            const groupSubjects = group.ids.map(id => filteredSubjects.find(s => s.id === id)).filter(Boolean) as typeof filteredSubjects;
            if (groupSubjects.length === 0) return null;

            return (
              <motion.div 
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * groupIdx }}
                className={`rounded-[2rem] border p-6 flex flex-col gap-4 ${group.color}`}
              >
                <div className="flex items-center gap-3 mb-2 px-1">
                  <h3 className={`text-sm font-black uppercase tracking-wider px-4 py-2 rounded-xl border ${group.headerColor}`}>
                    {group.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {groupSubjects.map((subject) => {
                    const Icon = iconMap[subject.icon as keyof typeof iconMap] || Book;
                    const theme = getTheme(subject.id);
                    const subjectCompleted = subject.topics.filter(t => progress.completedTopics.includes(t.id)).length;
                    const subjectTotal = subject.topics.length;
                    
                    return (
                      <div key={subject.id} className="bg-surface/50 rounded-3xl p-1 shadow-sm hover:shadow-md transition-shadow">
                        <StatCard
                          id={subject.id}
                          name={subject.name}
                          icon={Icon}
                          theme={theme}
                          completedCount={subjectCompleted}
                          totalCount={subjectTotal}
                        />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Side panel: Gamification & Stats */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-surface rounded-[2rem] p-6 border border-border shadow-sm flex-1 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <Trophy className="w-5 h-5 text-orange-500" />
              </div>
              <h2 className="text-lg font-bold">Mes Badges</h2>
            </div>
            <div className="flex-1 overflow-hidden relative">
               {/* Fade out effect at bottom to suggest scrolling if many badges */}
               <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none"></div>
               <div className="h-full overflow-y-auto pb-8 pr-2 custom-scrollbar">
                 <BadgeList layout="compact" />
               </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-surface rounded-[2rem] p-6 border border-border shadow-sm"
          >
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <BarChart2 className="w-5 h-5 text-blue-500" />
              </div>
              <h2 className="text-lg font-bold">Activité</h2>
            </div>
            <Statistics compact />
          </motion.section>
        </aside>

      </div>
    </PageTransition>
  );
};
