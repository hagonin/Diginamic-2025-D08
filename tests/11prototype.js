// fonction constructeur
function Product(name, price, description) {
  // Propriétés de type primitif
  this.name = name;
  this.price = price;
  this.description = description;

}
Product.prototype.brand = "BMW";

Product.prototype.showProduct = function () {
  console.log(`Produit -  nom : ${this.name}, prix : ${this.price}, description : ${this.description}, color : ${this.color}`);
  console.log(`this : `, this);
}
Object.prototype.color = "Black";

// Instanciations d'un produit
const product1 = new Product("Téléphone", 500, "Magnifique téléphone Nokia 3310 !");
const product2 = new Product("vélo", 500, "VTT");

product1.showProduct();




