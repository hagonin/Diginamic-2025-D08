/* Ecrivez le code qui permet d'écrire dans la console 1, 2, 3 , 4, 5 à une seconde d'intervalle en utilisant la fonction setTimeout.Une fois arrivé à 5, la fonction qui affiche dans la console ne doit plus être appelée. */


for (let j = 0; j < 5; j++) {
  setTimeout(() => {
    console.log(j);
  }, 1000 * j, j + 1);
  console.log("j de la boucle for : ", j);
}
console.log(`test`);

