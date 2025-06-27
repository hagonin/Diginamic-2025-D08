![[diginamic_logo_3-02.png]]
- [[#1 Objet|1 Objet]]
	- [[#1 Objet#1.1 Exemple|1.1 Exemple]]
	- [[#1 Objet#1.2 Qui est "this" ?|1.2 Qui est "this" ?]]
	- [[#1 Objet#1.3 Raccourci pour la création d'objets - depuis ES2015|1.3 Raccourci pour la création d'objets - depuis ES2015]]
	- [[#1 Objet#1.4 Prototype|1.4 Prototype]]
	- [[#1 Objet#1.5 Reprenons l'exemple de code du début de cette page :|1.5 Reprenons l'exemple de code du début de cette page :]]
	- [[#1 Objet#1.6 Exercice 1|1.6 Exercice 1]]
		- [[#1.6 Exercice 1#1.6.1 Class et héritage|1.6.1 Class et héritage]]
	- [[#1 Objet#1.7 Propriétés privées avec getter et setter|1.7 Propriétés privées avec getter et setter]]
	- [[#1 Objet#1.8 Propriétés et méthodes de classe avec le mot clé static|1.8 Propriétés et méthodes de classe avec le mot clé static]]
	- [[#1 Objet#1.9 Objet littéral|1.9 Objet littéral]]
	- [[#1 Objet#1.10 Assignation destructurée avec le spread operator|1.10 Assignation destructurée avec le spread operator]]
	- [[#1 Objet#1.11 Récupérer des informations sur les objets|1.11 Récupérer des informations sur les objets]]
	- [[#1 Objet#1.12 Connaitre les noms des classes dont héritent une instance d'objet|1.12 Connaitre les noms des classes dont héritent une instance d'objet]]
	- [[#1 Objet#1.13 Exercice 2|1.13 Exercice 2]]
	- [[#1 Objet#1.14 Exercice 3|1.14 Exercice 3]]
# 1 Objet
Si l'on en croit wikipedia,  un objet est un conteneur symbolique et autonome qui contient des informations et des mécanismes concernant un sujet, manipulés dans un programme. Le sujet est souvent quelque chose de tangible appartenant au monde réel. C'est le concept central de la programmation orientée objet (POO).

En programmation orientée objet, un objet est créé à partir d'un modèle appelé **classe ou prototype**, dont il **hérite** les comportements et les caractéristiques. Les comportements et les caractéristiques sont typiquement basés sur celles propres aux choses qui ont inspiré l'objet : une personne (avec son état civil), un dossier, un produit...

## 1.1 Exemple 
```js
// Définir une fonction constructeur
function Personne(nom,prenom) {
  // Propriétés de l'objet
  this.nom = nom;
  this.prenom = prenom;
  // Méthode (Camel case selon les standards)
  this.sePresenter = function() {
    console.log("Bonjour, je m'appelle " +
    this.prenom + " " + this.nom);
  }
}
//instanciation de l'objet et stockage dans la variable bob
var bob = new Personne("Dylan", "Bob");
console.log(bob.nom);
console.log(bob.prenom);
bob.sePresenter();
// instanciation de la personne Jean-Claude Dusse
var jc = new Personne("Dusse","Jean-Claude");
jc.sePresenter();
```

Vous noterez qu'il est classique de créer une instance d'objet puis d'appeler une méthode de l'objet via cette instance.

## 1.2 Qui est "this" ?
Dans le contexte global d'exécution (c'est-à-dire, celui en dehors de toute fonction), this fait référence à l'objet global **window.**
S'il est utilisé dans une fonction, la valeur de this dépendra de la façon dont la fonction a été déclarée et appelée.

Fonction déclarée avec le **mot clé function** (ex : sePresenter: function(){}) : 
- Si la fonction est appelée depuis une instance d'objet (comme c'était le cas dans l'exemple ci-dessus jc.sePresenter()), alors this prendra la valeur de l'instance en question.
- si la fonction n'est pas appelée depuis une instance d'objet, this redeviendra l'objet global **window** (dans le cas de l'exécution du code dans un navigateur).
Fonction déclarée en utilisant la syntaxe des **arrow function** (ex : sePresenter: () => {}) : 
- this fait référence à l'instance de l'objet en cours si la fonction a été déclarée à l'intérieur d'une fonction constructeur (ou dans une classe comme on le verra plus tard)
- this fait référence à l'objet window si la fonction n'a pas  été déclarée à l'intérieur d'une fonction constructeur (ou d'une classe comme on le verra plus tard)
## 1.3 Raccourci pour la création d'objets - depuis ES2015
Lorsque la propriété de l'objet que l'on veut créer a le même nom que la variable utilisée pour valeur, on peut utiliser un raccourci :
```js
function createPerson() {
  const name = 'bob';
  return { name };
}
```
## 1.4 Prototype
Le javascript est un language à "prototype".  Chaque objet possède une **propriété privée** qui contient un lien vers un autre objet appelé le **prototype**. Ce prototype possède également son prototype et ainsi de suite, jusqu'à ce qu'un objet ait null comme prototype. Par définition, null ne possède pas de prototype et est ainsi le dernier maillon de la chaîne de prototype.
## 1.5 Reprenons l'exemple de code du début de cette page :
```js
function Personne(nom,prenom) {
  // Propriétés de l'objet
  this.nom = nom;
  this.prenom = prenom;
  // Méthode (Camel case selon les standards)
  this.sePresenter = function() {
    console.log("Bonjour, je m'appelle " +
    this.prenom + " " + this.nom);
  }
}
```
la méthode "sePresenter" sera créée pour chaque instance de "Personne" ce qui prend de la place inutilement en mémoire.
Pour corriger cela, il suffit d'ajouter la méthode au prototype de Personne de la manière suivante :
```js
function Personne(nom,prenom) {
  // Propriétés de l'objet
  this.nom = nom;
  this.prenom = prenom;
}
Personne.prototype.sePresenter = function() {
  console.log("Bonjour, je m'appelle " +
  this.prenom + " " + this.nom);
}
```

Conclusion : le prototype permet de "factoriser" les propriétés d'un type d'objet. C'est d'ailleurs ce mécanisme qui est utilisé dans les "class" apportées par ES5. Ces dernières ne sont qu'un sucre syntaxique !

## 1.6 Exercice 1
>[!exo]
>Créer un constructeur de cercle qui a pour propriétés (mettre les noms des propriétés en anglais svp) :
> - "rayon" en mètre qui sera définie à l'instanciation de chaque cercle
> - "nom" qui permettra de donner un nom à chaque cercle et qui sera définie à l'instanciation également de chaque cercle
> - "Pi" qui sera stocké dans un seul espace mémoire (dans le prototype soit une propriété de classe)
> - aire() qui affichera dans la console l'aire ( pi x rayon²). 
> - Créez 2 instances de Cercle, petit_cercle et grand_cercle qui auront respectivement pour rayon 2 et 4
> - Appelez aire sur les 2 instances
> - Essayer de définir au bon endroit "aire()"
> - Puis instancier 2 cercles qui ont respectivement pour rayon : 2 et 4 mètres et pour nom petit_cercle et grand_cercle.:
En reprenant l'exemple du cercle, voici un dessin qui tente d'expliquer l'intérêt des prototypes.

**Cas 1** : le prototype du constructeur cercle n'est pas utilisé. A chaque instance de cercle, on stocke la valeur pi et la méthode aire alors qu'elle sont les mêmes pour tous.

![[./images/sansPrototype.png]]
**Cas 2** : le prototype du constructeur cercle est utilisé. Pi et la méthode aire ne sont alors stockées qu'une seule fois.
![[./images/avecPrototype.png]]
### 1.6.1 Class et héritage 
Depuis ECMAScript ES6, il est possible de créer des classes d'objets avec un mécanisme d'héritage
Ex : 
```js
// Création d'une "class" Personne ES6
class Personne { // Majuscule selon les standards
  constructor(nom,prenom) { // récupération des paramètres
    this.nom = nom; // propriété
    this.prenom = prenom; // propriété
  }
  // Méthodes ajoutées automatiquement au prototype de Personne
  sePresenter() {
    console.log("Bonjour, je m'appelle " +
    this.prenom + " " + this.nom);
  }
}
/**
* instanciation d'une Personne avec passage 
* des paramètres "Chazal" et "Franck" au constructeur
*/
var franck = new Personne("Chazal","Franck"); // 
franck.sePresenter();

// Création d'une "class" Enseignant qui hérite
// de la class Personne
class Enseignant extends Personne {
  constructor(nom,prenom,diplome) {
    super(nom,prenom);
    this.diplome = diplome;
  }
  // Méthodes
  sePresenter() {
    super.sePresenter(); 
    console.log("... et je suis un enseignant");
  }
  enseigner() {
    console.log("J'enseigne !");
  }
}
var jean = new Enseignant("Dujardin","Jean","Agrégation");
jean.sePresenter();
jean.enseigner();

// Class qui spécialise la class Enseignant
class EnseignantProgrammation extends Enseignant {
  // Méthodes
  enseignerJS() {
    console.log("J'enseigne le JS !");
  }
}
var yvan = new EnseignantProgrammation("Attal","Ivan","BAC");
yvan.sePresenter();
yvan.enseignerJS();
```
## 1.7 Propriétés privées avec getter et setter
Depuis ECMAScript 2020 (ES11), il est possible de gérer des propriétés privées avec getter et setter.
Références :
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
Exemple :
```js
class Person {
  #name; // propriété privée
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  set name(new_name) {
    this.#name = new_name;
  }
}
const b = new Person("Bob");
console.log(b.name);
b.name = "toto";
console.log(b.name);
```
## 1.8 Propriétés et méthodes de classe avec le mot clé static
[cf : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/static](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/static) 
Le mot-clé static permet de définir une propriété statique d'une classe. Les propriétés statiques ne sont pas disponibles sur les instances d'une classe mais sont appelées sur la classe elle-même. Les méthodes statiques sont généralement des fonctions utilitaires (qui peuvent permettre de créer ou de cloner des objets par exemple).
## 1.9 Objet littéral
Il est possible (et fréquent) d'utiliser et de créer des objets de la manière suivante (syntaxe du JSON):
```js
const jc = {
  nom: "Dusse",
  prenom: "Jean-Claude",
  sePresenter: function(){
    console.log("Bonjour, je m'appelle " +
    this.prenom + " " + this.nom);
  }
}
jc.sePresenter();
```
## 1.10 Assignation destructurée avec le spread operator
Depuis ES2015, on peut utiliser une nouvelle syntaxe, le spread operator, qui permet de copier et  "d'étaler" des objets lors de l'assignation.
Ex :
```js
const bob = {
  firstname: "Bob"
}
const bobDylan = { ...bob, lastname: "Dylan" };
console.log(`bobDylan`, bobDylan);
```
Attention il ne faut pas confondre le rest operator avec le spread operator même s'ils se ressemblent beaucoup.
## 1.11 Récupérer des informations sur les objets
- #### Tester la propriété d'un objet avec [hasOwnProperty](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
    
- #### Copier un objet avec [assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
    
- #### Copier un objet avec le [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    
- **Connaitre le nom de la classe d'un objet**  
    Vous vous rendrez compte qu'il n'est pas toujours évident de savoir exactement de quelle classe (ou fonction constructeur) est issue une instance. Voici un code qui répond à cette question :
    
    console.log(mon_instance.constructor.name);
    
## 1.12 Connaitre les noms des classes dont héritent une instance d'objet
Pour aller plus loin dans la connaissance d'un objet, ce code peut vous être utile
```js
class A {}
class B extends A {}
class C extends B {}
function logClasses(object) {
  while (object) {
    object = Object.getPrototypeOf(object);
    if(object) console.log("classe : ",object.constructor.name);
  }

}
logClasses(new C());
```

>[!FAQ]- D'aprés vous que va afficher dans la console le code ci-dessus ?
> ```js
>classe :  C
>classe :  B
>classe :  A
>classe :  Object
>```

## 1.13 Exercice 2
>[!exo]
>Ecrire une classe qui permet de créer des "Bike" qui auront pour propriétés "brand", "model", "weight" et pour méthode "pedal" qui renvoie simplement dans la console : "Je pédale !"
>Réécrire la méthode "pedal" qui renvoie dans la console (uniquement pour les tandems) : "Nous sommes 2 à pédaler !"
>Pour les plus avancés, faites en sorte que brand et model soient des propriétés privées et qui seront manipulées via un getter et un setter.
>
## 1.14 Exercice 3
>[!exo]
>Créer une classe "CustomString" qui étend la classe String. Ré-écrire la méthode "split" afin qu'elle renvoie deux tableaux :- Le premier contient exactement la même chose que :
>- le retour de split telle que définie par défaut
>- le deuxième contenant le tableau qui comprend le caractère qui a servi à couper la chaîne. 
>  Ex split(o) de "Hello World" doit renvoyer :
>  - ['Hell', ' W', 'rld']
>  - ['Hello', ' Wo', 'rld']