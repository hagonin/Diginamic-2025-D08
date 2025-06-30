// Fonction constructeur
function Product(name, price, description) {
  // Propriétés de type primitif
  this.name = name;
  this.price = price;
  this.description = description;

  // méthode
  this.showProduct = function () {
    console.log(`Produit -  nom : ${this.name}, prix : ${this.price}, description : ${this.description}`);
    console.log(`this : `, this);
  }

}

// Instanciation d'un produit
const product1 = new Product("Téléphone", 500, "Magnifique téléphone Nokia 3310 !");

// Appel de la méthode 
product1.showProduct();
console.log(`this`, this);