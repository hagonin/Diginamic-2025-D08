// fonction constructeur
function Product(name, price, description, brand = "BMW") {
  // Propriétés de type primitif
  this.name = name;
  this.price = price;
  this.description = description;
  this.brand = brand;

  // méthode
  this.showProduct = function () {
    console.log(`Produit -  nom : ${this.name}, prix : ${this.price}, description : ${this.description}, color : ${this.color}`);
    console.log(`this : `, this);
  }

}
Product.prototype.brand = "Peugeot";
Object.prototype.color = "Black";

// Instanciations d'un produit
const product1 = new Product("Téléphone", 500, "Magnifique téléphone Nokia 3310 !");
const product2 = new Product("vélo", 500, "VTT");

console.log(`product1.brand : `, product1.brand);
console.log(`product1 : `, product1);

// Comment savoir si product1 a bien la propriété color ?
console.log("Propriété color ?", product1.hasOwnProperty("color"));
console.log("Propriété name ?", product1.hasOwnProperty("name"));
console.log("Propriété brand ?", product1.hasOwnProperty("brand"));

const test = {};
console.log(`test.color`, test.color);
