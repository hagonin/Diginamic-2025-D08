![[diginamic_logo_3-02.png]]
# 1 Mode strict
[Référence : developer.mozilla.org](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
L'utilisation des "modules" active le mode "strict". 
```js
"use strict";
```
 Le code des modules est automatiquement en mode strict et aucune instruction n'est nécessaire pour passer dans ce mode.
Dans ce mode, le langage js se comporte un peu différement :
- **Premièrement**, il est impossible de créer accidentellement des variables globales.
- **Deuxièmement**, le mode strict fait en sorte que les affectations qui échoueraient silencieusement lèveront aussi une exception. Par exemple, NaN (not a number) est une variable globale en lecture seule. En mode normal, une affectation à NaN ne fera rien ; le développeur ne recevra aucun retour par rapport à cette faute. En mode strict, affecter une valeur quelconque à NaN lèvera une exception. 
- **Troisièmement**, le mode strict lèvera une exception lors d'une tentative de suppression d'une propriété non-supprimable (là où cela ne produisait aucun effet en mode non strict) :
    ```js
    "use strict";
    
    delete Object.prototype; // lève une TypeError
```
    
- **Quatrièmement**, le mode strict requiert que toutes les propriétés nommées dans un objet littéral soient uniques. En mode non-strict, les propriétés peuvent être spécifiées deux fois, JavaScript ne retenant que la dernière valeur de la propriété. Cette duplication en devient alors une source de confusion, surtout dans le cas où, dans une modification de ce même code, on se met à changer la valeur de la propriété autrement qu'en changeant la dernière instance. Les noms de propriété en double sont une erreur de syntaxe en mode strict :
    ```js
    "use strict";
    	var o = { p: 1, p: 2 }; // !!! erreur de syntaxe
```
    
- **Cinquièmement**, le mode strict requiert que les noms de paramètres de fonction soient uniques. En mode non-strict, le dernier argument dupliqué cache les arguments précédents ayant le même nom. Ces arguments précédents demeurent disponibles via arguments[i], ils ne sont donc pas complètement inaccessibles. Pourtant, cette cachette n'a guère de sens et n'est probablement pas souhaitable (cela pourrait cacher une faute de frappe, par exemple). Donc en mode strict, les doublons de noms d'arguments sont une erreur de syntaxe :
    ```js
    function somme(a, a, c) { // !!! erreur de syntaxe
    	  "use strict";
    	  return a + b + c; // Ce code va planter s'il est exécuté
    	}
```
    
- **Sixièmement**, le mode strict interdit la syntaxe octale. La syntaxe octale ne fait pas partie d'ECMAScript 5, mais elle est supportée dans tous les navigateurs en préfixant le nombre octal d'un zéro : 0644 === 420 et "\045" === "%". La notation octale est supportée en utilisant le préfixe "0o" :
    
    let a = 0o10; // Notation octale ES2015  
    Les développeurs novices croient parfois qu'un zéro débutant un nombre n'a pas de signification sémantique, alors ils l'utilisent comme moyen d'aligner des colonnes de nombres mais ce faisant, ils changent la valeur du nombre ! La syntaxe octale est rarement utile et peut être utilisée de manière fautive, donc le mode strict le considère comme étant une erreur de syntaxe :
    ```js
    "use strict";
    	var somme = 015 + // !!! erreur de syntaxe
    	            197 +
    	            142;
```
    
- **Septièmement**, le mode strict, à partir d'ECMAScript 2015 interdit de définir des propriétés sur des valeurs primitives. Sans mode strict, de telles définitions sont ignorées. En activant le mode strict cela lèvera une exception TypeError.
    ```js
    (function() {
    	"use strict";
        false.true = "";         // TypeError
    	(14).calvados= "maison";     // TypeError
    	"une chaîne".de = "caractères"; // TypeError
    	
    
    })();
```
# 2 Bonnes pratiques 
Le texte suivant est une traduction (maison) du [guide de Ryan McDermott](https://github.com/ryanmcdermott/clean-code-javascript)
Ce document s'inspire du livre Clean Code de Robert C. Martin pour l'adapter au JavaScript. C'est un guide pour produire du code lisible, réutilisable et refactorable en JavaScript.
Tous les principes énoncés ici ne doivent pas être strictement suivis et seront encore moins universellement acceptés. Ce sont des lignes directrices et rien de plus, mais ce sont celles codifiées au cours de nombreuses années d'expérience collective par les auteurs de Clean Code.
Notre métier de développeur a un peu plus de 50 ans et nous en apprenons encore beaucoup. Lorsque l'architecture logicielle sera aussi ancienne que l'architecture elle-même, nous aurons peut-être des règles plus difficiles à suivre. Pour l'instant, laissez ces directives servir de référence pour évaluer la qualité du code JavaScript que vous produisez.
Une dernière chose: sachez que ce guide ne fera pas immédiatement de vous un meilleur développeur de logiciels, et travailler avec lui pendant de nombreuses années ne signifie pas que vous ne ferez pas d'erreurs. Chaque morceau de code commence comme un premier brouillon, comme de l'argile humide qui prend sa forme finale. Enfin, nous ciselons les imperfections lorsque nous l'examinons avec nos pairs. Ne soyez pas trop exigeant en vers vous-même pour les premières ébauches à améliorer. Concentrez vous plutôt sur votre code !

## 2.1 Linter
Un "linter" permet de vérifier la qualité du code. Par exemple [ESLint](https://eslint.org/docs/latest/use/getting-started) est un outil permettant d'identifier et de signaler les pattern trouvés dans le code ECMAScript/JavaScript, dans le but de rendre le code plus cohérent et d'éviter les bugs.
[Vérifier si ESLint est activé sur Visual Studio Code.](https://learn.microsoft.com/en-us/visualstudio/javascript/linting-javascript?view=vs-2022)
## 2.2 Imperative vs functional programming
###  Programmation fonctionnelle
Si l'on en croit wikipédia, la programmation fonctionnelle est un paradigme de programmation de type **déclaratif** qui considère le calcul en tant qu'évaluation de fonctions mathématiques.
Comme le changement d'état et la mutation des données ne peuvent pas être représentés par des évaluations de fonctions la programmation fonctionnelle ne les admet pas, au contraire elle met en avant l'application des fonctions, contrairement au modèle de programmation impérative qui met en avant les changements d'état.
Un langage fonctionnel est donc un langage de programmation dont la syntaxe et les caractéristiques encouragent la programmation fonctionnelle. 
La programmation fonctionnelle s'affranchit de façon radicale des effets secondaires (ou effets de bord) en interdisant toute opération d'affectation.
Le paradigme fonctionnel n'utilise pas de machine à états pour décrire un programme, mais un emboîtement de fonctions qui agissent comme des « boîtes noires » que l'on peut imbriquer les unes dans les autres. Chaque boîte possédant plusieurs paramètres en entrée mais une seule sortie, elle ne peut sortir qu'une seule valeur possible pour chaque n-uplet de valeurs présentées en entrée. Ainsi, les fonctions n'introduisent pas d'effets de bord. Un programme est donc une application, au sens mathématique, qui ne donne qu'un seul résultat pour chaque ensemble de valeurs en entrée. Cette façon de penser, très différente de la démarche de la programmation impérative, est l'une des causes principales de la difficulté qu'ont les programmeurs formés aux langages impératifs pour aborder la programmation fonctionnelle. Cependant, elle ne pose généralement pas de difficultés particulières aux débutants qui n'ont jamais été exposés à des langages impératifs. Un avantage important des fonctions sans effet de bord est la facilité que l'on a à les tester unitairement. Par ailleurs, l'usage généralisé d'une gestion de mémoire automatique par l'intermédiaire d'un ramasse-miettes simplifie la tâche du programmeur.
En pratique, pour des raisons d'efficacité, et du fait que certains algorithmes s'expriment aisément avec une machine à états, certains langages fonctionnels autorisent la programmation impérative en permettant de spécifier que certaines variables sont assignables (ou mutables selon la dénomination habituelle), et donc la possibilité d'introduire localement des effets de bord. Ces langages sont regroupés sous le nom de langages fonctionnels impurs.
Les langages dits purement fonctionnels n'autorisent pas la programmation impérative. De fait, ils sont dénués d'effets de bord et protégés contre les problèmes que pose l'**exécution concurrente**. 
La mise en œuvre des langages fonctionnels fait un usage sophistiqué de la pile car, afin de s'affranchir de la nécessité de stocker des données temporaires dans des tableaux, ils font largement appel à la récursivité (fait d'inclure l'appel d'une fonction dans sa propre définition). L'une des multiples techniques pour rendre la compilation de la récursivité plus efficace est une technique dénommée récursion terminale (en anglais : tail-recursion), qui consiste à accumuler les résultats intermédiaires dans une case mémoire de la pile et à la passer en paramètre dans l'appel récursif. Ceci permet d'éviter d'empiler les appels récursifs dans la pile en les remplaçant par une simple succession de sauts. Le code généré par le compilateur est alors similaire à celui généré par une boucle en impératif.
En programmation déclarative, on décrit le quoi, c'est-à-dire le problème. Par exemple, les pages **HTML sont déclaratives** car elles décrivent ce que contient une page (texte, titres, paragraphes, etc.) et non comment les afficher (positionnement, couleurs, polices de caractères…). Alors qu'en programmation impérative (par exemple, avec le C ou Java), on décrit le comment, c'est-à-dire la structure de contrôle correspondant à la solution.
C'est une forme de programmation sans effets de bord, ayant généralement une correspondance avec la logique mathématique.
### 2.2.1 Programmation impérative
Si l'on en croit wikipédia, en informatique, la programmation impérative est un paradigme de programmation qui décrit les opérations en séquences d'instructions exécutées par l'ordinateur pour modifier l'état du programme. Ce type de programmation est le plus répandu parmi l'ensemble des langages de programmation existants, et se différencie de la programmation déclarative (dont la programmation logique ou encore la programmation fonctionnelle sont des sous-ensembles).
#### 2.2.1.1 Langages impératifs et processeurs
La quasi-totalité des processeurs qui équipent les ordinateurs sont de nature impérative : ils sont faits pour exécuter une suite d'instructions élémentaires, codées sous forme d'opcodes (pour operation codes). L'ensemble des opcodes forme le langage machine spécifique à l'architecture du processeur. L'état du programme à un instant donné est défini par le contenu de la mémoire centrale à cet instant.
Les langages de plus haut niveau utilisent des variables et des opérations plus complexes, mais suivent le même paradigme. Les **recettes de cuisine** et les vérifications de processus industriel sont deux exemples de concepts familiers qui s'apparentent à de la programmation impérative ; de ce point de vue, chaque étape est une instruction, et le monde physique constitue l'état modifiable. Puisque les idées de base de la programmation impérative sont à la fois conceptuellement familières et directement intégrées dans l'architecture des microprocesseurs, la grande majorité des langages de programmation est impérative.
#### 2.2.1.2 Instructions de la base impérative  
La plupart des langages de haut niveau comporte cinq types d'instructions principales :
- la séquence d'instructions
- l'assignation ou affectation
- l'instruction conditionnelle
- la boucle
- les branchements
**Séquence d'instructions**  
Une séquence d'instructions, (ou bloc d'instruction) désigne le fait de faire exécuter par la machine une instruction, puis une autre, etc., en séquence. Par exemple
{\displaystyle {\mbox{ouvrirConnexion}};{\mbox{envoyerMessage}};{\mbox{fermerConnexion}};}{\mbox{ouvrirConnexion}};{\mbox{envoyerMessage}};{\mbox{fermerConnexion}};  
est une séquence d'instructions. Cette construction se distingue du fait d'exécuter en parallèle des instructions.
**Instructions d'assignation**  
Les instructions d'assignation, en général, effectuent une opération sur l'information en mémoire et y enregistrent le résultat pour un usage ultérieur. Les langages de haut niveau permettent de plus l'évaluation d'expressions complexes qui peuvent consister en une combinaison d'opérations arithmétiques et d'évaluations de fonctions et l'assignation du résultat en mémoire. Par exemple:
{\displaystyle x\leftarrow 2+3;}x\leftarrow 2+3;  
assigne la valeur {\displaystyle 2+3}2+3, donc 5, à la variable de nom {\displaystyle x}x.
**Instructions conditionnelles**  
Les instructions conditionnelles permettent à un bloc d'instructions de n'être exécuté que si une condition prédéterminée est réalisée. Dans le cas contraire, les instructions sont ignorées et la séquence d'exécution continue à partir de l'instruction qui suit immédiatement la fin du bloc. Par exemple
{\displaystyle si\;{\mbox{connexionOuverte}}\;alors\;{\mbox{envoyerMessage}};}{\displaystyle si\;{\mbox{connexionOuverte}}\;alors\;{\mbox{envoyerMessage}};}  
n'enverra le message que si la connexion est ouverte.
**Instructions de bouclage**  
Les instructions de bouclage servent à répéter une suite d'instructions un nombre prédéfini de fois (voir Boucle_for), ou jusqu'à ce qu'une certaine condition soit réalisée. Par exemple
{\displaystyle tantque\;{\mbox{connexionNonOuverte}}\;alors\;{\mbox{attendreUnPeu}};}tantque\;{\mbox{connexionNonOuverte}}\;alors\;{\mbox{attendreUnPeu}};  
bouclera jusqu'à ce que la connexion soit ouverte.
Il se trouve que ces quatre constructions permettent de faire tous les programmes informatiques possibles, elles permettent de faire un système Turing-complet.
**Branchements sans condition**  
Les branchements sans condition permettent à la séquence d'exécution d'être transférée à un autre endroit du programme. Cela inclut le saut, appelé « goto » (go to, /ɡəʊ tuː/, « aller à ») dans de nombreux langages, et les sous-programmes, ou appels de procédures. Les instructions de bouclage peuvent être vues comme la combinaison d'un branchement conditionnel et d'un saut. Les appels à une fonction ou une procédure (donc un Sous-programme) correspondent à un saut, complété du passage de paramètres, avec un saut en retour.
Exemple de code js utilisant alternativement une approche impérative puis une approche fonctionnelle
```js
// list of my friends
const friends = [
  { name: "Erwin", drinks: ["beer", "coffee"] },
  { name: "Peter", drinks: ["beer"] },
  { name: "Heidi", drinks: ["water"] }
];

// what do we want to search?
const itemToSearch = "beer";

/***********************************
 * imperative approach
 */

// a place to store the results
let resultImperative = [];

// go over every friend
for (friend of friends) {
  // check if the person drinks this
  if (friend.drinks.includes(itemToSearch)) {
    // add it to the results
    resultImperative.push(friend.name);
  }
}
console.log(resultImperative); // [ 'Erwin', 'Peter' ]

/***********************************
 * functional approach
 */
const resultFunctional = friends
  // check if the person drinks this
  .filter(friend => friend.drinks.includes(itemToSearch))
  // only give me the name
  .map(friend => friend.name);
console.log(resultFunctional); // [ 'Erwin', 'Peter' ]
```