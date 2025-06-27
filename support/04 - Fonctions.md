![[diginamic_logo_3-02.png]]
- [[#1 Fonctions|1 Fonctions]]
	- [[#1 Fonctions#1.1 Fonction classique|1.1 Fonction classique]]
	- [[#1 Fonctions#1.2 Paramètres optionnels et valeurs par défaut|1.2 Paramètres optionnels et valeurs par défaut]]
	- [[#1 Fonctions#1.3 Opérateur Rest|1.3 Opérateur Rest]]
	- [[#1 Fonctions#1.4 Hoisting|1.4 Hoisting]]
	- [[#1 Fonctions#1.5 Contexte d'éxécution|1.5 Contexte d'éxécution]]
		- [[#1.5 Contexte d'éxécution#1.5.1 Closure|1.5.1 Closure]]
			- [[#1.5.1 Closure#1.5.1.1 Autre exemple de closure|1.5.1.1 Autre exemple de closure]]
	- [[#1 Fonctions#1.6 Fonction anonyme immédiate|1.6 Fonction anonyme immédiate]]
	- [[#1 Fonctions#1.7 Exercice|1.7 Exercice]]
- [[#2 Fonctions fléchées|2 Fonctions fléchées]]
	- [[#2 Fonctions fléchées#2.1 Raccourci de déclaration de méthode dans un objet|2.1 Raccourci de déclaration de méthode dans un objet]]
		- [[#2.1 Raccourci de déclaration de méthode dans un objet#2.1.1 First class citizen|2.1.1 First class citizen]]
		- [[#2.1 Raccourci de déclaration de méthode dans un objet#2.1.2 Higher order function :|2.1.2 Higher order function :]]
		- [[#2.1 Raccourci de déclaration de méthode dans un objet#2.1.3 Fonction pure|2.1.3 Fonction pure]]
		- [[#2.1 Raccourci de déclaration de méthode dans un objet#2.1.4 setTimeout et setInterval|2.1.4 setTimeout et setInterval]]
	- [[#2 Fonctions fléchées#2.2 Exercice|2.2 Exercice]]
# 1 Fonctions
## 1.1 Fonction classique
Une fonction permet d'isoler du code entre **accolades** (bloc de code) qui sera appelé via le nom de la fonction et avec des **arguments** dont la valeur va être assignée aux **paramètres**.
Une fonction doit être appelée pour être exécutée. Une fonction attend ou pas des **paramètres** en entrée et renvoie ou pas une valeur en sortie.
Un **paramètre** est une variable qui est déclarée lors de la définition de la fonction et dont la portée est le bloc de la fonction. 
Quand la fonction est appelée, les **arguments** sont les données que l'on assigne aux paramètres de la fonction.
La façon la plus classique , en js, de créer une fonction est d'utiliser le mot clé "function" suivie du nom de la fonction suivi de parenthèses dans les quelles on trouve les noms des paramètres séparés par des virgules puis enfin le corps de la fonction entouré d'accolades
Ex de fonction : 
```js
function logLastname(name) { // définition de la fonction avec un paramètre
   console.log(name);
}
```
> [!FAQ]- Selon vous, qu'affichera le code ci-dessus dans la console ?
> ```js
> // RIEN, car la fonction n'est pas appelée !
> ```

## 1.2 Paramètres optionnels et valeurs par défaut
Si l'on passe plus d'arguments que de paramètres déclarés dans la fonction, le surplus est ignoré sauf à les récupérer via la variable **arguments.**
Si l'on passe moins d'arguments que de paramètres déclarés, les paramètres manquants auront pour valeur **undefined**.
Depuis ES2015, on peut déclarer des paramètres optionnels de la façon suivante :
```js
function getPerson(name, species  = human) {
  //
}
```

## 1.3 Opérateur Rest
Depuis ES2015, il existe une nouvelle syntaxe pour accéder aux arguments 
**Ancienne méthode**
```js
const partners = [];
function addPartner(people) {
  for (let i = 0; i < arguments.length; i++) {
    partners.push(arguments[i]);
  }
}
addPartner("Bob", "Ray", "Nina");
```
**Nouvelle méthode**
```js
function addPartner(... people) {
  people.forEach(person => {
    partners.push(person);
  })
}
addPartner("Bob", "Ray", "Nina");
```
## 1.4 Hoisting
Le hoisting (en français, "hissage") est lié à la façon dont fonctionne les contextes d'exécution (précisément, les phases de création et d'exécution)  en javaScript.  On peut résumé le mécanisme de hoisting en disant que les déclarations de variables et de fonctions sont déplacées physiquement en haut de votre code, même si ce n'est pas ce qui se passe en fait. A la place, les déclarations de variables et de fonctions sont mises en mémoire pendant la phase de compilation, mais restent exactement là où vous les avez tapées dans votre code.
L'un des avantages du fait que JavaScript met en mémoire les déclarations des fonctions avant d'exécuter un quelconque segment de code, est que cela vous permet d'utiliser une fonction avant que nous ne la déclariez dans votre code. Concrêtement, c'est grâce au hoisting que le code suivant fonctionne :
```js
afficheNomDeFamille("Gonzalez"); // appel de la fonction avec l'argument "Gonzalez"

function afficheNomDeFamille(nom){ // définition de la fonction
   console.log(nom);
}
```
Dans l'exemple ci-dessus, bien que la fonction soit déclarée aprés avoir été appelée, le code fonctionne !
## 1.5 Contexte d'éxécution
Au départ du script, un contexte global d'exéctution est créé. Il comprend les déclarations de fonction, leurs paramètres éventuels et les déclarations de variables utilisant var. Ensuite le script s'execute et affecte les valeurs aux différentes variables dans l'ordre du code. A chaque fois que le "js engine" rencontre une **fonction** (et aussi un **bloc de code** depuis ES6) ajoute un nouvel enregistrement dans la pile des contextes d'exécution.
contextes d'exécutions correspondants au code :
![contexte Execution](https://coopernet.fr/sites/default/files/inline-images/contexteExecution_0.png)

Exemple de code :
```js
let i = 1;
function a() {
  let j = 2;
  b();
  console.log(`j`, j);
  console.log(`b`, b);
  function b() {

    let l = 4;
    console.log(l);
    {
      let k = 3;
    }
    /*console.log(k); */
  }
}
a();
```

### 1.5.1 Closure
La closure est l'expression de la capacité des fonctions à « capturer leur environnement »
Étudions l'exemple suivant :
```js
function creerFonction() {
  var nom = "Mozilla";
  function afficheNom() {
    console.log(nom);
  }
  return afficheNom;
}

let maFonction = creerFonction();// à ne pas confondre avec let maFonction = creerFonction;
maFonction();
```
 "Mozilla" est affiché dans la console. L'intérêt de ce code est qu'une fermeture contenant la fonction afficheNom est renvoyée par la fonction parente, avant d'être exécutée.
Le code continue à fonctionner, ce qui peut paraître contre-intuitif au regard de la syntaxe utilisée. Usuellement, les variables locales d'une fonction n'existent que pendant l'exécution d'une fonction. Une fois que creerFonction() a fini son exécution, on aurait pû penser que la variable nom n'est plus accessible. Cependant, le code fonctionne : en JavaScript, la variable est donc accessible d'une certaine façon.
L'explication est la suivante : maFonction est une fermeture (**closure**). La fermeture combine la fonction afficheNom et son  environnement. Cet environnement est composé de toutes les variables locales accessibles (dans la portée) à la création de la fermeture. Ici maFonction est une fermeture qui contient la fonction afficheNom et une référence à la variable var nom = "Mozilla" qui existait lorsque la fermeture a été créée. L'instance de afficheNom conserve une référence à son environnement lexical, dans lequel nom existe. Pour cette raison, lorsque maFonction est invoquée, la variable nom reste disponible et "Mozilla" est transmis à console.log.
#### 1.5.1.1 Autre exemple de closure
Extrait du [guide du bien développer en js de Ryan McDermott](https://github.com/ryanmcdermott/clean-code-javascript#objects-and-data-structures)
```js
function makeBankAccount() {
  // this one is private
  let balance = 0;

  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }

  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }

  return {
    // ...
    getBalance,
    setBalance
  };
}
const account = makeBankAccount();
account.setBalance(100);
```
L'intérêt est clairement ici de rendre une variable privée mais tout de même accessible via un "getter" et un "setter"
## 1.6 Fonction anonyme immédiate
Les fonction anonymes immédiates ou Immediately invoked function expression  ou IIFES permettent d'isoler le code et donc les variables.
Comme nous l'avons vu dans le chapitre sur les variables, l'utilisation du mot clé "var" rend les variables "function scope". Cela veut dire que pour être sûr d'isoler son code, il faut l'encapsuler dans une fonction.
Une façon très répendue de faire et d'utiliser des fonctions anonymes immédiates dont voici la syntaxe :
```js
(function() {//code isolé ici})();
```
C'est le fait de terminer l'instruction par les parenthèses ouvrantes et fermantes qui appelle immédiatement la fonction. Comme cette fonction n'a pas de nom, on dit qu'elle est anonyme.

## 1.7 Exercice
Examinez le code suivant : 
```js
(function(){
  // code ici
  console.log("Hello dans l'IIFES");
  var i = 3;
})();
console.log(i);
```
> [!FAQ]- Selon vous, qu'affichera le code ci-dessus dans la console ?
> ```js
> Hello dans l'IIFES
fonctionAnonyme.js:14 Uncaught ReferenceError: i is not defined
    at fonctionAnonyme.js:14
    ## 8.7 Arrow function

# 2 Fonctions fléchées
Une expression de fonction fléchée (arrow function en anglais) permet d’avoir une syntaxe plus courte que les expressions de fonction et n'a pas le même mécanisme d'affectation de "this". Ce dernier prendra la valeur du contexte de création de la fonction. Si la fonction fléchée est créée dans le contexte global, "this" sera alors "window" en revanche si elle est créée à l'intérieur d'une classe, "this" prendra la valeur de l'instance en cours de la dite classe.
Ex :
```js
let a = () => {
  console.log("Hello world");
}
```
## 2.1 Raccourci de déclaration de méthode dans un objet
```js
function createPerson() {
  return {
    walk() {
       console.log('Je marche'); 
    }
  }
}
```

### 2.1.1 First class citizen
Les fonctions sont des "first class citizen", elles peuvent être :
- stockées dans une variable,
- passées en argument à une fonction,
- retournées par une une fonction.
### 2.1.2 Higher order function :
une "Higher order function" prend une fonction en paramètre ou renvoie une fonction ou les deux.
### 2.1.3 Fonction pure
Une fonction pure est une fonction qui possède les propriétés suivantes :
- Sa valeur de retour est la même pour les mêmes arguments (pas de variation avec des variables statiques locales, des variables non locales, des arguments mutables de type référence ou des flux d'entrée).
- Son évaluation n'a pas d'effets de bord (pas de mutation de variables statiques locales, de variables non locales, d'arguments mutables de type référence ou de flux d'entrée-sortie).
Une fonction pure est ainsi un analogue informatique d'une fonction mathématique.
Exemple de fonction pure :
```js
function sum(a, b) {
  return a + b;
}
```

Ces fonctions sont dites « pures » parce qu’elles ne tentent pas de modifier leurs entrées et retournent toujours le même résultat pour les mêmes entrées.
En revanche, cette fonction est impure car elle modifie sa propre entrée :
```js
function add(account, amount) {
  account.total += amount;
}
```
### 2.1.4 setTimeout et setInterval
setTimeout et setInterval sont deux méthodes asynchrones qui permettent d'appeler des fonctions plus tard, un fois pour setTimeout et plusieurs fois à intervalles réguliers pour setInterval
**La méthode setInterval(),** proposée sur les interfaces Window et Worker, appelle de manière répétée une fonction ou exécute un extrait de code, avec un délai fixe entre chaque appel.
**Paramètres** : setInterval attend en paramètre une fonction et un délai en millisecondes.
**Retour :** Cette méthode renvoie un ID d'intervalle qui identifie de manière unique l'intervalle, vous pouvez donc le supprimer ultérieurement en appelant clearInterval().
## 2.2 Exercice
>[!exo]
> Ecrivez le code qui permet d'écrire dans la console 1, 2, 3 , 4, 5 à une seconde d'intervalle en utilisant la fonction setInterval. Une fois arrivé à 5, la fonction qui affiche dans la console ne doit plus être appelée.

**La méthode  globale setTimeout()** définit un temporisateur qui exécute une fonction ou un morceau de code spécifié une fois le temporisateur expiré.
**Paramètres** : setTimeout attend en paramètre une fonction et un délai en millisecondes.
**Retour** : Cette méthode renvoie l'id du timeout qui est une valeur entière positive qui identifie le temporisateur créé par l'appel à setTimeout(). Cette valeur peut être passée à clearTimeout() pour annuler le délai d'attente.
