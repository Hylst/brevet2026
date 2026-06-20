import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { SUBJECTS } from '../../data/content';
import { useScoreStore, selectSubjectScore, selectGlobalScore } from '../../store/useScoreStore';
import clsx from 'clsx';

export const Statistics: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const scores = useScoreStore(state => state.scores);
  const globalScore = useMemo(() => selectGlobalScore(scores), [scores]);

  const data = useMemo(() => {
    return SUBJECTS.map(subject => {
      const { percentage } = selectSubjectScore(scores, subject.id);
      
      const shortNameMap: Record<string, string> = {
        'maths': 'Maths',
        'francais': 'Français',
        'histoire-geo-emc': 'Hist-Géo',
        'sciences': 'Sciences',
        'oral': 'Oral',
        'methodologie': 'Méthode',
      };
      
      const colorMap: Record<string, string> = {
        'maths': 'var(--color-primary)',
        'francais': 'var(--color-danger)',
        'histoire-geo-emc': 'var(--color-warning)',
        'sciences': 'var(--color-success)',
        'oral': 'var(--color-primary)',
        'methodologie': 'var(--color-primary)',
      };
      
      return {
        name: shortNameMap[subject.id] || subject.name,
        score: percentage,
        fill: colorMap[subject.id] || '#8884d8'
      };
    }).filter(d => d.score > 0);
  }, [scores]);

  if (globalScore.total === 0) {
    return (
      <div className={clsx(
        "bg-surface/50 border border-border text-center flex items-center justify-center", 
        compact ? "rounded-xl p-6 py-8 flex-1" : "rounded-2xl p-8 h-80"
      )}>
        <p className="text-muted text-sm leading-relaxed max-w-[200px]">Réponds aux QCM dans les cours pour voir tes statistiques !</p>
      </div>
    );
  }

  return (
    <div className={clsx("flex flex-col", !compact && "bg-surface/50 border border-border rounded-2xl p-6 h-80", compact && "flex-1")}>
      {!compact && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-foreground font-bold">Réussite aux QCM par matière</h3>
          <div className="bg-background px-3 py-1 rounded-lg border border-border font-mono text-sm shadow-inner">
            Global : <span className="text-success font-bold">{globalScore.percentage}%</span>
            <span className="text-muted text-xs ml-2">({globalScore.correct}/{globalScore.total})</span>
          </div>
        </div>
      )}
      {compact && (
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted">Moyenne Globale</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-success">{globalScore.percentage}%</span>
            <span className="text-xs text-muted">({globalScore.correct}/{globalScore.total} QCM)</span>
          </div>
        </div>
      )}
      <div className={clsx("min-h-0 relative", compact ? "h-[150px]" : "flex-1")}>
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 0, right: 0, left: compact ? -20 : -20, bottom: 0 }}>
              <XAxis 
                dataKey="name" 
                tick={{ fill: 'var(--color-muted)', fontSize: 10 }} 
                axisLine={false} 
                tickLine={false} 
                interval={0}
                angle={compact ? -45 : 0}
                textAnchor={compact ? "end" : "middle"}
                height={compact ? 40 : 30}
              />
              <YAxis 
                tick={{ fill: 'var(--color-muted)', fontSize: 10 }} 
                axisLine={false} 
                tickLine={false} 
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--color-foreground)', fontSize: '12px' }}
                formatter={(value: number) => [`${value}%`, 'Moyenne']}
              />
              <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center absolute inset-0">
            <p className="text-muted text-xs text-center border border-dashed border-border/50 rounded-lg w-full py-6">Pas assez de données individuelles pour le graphe.</p>
          </div>
        )}
      </div>
    </div>
  );
};
