# Plan d'Enrichissement du Contenu Pédagogique

Ce document sert de fichier de suivi pour l'exécution autonome de l'enrichissement du contenu de chaque module du cours / site web. Il sera mis à jour au fur et à mesure de l'avancement.

## Phase 1 : Audit et Cartographie 🔍
**Objectif :** Identifier les chapitres et concepts manquants dans chaque matière (Français, Maths, Histoire-Géo-EMC, Sciences), tant dans les fichiers Markdown (`.md`) que dans les données TypeScript (`.ts`).

- [x] **Étape 1.1 : Audit des Mathématiques**
  - Lister les fichiers `.md` dans `src/content/maths/chapters/`.
  - Comparer avec les chapitres définis dans `src/data/maths.ts`.
  - Identifier les concepts clés du programme manquants (ex: probabilités avancées, fonctions affines détaillées, etc.).
- [x] **Étape 1.2 : Audit du Français**
  - Lister les fichiers `.md` dans `src/content/francais/chapters/`.
  - Comparer avec les chapitres définis dans `src/data/francais.ts`.
  - Identifier les concepts clés manquants (ex: figures de style, types de textes, etc.).
- [x] **Étape 1.3 : Audit de l'Histoire-Géo-EMC**
  - Lister les fichiers `.md` dans `src/content/histoire-geo-emc/chapters/`.
  - Comparer avec les chapitres définis dans `src/data/histoire_geo_emc.ts`.
  - Identifier les concepts clés manquants (ex: guerre froide détaillée, géographie de l'UE, etc.).
- [x] **Étape 1.4 : Audit des Sciences (SVT, Physique-Chimie, Techno)**
  - Lister les fichiers `.md` dans `src/content/sciences/chapters/`.
  - Comparer avec les chapitres définis dans `src/data/sciences.ts`.
  - Identifier les concepts clés manquants (ex: génétique, mécanique, énergie, etc.).
- [x] **Étape 1.5 : Synthèse de l'audit**
  - Mettre à jour ce fichier avec la liste exacte des chapitres et concepts à créer.

## Phase 2 : Création et Enrichissement des Fichiers Markdown 📝
**Objectif :** Rédiger le contenu manquant pour chaque matière dans les dossiers `src/content/*/chapters/`.

- [x] **Étape 2.1 : Mathématiques**
  - Créer/enrichir les fichiers `.md` identifiés.
- [x] **Étape 2.2 : Français**
  - Créer/enrichir les fichiers `.md` identifiés.
- [x] **Étape 2.3 : Histoire-Géo-EMC**
  - Créer/enrichir les fichiers `.md` identifiés.
- [x] **Étape 2.4 : Sciences**
  - Créer/enrichir les fichiers `.md` identifiés.

## Phase 3 : Intégration Web (TypeScript) 💻
**Objectif :** Mettre à jour les fichiers de données pour que le nouveau contenu soit accessible sur le site web.

- [x] **Étape 3.1 : Mise à jour de `maths.ts`**
  - Ajouter les nouveaux chapitres (type: 'sheet').
  - Ajouter des quiz correspondants (type: 'quiz').
- [x] **Étape 3.2 : Mise à jour de `francais.ts`**
  - Ajouter les nouveaux chapitres et quiz.
- [x] **Étape 3.3 : Mise à jour de `histoire_geo_emc.ts`**
  - Ajouter les nouveaux chapitres et quiz.
- [x] **Étape 3.4 : Mise à jour de `sciences.ts`**
  - Ajouter les nouveaux chapitres et quiz.

## Phase 4 : Revue et Finalisation ✅
**Objectif :** S'assurer que tout le contenu est cohérent, bien formaté et sans erreur.

- [x] **Étape 4.1 : Vérification des liens et des identifiants**
  - S'assurer que les `id` dans les fichiers `.ts` correspondent aux noms des fichiers `.md` (si c'est la logique utilisée par le routeur).
- [x] **Étape 4.2 : Relecture du contenu**
  - Vérifier la clarté pédagogique et le formatage Markdown (titres, listes, gras).
- [x] **Étape 4.3 : Test de compilation**
  - Lancer un `lint` ou vérifier que l'application se lance correctement avec les nouvelles données.

---

### Suivi des concepts manquants identifiés (Phase 1 terminée) :

#### Mathématiques
- **Chapitres à créer/séparer :**
  - *Transformations du plan* (Symétrie, Translation, Rotation, Homothétie) : Actuellement regroupé avec la trigonométrie, ce qui n'est pas logique.
  - *Grandeurs et mesures* (Aires, Périmètres, Volumes, Conversions) : À séparer de la proportionnalité.
  - *Probabilités* : À approfondir (arbres de probabilités, événements indépendants).

#### Français
- **Chapitres à créer/séparer :**
  - *Les figures de style et l'analyse de l'image* : Actuellement regroupé avec l'orthographe, doit avoir son propre chapitre d'analyse littéraire.
  - *Le vocabulaire et les champs lexicaux* : Synonymes, antonymes, paronymes, familles de mots.
  - *L'analyse de l'image* : Cadrage, plans, angles de vue (très utile pour le Brevet).

#### Histoire-Géo-EMC
- **Chapitres à créer/séparer :**
  - *Géographie : L'Union Européenne* : Un territoire d'appartenance, dynamiques et contrastes.
  - *EMC : L'engagement civique et social* : Le vote, les associations, les syndicats, l'engagement politique.

#### Sciences
- **Chapitres à créer/séparer :**
  - *Physique-Chimie : Des signaux pour observer et communiquer* : Le son et la lumière (vitesse, fréquence, propagation).
  - *SVT : La planète Terre et l'action humaine* : Climat, météorologie, exploitation des ressources et risques naturels.
  - *Technologie : Informatique et programmation* : Réseaux informatiques, architecture d'un réseau, routage (actuellement juste survolé).
