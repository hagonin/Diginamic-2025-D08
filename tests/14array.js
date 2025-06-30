const fruits = ["Pomme", "Banane", "Cerise"];
//const fruits = new Array("Banane", "Cerise", "Pomme");

// Propriété longeur
console.log(`Taille de fruits`, fruits.length);

// Accès à la première valeur
console.log(`Premier fruit`, fruits[0]);

// Accès à la dernière valeur
console.log(`Premier fruit`, fruits[fruits.length - 1]);

// Méthodes

// Parcourir le tableau
fruits.forEach((fruit, index) => {
  console.log(`Fruit et index:`, fruit, index);
})

// Ajouter en fin de tableau
const result = fruits.push("Fraise");
console.log(`result`, result);

// Ajouter en début de tableau
fruits.unshift("Abricot");

// Ajouter après l'index 2
fruits.splice(3, 0, "Ananas");

// Supprimer le dernier élément
const lastDeleted = fruits.pop();
console.log(`lastDeleted : `, lastDeleted);

// Supprimer le premier élement
fruits.shift();

// Supprimer l'élément d'index 2
fruits.splice(2, 1);

// Modifier l'élément de l'index 2
fruits[2] = "CERISE";

// Trier le tableau par ordre alphabétique

fruits.sort();

// Trier le tableau par ordre croissant de longueur de la chaine de caractères
fruits.sort((a, b) => {
  return a.length - b.length;
});

const bob = {
  firstname: "Bob",
  age: 102
}
const dashka = {
  firstname: "Dashka",
  age: 19
}
const artists = [bob, dashka];
console.log(`artists`, artists);
// comment classer le tableau artists par ordre croissant d'age ?
artists.sort((a, b) => a.age - b.age);
console.log(`artists`, artists);

// Inverser le tableau
fruits.reverse();

// Chercher l'index d'une valeur (Pomme)
console.log(`Index de Pomme`, fruits.indexOf("Pomme"));

// Filtrer le tableau en fonction d'une condition (que les fruits qui contiennent la lettre a)
const filteredFruits = fruits.filter((fruit) => {
  return fruit.includes("o")
});
console.log(`filteredFruits`, filteredFruits);

// Créer un nouveau tableau d'images du tableau initial
// Mettre en MAJUSCULE tous les noms de fruits
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(`upperFruits`, upperFruits);

const liFruits = fruits.map((fruit) => `<li>${fruit}</li>`);
console.log(`liFruits`, liFruits);

// Fusionner 2 tableaux

// Réduire le tableau à une seule valeur

console.log(`fruits :`, fruits);