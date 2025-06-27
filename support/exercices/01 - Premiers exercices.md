## Chapitre 6 : Variables
### Exercice 1 : Le Détective des Variables
**Mission** : Devine le type et la valeur finale de chaque variable !
```javascript
let mystere1 = 42;
mystere1 = mystere1 + "0";

let mystere2 = true;
mystere2 = mystere2 + 1;

let mystere3 = "5";
mystere3 = mystere3 * 3;

// Quels sont les types et valeurs finales de mystere1, mystere2 et mystere3 ?
```
### Exercice 2 : Le Jeu du Scope
**Mission** : Choisis la bonne réponse pour chaque question.
```javascript
let tresor = "diamant";

function explorerCaverne() {
  let tresor = "or";
  console.log("Dans la caverne : " + tresor);
  
  {
    let tresor = "rubis";
    console.log("Dans la chambre secrète : " + tresor);
  }
  
  console.log("De retour dans la caverne : " + tresor);
}

explorerCaverne();
console.log("De retour au camp : " + tresor);

// Qu'affiche chaque console.log() ? Dessine le chemin du trésor !
```
### Exercice 3 : La Course des Transtypage
**Mission** : Prédis le résultat de chaque conversion et vérifie tes réponses !
```javascript
// Round 1: 
console.log("5" + 2);     // Résultat ?

// Round 2:
console.log("5" - 2);     // Résultat ?

// Round 3:
console.log(+"10.5");     // Résultat ?

// Round 4:
console.log(!!0);         // Résultat ?

// Round 5:
console.log(!!"Super");   // Résultat ?

// Bonus round:
console.log(1 + 2 + "3"); // Résultat ?
```
## Chapitre 7 : Instructions, expressions et structures de contrôle
### Exercice 1 : L'Aventure des Conditions
**Mission** : Aide le personnage à trouver le bon chemin en complétant le code !
```javascript
let niveau = 5;
let pointsDeVie = 50;
let clésObtenues = 2;
let monstreVaincu = true;

// Complète les conditions suivantes pour guider notre héros :

// 1. Le héros peut-il ouvrir la porte enchantée ? (Nécessite niveau >= 5 ET au moins 2 clés)
if (/* Ton code ici */) {
  console.log("La porte enchantée s'ouvre !");
} else {
  console.log("La porte reste fermée...");
}

// 2. Le héros doit-il se reposer ? (Nécessaire si points de vie < 30 OU niveau < 3)
if (/* Ton code ici */) {
  console.log("Il est temps de se reposer !");
} else {
  console.log("En avant l'aventure !");
}

// 3. Le héros peut-il recevoir la récompense finale ? (Nécessite monstre vaincu ET niveau >= 5)
if (/* Ton code ici */) {
  console.log("Voici le trésor légendaire !");
} else {
  console.log("Reviens quand tu auras accompli ta quête !");
}
```
### Exercice 2 : Le Zoo des Boucles
**Mission** : Complète les boucles pour nourrir tous les animaux !
```javascript
// Notre liste d'animaux
const animaux = ["Lion", "Girafe", "Éléphant", "Singe", "Pingouin"];
const nourriture = {
  Lion: "viande",
  Girafe: "feuilles",
  Éléphant: "fruits",
  Singe: "bananes",
  Pingouin: "poisson"
};

// 1. Utilise une boucle for classique pour nourrir chaque animal
console.log("Première tournée de nourriture :");
// Ton code ici

// 2. Utilise une boucle for...of pour caresser chaque animal
console.log("Caresser les animaux :");
// Ton code ici

// 3. Utilise une boucle for...in pour vérifier la nourriture
console.log("Vérification des stocks :");
// Ton code ici
```
### Exercice 3 : Le Switch Magique
**Mission** : Utilise switch pour créer un petit jeu de divination !
```javascript
function prédire(choix) {
  // Utilise switch pour prédire l'avenir selon le choix (1-5)
  switch (choix) {
    // Complète les cas avec des prédictions amusantes
    // Ton code ici
  }
}

// Teste avec différentes valeurs
prédire(1);
prédire(3);
prédire(5);
prédire(7); // Que se passe-t-il ici ?
```
## Bonus : Expressions VS Instructions
### Exercice 1 : Le Défi des Expressions
**Mission** : Identifie quelles lignes sont des expressions et quelles lignes sont des instructions !
```javascript
let score = 0;

score = 10;          // Expression ou Instruction ?
score + 5;           // Expression ou Instruction ?
if (score > 7) {}    // Expression ou Instruction ?
score++              // Expression ou Instruction ?
"Ton score est " + score;  // Expression ou Instruction ?
for (let i = 0; i < 3; i++) {}  // Expression ou Instruction ?
```
### Exercice 2 : Le Laboratoire des Opérateurs
**Mission** : Devine le résultat de ces expériences avec les opérateurs !
```javascript
let x = null;
let y = undefined;
let z = "bonjour";

console.log(x ?? "Valeur par défaut");   // Résultat ?
console.log(y ?? "Valeur par défaut");   // Résultat ?
console.log(z ?? "Valeur par défaut");   // Résultat ?

let obj = { 
  utilisateur: { 
    nom: "Alice",
    adresse: null
  } 
};

console.log(obj.utilisateur?.adresse?.rue);  // Résultat ?
console.log(obj.utilisateur?.nom);           // Résultat ?
```
### Exercice 3 : Le Mystère de l'Égalité
**Mission** : Prédis quelles comparaisons sont vraies et lesquelles sont fausses !
```javascript
let a = 5;
let b = "5";
let c = 5;
let d = { valeur: 5 };
let e = { valeur: 5 };
let f = d;

console.log(a == b);     // Vrai ou Faux ?
console.log(a === b);    // Vrai ou Faux ?
console.log(a === c);    // Vrai ou Faux ?
console.log(d == e);     // Vrai ou Faux ?
console.log(d === e);    // Vrai ou Faux ?
console.log(d === f);    // Vrai ou Faux ?
console.log(d.valeur === e.valeur);  // Vrai ou Faux ?
```