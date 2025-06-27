# 10 Tableaux
Les tableaux sont des objets de haut niveau semblables à des listes.
## 10.1 Créer un tableau et obtenir sa taille
```js
const fruits = ['Apple', 'Banana'];
console.log(fruits.length);// 2
```
## 10.2 Accéder (via son index) à un élément du tableau
```js
const first = fruits[0];// Apple
const last = fruits[fruits.length - 1];// Banana
```
## 10.3 Boucler sur un tableau
```js
fruits.forEach(function(item, index, array) {
  console.log(item, index); // Apple 0 puis // Banana 1
});
```
## 10.4 Ajouter à la fin du tableau
```js
const newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]
```
## 10.5 Supprimer le dernier élément du tableau
```js
const last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];
```
## 10.6 Supprimer le premier élément du tableau
```js
const first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];
```
## 10.7 Ajouter au début du tableau
```js
const newLength = fruits.unshift('Strawberry') // ajoute au début
// ["Strawberry", "Banana"];
```
## Trouver l'index d'un élément dans le tableau
```js
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]
const pos = fruits.indexOf('Banana');
// 1
```
## 10.8 Trouver l'index d'un élément dans le tableau en fonction d'une condition
[Grâce à la méthode findIndex](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/findIndex)  
Ex :
```js
let term_index = state.terms.findIndex(element => {
  return element.id === termId;
});
```
## 10.9 Méthode "map"
Où comment créer un nouveau tableau à partir d'un tableau existant selon une fonction de transformation.
La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
Ex : 
```js
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
### 10.9.2 Méthode "filter"
Où comment créer un nouveau tableau à partir d'un tableau existant en filtrant selon une condition
Ex :
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

## Supprimer un élément par son index
```js
const removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos
// ["Strawberry", "Mango"]
```
### 10.9.3 Supprimer des éléments à partir d'un index
```js
const vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); 
// ["Cabbage", "Turnip", "Radish", "Carrot"]
var pos = 1, n = 2;
var removedItems = vegetables.splice(pos, n); 
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos
console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);
// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)
```
## 10.10 Copier un tableau
```js
const shallowCopy = fruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits
// ["Strawberry", "Mango"]
```
Alternative en utilisant le spread operator
```js
const shallowCopy = [...fruits]; // crée un nouveau tableau qui contient les éléments de fruits
// ["Strawberry", "Mango"]
```
## 10.11 Trier un tableau
cf : [Python Tutor code visualizer: Visualize code in Python, JavaScript, C, C++, and Java](https://pythontutor.com/render.html#mode=edit)
Pour trier un tableau, on va utiliser une fonction de callback qui attend deux arguments. Les deux paramètres vont permettre de comparer les éléments deux par deux. Le classement des éléments du tableau est basé sur la valeur de retour de la fonction de callback.  
Si la fonction retourne une valeur :
- **> 0 alors, l'ordre des éléments sera inversé**
- **< 0, l'ordre des éléments restera inchangé**
**Attention**, contrairement à filter ou à map, sort modifie le tableau initial
#### 10.11.1.1 Exemple
```js
const tableau = [{"id":2},{"id":5},{"id":1}];

tableau.sort(function (a, b) {
  if (a.id < b.id)
     return -1;
  if (a.id > b.id)
     return 1;
  // a doit être égal à b
  return 0;
});
console.log("tableau trié par ordre d'id croissant : ", tableau);

// version plus courte de la fonction de comparaison :

tableau.sort(function (a, b) {
  return a.id - b.id;
});
```
[+ d'infos](https://medium.com/better-programming/understanding-the-sort-method-of-arrays-a9f2d5f83230)

### 10.11.2 Assignation destructurée avec le rest operator
Depuis ES2015, on peut utiliser une nouvelle syntaxe, le rest operator (...), soit pour récupérer des arguments d'une fonction, soit pour les assignations destructurées :
```js
const fruits = ["Banane", "Cerise", "Pomme"];
const [banane, ...otherFruits] = fruits;
console.log(`banane`, banane);
console.log(`otherFruits`, otherFruits);
```
Attention il ne faut pas confondre le rest operator avec le spread operator même s'ils se ressemblent beaucoup.
### 10.11.3 Assignation avec le spread operator
Comme son nom l'indique le ``spread operator`` prend un tableau et l'étale. Ex :
```js
const exoticFruits = ["Banane", "Mangue", "Litchi"];
const fruits = [... exoticFruits, "Cerise", "Pomme", "Abricots"];
```

## 10.12 Exercice 1 : Classer des utilisateurs par age

Classer (sort) le tableau suivant par age croissant puis par age décroissant.
```js
const users = [
  {name: "Dylan", age: 78},
  {name: "Marley", age: 92},
  {name: "Cohen", age: 83},
  {name: "Jackson", age: 76},
]
```

## 10.13 Exercice 2 - Chaînage des méthodes
>[!exo]
>En une seule instruction, ajouter 3 fruits au tableau "fruits" et classer les fruits par taille de chaîne de caractères. 
>N'utilisez pas push mais plutôt le spread operator et ensuite sort et afficher le résultat dans la console.

## 10.14 Exercice 3 - Méthode reduce
>[!exo]
>Lire la documention sur la méthode "reduce" et nous expliquer le fonctionnement, exemple à l'appui.
