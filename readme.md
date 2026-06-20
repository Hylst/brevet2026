# Espace Réussite Brevet 2026 🎓

Application de révision offline-first pour le Brevet des Collèges 2026.  
Fiches de révision enrichies, quiz interactifs, suivi de progression, gamification et export Markdown pour impression.

L'application est déployée sur : [https://hylst.fr/brevet2026/](https://hylst.fr/brevet2026/)

## Fonctionnalités 🚀

- **Fiches de révision enrichies** : Plus de 120 cours synthétiques couvrant tout le programme, avec des schémas interactifs, des `<concept-card>`, et des frises chronologiques (`<timeline>`).
- **Quiz interactifs et Checklists** : Testez vos connaissances avec des QCM, un minuteur optionnel, et validez vos acquis avec des `<brevet-checklist>` à la fin de chaque cours.
- **Répétition espacée** : Mode "Réviser mes erreurs" pour se concentrer sur les points faibles.
- **Gamification complète & Profil** : Mascotte contextuelle, XP, niveaux, flamme de série, et un profil enrichi (Objectif Mention, Classe, Futur Métier) !
- **Onboarding & Ergonomie** : Tutoriel de bienvenue au premier démarrage et UI intuitive adaptée au mobile.
- **Support hors-ligne (PWA)** : Révisez partout, même sans connexion internet. Installation possible sur mobile et desktop.
- **Sauvegarde locale** : Toute la progression (XP, scores, erreurs, paramètres) reste dans votre navigateur. Rien n'est envoyé sans votre accord.
- **Feedback utilisateur** : Formulaire de signalement de bug / suggestion via Web3Forms (envoi par email, aucune donnée stockée côté serveur).
- **Architecture évolutive (Backend-Ready)** : Pattern Repository séparant l'UI de la couche de données — 100% offline-first aujourd'hui, prêt pour un backend optionnel demain.
- **SEO Optimisé** : Balises meta, Open Graph, JSON-LD, sitemap et robots.txt configurés pour les moteurs de recherche.
- **Export pour impression** : Générez des versions papier de vos fiches et quiz.
- **Design System** : Interface moderne, accessible et cohérente avec un thème sombre unique.

## Règles de Développement 📜

Consultez le fichier [`custom_rules.md`](./custom_rules.md) pour connaître les conventions de code, de design (variables CSS), d'architecture et le ton éditorial à respecter lors du développement.

## Configuration (Variables d'Environnement) ⚙️

L'application n'a qu'une seule variable d'environnement utile en production :

```env
# Clé d'accès Web3Forms (formulaire de signalement de bug / suggestion)
VITE_WEB3FORMS_ACCESS_KEY=votre_cle_ici
```

Cette clé est injectée au moment du `npm run build` (variable Vite). Dans Coolify, définissez-la comme **Build Variable** dans l'onglet *Environment Variables* de votre ressource.

1. Installez les dépendances :
   ```bash
   npm install
   ```
2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
3. Ouvrez votre navigateur sur `http://localhost:3000`.

## Déploiement : Container Nginx statique via Coolify 🐳

Le projet est déployé comme site statique dans un container Docker Nginx sur le VPS Hylst.fr (Hostinger), géré par Coolify.

**Procédure de build et déploiement manuel :**

1. **Construire le projet** :
   ```bash
   npm install
   npm run build
   ```

2. **Copier le contenu de `dist/`** dans le répertoire `brevet2026/` du container Docker :
   ```
   D:\0CODE\AntiGravity\Cours_Memos\Docker\brevet2026\
   ```

3. **Relancer un redeploy** sur Coolify pour que le container Nginx serve le nouveau contenu.

> ⚠️ L'URL de base est `/brevet2026/`. La configuration Vite (`base: './'`) et le HashRouter garantissent un fonctionnement correct dans ce sous-répertoire.

## Export Version Papier 🖨️

Pour générer les fichiers Markdown formatés pour l'impression (convertibles en PDF ou DOCX via Pandoc) :

```bash
npm run export:md
```
Les fichiers seront générés dans le dossier `print-version/`.
