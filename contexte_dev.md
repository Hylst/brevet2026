# Contexte de Développement 🛠️

Ce fichier a pour but de préserver le contexte de l'état actuel de **Brevet PWA 2026** pour aider les assistants IA et les développeurs à s'y retrouver instantanément dans le cycle de vie du projet.

## État Actuel (version 1.11.0)
L'application est fonctionnelle et prête pour la production. Nous venons de terminer une passe de robustesse, accessibilité et nettoyage de code :
- **L'intégration du Feedback utilisateur** : Utilisation de Web3Forms pour l'envoi de rapports de bug et de suggestions depuis le frontend sans serveur Node.js. Une note à propos de l'injection statique de `VITE_WEB3FORMS_ACCESS_KEY` a été ajoutée.
- **L'interactivité des cours Markdown** : Plus de 120 fiches markdown ont été retravaillées pour inclure des `fill-in-the-blanks`, `concept-card`, `mini-quiz`.
- **L'interopérabilité navigateurs** (Spécifiquement autour des politiques d'autoplay bloquant `AudioContext`). L'audio n'est à présent relâché qu'après le premier geste (click/touch).
- **Le système de gamification / streaks** qui accusait des défauts de calcul de temps liés aux décalages horaires UTC vs Local. L'historique d'activité journalité se compare aujourd'hui correctement en `YYYY-MM-DD`.
- **L'ergonomie des parcours** : La mascotte gère de manière précise la moindre sous-matière (SVT, Physique, Tech, Histoire, Géo, EMC, Maths, Français) plutôt qu'un englobant. Le levelling restaure tous les coeurs.
- **La sémantique des données** : Renommage de la partie "La planète Terre" en "Sciences et Vie de la Terre" pour coller au véritable diplôme.

## Architecture & Conventions (Rappels rapides)
- **Local-first** : Toute donnée est gérée en local (`localStorage` via Zustand). Les services exposent souvent des promesses (`async/await`) pour anticiper une migration vers le cloud (Firebase ou API custom).
- **Composants d'UI** : On garde des composants épurés avec `TailwindCSS` et `Framer-Motion`. Ne **jamais** utiliser inline `style={}` si on peut utiliser une utility class Tailwind.
- **Design Pédagogique** : Tout le contenu source est géré en Markdown. Des injecteurs permettent de parser les balises HTML spécifiques (ex: `<concept-card>`) pour rendre des composants React complets par dessus l'AST.

## Prochaines Étapes
- Surveiller la présence persistante d'erreurs éventuelles dans les logs côté iframe (liées à `iframe/worker` restrictions ou CSP dans l'environnement AI Studio).
- Permettre à terme d'exporter sa progression XP via un fichier JSON (déjà implémenté dans Settings via exportService.ts).
- Enrichir les 134 fiches sans "# Le saviez-vous ?" signalées par `check-missing-blocks.js`.

## Stack Technique
- React 18, Vite.js
- Zustand
- Tailwind CSS
- framer-motion
- react-markdown
- lucide-react
