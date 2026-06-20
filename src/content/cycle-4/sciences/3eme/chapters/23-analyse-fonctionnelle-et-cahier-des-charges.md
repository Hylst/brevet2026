# Analyse fonctionnelle et cahier des charges

<analyse-pieuvre-svg></analyse-pieuvre-svg>

<callout type="info" title="Introduction">
Avant de fabriquer un objet, il faut définir exactement ce qu'on attend de lui. C'est le rôle de l'**analyse fonctionnelle** et du **cahier des charges**.
</callout>

<concept-card title="Démarche Scientifique" icon="FlaskConical" description="Lis toujours l'introduction de l'énoncé. Elle contient le **problème à résoudre** et justifie toutes les questions qui suivent." theme="info"></concept-card>

## 1. Le besoin (La bête à cornes)
Pour vérifier si un objet est utile, on utilise l'outil d'expression du besoin (ou *bête à cornes*). On pose 3 questions :
*   **À qui rend-il service ?** (ex: À l'utilisateur)
*   **Sur quoi agit-il ?** (ex: Sur la poussière pour un aspirateur)
*   **Dans quel but ?** (ex: Nettoyer le sol)
### 2. Les fonctions (Le diagramme pieuvre)
Un objet technique possède plusieurs fonctions :
*   **Fonction d'Usage (ou Principale)** : Ce pourquoi l'objet a été créé.
*   **Fonctions Contraintes** : Les obligations auxquelles l'objet doit se soumettre (ex: fonctionner sur batterie, être étanche, respecter le budget...).

<callout type="warning" title="Rappel important !">
Dans un diagramme pieuvre, une Fonction Principale relie toujours **deux bulles extérieures** EN PASSANT à travers la bulle centrale de l'objet. Une fonction contrainte, elle, relie seulement un élément extérieur vers l'objet au centre.
</callout>

<drag-and-drop-list title="Entraînement : Fonction Principale (FP) ou Contrainte (FC) ?" items='[ {"id": "1", "content": "Tondre la pelouse", "match": "Fonction Principale"}, {"id": "2", "content": "Résister à la pluie", "match": "Fonction Contrainte"}, {"id": "3", "content": "Être rechargeable", "match": "Fonction Contrainte"}, {"id": "4", "content": "Plaire à l&apos;œil", "match": "Fonction Contrainte"} ]' ></drag-and-drop-list>
### 3. Le Cahier des Charges Fonctionnel (CDCF)
Toutes ces fonctions (principale et contraintes) sont regroupées dans un document contractuel appelé le cahier des charges. Il précise les critères et les niveaux d'exigence (ex: Poids maximum : 2kg).

<flashcard front="Que signifie l'acronyme C.D.C.F ?" back="le Cahier Des Charges Fonctionnel. C'est le contrat qui répertorie toutes les fonctions de l'objet avec leurs niveaux d'exigences exacts !"></flashcard>

### 4. Critères de choix d'un OST

Quand on choisit un objet technique (ou qu'on le conçoit), on évalue plusieurs **critères** :

*   **Critères fonctionnels** : L'objet remplit-il bien sa fonction principale ?
*   **Critères économiques** : Son coût d'achat, d'utilisation et d'entretien est-il acceptable ?
*   **Critères esthétiques** : Son apparence plaît-elle aux utilisateurs ?
*   **Critères environnementaux** : Son impact écologique (fabrication, utilisation, recyclage) est-il limité ?
*   **Critères ergonomiques** : Est-il confortable et facile à utiliser ?

<concept-card title="Classification des critères" icon="ListChecks" description="Un même critère peut être à la fois une contrainte (le cahier des charges l'impose) et un choix utilisateur (le client le compare avec d'autres produits)." theme="info"></concept-card>

<flashcard front="Cite deux critères de choix d&apos;un OST autres que son prix." back="Critère fonctionnel (remplit-il son rôle ?), critère esthétique (son design plaît-il ?), critère environnemental (est-il recyclable ?), ou critère ergonomique (est-il confortable ?)."></flashcard>

## 📝 Entraînement

<mini-quiz question="Quel outil représente les fonctions principales et les contraintes d'un objet sous forme de tentacules ?" options='["La bête à cornes","Le diagramme pieuvre","Le diagramme FAST","Le cahier des charges"]' correctAnswer="1" explanation="Le diagramme des interactions, familièrement appelé 'Pieuvre', relie le produit à son environnement par des fonctions principales et des contraintes."></mini-quiz>

<mini-quiz question="Quel critère de choix évalue si un objet est facile et confortable à utiliser ?" options='["Critère esthétique","Critère économique","Critère ergonomique","Critère fonctionnel"]' correctAnswer="2" explanation="L'ergonomie étudie l'adaptation d'un produit aux capacités et aux limites du corps humain (confort, facilité d'utilisation)."></mini-quiz>

<brevet-checklist items='[ "Je sais poser les 3 questions du besoin (Bête à cornes).", "Je sais différencier fonction d&apos;usage et fonction contrainte.", "Je sais lire un diagramme pieuvre.", "Je connais les critères de choix d&apos;un OST." ]'></brevet-checklist>
