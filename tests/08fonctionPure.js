
function sum(a, b) {

  return a + b;
}

sum(1, 2);

function add(account, amount) {
  account.total += amount;
}

account1 = {
  total: 0
}
console.log(`account1`, account1);
// Comme account1 et une variable de type évolué (object), account copie sa référence
add(account1, 100);
console.log(`account1`, account1);

function addNumber(account, amount) {
  account += amount;
}
let y = 10;
// comme y est une variable de type primitif, le paramètre account copie sa valeur
addNumber(y, 100);
console.log(`y`, y);