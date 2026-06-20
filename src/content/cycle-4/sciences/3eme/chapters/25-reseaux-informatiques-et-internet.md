# Réseaux informatiques et Internet

<reseau-internet-svg></reseau-internet-svg>

<callout type="info" title="Introduction">
Aujourd'hui, tout est connecté ! Un réseau informatique permet à des équipements (ordinateurs, smartphones, imprimantes) de communiquer et de partager des données à l'échelle locale ou mondiale (Internet).
</callout>

<concept-card title="Démarche Scientifique" icon="FlaskConical" description="Lis toujours l'introduction de l'énoncé. Elle contient le **problème à résoudre** et justifie toutes les questions qui suivent." theme="info"></concept-card>

## 2. L'architecture matérielle
Dans un réseau local (LAN), on trouve plusieurs équipements :
*   **Le Commutateur (Switch)** : Il relie tous les équipements du réseau local entre eux (souvent via des câbles Ethernet).
*   **La Borne Wi-Fi** : Elle joue le rôle du commutateur, mais sans fil (par ondes radio).
*   **Le Routeur (ex: la Box Internet)** : C'est la porte de sortie ! Il relie votre réseau local à Internet (le réseau mondial).
*   **Le Serveur** : Un ordinateur très puissant allumé en permanence qui stocke des données ou des sites web.

<callout type="info" title="Le saviez-vous ? (Ancêtre d'Internet)">
Internet tel que nous le connaissons aujourd'hui tire ses origines du réseau **ARPANET**, créé en 1969 par l'armée américaine, en pleine guerre froide, pour maintenir la communication même si une partie du réseau était détruite.
</callout>
### 2. Le fonctionnement (Adresses IP)
Pour communiquer sur un réseau, **chaque équipement doit posséder une adresse IP** (ex: 192.168.1.10). C'est comme une adresse postale, elle permet de savoir d'où part l'information et où elle doit arriver.
*L'adresse MAC, elle, est le numéro de série unique de la carte réseau gravé en usine.*

<drag-and-drop-list title="Matériel réseau : Qui fait quoi ?" items='[ {"id": "1", "content": "Relier les PC entre eux en réseau local", "match": "Le Switch (Commutateur)"}, {"id": "2", "content": "Ouvrir la porte vers Internet", "match": "Le Routeur (Box)"}, {"id": "3", "content": "Stocker des pages web ou fichiers", "match": "Le Serveur"}, {"id": "4", "content": "Traduire un nom de site en Adresse IP", "match": "Le Serveur DNS"} ]' ></drag-and-drop-list>

<flashcard front="Quelle est la différence entre IP et MAC ?" back="L'adresse **IP** change selon le réseau où tu te trouves (comme ton adresse postale si tu déménages). L'adresse **MAC** ne change jamais (c'est l'ADN/numéro de série de ton appareil)."></flashcard>

### 3. Les requêtes DNS
Quand tu tapes "wikipedia.org" dans ton navigateur, un **serveur DNS** (Domain Name System) intervient. Telle un annuaire téléphonique, il traduit le nom "wikipedia.org" en l'adresse IP du serveur cible pour que ton ordinateur puisse s'y connecter.

<fill-in-the-blanks text="Le composant permettant de relier mon réseau local à Internet est le [routeur|switch|serveur]. À la maison, on l'appelle familièrement la [box|console|télévision]. Pour distribuer la connexion aux différents appareils câblés de la maison, on utilise un [switch|routeur|modem] (commutateur)." title="Vérification des acquis"></fill-in-the-blanks>

### 4. Structuration et traitement des données

Les données échangées sur un réseau doivent être **organisées** pour être exploitables.

*   **Données structurées** : Organisées en tableaux (lignes = enregistrements, colonnes = champs). Ex: un fichier CSV d'élèves avec nom, prénom, classe.
*   **Données non structurées** : Texte libre, images, vidéos.
*   **Formats courants** : JSON (JavaScript Object Notation) pour échanger des données entre applications, XML, CSV.

