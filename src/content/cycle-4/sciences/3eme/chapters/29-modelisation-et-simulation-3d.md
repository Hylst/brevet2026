# Modélisation et simulation 3D

![Modélisation et Impression 3D](../assets/modelisation-3d.svg)

<callout type="info" title="Introduction">
Avant de fabriquer un objet complexe (comme une voiture, un pont, ou une coque de smartphone), on le représente virtuellement sur ordinateur. Cela permet de tester ses caractéristiques sans dépenser un seul centime en usine !
</callout>

<concept-card title="Démarche Scientifique" icon="FlaskConical" description="Lis toujours l'introduction de l'énoncé. Elle contient le **problème à résoudre** et justifie toutes les questions qui suivent." theme="info"></concept-card>

## 1. La C.A.O. (Conception Assistée par Ordinateur)
Les ingénieurs utilisent des logiciels de CAO (comme SolidWorks ou SketchUp) pour :
*   Dessiner les pièces en 3 dimensions (modèle volumique).
*   Assembler virtuellement les pièces pour vérifier que rien ne coince.
*   Générer automatiquement les plans d'usinage cotés (les dimensions).
### 2. Les tests et simulations virtuelles
Avoir le modèle 3D numérique permet de faire des **simulations**. Le logiciel recrée artificiellement la physique du monde réel pour tester l'objet :
*   **Simulation mécanique** : L'objet cassera-t-il si on appuie dessus avec une force de 500 Newtons ?
*   **Simulation thermique** : Comment l'objet va chiffrer sous le soleil ?
*   **Simulation esthétique** : Comment la lumière réagit-elle sur sa couleur (Rendu photoréaliste) ?

<drag-and-drop-list title="À quelle simulation correspond ce test ?" items='[ {"id": "1", "content": "Mettre 200kg sur un Pont 3D", "match": "Simulation Mécanique"}, {"id": "2", "content": "Tester avec un grand soleil et 40°C", "match": "Simulation Thermique"}, {"id": "3", "content": "Visualiser la couleur rouge brillante de la carrosserie", "match": "Simulation Esthétique (Rendu réaliste)"} ]' ></drag-and-drop-list>
### 3. Du virtuel au réel
Une fois la simulation validée, le modèle 3D numérique peut être envoyé directement à une machine de fabrication :
*   **L'imprimante 3D** (Fabrication par ajout de matière) qui empile des couches successives de plastique fondu.
*   **La fraiseuse à commande numérique** (Fabrication par enlèvement de matière) qui sculpte un bloc de matière.

<callout type="info" title="Le saviez-vous ? (L'impression 3D dans le futur)">
L'imprimante 3D ne fabrique pas que du plastique ! Aujourd'hui, on l'utilise dans le secteur **médical** pour créer des prothèses sur-mesure ou même "imprimer" de la matière vivante. La **NASA** a aussi envoyé des imprimantes 3D dans la Station Spatiale Internationale pour fabriquer les outils manquants directement dans l'espace !
</callout>

<flashcard front="Que veut dire le sigle C.F.A.O ?" back="Conception et Fabrication Assistées par Ordinateur. C'est l'ensemble de la chaîne : du dessin (CAO) jusqu'à la découpe finale de la pièce mécanique (FAO) !"></flashcard>

### 4. Les procédés de fabrication

Au-delà de l'impression 3D et du fraisage, il existe de nombreux procédés industriels :

<concept-card title="Fabrication additive" icon="Box" description="On ajoute de la matière couche par couche. Exemples : impression 3D (FDM, stéréolithographie), soudure 3D. Idéal pour les prototypes et les pièces complexes uniques." theme="success"></concept-card>

<concept-card title="Fabrication soustractive" icon="Hammer" description="On enlève de la matière d'un bloc brut. Exemples : fraisage, tournage, perçage, découpe laser, jet d'eau. Précis mais génère des déchets (copeaux)." theme="warning"></concept-card>

<concept-card title="Fabrication par déformation" icon="ArrowLeftRight" description="On déforme la matière sans l'enlever ni l'ajouter. Exemples : pliage, emboutissage (carrosserie auto), forge, extrusion (profilés en aluminium)." theme="info"></concept-card>

<concept-card title="Fabrication par moulage" icon="Droplets" description="On coule un matériau liquide dans un moule. Exemples : injection plastique (objets en série), moulage par gravité (pièces métalliques). Rapide pour la production de masse." theme="primary"></concept-card>

