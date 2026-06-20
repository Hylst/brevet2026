# Technologie : Objets Connectés, IoT et Domotique Verte 🏠

Notre environnement quotidien est envahi par des objets dits « intelligents » ou « connectés ». Ces appareils communiquent entre eux et prennent des décisions, souvent dans le but de nous faciliter la vie, mais aussi pour répondre à des impératifs écologiques (Domotique verte).

## 1. Qu'est-ce que l'Internet des Objets (IoT) ? 📡

L'**Internet of Things (IoT)**, ou Internet des Objets, désigne le réseau d'appareils physiques qui intègrent des **capteurs**, des logiciels et d'autres technologies en vue de se connecter et d'échanger des données avec d'autres appareils et systèmes sur Internet (via Wi-Fi, Bluetooth, ou réseaux téléphoniques comme la 5G).
*   **Des montres connectées** mesurant le rythme cardiaque et transmettant les données au smartphone.
*   **Des stations météo connectées** surveillant la température et déclenchant automatiquement l'arrosage.

## 2. La Chaîne d'Information dans un Objet Connecté

Un objet connecté respecte scrupuleusement la **chaîne d'information** (Acquérir / Traiter / Communiquer) :
1.  **Acquérir** : Le *Capteur* (de luminosité, de mouvement, thermomètre) mesure une grandeur physique environnante.
2.  **Traiter** : Le *Microprocesseur* ou le *Microcontrôleur* (ex: une carte Arduino, un petit ordinateur) applique le programme (l'algorithme) qui lui a été écrit (ex: "S'il fait chaud et sec...").
3.  **Communiquer** : L'interface (Réseau Wi-Fi, antenne Bluetooth) envoie les données récoltées en ligne vers un serveur cloud ou un smartphone. Plus loin, le traitement ordonne au bloc "Alimenter" de la *Chaîne d'Action* de déclencher un moteur ou une alarme.

## 3. La Domotique Verte (Environnementale) 🌿

La « Domotique » (de domus, la maison en latin) est l'ensemble des technologies de contrôle de la maison.
La **Domotique environnementale** utilise l'IoT pour limiter drastiquement la consommation énergétique afin de contrer le changement climatique.
*   **Éclairage intelligent** : Les lampes s'éteignent seules s'il n'y a plus de mouvements dans la pièce.
*   **Les volets roulants automatisés** : En été, si le soleil tape trop fort (capteur de luminosité et de température sur la fenêtre), les volets se ferment automatiquement (actionneur) sans action humaine pour garder la maison au frais et d'éviter de lancer la climatisation très consommatrice !
*   **Le chauffage sur présence** : Un thermostat piloté baisse en direct la chaleur par commande réseau dès que tu quittes le domicile (détection d'éloignement grâce au signal GPS de ton smartphone).

<method-box  title="L'algorithmique appliquée aux capteurs IoT (Scratch)"  steps='[ "En algorithmie, l&apos;objet connecté fait souvent une Boucle &apos;Répéter indéfiniment&apos; associée à une condition &apos;Si ... Alors ... Sinon&apos;.", "L&apos;instruction capteur prend la forme d&apos;une brique variable : &apos;Si [capteur_temperature] > 25°C Alors...&apos;.", "L&apos;action prend une forme impérative : &apos;Mettre [état ventillateur] à 1 (ON)&apos;." ]'></method-box>

## 📝 Entraînement

<mini-quiz  question="Parmi cette liste, qu'est-ce qui représente la phase 'Traiter' dans une chaîne d'information domotique ?"  options='["Le capteur de présence","Le processeur interne appliquant l&apos;algorithme","Le radiateur électrique","Le réseau Wi-Fi de la maison"]'  correctAnswer="1"  explanation="'Acquérir' correspond au capteur, 'Communiquer' correspond au Wi-Fi. Le rôle de réfléchir et de prendre la décision algorithmique (le traitement) est géré par la puce du processeur ou micro-contrôleur."></mini-quiz>

<brevet-exercise title="Exercice : Conception d'une prise connectée" question="Une prise murale connectée est paramétrée pour une 'domotique verte'. Elle est censée couper définitivement les appareils en veille pendant la nuit (de 23H à 06H). Propose un très court algorithme basique (en français, ou avec un 'Si/Alors') pour résoudre cette contrainte." draft="Si (Heure entre 23 et 06) Alors (Couper courant) Sinon (Laisser allumé)." solution="Un exemple de boucle algorithmique infinie tournant sur la carte pourrait ressembler à ceci : 
Répéter indéfiniment {
   Si (Heure_Actuelle >= 23H00 OU Heure_Actuelle <= 06H00)
   Alors (Ordre : Interrompre courant prise)
   Sinon (Ordre : Maintenir courant prise)
} Ainsi l'objet connecté analyse le facteur temps pour optimiser les baisses de surconsommations de veille de la télévision ou des box Internet la nuit."></brevet-exercise>

<brevet-checklist items='[ "Je sais définir ce qu&apos;est l&apos;IoT (Internet des Objets connectés).", "Je sais faire le lien entre domotique (maison) et écologie (baisse de consommation d&apos;énergie).", "Je peux identifier avec certitude les fonctions: Acquérir, Traiter, Communiquer.", "Je sais imaginer un algorithme simple (Si / Alors) traduisant l&apos;action d&apos;un capteur IoT." ]'></brevet-checklist>
