# À propos d'Espace Réussite Brevet 2026 ℹ️

## Notre Mission 🎯

Cette application est née d'une envie simple : offrir aux élèves de 3ème un outil de révision agréable, accessible et sans prise de tête. Pas de publicité, pas de compte obligatoire, pas de données vendues. Juste du contenu pédagogique structuré, présenté de façon interactive, pour que chacun puisse réviser à son rythme et dans le plaisir.

## Approche Pédagogique 🧠

- **Micro-learning** : Des sessions courtes pour maintenir l'attention.
- **Apprentissage Actif** : Des `<mini-quiz>` réguliers, des `<concept-card>` pour ancrer les points clés, des schémas interactifs et un mode "Réviser mes erreurs" pour valider les acquis.
- **Personnalisation & Gamification** : Un profil complet (Classe, Objectifs, Futur métier), une mascotte contextuelle qui change de tenue selon chaque matière (SVT, Physique, Techno, Histoire…), un système de progression (XP, niveaux, badges, séries).
- **Accessibilité & SEO** : Une interface claire, navigable au clavier, optimisée pour le référencement (SEO), avec un thème sombre unique et un onboarding doux.
- **Hors-ligne & Architecture évolutive** : Fonctionnement 100% offline (PWA) pour réviser n'importe où. La couche de données suit un pattern Repository qui pourrait, le jour venu, se connecter à un backend distant sans toucher à l'interface.
- **Hybride** : Possibilité d'exporter le contenu pour des révisions sur papier, loin des écrans.

## Technologies Utilisées 💻

- **Frontend** : React 19, TypeScript, Vite
- **Styling** : Tailwind CSS (avec Design System via variables CSS), Lucide React (Icônes)
- **State Management** : Zustand (pour la gamification et la progression, persistées dans le `localStorage`)
- **Feedback** : Web3Forms (clé injectée via variable d'environnement Coolify) pour l'envoi de suggestions et signalements de bugs par email, sans stocker de données.
- **Architecture évolutive** : Pattern Repository + Service de synchronisation (stub) pour faciliter une éventuelle migration vers un vrai backend (sans impact sur l'UI).
- **Animations** : Framer Motion, Canvas Confetti
- **Rendu Markdown** : React Markdown, Remark Math, Rehype Katex (pour les formules mathématiques)
- **Scripts** : Node.js (tsx) pour l'export Markdown

## Créateur 👨‍💻

- **Geoffroy Streit** (Hylst)
- **Contact** : [geoffroy.streit@gmail.com](mailto:geoffroy.streit@gmail.com)
- **Hébergement** : VPS personnel Hylst.fr chez Hostinger
- **Site** : [https://hylst.fr/brevet2026/](https://hylst.fr/brevet2026/)
