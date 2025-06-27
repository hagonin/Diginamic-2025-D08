
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
add(account1, 100);
console.log(`account1`, account1);

function addNumber(account, amount) {
  account += amount;
}
let y = 10;
addNumber(y, 100);
console.log(`y`, y);