<formula-box title="Exemple de données structurées (JSON)">
```json
{
  "eleves": [
    {"nom": "Durand", "prenom": "Léa", "classe": "3A"},
    {"nom": "Martin", "prenom": "Sacha", "classe": "3B"}
  ]
}
```
Le JSON organise l'information en **clés** (nom, prénom) et **valeurs** (Durand, Léa). C'est le format standard pour les échanges entre applications web et mobiles.
</formula-box>

<callout type="tip" title="Traitement des données">
Un **algorithme** peut trier, filtrer ou calculer des données. Exemples : "Trouver tous les élèves de 3A", "Calculer la moyenne des notes", "Trier les dates du plus récent au plus ancien".
</callout>

<flashcard front="Qu'est-ce qu'un fichier CSV ?" back="CSV signifie Comma-Separated Values. C'est un fichier texte simple où chaque ligne est un enregistrement et les valeurs sont séparées par des virgules. Il peut s'ouvrir dans un tableur."></flashcard>

### 5. Système d'information et stockage

Les données doivent être **stockées** de façon fiable et accessible.

*   **Stockage local** : Disque dur (HDD/SSD) de l'ordinateur, clé USB.
*   **Stockage réseau (NAS)** : Boîtier de disques durs connecté au réseau local, accessible par tous les appareils de la maison ou de l'entreprise.
*   **Cloud (informatique en nuage)** : Serveurs distants accessibles via Internet (Google Drive, Dropbox, OneDrive). Les données sont physiquement stockées dans des data centers.
*   **Base de données** : Logiciel qui organise et indexe les données pour les retrouver rapidement (MySQL, PostgreSQL).

<concept-card title="Sécurité des données" icon="Shield" description="Le stockage en cloud ou sur NAS nécessite des mots de passe, du chiffrement et des sauvegardes (backup) régulières pour éviter la perte de données." theme="warning"></concept-card>

<method-box title="Choisir une solution de stockage" steps='["Pour un usage personnel et mobile : le cloud (accessible partout, mais attention au coût et à la sécurité).","Pour un usage local partagé (famille, petite entreprise) : un NAS (grande capacité, propriétaire, pas d&apos;abonnement).","Pour des données importantes : appliquer la règle 3-2-1 : 3 copies, 2 supports différents, 1 copie hors site."]' example="Un photographe professionnel utilise :<br/>1) Son disque dur SSD (copie de travail)<br/>2) Un NAS à la maison (sauvegarde locale)<br/>3) Un service cloud (sauvegarde distante)"></method-box>

<flashcard front="Que signifie le sigle NAS ?" back="Network Attached Storage. C'est un boîtier de disques durs connecté au réseau qui permet de stocker et partager des fichiers entre plusieurs appareils (PC, tablette, TV)."></flashcard>

## 📝 Entraînement

<mini-quiz question="Quel équipement permet de relier un réseau local à Internet ?" options='["Un commutateur (Switch)","Une ROM","Un Routeur","Une clé USB"]' correctAnswer="2" explanation="Le routeur (souvent intégré à la box internet) fait le lien entre vos équipements locaux et le reste d'Internet."></mini-quiz>

<mini-quiz question="Quel format de données est le plus utilisé pour échanger des informations entre une application mobile et un serveur web ?" options='["CSV","JSON","PDF","DOCX"]' correctAnswer="1" explanation="Le JSON (JavaScript Object Notation) est le format standard pour les API web. Il est léger, lisible et compris par tous les langages de programmation."></mini-quiz>

<mini-quiz question="Quel dispositif permet de partager des fichiers sur un réseau local sans passer par Internet ?" options='["Le cloud","Le NAS","La clé USB","Le disque dur externe"]' correctAnswer="1" explanation="Le NAS (Network Attached Storage) se connecte directement au réseau local (switch/routeur) et rend les fichiers accessibles à tous les appareils du réseau."></mini-quiz>

<brevet-checklist items='[ "Je connais le rôle du commutateur (switch) et du routeur.", "Je sais à quoi sert une adresse IP.", "Je comprends l&apos;utilité d&apos;un serveur DNS.", "Je sais ce qu&apos;est le JSON et à quoi il sert.", "Je connais les solutions de stockage : local, NAS, cloud." ]'></brevet-checklist>
