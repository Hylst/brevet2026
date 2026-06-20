import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import 'katex/dist/katex.min.css';
import clsx from 'clsx';
import { getTheme } from '../lib/theme';
import { Lightbulb, Info } from 'lucide-react';

// Custom components
import { Callout, DefinitionBox, FormulaBox, MethodBox, BrevetChecklist, BrevetExercise, MarkdownContent, ConceptCard } from './content/CourseElements';
import { Flashcard, MiniQuiz, Timeline, CharacterCard } from './content/InteractiveElements';
import { DynamiquesTerritorialesSVG } from './content/DynamiquesTerritorialesSVG';
import { ArithmetiqueSVG } from './content/ArithmetiqueSVG';
import { PeriurbanisationSVG } from './content/PeriurbanisationSVG';
import { PythagorasSVG } from './content/PythagorasSVG';
import { WaterCycleSVG } from './content/WaterCycleSVG';
import { ThalesSVG } from './content/ThalesSVG';
import { ElectricCircuitSVG } from './content/ElectricCircuitSVG';
import { TrigonometrySVG } from './content/TrigonometrySVG';
import { AffineFunctionSVG } from './content/AffineFunctionSVG';
import { PhScaleSVG } from './content/PhScaleSVG';
import { PunnettSquareSVG } from './content/PunnettSquareSVG';
import { SentenceAnalysis } from './content/SentenceAnalysis';
import { EspacesProductifsSVG } from './content/EspacesProductifsSVG';
import { FaibleDensiteSVG } from './content/FaibleDensiteSVG';
import { AgePyramidSVG } from './content/AgePyramidSVG';
import { InteractiveAtom } from './content/InteractiveAtom';
import { ProbabilityUrnSVG } from './content/ProbabilityUrnSVG';
import { ProbabilityTreeSVG } from './content/ProbabilityTreeSVG';
import { GrandeursDimensionsSVG } from './content/GrandeursDimensionsSVG';
import { SolarSystemSVG } from './content/SolarSystemSVG';
import { ChaineInfoActionSVG } from './content/ChaineInfoActionSVG';
import { TransformationsSVG } from './content/TransformationsSVG';
import { VolumesFamiliesSVG } from './content/VolumesFamiliesSVG';
import { StatsComparator } from './content/StatsComparator';
import { ScratchAlgorithmSVG } from './content/ScratchAlgorithmSVG';
import { EquationsBalanceSVG } from './content/EquationsBalanceSVG';
import { LiteralMathSVG } from './content/LiteralMathSVG';
import { FractionsPieSVG } from './content/FractionsPieSVG';
import { ProportionnaliteSVG } from './content/ProportionnaliteSVG';
import { ScientificNotationSVG } from './content/ScientificNotationSVG';
import { PythagoreThalesSVG } from './content/PythagoreThalesSVG';
import { ResizingSVG } from './content/ResizingSVG';
import { ImageVocabSVG } from './content/ImageVocabSVG';
import { BrevetRedactionSVG } from './content/BrevetRedactionSVG';
import { BrevetTextAnalysisSVG } from './content/BrevetTextAnalysisSVG';
import { GrammarMemoSVG } from './content/GrammarMemoSVG';
import { ComplexSentenceSVG } from './content/ComplexSentenceSVG';
import { FiguresDeStyleSVG } from './content/FiguresDeStyleSVG';
import { TenseValuesSVG } from './content/TenseValuesSVG';
import { ReportedSpeechSVG } from './content/ReportedSpeechSVG';
import { SentenceTypesSVG } from './content/SentenceTypesSVG';
import { LexicalFieldSVG } from './content/LexicalFieldSVG';
import { AutobiographyPactSVG } from './content/AutobiographyPactSVG';
import { PastParticipleSVG } from './content/PastParticipleSVG';
import { ArgumentationSVG } from './content/ArgumentationSVG';
import { TheaterVocabSVG } from './content/TheaterVocabSVG';
import { UtopieDystopieSVG } from './content/UtopieDystopieSVG';
import { FriseChrono1GM2GMSVG } from './content/FriseChrono1GM2GMSVG';
import { FriseChrono1GMSVG } from './content/FriseChrono1GMSVG';
import { FriseChrono2GMSVG } from './content/FriseChrono2GMSVG';
import { ComparaisonTotalitarismesSVG } from './content/ComparaisonTotalitarismesSVG';
import { FranceVichySVG } from './content/FranceVichySVG';
import { GuerreFroideSVG } from './content/GuerreFroideSVG';
import { MondeMultipolaireSVG } from './content/MondeMultipolaireSVG';
import { FranceMondeDromComSVG } from './content/FranceMondeDromComSVG';
import { SourcesEnergieSVG } from './content/SourcesEnergieSVG';
import { EnergieDevDurableSVG } from './content/EnergieDevDurableSVG';
import { TransformationsChimiquesSVG } from './content/TransformationsChimiquesSVG';
import { MouvementsInteractionsSVG } from './content/MouvementsInteractionsSVG';
import { FissionFusionSVG } from './content/FissionFusionSVG';
import { UnionEuropeenneSVG } from './content/UnionEuropeenneSVG';
import { SymbolesRepubliqueSVG } from './content/SymbolesRepubliqueSVG';
import { InstitutionsVeRepubliqueSVG } from './content/InstitutionsVeRepubliqueSVG';
import { EngagementCitoyenSVG } from './content/EngagementCitoyenSVG';
import { DecolonisationSVG } from './content/DecolonisationSVG';
import { LaiciteSVG } from './content/LaiciteSVG';
import { MediasOpinionSVG } from './content/MediasOpinionSVG';
import { MethodologieAnalyseSVG } from './content/MethodologieAnalyseSVG';
import { PuissanceFrancaiseSVG } from './content/PuissanceFrancaiseSVG';
import { LandmarksMapSVG } from './content/LandmarksMapSVG';
import { CnrSecuriteSocialeSVG } from './content/CnrSecuriteSocialeSVG';
import { JusticeMineursSVG } from './content/JusticeMineursSVG';
import { ParcoursCitoyenneteSVG } from './content/ParcoursCitoyenneteSVG';
import { EmancipationFemmesSVG } from './content/EmancipationFemmesSVG';
import { GenetiqueAdnSVG } from './content/GenetiqueAdnSVG';
import { DesignCycleSVG } from './content/DesignCycleSVG';
import { AnalysePieuvreSVG } from './content/AnalysePieuvreSVG';
import { ReseauInternetSVG } from './content/ReseauInternetSVG';
import { NeuronSynapseSVG } from './content/NeuronSynapseSVG';
import { EffetSerreSVG } from './content/EffetSerreSVG';
import Mermaid from './content/Mermaid';
import { RespirationCirculationSVG } from './content/RespirationCirculationSVG';
import { NutritionDigestionSVG } from './content/NutritionDigestionSVG';
import { AlgorithmiqueBlocsSVG } from './content/AlgorithmiqueBlocsSVG';
import { GravitationUniversSVG } from './content/GravitationUniversSVG';
import { SignauxLumineuxSVG } from './content/SignauxLumineuxSVG';
import { SignauxSonoresSVG } from './content/SignauxSonoresSVG';
import { EnergieConservationSVG } from './content/EnergieConservationSVG';
import { PolitiqueVilleSVG } from './content/PolitiqueVilleSVG';
import { FrontPopulaireSVG } from './content/FrontPopulaireSVG';
import { MemoryGame, SortableList, FillInTheBlanks } from './content/AdvancedInteractions';
import { ZoomableImage } from './ui/ZoomableImage';

