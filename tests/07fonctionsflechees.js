

const test = function (n) {
  return n + 1;
}
console.log(`test`, test(1));
// Ici, on a pu réduire au maximum le nombre de caractères pour déclarer la fonction
// car il n'y a qu'un seul paramètre et un retour direct
const testFF = n => n + 1;
console.log(`testFF`, testFF(1));
console.log(`testFF`, testFF);


function success() {
  console.log(`Bravo !`);
}
function fail() {
  console.log(`Désolé, c'est perdu !`);
}
/**
 * Fonction qui appelle de façon aléatoire l'un des deux callback
 * @param {callback function} resolve 
 * @param {callback function} reject 
 */
function game(resolve, reject) {
  if (Math.random() > 0.5) resolve();
  else reject()
}

// Appel de game
game(success, fail);

function account() {
  let balance = 100;

  function getBalance() {
    return balance
  }
  return getBalance;
}
const gB = account();
console.log(`balance = `, gB());