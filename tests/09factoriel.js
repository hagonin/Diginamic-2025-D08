// fonction récursive

function factoriel(n) {
  if (n === 1) return 1;
  return n * factoriel(n - 1);
}

console.log(`factoriel de 3 : `, factoriel(4));