interface LessonContentProps {
  content: string;
  subjectId: string;
  chapterId?: string;
}

export const LessonContent: React.FC<LessonContentProps> = ({ content, subjectId, chapterId = 'unknown' }) => {
  const theme = getTheme(subjectId);
  const isCycle3 = false;

  const components = React.useMemo(() => ({
          // Custom Components mapping
          callout: ({ node, type, title, children, ...props }: any) => (
            <Callout type={type} title={title} {...props}>{children}</Callout>
          ),
          'concept-card': ({ node, title, icon, description, theme, ...props }: any) => (
            <ConceptCard title={title} icon={icon} description={description} theme={theme} {...props} />
          ),
          'definition-box': ({ node, term, children, ...props }: any) => (
            <DefinitionBox term={term} {...props}>{children}</DefinitionBox>
          ),
          'definitionbox': ({ node, term, children, ...props }: any) => (
            <DefinitionBox term={term} {...props}>{children}</DefinitionBox>
          ),
          'formula-box': ({ node, title, children, ...props }: any) => (
            <FormulaBox title={title} {...props}>{children}</FormulaBox>
          ),
          'formulabox': ({ node, title, children, ...props }: any) => (
            <FormulaBox title={title} {...props}>{children}</FormulaBox>
          ),
          'method-box': ({ node, title, steps, example, ...props }: any) => {
            // Parse steps and example if they are passed as JSON strings, or handle them appropriately
            let parsedSteps = [];
            try { parsedSteps = typeof steps === 'string' ? JSON.parse(steps) : steps; } catch (e) { console.error('method-box steps JSON parse error:', e, steps); }
            const exampleContent = typeof example === 'string' ? <MarkdownContent content={example} /> : example;
            return <MethodBox title={title} steps={parsedSteps || []} example={exampleContent} {...props} />;
          },
          'methodbox': ({ node, title, steps, example, ...props }: any) => {
            // Same logic
            let parsedSteps = [];
            try { parsedSteps = typeof steps === 'string' ? JSON.parse(steps) : steps; } catch (e) { console.error('methodbox steps JSON parse error:', e, steps); }
            const exampleContent = typeof example === 'string' ? <MarkdownContent content={example} /> : example;
            return <MethodBox title={title} steps={parsedSteps || []} example={exampleContent} {...props} />;
          },
          'brevet-checklist': ({ node, items, ...props }: any) => {
            let parsedItems = [];
            try { parsedItems = typeof items === 'string' ? JSON.parse(items) : items; } catch (e) { console.error('brevet-checklist items JSON parse error:', e, items); }
            return <BrevetChecklist items={parsedItems || []} {...props} />;
          },
          'brevetchecklist': ({ node, items, ...props }: any) => {
            let parsedItems = [];
            try { parsedItems = typeof items === 'string' ? JSON.parse(items) : items; } catch (e) { console.error('brevetchecklist items JSON parse error:', e, items); }
            return <BrevetChecklist items={parsedItems || []} {...props} />;
          },
          'brevet-exercise': ({ node, title, question, draft, solution, ...props }: any) => {
            const questionContent = typeof question === 'string' ? <MarkdownContent content={question} /> : question;
            const draftContent = typeof draft === 'string' ? <MarkdownContent content={draft} /> : draft;
            const solutionContent = typeof solution === 'string' ? <MarkdownContent content={solution} /> : solution;
            return <BrevetExercise title={title} question={questionContent} draft={draftContent} solution={solutionContent} {...props} />;
          },
          'brevetexercise': ({ node, title, question, draft, solution, ...props }: any) => {
            const questionContent = typeof question === 'string' ? <MarkdownContent content={question} /> : question;
            const draftContent = typeof draft === 'string' ? <MarkdownContent content={draft} /> : draft;
            const solutionContent = typeof solution === 'string' ? <MarkdownContent content={solution} /> : solution;
            return <BrevetExercise title={title} question={questionContent} draft={draftContent} solution={solutionContent} {...props} />;
          },
          flashcard: ({ node, front, back, ...props }: any) => (
            <Flashcard front={front} back={back} {...props} />
          ),
          timeline: ({ node, events, ...props }: any) => {
            let parsedEvents = [];
            try { parsedEvents = typeof events === 'string' ? JSON.parse(events) : events; } catch (e) { console.error('timeline events JSON parse error:', e, events); }
            return <Timeline events={parsedEvents || []} {...props} />;
          },
          'character-card': ({ node, name, dates, role, description, imageurl, ...props }: any) => (
            <CharacterCard name={name} dates={dates} role={role} description={description} imageUrl={imageurl} {...props} />
          ),
          'charactercard': ({ node, name, dates, role, description, imageurl, ...props }: any) => (
            <CharacterCard name={name} dates={dates} role={role} description={description} imageUrl={imageurl} {...props} />
          ),
          'mini-quiz': ({ node, question, options, correctanswer, explanation, ...props }: any) => {
            let parsedOptions = [];
            try { 
              if (typeof options === 'string') {
                if (options.includes('|') && !options.startsWith('[')) {
                  parsedOptions = options.split('|');
                } else {
                  parsedOptions = JSON.parse(options); 
                }
              } else {
                parsedOptions = options;
              }
              } catch (e) { console.error('mini-quiz options JSON parse error:', e, options); }
            return (
              <MiniQuiz 
                question={question} 
                options={parsedOptions || []} 
                correctAnswer={parseInt(correctanswer, 10)} 
                explanation={explanation} 
                subjectId={subjectId}
                chapterId={chapterId}
                {...props} 
              />
            );
          },
          'miniquiz': ({ node, question, options, correctanswer, explanation, ...props }: any) => {
            let parsedOptions = [];
            try { 
              if (typeof options === 'string') {
                if (options.includes('|') && !options.startsWith('[')) {
                  parsedOptions = options.split('|');
                } else {
                  parsedOptions = JSON.parse(options); 
                }
              } else {
                parsedOptions = options;
              }
              } catch (e) { console.error('miniquiz options JSON parse error:', e, options); }
            return (
              <MiniQuiz 
                question={question} 
                options={parsedOptions || []} 
                correctAnswer={parseInt(correctanswer, 10)} 
                explanation={explanation} 
                subjectId={subjectId}
                chapterId={chapterId}
                {...props} 
              />
            );
          },
          'arithmetique-svg': () => <ArithmetiqueSVG />,
          'dynamiques-territoriales-svg': () => <DynamiquesTerritorialesSVG />,
           'periurbanisation-svg': () => <PeriurbanisationSVG />,
           'politique-ville-svg': () => <PolitiqueVilleSVG />,
           'front-populaire-svg': () => <FrontPopulaireSVG />,
          'pythagoras-svg': () => <PythagorasSVG />,
          'water-cycle-svg': () => <WaterCycleSVG />,
          'thales-svg': () => <ThalesSVG />,
          'electric-circuit-svg': () => <ElectricCircuitSVG />,
          'trigonometry-svg': () => <TrigonometrySVG />,
          'affine-function-svg': () => <AffineFunctionSVG />,
          'ph-scale-svg': () => <PhScaleSVG />,
          'punnett-square-svg': () => <PunnettSquareSVG />,
          'sentence-analysis': () => <SentenceAnalysis />,
          'age-pyramid-svg': () => <AgePyramidSVG />,
          'espaces-productifs-svg': () => <EspacesProductifsSVG />,
          'faible-densite-svg': () => <FaibleDensiteSVG />,
          'interactive-atom': () => <InteractiveAtom />,
          'probability-urn-svg': () => <ProbabilityUrnSVG />,
          'probability-tree-svg': () => <ProbabilityTreeSVG />,
          'grandeurs-dimensions-svg': () => <GrandeursDimensionsSVG />,
          'solar-system-svg': () => <SolarSystemSVG />,
          'genetique-adn-svg': () => <GenetiqueAdnSVG />,
          'design-cycle-svg': () => <DesignCycleSVG />,
          'analyse-pieuvre-svg': () => <AnalysePieuvreSVG />,
          'reseau-internet-svg': () => <ReseauInternetSVG />,
          'neuron-synapse-svg': () => <NeuronSynapseSVG />,
          'effet-serre-svg': () => <EffetSerreSVG />,
          'chaine-info-action-svg': () => <ChaineInfoActionSVG />,
          'transformations-svg': () => <TransformationsSVG />,
          'volumes-families-svg': () => <VolumesFamiliesSVG />,
          'stats-comparator': () => <StatsComparator />,
          'scratch-algorithm-svg': () => <ScratchAlgorithmSVG />,
          'equations-balance-svg': () => <EquationsBalanceSVG />,
          'literal-math-svg': () => <LiteralMathSVG />,
          'fractions-pie-svg': () => <FractionsPieSVG />,
          'proportionnalite-svg': () => <ProportionnaliteSVG />,
          'scientific-notation-svg': () => <ScientificNotationSVG />,
          'pythagore-thales-svg': () => <PythagoreThalesSVG />,
          'resizing-svg': () => <ResizingSVG />,
          'image-vocab-svg': () => <ImageVocabSVG />,
          'brevet-redaction-svg': () => <BrevetRedactionSVG />,
          'brevet-text-analysis-svg': () => <BrevetTextAnalysisSVG />,
          'grammar-memo-svg': () => <GrammarMemoSVG />,
          'complex-sentence-svg': () => <ComplexSentenceSVG />,
          'figures-de-style-svg': () => <FiguresDeStyleSVG />,
          'tense-values-svg': () => <TenseValuesSVG />,
          'reported-speech-svg': () => <ReportedSpeechSVG />,
          'sentence-types-svg': () => <SentenceTypesSVG />,
          'lexical-field-svg': () => <LexicalFieldSVG />,
          'autobiography-pact-svg': () => <AutobiographyPactSVG />,
          'past-participle-svg': () => <PastParticipleSVG />,
          'argumentation-svg': () => <ArgumentationSVG />,
          'theater-vocab-svg': () => <TheaterVocabSVG />,
          'utopie-dystopie-svg': () => <UtopieDystopieSVG />,
          'frise-chrono-1gm-2gm-svg': () => <FriseChrono1GM2GMSVG />,
          'frise-chrono-1gm-svg': () => <FriseChrono1GMSVG />,
          'frise-chrono-2gm-svg': () => <FriseChrono2GMSVG />,
          'comparaison-totalitarismes-svg': () => <ComparaisonTotalitarismesSVG />,
          'france-vichy-svg': () => <FranceVichySVG />,
          'guerre-froide-svg': () => <GuerreFroideSVG />,
          'monde-multipolaire-svg': () => <MondeMultipolaireSVG />,
          'france-monde-drom-com-svg': () => <FranceMondeDromComSVG />,
          'sources-energie-svg': () => <SourcesEnergieSVG />,
          'energie-dev-durable-svg': () => <EnergieDevDurableSVG />,
          'transformations-chimiques-svg': () => <TransformationsChimiquesSVG />,
          'mouvements-interactions-svg': () => <MouvementsInteractionsSVG />,
          'fission-fusion-svg': () => <FissionFusionSVG />,
          'carte-union-europeenne-svg': () => <UnionEuropeenneSVG />,
          'symboles-republique-svg': () => <SymbolesRepubliqueSVG />,
          'institutions-ve-republique-svg': () => <InstitutionsVeRepubliqueSVG />,
          'engagement-citoyen-svg': () => <EngagementCitoyenSVG />,
          'decolonisation-svg': () => <DecolonisationSVG />,
          'laicite-svg': () => <LaiciteSVG />,
          'medias-opinion-svg': () => <MediasOpinionSVG />,
          'puissance-francaise-svg': () => <PuissanceFrancaiseSVG />,
          'landmarks-map-svg': () => <LandmarksMapSVG />,
          'cnr-securite-sociale-svg': () => <CnrSecuriteSocialeSVG />,
          'justice-mineurs-svg': () => <JusticeMineursSVG />,
          'parcours-citoyennete-svg': () => <ParcoursCitoyenneteSVG />,
          'emancipation-femmes-svg': () => <EmancipationFemmesSVG />,
          'mermaid-diagram': ({ chart, ...props }: any) => <Mermaid chart={chart} {...props} />,
          'methodologie-analyse-svg': () => <MethodologieAnalyseSVG />,
          'respiration-circulation-svg': () => <RespirationCirculationSVG />,
          'nutrition-digestion-svg': () => <NutritionDigestionSVG />,
          'algorithmique-blocs-svg': () => <AlgorithmiqueBlocsSVG />,
          'gravitation-univers-svg': () => <GravitationUniversSVG />,
          'signaux-lumineux-svg': () => <SignauxLumineuxSVG />,
          'signaux-sonores-svg': () => <SignauxSonoresSVG />,
          'energie-conservation-svg': () => <EnergieConservationSVG />,
          'memory-card-game': ({ pairs, ...props }: any) => <MemoryGame pairs={pairs} {...props} />,
          'drag-and-drop-list': ({ items, title, ...props }: any) => <SortableList items={items} title={title} {...props} />,
          'fill-in-the-blanks': ({ text, title, ...props }: any) => <FillInTheBlanks text={text} title={title} {...props} />,
          // Paragraphs (handle block elements inside p tags to avoid hydration errors)
          p: ({ node, children, ...props }: any) => {
            const hasBlock = node.children.some((child: any) => 
              child.type === 'element' && 
              [
                'img', 'method-box', 'methodbox', 'callout', 'definition-box', 'definitionbox', 'formula-box', 'formulabox', 'concept-card', 'conceptcard',
                'brevet-checklist', 'brevetchecklist', 'brevet-exercise', 'brevetexercise', 'flashcard', 'timeline', 
                'character-card', 'charactercard', 'mini-quiz', 'miniquiz', 'arithmetique-svg', 'dynamiques-territoriales-svg', 'pythagoras-svg', 'water-cycle-svg', 
                'thales-svg', 'electric-circuit-svg', 'trigonometry-svg', 
                'affine-function-svg', 'ph-scale-svg', 'punnett-square-svg', 
                'sentence-analysis', 'age-pyramid-svg', 'interactive-atom', 'probability-urn-svg', 'probability-tree-svg', 'espaces-productifs-svg', 'faible-densite-svg', 'grandeurs-dimensions-svg',
                'solar-system-svg', 'genetique-adn-svg', 'design-cycle-svg', 'analyse-pieuvre-svg', 'reseau-internet-svg', 'neuron-synapse-svg', 'effet-serre-svg', 'chaine-info-action-svg',
                'transformations-svg', 'volumes-families-svg',
                'stats-comparator', 'scratch-algorithm-svg', 'algorithmique-blocs-svg',
                'equations-balance-svg', 'literal-math-svg',
                'fractions-pie-svg', 'proportionnalite-svg',
                'scientific-notation-svg', 'pythagore-thales-svg', 'resizing-svg',
                'image-vocab-svg', 'brevet-redaction-svg', 'brevet-text-analysis-svg',
                'grammar-memo-svg', 'complex-sentence-svg', 'figures-de-style-svg',
                'tense-values-svg', 'reported-speech-svg', 
                'sentence-types-svg', 'lexical-field-svg', 'autobiography-pact-svg', 
                'past-participle-svg', 'argumentation-svg', 'theater-vocab-svg', 
                'utopie-dystopie-svg', 'frise-chrono-1gm-2gm-svg', 'frise-chrono-1gm-svg', 'frise-chrono-2gm-svg', 'comparaison-totalitarismes-svg',
                'france-vichy-svg', 'guerre-froide-svg', 'monde-multipolaire-svg', 
                'france-monde-drom-com-svg', 'carte-union-europeenne-svg', 'puissance-francaise-svg', 'landmarks-map-svg', 'symboles-republique-svg', 'institutions-ve-republique-svg', 'decolonisation-svg', 'laicite-svg', 'medias-opinion-svg',
                'cnr-securite-sociale-svg', 'justice-mineurs-svg', 'parcours-citoyennete-svg', 'emancipation-femmes-svg',
                'mermaid-diagram',
                'engagement-citoyen-svg', 'methodologie-analyse-svg', 'sources-energie-svg', 'transformations-chimiques-svg', 'mouvements-interactions-svg', 'fission-fusion-svg',
                'respiration-circulation-svg', 'nutrition-digestion-svg', 'memory-card-game', 'drag-and-drop-list', 'fill-in-the-blanks',
                'periurbanisation-svg',
                'politique-ville-svg',
                'front-populaire-svg',
                'gravitation-univers-svg', 'signaux-lumineux-svg', 'signaux-sonores-svg', 'energie-conservation-svg',
                'energie-dev-durable-svg', 'details', 'summary', 'faq-item', 'div'
              ].includes(child.tagName)
            );
            if (hasBlock) {
              return <div className="mb-4 leading-relaxed" {...props}>{children}</div>;
            }
            return <p {...props}>{children}</p>;
          },
          // Custom Headers
          h1: ({ node, ...props }: any) => <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 mt-6 tracking-tight text-foreground font-serif" {...props} />,
          h2: ({ node, ...props }: any) => (
            <h2 className={clsx("text-3xl font-bold mt-16 mb-8 flex items-center gap-3 border-b border-border pb-4 font-serif", theme.text)} {...props} />
          ),
          h3: ({ node, ...props }: any) => <h3 className="text-2xl font-bold mt-10 mb-6 text-foreground flex items-center gap-2 before:content-[''] before:block before:w-1.5 before:h-6 before:bg-current before:rounded-full font-serif" {...props} />,
          
          // Enhanced Blockquotes (Callouts)
          blockquote: ({ node, children, ...props }: any) => {
            return (
              <div className="my-8 flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-surface to-background border border-border shadow-lg relative overflow-hidden" {...props}>
                <div className={clsx("absolute top-0 left-0 w-1 h-full", theme.background)}></div>
                <div className="shrink-0 mt-1">
                   <Lightbulb className={clsx("w-6 h-6", theme.text)} />
                </div>
                <div className="text-foreground text-base space-y-2 font-medium">
                  {children}
                </div>
              </div>
            );
          },

          // Styled Tables
          table: ({ node, ...props }: any) => (
            <div className="overflow-hidden my-8 rounded-2xl border border-border shadow-lg bg-surface/50 backdrop-blur-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base" {...props} />
              </div>
            </div>
          ),
          thead: ({ node, ...props }: any) => <thead className="bg-surface text-foreground font-bold border-b border-border" {...props} />,
          th: ({ node, ...props }: any) => <th className="px-5 py-4 whitespace-nowrap" {...props} />,
          td: ({ node, ...props }: any) => <td className="px-5 py-4 border-t border-border text-muted" {...props} />,

          // Lists
          ul: ({ node, ...props }: any) => <ul className="list-disc pl-6 space-y-3 my-6 text-muted marker:text-muted" {...props} />,
          ol: ({ node, ...props }: any) => <ol className="list-decimal pl-6 space-y-3 my-6 text-muted marker:text-muted font-medium" {...props} />,
          li: ({ node, ...props }: any) => <li className="pl-2" {...props} />,

          // Strong
          strong: ({ node, ...props }: any) => <strong className="font-bold text-foreground bg-surface/40 px-1 py-0.5 rounded" {...props} />,

          // Code blocks (preserved for algorithmic questions)
          code: ({ node, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');
            const isInline = !match && !String(children).includes('\n');
            
            if (isInline) {
              return (
                <code className={clsx("px-1.5 py-0.5 rounded-md bg-surface font-mono text-sm border border-border", theme.text)} {...props}>
                  {children}
                </code>
              );
            }
            return (
               <div className="mockup-code bg-background rounded-2xl overflow-hidden border border-border my-8 shadow-2xl">
                   <div className="bg-surface px-4 py-3 text-xs text-muted font-mono border-b border-border flex items-center gap-2 select-none">
                       <div className="flex gap-1.5">
                         <div className="w-3 h-3 rounded-full bg-danger/80"></div>
                         <div className="w-3 h-3 rounded-full bg-warning/80"></div>
                         <div className="w-3 h-3 rounded-full bg-success/80"></div>
                       </div>
                       <span className="ml-2">Exemple de code</span>
                   </div>
                   <pre className="p-5 overflow-x-auto text-sm text-foreground font-mono leading-relaxed">
                       {children}
                   </pre>
               </div>
            );
          },
          
          // Images
          img: ({ node, src, alt, ...props }: any) => {
            let imageSrc = src;
            if (src && src.startsWith('../assets/')) {
              const filename = src.split('/').pop();
              const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
              imageSrc = `${base}assets/${filename}`;
            }

            if (!imageSrc) return null;

            return (
              <figure className="my-10 group w-full">
                  <div className="overflow-hidden rounded-2xl border border-border bg-white/5 shadow-2xl relative p-4 w-full text-center">
                    <ZoomableImage 
                      src={imageSrc} 
                      alt={alt} 
                      className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-700 group-hover:scale-[1.02] mx-auto" 
                    />
                  </div>
                  {alt && <figcaption className="text-center text-sm text-muted mt-4 font-medium flex items-center justify-center gap-2"><Info className="w-4 h-4" /> {alt}</figcaption>}
              </figure>
            );
          },

          // Details / Summary
          details: ({ node, className, ...props }: any) => (
            <details className={clsx("group my-8 rounded-2xl bg-surface/40 border border-border open:bg-surface/80 transition-all duration-300 shadow-sm open:shadow-md", className)} {...props} />
          ),
          summary: ({ node, className, children, ...props }: any) => (
            <summary className={clsx("cursor-pointer p-5 font-semibold text-foreground group-open:text-foreground group-open:border-b group-open:border-border outline-none select-none flex items-center gap-3 list-none", className)} {...props}>
              <div className="w-6 h-6 rounded-full bg-surface shrink-0 flex items-center justify-center group-open:rotate-90 transition-transform duration-300">
                <span className="text-xs">▶</span>
              </div>
              {children}
            </summary>
          ),
          'faq-item': ({ node, title, children, ...props }: any) => (
            <details className="group my-8 rounded-2xl bg-surface/40 border border-border open:bg-surface/80 transition-all duration-300 shadow-sm open:shadow-md" {...props}>
              <summary className="cursor-pointer p-5 font-semibold text-foreground group-open:text-foreground group-open:border-b group-open:border-border outline-none select-none flex items-center gap-3 list-none">
                <div className="w-6 h-6 rounded-full bg-surface shrink-0 flex items-center justify-center group-open:rotate-90 transition-transform duration-300">
                  <span className="text-xs">▶</span>
                </div>
                {title}
              </summary>
              <div className="p-5 pt-4 text-muted text-sm leading-relaxed">
                {children}
              </div>
            </details>
          )
  }), [subjectId, chapterId, theme]);

  return (
    <div className={clsx("prose prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-serif prose-a:text-primary hover:prose-a:text-primary-hover", isCycle3 ? "prose-xl leading-10" : "prose-lg", theme.prose)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSlug]}
        components={components as any}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};