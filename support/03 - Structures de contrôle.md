![[diginamic_logo_3-02.png]]
- [[#1 Instructions, expressions et structures de contrôle|1 Instructions, expressions et structures de contrôle]]
	- [[#1 Instructions, expressions et structures de contrôle#1.1 Instructions|1.1 Instructions]]
		- [[#1.1 Instructions#1.1.1 Les instructions de contrôle du flux|1.1.1 Les instructions de contrôle du flux]]
			- [[#1.1.1 Les instructions de contrôle du flux#1.1.1.1 `Condition if ...else`|1.1.1.1 `Condition if ...else`]]
		- [[#1.1 Instructions#1.1.2 Itérations|1.1.2 Itérations]]
			- [[#1.1.2 Itérations#1.1.2.1 for|1.1.2.1 for]]
			- [[#1.1.2 Itérations#1.1.2.2 `while`|1.1.2.2 `while`]]
			- [[#1.1.2 Itérations#1.1.2.3 `boucle do ... while`|1.1.2.3 `boucle do ... while`]]
			- [[#1.1.2 Itérations#1.1.2.4 `boucle for ... in`|1.1.2.4 `boucle for ... in`]]
		- [[#1.1 Instructions#1.1.3 `break`|1.1.3 `break`]]
		- [[#1.1 Instructions#1.1.4 **`continue`**|1.1.4 **`continue`**]]
		- [[#1.1 Instructions#1.1.5 `switch`|1.1.5 `switch`]]
		- [[#1.1 Instructions#1.1.6 `throw`|1.1.6 `throw`]]
		- [[#1.1 Instructions#1.1.7 `try...catch`|1.1.7 `try...catch`]]
	- [[#1 Instructions, expressions et structures de contrôle#1.2 Expression|1.2 Expression]]
	- [[#1 Instructions, expressions et structures de contrôle#1.3 Expression VS Statement (instructions)|1.3 Expression VS Statement (instructions)]]
	- [[#1 Instructions, expressions et structures de contrôle#1.4 Zoom sur quelques opérateurs remarquables|1.4 Zoom sur quelques opérateurs remarquables]]
		- [[#1.4 Zoom sur quelques opérateurs remarquables#1.4.1 Chaînage optionnel (optional chaining) (?.)|1.4.1 Chaînage optionnel (optional chaining) (?.)]]
		- [[#1.4 Zoom sur quelques opérateurs remarquables#1.4.2 Opérateur OR (||)|1.4.2 Opérateur OR (||)]]
		- [[#1.4 Zoom sur quelques opérateurs remarquables#1.4.3 Comparaison|1.4.3 Comparaison]]
			- [[#1.4.3 Comparaison#1.4.3.1 **Cas des types primitifs**|1.4.3.1 **Cas des types primitifs**]]
			- [[#1.4.3 Comparaison#1.4.3.2 **Cas des types objet**|1.4.3.2 **Cas des types objet**]]
	- [[#1 Instructions, expressions et structures de contrôle#1.5 Voir le détail des autres opérateurs :|1.5 Voir le détail des autres opérateurs :]]
# 1 Instructions, expressions et structures de contrôle 
## 1.1 Instructions
Les applications JavaScript sont composées de plusieurs instructions organisées grâce à une syntaxe. Une instruction peut s'étaler sur plusieurs lignes et on peut avoir plusieurs instructions sur une seule ligne si chaque instruction est séparée de la suivante par un point-virgule.
### 1.1.1 Les instructions de contrôle du flux
Diagramme de flux
Lors de la création d'un programme, il est régulièrement nécessaire de faire des choix qui vont influencer le déroulement du parcours dans lequel est engagé l'utilisateur.

![Diagramme flux authentification](https://coopernet.fr/sites/default/files/inline-images/diagrammeFluxFormulaireAuthentification_0.png)

On peut visualiser ces parcours via des diagrammes de flux. Ces choix s'opèrent dans le code à l'aide de "structures" de contrôle ou instructions dont voici les principales
#### 1.1.1.1 `Condition if ...else`
Cette instruction exécute une instruction si une condition donnée est vérifiée. Si la condition n'est pas vérifiée une autre instruction pourra être exécutée
```js
let i = 2;
if(i > 2) {
  console.log("i est supérieur à 2");
}else {
  console.log("i est inférieur ou égal à 2");
}
/* == ceci est une comparaison */
if(i == 2){
  console.log("i est égal à 2");
}
```
### 1.1.2 Itérations
#### 1.1.2.1 for
```js
// for
for(let i = 0; i < 10; i ++) {
  console.log(i);
} 
```
#### 1.1.2.2 `while`
Cette instruction permet de créer une boucle qui s'exécute tant qu'une condition de test est vérifiée. La condition est évaluée avant d'exécuter l'instruction contenue dans la boucle.
```js
let i = 0;
while(i < 10) {
  console.log(2*i+1);
  i++;
} 
```

#### 1.1.2.3 `boucle do ... while`
Cette instruction crée une boucle qui s'exécute tant que la condition est vraie. La condition est évaluée après avoir exécuté une itération de boucle, ce qui fait que cette boucle sera exécutée au moins une fois.
#### 1.1.2.4 `boucle for ... in`
```js
const jc = {
  nom: "Dusse",
  prenom: "Jean-Claude",
  sePresenter: function(){
    console.log("Bonjour, je m'appelle " +
    this.prenom + " " + this.nom);
  }
}
```
```js
for(let key in jc) {
  console.log(key + " : " + jc[key]);
}
```

### 1.1.3 `break`
Cette instruction termine la boucle ou l'instruction `switch` ou l'instruction `label` en cours et continue l'exécution sur l'instruction suivant l'instruction terminée.
### 1.1.4 **`continue`**
Cette instruction termine l'exécution des instructions dans la boucle courante, ou la boucle avec une étiquette correspondante, et continue l'exécution de la boucle dans l'itération suivante.

### 1.1.5 `switch`
Cette instruction permet d'évaluer une expression et de faire correspondre le résultat de cette expression avec différents cas et d'exécuter les instructions associées aux cas qui ont chacun un identifiant.
L'instruction switch évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.
```js
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```

**Que se passe-t-il si on oublie un break ?**  
Si on omet une instruction break, le script exécutera les instructions pour le cas correspondant et aussi celles pour les cas suivants jusqu'à la fin de l'instruction switch ou jusqu'à une instruction break. Par exemple :
```js
var toto = 0;
switch (toto) {
    case -1:
        console.log('moins un');
        break;
    case 0: // toto vaut 0 donc ce cas correspond
        console.log(0);
        // NOTE : le break aurait du être placé ici
    case 1: // pas de break pour 'case 0:' les instructions de ce cas sont
            // exécutées aussi
        console.log(1);
        break; // on a un break a ce niveau donc les instructions
               // des cas suivants ne seront pas exécutées
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}
```

### 1.1.6 `throw`
Cette instruction lève une exception.
### 1.1.7 `try...catch`
Cette instruction permet de spécifier un ensemble d'instructions à tenter, et de préciser le traitement à effectuer dans le cas où une exception est produite.
## 1.2 Expression
Une expression peut être vue comme une unité de code valide qui est résolue en une valeur. Il existe deux types d'expressions, celles qui ont des effets de bord (par exemple l'affectation d'une valeur) et celles qui sont purement évaluées.
L'expression x = 7 fait partie de la première catégorie. Elle utilise l'opérateur = afin d'affecter la valeur sept à la variable x. L'expression elle-même est évaluée avec la valeur 7.
L'expression `3 + 4` fait partie de la deuxième catégorie. Elle utilise l'opérateur `+` afin d'ajouter `3` et `4` pour produire une valeur : `7`. Toutefois, si cette valeur n'est pas utilisée au sein d'une structure plus importante (par exemple avec [une déclaration de variable](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Grammar_and_types#d%C3%A9clarations) comme `const z = 3 + 4`), elle sera immédiatement écartée (il s'agit généralement dans ce cas d'une erreur de programmation, car l'évaluation ne produira aucun effet).
Comme les exemples précédents ont permis de montrer, toutes les expressions complexes sont formées avec des _opérateurs_, tels que `=` ou `+`.
**Une expression ne doit pas contenir de mot-clés comme if, var, etc**
## 1.3 Expression VS Statement (instructions)
Les expressions produisent une valeur qui peut être transmise à une fonction. Les instructions ne produisent pas de valeur et ne peuvent donc pas être utilisées comme arguments de fonction.
## 1.4 Zoom sur quelques opérateurs remarquables
### 1.4.1 Chaînage optionnel (optional chaining) (?.)
[Voir la documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
L'opérateur **?.** fonctionne de manière similaire à l'opérateur de chaînage ., à ceci près qu'au lieu de causer une erreur si une référence est null ou undefined, l'expression se court-circuite avec undefined pour valeur de retour. Quand il est utilisé avec des appels de fonctions, il retourne undefined si la fonction donnée n'existe pas.
Ex : 
```js
obj.last?.toUpperCase()

```
### 1.4.2 Opérateur OR (||)
```js
let i = j || 12;
```
L'opérateur OR va retourner l'opérande de droite si celle de gauche est "falsy" (false, "", 0, undefined)

### 1.4.3 Comparaison
#### 1.4.3.1 **Cas des types primitifs**
Dans le cas des types primitifs, js va comparer les valeurs (avec ou sans transtypage)
```js
let i = 2;   // type : number
let j = "2"; // type : string
if(i==j){// le == fait du transtypage
  console.log("i est égal à j");
}
if(i===j){// le === ne fait pas de transtypage
  console.log("i est égal à j");
}else {
  console.log("i n'est pas égal à j");
}
```

 A votre avis que va afficher le code ci dessus ?
#### 1.4.3.2 **Cas des types objet**
Dans le cas des objets, js va comparer non pas les valeurs mais les références. [Plus d'infos](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)
```js
let i = 2;
let j = i;
if (i === j) console.log('i et j identiques');

let p1 = {"name": "Bob"};
let p2 = {"name": "Bob"};
let p3 = p1;
if (p1 == p2) console.log('p1 et p2 identiques');
if (p1 == p3) console.log('p1 et p3 identiques');
```

>[!exo]
>A votre avis que va afficher le code ci dessus ?

## 1.5 Voir le détail des autres opérateurs :
- Opérateurs d'affectation
- Opérateurs de comparaison
- Opérateurs arithmétiques
- Opérateurs binaires
- Opérateurs logiques
- Opérateurs pour les grands entiers
- Opérateurs pour les chaînes de caractères
- Opérateur conditionnel (ternaire)
- Opérateur virgule
- Opérateurs unaires
- Opérateurs relationnels
