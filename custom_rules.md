# Règles et Conventions du Projet (Custom Rules) 📜

Ce document sert de référence pour le développement de l'application **Brevet 2026**. Il doit être consulté pour garantir la cohérence de l'architecture, du design, et du contenu.

## 1. Architecture & Technique

*   **Front-end Pur (PWA)** : L'application est une Progressive Web App (React + Vite). Elle doit pouvoir fonctionner 100% hors-ligne (Service Workers, LocalStorage).
*   **Backend Ready** : Bien qu'actuellement sans backend, l'architecture doit rester prête pour une intégration future (Firebase, Supabase, etc.).
    *   Toujours utiliser le pattern **Repository** (`src/types/repository.ts`) pour l'accès aux données.
    *   Passer par `dataProvider.ts` au lieu d'appeler directement `localStorage`.
    *   Maintenir les métadonnées de synchronisation (`createdAt`, `updatedAt`, `deviceId`) dans les modèles de données.
    *   L'état d'authentification est géré par `useAuthStore` (Mock Auth actuel).
*   **Gestion d'État** : Utiliser **Zustand** pour les états globaux (Progression, Gamification, Auth).
*   **Typage Strict** : TypeScript est obligatoire. Définir les interfaces dans `src/types.ts` ou `src/types/`.

## 2. Design System & UI

*   **Variables CSS Uniquement** : Ne **jamais** coder de couleurs en dur dans les classes Tailwind (ex: `bg-[#1a1b26]`). Utiliser exclusivement les variables définies dans `src/index.css` (ex: `bg-background`, `text-primary`, `border-border`).
*   **Thème Unique (Sombre)** : L'application utilise un thème sombre moderne et immersif. Ne pas implémenter de mode clair sans refondre l'ensemble des variables CSS.
*   **Mobile-First & Responsive** : L'interface doit être parfaite sur mobile (max-w-lg) et s'adapter gracieusement sur tablette/desktop (max-w-4xl).
*   **Immersion** : Masquer la navigation globale (`Header`, `BottomNav`) lors des sessions de révision (Quiz, Fiches) pour maximiser la concentration.
*   **Accessibilité (a11y)** : 
    *   Toujours inclure des attributs `aria-label` sur les boutons sans texte.
    *   Utiliser des modales personnalisées (ex: `ConfirmModal`) au lieu des alertes natives du navigateur (`window.confirm`).

## 3. Gamification & Engagement

*   **Feedback Visuel et Sonore** : Récompenser les actions de l'utilisateur (bonne réponse, niveau supérieur, badge) avec des confettis (`canvas-confetti`) et des effets sonores (`soundService.ts`).
*   **Répétition Espacée** : L'algorithme SM-2 gère les révisions. Ne pas altérer la logique de calcul du `easeFactor` ou de l'`interval` sans tests approfondis.

## 4. Contenu Pédagogique & Ton

*   **Public Cible** : Élèves de 3ème (14-15 ans).
*   **Ton** : Encourageant, clair, direct, et bienveillant. Utiliser le tutoiement ("Révise tes erreurs", "Ton niveau"). Intégrer des emojis avec parcimonie pour rendre l'interface plus conviviale.
*   **Formatage** :
    *   Utiliser **Markdown** pour les cours (`react-markdown`).
    *   Utiliser **KaTeX** pour toutes les formules mathématiques (`react-katex`).
    *   Privilégier les **SVGs interactifs** ou inline pour les schémas complexes (circuits électriques, géométrie) afin de garantir un rendu net sur tous les écrans et un poids minimal.

## 5. SEO & Déploiement

*   **URL de Production** : L'application est destinée à être déployée sur `https://hylst.fr/brevet2026/`.
*   **Chemins Relatifs** : Le `vite.config.ts` doit conserver `base: './'` pour que les assets se chargent correctement dans le sous-dossier.
*   **Référencement** : Maintenir à jour les balises meta (`index.html`), le `robots.txt`, et le `sitemap.xml` pour optimiser la visibilité sur les moteurs de recherche.

## 6. Maintenance du Projet

*   **Documentation** : Mettre à jour systématiquement `changelog.md` et `todo.md` après chaque évolution majeure.
*   **Composants** : Garder les composants petits et modulaires. Si un fichier dépasse 300 lignes, envisager de le découper.
