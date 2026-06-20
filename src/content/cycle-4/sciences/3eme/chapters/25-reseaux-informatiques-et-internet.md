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

## 📝 Entraînement

<mini-quiz question="Quel équipement permet de relier un réseau local à Internet ?" options='["Un commutateur (Switch)","Une ROM","Un Routeur","Une clé USB"]' correctAnswer="2" explanation="Le routeur (souvent intégré à la box internet) fait le lien entre vos équipements locaux et le reste d'Internet."></mini-quiz>

<brevet-checklist items='[ "Je connais le rôle du commutateur (switch) et du routeur.", "Je sais à quoi sert une adresse IP.", "Je comprends l&apos;utilité d&apos;un serveur DNS." ]'></brevet-checklist>