<method-box title="Choisir le bon procédé" steps='["Pièce unique ou prototype ? Privilégier l&apos;impression 3D (additive).","Production en grande série ? Injection plastique ou emboutissage.","Matériau dur (acier, titane) ? Usinage (soustractif).","Forme complexe intérieure ? Impression 3D (pas de limite d&apos;accès outil)."]' example="Pour produire 10 000 coques de smartphone : on utilise l&apos;injection plastique. Le moule coûte cher à fabriquer mais chaque pièce revient à quelques centimes. Pour un prototype unique : l&apos;impression 3D, plus lente mais sans investissement."></method-box>

<flashcard front="Quelle est la différence entre fabrication additive et soustractive ?" back="La fabrication additive ajoute de la matière couche par couche (comme une imprimante 3D). La fabrication soustractive enlève de la matière d'un bloc brut (comme une fraiseuse)."></flashcard>

### 5. Règles de sécurité dans un atelier de fabrication

Quand on fabrique des objets, que ce soit au collège ou dans l'industrie, la sécurité est primordiale :

*   **Équipements de Protection Individuelle (EPI)** : Lunettes de protection, gants, vêtements ajustés (pas de manches longues flottantes), chaussures de sécurité.
*   **Machines-outils** : Ne jamais approcher les mains d'une pièce en rotation, utiliser des outils de serrage (étau), respecter les vitesses de coupe.
*   **Produits dangereux** : Identifier les pictogrammes de danger (corrosif, inflammable, toxique) sur les produits chimiques.
*   **Nettoyage** : Ranger et nettoyer après usage. Les copeaux métalliques sont tranchants !

<callout type="warning" title="Piège classique au Brevet">
On peut te demander d'identifier un **EPI manquant** sur une photo d'atelier ou de justifier pourquoi il faut porter des **lunettes** (projection de copeaux) ou attacher ses **cheveux longs** (risque d'happement par une machine en rotation).
</callout>

<flashcard front="Que signifie l'acronyme EPI ?" back="Équipement de Protection Individuelle. Exemples : gants, lunettes, casque, chaussures de sécurité. Chaque EPI protège contre un risque spécifique identifié dans l'analyse des risques."></flashcard>

## 📝 Entraînement

<mini-quiz question="Quelle est la différence fondamentale entre une imprimante 3D et une Fraiseuse Numérique ?" options='["La Fraiseuse ajoute de la matière alors que l&apos;imprimante l&apos;enlève","L&apos;imprimante ajoute de la matière (couche par couche) alors que la fraiseuse l&apos;enlève (en sculptant un gros bloc)","Ils utilisent tous les deux l&apos;enlèvement de matière"]' correctAnswer="1" explanation="L'imprimante 3D travaille par 'Fabrication additive' (on rajoute le plastique nécessaire). La fraiseuse a un foret qui vient creuser et 'ruiner' un bloc brut existant ('Fabrication soustractive')."></mini-quiz>

<mini-quiz question="Quel procédé de fabrication est le plus adapté pour produire 50 000 coques de téléphone identiques en plastique ?" options='["Impression 3D","Fraisage","Injection plastique","Découpe laser"]' correctAnswer="2" explanation="L'injection plastique permet de produire des pièces identiques en très grande série avec un coût unitaire très faible, une fois le moule fabriqué."></mini-quiz>

<mini-quiz question="Pourquoi doit-on porter des lunettes de protection dans un atelier d'usinage ?" options='["Pour mieux voir les pièces","Pour se protéger des projections de copeaux","Parce que la loi l&apos;exige","Pour éviter les poussières"]' correctAnswer="1" explanation="Lors de l'usinage (fraisage, perçage), des copeaux métalliques ou des éclats de matière peuvent être projetés à grande vitesse vers les yeux."></mini-quiz>

<brevet-checklist items='[ "Je connais le rôle de la modélisation 3D (CAO) dans la création d&apos;un objet.", "Je sais ce qu&apos;est une simulation virtuelle.", "Je connais deux moyens matériels de passer de l&apos;ordinateur à l&apos;objet physique (imprimante 3D, usinage).", "Je connais les 4 familles de procédés : additif, soustractif, déformation, moulage.", "Je sais citer des EPI et justifier leur usage." ]'></brevet-checklist>
