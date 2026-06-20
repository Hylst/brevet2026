import React from 'react';
import { SUBJECTS } from '../data/content';
import { getProgress } from '../services/storageService';
import { Card } from '../components/ui/Card';
import { Calculator, Globe, Atom, Dna, Cpu, Book, Languages, ArrowRight, Compass, Mic } from 'lucide-react';
import clsx from 'clsx';
import { SEO } from '../components/ui/SEO';

const iconMap: Record<string, any> = {
  Calculator, Globe, Atom, Dna, Cpu, Book, Languages, Compass, Mic
};

export const SubjectsList: React.FC = () => {
  const progress = getProgress();

  return (
    <div className="p-4 pb-24 space-y-6">
      <SEO title="Matières - Hylst Brevet 2026" description="Liste de toutes les matières au programme du Brevet des collèges. Révisez les maths, le français, l'histoire-géo et les sciences." />
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-foreground">Toutes les matières</h1>
      </div>

      <div className="space-y-4">
        {SUBJECTS.map((subject) => {
          const Icon = iconMap[subject.icon] || Book;
          const subjectCompleted = subject.topics.filter(t => progress.completedTopics.includes(t.id)).length;
          const subjectTotal = subject.topics.length;
          const percentage = subjectTotal > 0 ? Math.round((subjectCompleted / subjectTotal) * 100) : 0;
          
          return (
              <Card
                key={subject.id}
                to={`/subject/${subject.id}`}
                className="group block overflow-hidden"
              >
                {/* Subtle highlight sweep */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out" />
                </div>
                
                <div className="p-4 flex items-center gap-4 relative z-10">
                  <div className={clsx("w-12 h-12 rounded-lg flex items-center justify-center shrink-0 relative transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-inner", subject.color)}>
                    <div className={clsx("absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500", subject.color)} />
                    <Icon className="w-6 h-6 text-white relative z-10 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-semibold text-lg text-foreground transition-colors duration-300 group-hover:text-primary">{subject.name}</h3>
                      <ArrowRight className="w-5 h-5 text-subtle group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-muted mb-2">
                      <span>{subjectTotal} modules</span>
                      {subjectTotal > 0 && (
                          <span className={clsx(
                              "font-medium",
                              percentage === 100 ? "text-success" : "text-primary transition-colors duration-300 group-hover:text-primary-focus"
                          )}>
                              {percentage}% terminé
                          </span>
                      )}
                    </div>

                    {/* Mini Progress Bar */}
                    <div className="h-1.5 bg-surface rounded-full overflow-hidden w-full shadow-inner relative">
                      <div 
                        className={clsx(
                            "h-full rounded-full transition-all duration-1000 ease-out", 
                            subject.color.replace('bg-', 'bg-')
                        )}
                        style={{ width: `${percentage}%`, backgroundColor: 'currentColor' }} 
                      >
                         <div className="absolute inset-0 bg-white/20 w-0 group-hover:w-full transition-all duration-1000 ease-in-out" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
          );
        })}
      </div>
    </div>
  );
};