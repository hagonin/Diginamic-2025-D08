"use strict";
/**
 * Affiche la valeur du paramètre
 * @param {any} i 
 */
function test(i) {
  console.log(`i : `, i);
  return i;
}

// Appel de la fonction
test(5);// 5 est un argument dont la valeur va être assignée au paramètre (passage par valeur ou référence)

// Appel de la fonction et assignation du retour de la fonction à la variable j
let j = test(12);

console.log(`j`, j);

function addPartner(...people) {
  console.log(`people`, people);
  /* people.forEach(person => {
    partners.push(person);
  }) */
}
addPartner("Bob", "Ray", "Nina");