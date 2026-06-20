import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Callout, DefinitionBox, FormulaBox, MethodBox } from '../components/content/CourseElements';
import { MiniQuiz, Flashcard } from '../components/content/InteractiveElements';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';

export const ComponentShowcase: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition className="min-h-screen bg-background pb-24">
      <SEO title="Composants Interactifs - Hylst Brevet 2026" />
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border p-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-surface-hover text-foreground transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="font-bold text-foreground text-lg">Bibliothèque de Composants</h1>
      </div>

      <div className="p-4 max-w-2xl mx-auto space-y-12 mt-4">
        
        <section>
          <h2 className="text-2xl font-black text-foreground mb-6 border-b border-border pb-2">1. Rappels de Cours</h2>
          
          <h3 className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Callouts (Alertes & Infos)</h3>
          <Callout type="info" title="À savoir">
            La Première Guerre mondiale (1914-1918) est caractérisée par la guerre de tranchées et l'utilisation de nouvelles armes industrielles.
          </Callout>
          
          <Callout type="warning" title="Attention aux signes !">
            N'oublie pas que multiplier deux nombres négatifs donne un résultat positif : (-3) × (-4) = 12.
          </Callout>

          <Callout type="tip" title="Astuce de mémorisation">
            Pour retenir les planètes : "Me Voici Toute Mignonne, Je Suis Une Nébuleuse" (Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune).
          </Callout>

          <h3 className="text-sm font-bold text-muted uppercase tracking-wider mt-8 mb-2">Boîte de Définition</h3>
          <DefinitionBox term="Allégorie">
            Représentation concrète d'une idée abstraite. Par exemple, la Marianne est l'allégorie de la République française.
          </DefinitionBox>

          <h3 className="text-sm font-bold text-muted uppercase tracking-wider mt-8 mb-2">Boîte de Formule</h3>
          <FormulaBox title="Théorème de Pythagore">
            Si un triangle ABC est rectangle en A, alors :<br/>
            <span className="text-3xl text-primary mt-3 block">BC² = AB² + AC²</span>
          </FormulaBox>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-6 border-b border-border pb-2">2. Activités Types & Méthodologie</h2>
          
          <MethodBox 
            title="Développer une expression (Double distributivité)"
            steps={[
              "Identifier les termes de chaque parenthèse.",
              "Multiplier chaque terme de la première parenthèse par chaque terme de la seconde.",
              "Faire attention à la règle des signes.",
              "Réduire l'expression finale en regroupant les termes de même nature."
            ]}
            example={
              <div>
                (x + 2)(x + 3) <br/>
                = x × x + x × 3 + 2 × x + 2 × 3 <br/>
                = x² + 3x + 2x + 6 <br/>
                <strong className="text-success">= x² + 5x + 6</strong>
              </div>
            }
          />
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-6 border-b border-border pb-2">3. Éléments Interactifs</h2>
          
          <h3 className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Mini QCM Intégré</h3>
          <MiniQuiz 
            question="Quelle est la capitale de l'Australie ?"
            options={["Sydney", "Melbourne", "Canberra", "Brisbane"]}
            correctAnswer={2}
            explanation="Contrairement aux idées reçues, ce n'est ni Sydney ni Melbourne, mais Canberra qui a été construite spécifiquement pour être la capitale."
          />

          <h3 className="text-sm font-bold text-muted uppercase tracking-wider mt-8 mb-2">Flashcard (Recto/Verso)</h3>
          <Flashcard 
            front="Date de la chute du mur de Berlin ?"
            back={
              <div>
                <strong className="text-2xl text-foreground block mb-2">9 Novembre 1989</strong>
                <p className="text-sm text-muted">Cet événement marque la fin de la Guerre Froide et le début de la réunification allemande.</p>
              </div>
            }
          />
        </section>

      </div>
    </PageTransition>
  );
};
