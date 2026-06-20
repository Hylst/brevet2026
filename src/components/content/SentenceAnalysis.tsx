import React, { useState } from 'react';
import clsx from 'clsx';

type WordGroup = {
  text: string;
  nature: string;
  function: string;
  color: string;
  explanation: string;
};

export const SentenceAnalysis: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sentence: WordGroup[] = [
    {
      text: "Le petit chat noir",
      nature: "Groupe Nominal (GN)",
      function: "Sujet",
      color: "text-primary border-primary/30 bg-primary/10",
      explanation: "C'est lui qui fait l'action. Il régit l'accord du verbe."
    },
    {
      text: " mange ",
      nature: "Verbe d'action",
      function: "Noyau du prédicat",
      color: "text-danger border-danger/30 bg-danger/10",
      explanation: "Exprime l'action réalisée par le sujet. Conjugué au présent de l'indicatif."
    },
    {
      text: "la souris verte",
      nature: "Groupe Nominal (GN)",
      function: "Complément d'Objet Direct (COD)",
      color: "text-success border-success/30 bg-success/10",
      explanation: "Complète le verbe directement (sans préposition). Répond à la question 'mange quoi ?'."
    },
    {
      text: " dans le jardin.",
      nature: "Groupe Prépositionnel (GP)",
      function: "Complément Circonstanciel de Lieu (CCL)",
      color: "text-warning border-warning/30 bg-warning/10",
      explanation: "Indique le lieu de l'action. Il peut être déplacé ou supprimé."
    }
  ];

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border flex flex-col items-center">
      <h3 className="text-xl font-bold text-foreground mb-6">Analyse Logique de la Phrase</h3>
      
      <p className="text-sm text-muted mb-8 text-center">Survolez ou cliquez sur les groupes de mots pour voir leur analyse.</p>

      <div className="flex flex-wrap justify-center gap-2 text-xl sm:text-2xl font-serif mb-12">
        {sentence.map((group, index) => (
          <span
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
            className={clsx(
              "px-2 py-1 rounded-lg cursor-pointer transition-all duration-300 border-b-2",
              hoveredIndex === index ? group.color : "border-transparent hover:bg-surface-hover text-foreground"
            )}
          >
            {group.text}
          </span>
        ))}
      </div>

      <div className="w-full max-w-lg min-h-[120px]">
        {hoveredIndex !== null ? (
          <div className={clsx("p-4 rounded-xl border transition-all duration-300", sentence[hoveredIndex].color.replace('text-', 'border-').replace('/10', '/20'))}>
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-foreground">{sentence[hoveredIndex].nature}</span>
              <span className={clsx("text-sm font-bold px-2 py-0.5 rounded", sentence[hoveredIndex].color)}>{sentence[hoveredIndex].function}</span>
            </div>
            <p className="text-muted text-sm">{sentence[hoveredIndex].explanation}</p>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center p-4 rounded-xl border border-border border-dashed text-muted text-sm">
            Sélectionnez un groupe de mots
          </div>
        )}
      </div>
    </div>
  );
};
