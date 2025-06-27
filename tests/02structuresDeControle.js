"use strict";
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
try {
  while (i < 10) {
    console.log(i);
    if (i === 3) throw new Error("Test");
    i++;
  }
} catch (error) {

}

let x = 2;

// L'assignation d'une variable de type primitif fait une copie par valeur.
let z = x;

let titi = 5;
const toto = { name: "toto" };
// L'assignation d'une variable de type évolué fait une copie par référence.
titi = toto;


console.log(`titi`, titi);

toto.name = "Jiji";
console.log(`titi`, titi);
console.log(`toto`, toto);
