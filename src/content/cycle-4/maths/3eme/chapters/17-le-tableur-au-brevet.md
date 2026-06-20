# Le Tableur au Brevet

L'épreuve de mathématiques du Brevet comporte très souvent des questions sur l'utilisation du tableur. Il ne s'agit pas de manipuler le logiciel sur ordinateur le jour J, mais de **comprendre et de lire des feuilles de calcul imprimées sur votre sujet**, et de savoir quelles **formules** y sont inscrites.

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. Vocabulaire de base d'un tableur 📊

Un fichier tableur (comme Excel, LibreOffice Calc, ou Google Sheets) est composé de tableaux appelés **feuilles de calcul**.
Une feuille est un grand quadrillage :
*   Les **colonnes** sont repérées par des lettres : A, B, C...
*   Les **lignes** sont repérées par des nombres : 1, 2, 3...
*   L'intersection d'une colonne et d'une ligne s'appelle une **cellule**.

<flashcard front="Comment nomme-t-on la cellule située à l'intersection de la colonne C et de la ligne 4 ?" back="On la nomme la cellule C4."></flashcard>

## 2. Les Formules du Tableur 🧮
### 2.1. Règle d'or : le signe "="
Pour demander au tableur de faire un calcul, **une formule doit TOUJOURS commencer par le signe `=`.** 
Sans ce signe, le logiciel considérera que vous avez juste tapé du texte.
### 2.2. Les quatre opérations de base
*   **Addition :** `=` ou `+` (ex: `=B2+C2`)
*   **Soustraction :** `-` (ex: `=B2-C2`)
*   **Multiplication :** `*` (ex: `=B2*C2`)
*   **Division :** `/` (ex: `=B2/C2`)
### 2.3. Les Fonctions usuelles
Au lieu de taper les cellules une par une, on utilise des "mots-clés" appelés fonctions. 
**Pour désigner une plage de cellules** (de la première à la dernière), on utilise les **deux points `:`**.

*   `=SOMME(B2:B10)` : Calcule l'addition de toutes les cellules de B2 jusqu'à B10 (B2, B3, B4... B10).
*   `=MOYENNE(B2:B10)` : Calcule la moyenne des nombres contenus de la cellule B2 à B10.
*   `=MAX(B2:B10)` : Cherche le nombre le plus grand dans la plage de cellules.
*   `=MIN(B2:B10)` : Cherche le nombre le plus petit dans la plage de cellules.

<callout type="warning" title="Attention aux deux points et point-virgule !">
*   `=SOMME(B2:B10)` (avec `:`) fait la somme de TOUTES les cellules allant de B2 à B10 (il y en a 9).
*   `=SOMME(B2;B10)` (avec `;`) fait seulement la somme de la cellule B2 ET de la cellule B10 (il y en a 2).
Au Brevet, c'est presque toujours les `:` de la plage de cellules qui sont attendus.
</callout>
## 3. L'étirement de formule (La "Poignée de Recopie") 🖱️

C'est LE point le plus demandé au Brevet !
Quand on a écrit une formule dans une cellule, on peut sélectionner cette cellule et "tirer" le petit carré noir en bas à droite vers la droite ou vers le bas. Le logiciel va copier la formule intelligemment.

**Comment les lettres et les chiffres changent-ils ?**
*   Si vous étirez **vers le bas**, la lettre de la colonne reste identique, mais **le numéro de la ligne augmente** (+1, +2...).
    *   *Exemple :* En B2, vous tapez `=A2*2`. Si vous étirez vers la cellule B3 juste en dessous, la formule deviendra automatiquement `=A3*2`.
*   Si vous étirez **vers la droite**, le numéro de ligne reste le même, mais **la lettre de la colonne change** (A devient B, B devient C...).
    *   *Exemple :* En B2, vous tapez `=B1*2`. Si vous l'étirez vers la droite dans la cellule C2, la formule deviendra `=C1*2`.
## 4. Exercices Type Brevet 📝

## 📝 Entraînement

<brevet-exercise  title="Entraînement : Quelle formule écrire ?"  question="On donne la feuille de calcul suivante (fictive) qui représente la facture d'un maraîcher :  Ligne 1 : (A) Produit | (B) Quantité | (C) Prix unitaire | (D) Prix total Ligne 2 : (A) Tomates | (B) 3 | (C) 2,5 | (D) 7,5 Ligne 3 : (A) Courgettes | (B) 2 | (C) 1,5 | (D) 3 Ligne 4 : (A) SOMME TOTALE | (B) | (C) | (D) ? Quelle formule, commençant par le signe '=', doit être tapée dans la cellule D4 pour obtenir le prix total de tous les articles ?"  draft="1. Analyser ce qui est demandé : le prix total de tous les articles (somme des cellules de la colonne D). 2. Les cellules concernées sont le prix total des tomates (D2) et des courgettes (D3). 3. Le tableur utilise la fonction SOMME ou une addition simple."  solution="La formule attendue est `=SOMME(D2:D3)`. On peut aussi accepter `=D2+D3` (car il y a peu de termes), mais la fonction SOMME est toujours la règle d'or d'un tableur."></brevet-exercise>

<mini-quiz  question="Parmi ces propositions, quelle est la SEULE formule acceptée par le tableur pour calculer l'addition des cellules A1 et A2 ?"  options='["A1+A2","SOMME(A1:A2)","=SOMME(A1:A2)","=ADDITION(A1;A2)"]'  correctAnswer="3"  explanation="Il manque le signe '=' dans la proposition 2. La proposition 4 utilise le mot ADDITION qui n'existe pas en tableur (c'est SOMME). La bonne réponse est donc =SOMME(A1:A2)."></mini-quiz>

<mini-quiz  question="Dans la cellule C2, on écrit `=B2*2`. Si on étire cette formule vers le bas jusqu'à la cellule C5, quelle sera la formule dans la cellule C5 ?"  options='["=B2*5","=B5*5","=B5*2","=E2*2"]'  correctAnswer="3"  explanation="Quand on étire vers le bas de 3 cases (de C2 à C5), le numéro de ligne augmente de 3 (le '2' devient '5'). La lettre ('B') reste la même puisqu'on n'est pas allé vers la droite. Le chiffre constant de la formule ('2') ne change pas. La formule devient donc =B5*2."></mini-quiz>

<brevet-checklist items='[ "Je n&apos;oublie JAMAIS le signe ( = ) au début d&apos;une formule.", "La fonction d&apos;addition s&apos;écrit =SOMME(début:fin).", "La fonction de moyenne s&apos;écrit =MOYENNE(début:fin).", "Si la ligne 1 est réservée aux titres, les données commencent souvent à la ligne 2 !", "Quand on étire une formule vers le bas, on augmente les numéros de ligne (les lettres de colonnes ne changent pas)." ]'></brevet-checklist>
