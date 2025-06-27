function makeBankAccount() {
  // this one is private
  let balance = 0;

  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }

  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }

  return {
    "getBalance": getBalance,
    "setBalance": setBalance
  };
}
// Je récupère dans le scope global une référence à des fonctions qui appartiennent au scope de makeBankAccount
const account = makeBankAccount();
account.setBalance(100);
console.log(`balance : `, account.getBalance());