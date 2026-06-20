import React, { useMemo, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../data/content';
import { getTheme } from '../lib/theme';
import { PageTransition } from '../components/PageTransition';
import { LessonContent } from '../components/LessonContent';
import { ChevronLeft, BookOpen, Printer, List, X, CheckCircle, Check } from 'lucide-react';
import clsx from 'clsx';
import GithubSlugger from 'github-slugger';
import { markBookRead, getProgress } from '../services/storageService';
import { useGamificationStore } from '../store/useGamificationStore';
import { useUserStore } from '../store/useUserStore';
import confetti from 'canvas-confetti';
import { SEO } from '../components/ui/SEO';

export const SubjectBook: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState<string>('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const { level } = useUserStore();

  const { addXP, awardBadge } = useGamificationStore();

  useEffect(() => {
    if (subjectId) {
      const progress = getProgress();
      if (progress.completedBooks?.includes(subjectId)) {
        setIsCompleted(true);
      }
    }
  }, [subjectId]);

  const handleComplete = () => {
    if (subjectId && !isCompleted) {
      const isNew = markBookRead(subjectId);
      if (isNew) {
        addXP(50); // Big bonus for reading the whole book
        awardBadge('bookworm');
        setIsCompleted(true);
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#22c55e', '#3b82f6', '#eab308', '#a855f7']
        });
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  const subject = useMemo(() => {
    const raw = SUBJECTS.find(s => s.id === subjectId);
    if (!raw) return null;
    return {
      ...raw,
      topics: raw.topics.filter(t => t.level === undefined || t.level === '3eme')
    };
  }, [subjectId]);

  const bookContent = useMemo(() => {
    if (!subject) return '';
    
    let combinedMarkdown = '';
    for (const topic of subject.topics) {
      if (topic.type === 'sheet' && topic.content) {
        combinedMarkdown += topic.content + '\n\n---\n\n';
      }
    }
    return combinedMarkdown;
  }, [subject]);

  const toc = useMemo(() => {
    if (!bookContent) return [];
    const slugger = new GithubSlugger();
    const headings = bookContent.match(/^(#{1,3})\s+(.+)$/gm);
    if (!headings) return [];
    
    return headings.map((h, index) => {
      const match = h.match(/^(#{1,3})\s+(.+)$/);
      if (!match) return null;
      const level = match[1].length;
      const title = match[2].trim();
      const id = slugger.slug(title);
      return { level, title, id, index };
    }).filter(Boolean) as { level: number, title: string, id: string, index: number }[];
  }, [bookContent]);

  // Intersection Observer for TOC highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    const elements = document.querySelectorAll('h1, h2, h3');
    elements.forEach((elem) => observer.observe(elem));

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [bookContent]);

  if (!subject) {
    return <div className="p-8 text-center text-muted">Matière introuvable</div>;
  }

  const theme = getTheme(subject.id);

  return (
    <PageTransition className="min-h-screen bg-background pb-safe font-sans">
      <SEO title={`Le Grand Livre de ${subject.name} - Hylst Brevet 2026`} description={`Livre numérique complet pour la matière ${subject.name}. Imprimez ou lisez tout le cours d'une traite.`} type="book" />
      {/* Sticky Header */}
      <div className={clsx("no-print sticky top-0 backdrop-blur-2xl border-b border-border flex flex-col z-50 transition-all bg-background/80")}>
        <div className="px-4 py-3 flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)} 
            aria-label="Retour"
            className={clsx("p-2 -ml-2 rounded-full hover:bg-surface-hover transition-colors", theme.text)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <BookOpen className={clsx("w-3.5 h-3.5", theme.text)} />
                <p className={clsx("text-xs font-bold uppercase tracking-wider", theme.text)}>{subject.name}</p>
              </div>
              <h1 className="font-bold text-foreground truncate text-base sm:text-lg leading-tight">Livre Numérique Complet</h1>
          </div>
          <button 
            onClick={() => {
              if (window.innerWidth >= 1024) {
                setIsSidebarVisible(!isSidebarVisible);
              } else {
                setIsMobileTocOpen(true);
              }
            }}
            aria-label={isSidebarVisible ? "Masquer le sommaire" : "Afficher le sommaire"}
            className={clsx("p-2 rounded-full hover:bg-surface-hover transition-colors", theme.text)}
          >
            <List className="w-6 h-6" />
          </button>
        </div>
        {/* Reading Progress Bar */}
        <div className="h-0.5 w-full bg-surface-hover">
          <div 
            className={clsx("h-full transition-all duration-150 ease-out", theme.background)}
            style={{ width: `${Math.min(100, Math.max(0, readingProgress))}%` }}
          />
        </div>
      </div>

      {/* Mobile TOC Overlay */}
      {isMobileTocOpen && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm lg:hidden flex flex-col">
          <div className="px-4 py-3 flex items-center justify-between border-b border-border">
            <h3 className="font-bold uppercase tracking-wider text-sm text-foreground flex items-center gap-2">
              <List className="w-5 h-5" /> Sommaire
            </h3>
            <button 
              onClick={() => setIsMobileTocOpen(false)}
              aria-label="Fermer le sommaire"
              className="p-2 rounded-full hover:bg-surface-hover text-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-1">
              {toc.map((item) => (
                <a
                  key={`${item.id}-${item.index}-mobile`}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileTocOpen(false);
                    scrollToSection(item.id);
                  }}
                  className={clsx(
                    "block py-2 text-sm transition-colors border-l-2 pl-3",
                    item.level === 1 ? "font-bold mt-4 text-foreground" : 
                    item.level === 2 ? "font-medium text-muted ml-2" : "text-subtle ml-4 text-xs",
                    activeId === item.id 
                      ? clsx(theme.border, theme.text, "bg-surface-hover/30 rounded-r-md")
                      : "border-transparent hover:border-border-hover hover:text-foreground"
                  )}
                  style={activeId === item.id ? { borderColor: 'currentColor' } : {}}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className={clsx("mx-auto flex flex-col lg:flex-row transition-all duration-300", isSidebarVisible ? "max-w-[1400px]" : "max-w-screen-2xl")}>
        {/* Sidebar TOC (Desktop) */}
        <aside className={clsx(
          "no-print hidden lg:block shrink-0 border-r border-border sticky top-[64px] h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar transition-all duration-300",
          isSidebarVisible ? "w-72 p-6 opacity-100" : "w-0 p-0 opacity-0 border-r-0"
        )}>
          <div className="flex items-center gap-2 mb-6 text-foreground overflow-hidden whitespace-nowrap">
            <List className="w-5 h-5 shrink-0" />
            <h3 className="font-bold uppercase tracking-wider text-sm">Sommaire</h3>
          </div>
          <nav className="space-y-1 overflow-hidden">
            {toc.map((item) => (
              <a
                key={`${item.id}-${item.index}`}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={clsx(
                  "block py-1.5 text-sm transition-colors border-l-2 pl-3 whitespace-nowrap overflow-hidden text-ellipsis",
                  item.level === 1 ? "font-bold mt-4 text-foreground" : 
                  item.level === 2 ? "font-medium text-muted ml-2" : "text-subtle ml-4 text-xs",
                  activeId === item.id 
                    ? clsx(theme.border, theme.text, "bg-surface-hover/30 rounded-r-md")
                    : "border-transparent hover:border-border-hover hover:text-foreground"
                )}
                style={activeId === item.id ? { borderColor: 'currentColor' } : {}}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className={clsx(
          "flex-1 px-5 py-10 min-w-0 transition-all duration-300",
          isSidebarVisible ? "lg:px-16 lg:py-16" : "lg:px-24 lg:py-16"
        )}>
          {/* Title Section */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className={clsx("inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border", theme.background, theme.text, theme.border)}>
              Édition 2026
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold text-foreground tracking-tight leading-tight mb-8 font-serif">
              Le Grand Livre
              <span className={clsx("block mt-2 text-3xl sm:text-5xl", theme.text)}>de {subject.name}</span>
            </h1>
            <p className="no-print text-xl text-muted font-medium leading-relaxed mb-10">
              Retrouvez l'intégralité du cours pour le Brevet en un seul document continu. Parfait pour une lecture approfondie ou une impression.
            </p>
            
            <button
              onMouseEnter={() => { import('../lib/audio').then(m => m.playSound('hover')).catch(() => {}) }}
              onClick={(e) => { import('../lib/audio').then(m => m.playSound('click')).catch(() => {}); handlePrint(); }}
              className={clsx(
                "no-print inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95 group relative overflow-hidden",
                theme.background,
                "hover:opacity-90"
              )}
            >
              {/* Subtle highlight sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out" />
              </div>
              <Printer className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
              <span className="relative z-10">Exporter en PDF / Imprimer</span>
            </button>
          </div>

          {/* Divider */}
          <div className="no-print h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-16 max-w-3xl mx-auto"></div>

          {bookContent ? (
            <div className={clsx(
              "bg-background lg:bg-surface/40 rounded-[2rem] p-6 sm:p-12 lg:p-16 border border-border shadow-2xl mx-auto transition-all duration-300",
              isSidebarVisible ? "max-w-4xl" : "max-w-5xl"
            )}>
              <LessonContent content={bookContent} subjectId={subject.id} chapterId="book" />
              
              {/* Completion Section */}
              <div className="no-print mt-20 pt-10 border-t border-border">
                {!isCompleted ? (
                  <div className="flex flex-col items-center justify-center p-8 border border-border bg-surface/50 rounded-3xl text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Félicitations !</h3>
                    <p className="text-muted mb-6 max-w-md">Tu as atteint la fin du livre de {subject.name}. Valide ta lecture pour gagner un bonus d'XP.</p>
                    <button
                      onMouseEnter={() => { import('../lib/audio').then(m => m.playSound('hover')).catch(() => {}) }}
                      onClick={(e) => { import('../lib/audio').then(m => m.playSound('click')).catch(() => {}); handleComplete(); }}
                      className={clsx(
                        "px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95 flex items-center gap-2 group relative overflow-hidden",
                        theme.background,
                        "hover:opacity-90"
                      )}
                    >
                      {/* Subtle highlight sweep */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] z-0 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out" />
                      </div>
                      <Check className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:scale-125" />
                      <span className="relative z-10">Marquer le livre comme lu (+50 XP)</span>
                    </button>
                  </div>
                ) : (
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-8 sm:p-10 text-center shadow-2xl animate-in fade-in zoom-in duration-500">
                      <div className={clsx("absolute inset-0 opacity-10 bg-gradient-to-br", theme.gradient)}></div>
                      <div className="relative flex flex-col items-center gap-4">
                          <div className={clsx("w-16 h-16 rounded-full flex items-center justify-center bg-background shadow-inner border border-border", theme.text)}>
                              <CheckCircle className="w-8 h-8" />
                          </div>
                          <div>
                              <h3 className="font-extrabold text-2xl text-foreground mb-2">Livre terminé !</h3>
                              <p className="text-base text-muted font-medium max-w-sm mx-auto">
                                Tu as lu l'intégralité du livre de {subject.name}. Impressionnant !
                              </p>
                          </div>
                          <button 
                            onClick={() => navigate(-1)}
                            className={clsx(
                              "mt-4 px-8 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg",
                              theme.background,
                              "hover:opacity-90"
                            )}
                          >
                            Retour au sommaire
                          </button>
                      </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center text-subtle py-20">
              <p>Le contenu de ce livre est en cours de rédaction.</p>
            </div>
          )}
        </main>
      </div>
    </PageTransition>
  );
};
