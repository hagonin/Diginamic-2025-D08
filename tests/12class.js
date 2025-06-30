/* function Product(name, price, description) {
  // Propriétés de type primitif
  this.name = name;
  this.price = price;
  this.description = description;

  // méthode
  this.showProduct = function () {
    console.log(`Produit -  nom : ${this.name}, prix : ${this.price}, description : ${this.description}`);
    console.log(`this : `, this);
  }

} */

// Utilisation des class qui sont du sucre syntaxique

class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
  showProduct() {
    console.log(`Produit -  nom : ${this.name}, prix : ${this.price}, description : ${this.description}`);
  }
}

class Vehicule extends Product {
  // propriété privée 
  #wheels;
  /**
   * Instanciation de Vehicule
   * @param {string} name 
   * @param {number} price 
   * @param {string} description 
   * @param {number} wheels 
   */
  constructor(name, price, description, wheels) {
    // Fait appel au constructeur de la classe mère
    super(name, price, description);
    // Ajout d'une nouvelle propriété
    this.#wheels = wheels;
  }
  get wheels() {
    console.log(`Dans le getter de wheels`);
    return this.#wheels;
  }
  set wheels(num) {
    console.log(`Dans le setter de wheels`);
    // Pas plus de 6 roues
    try {
      if (num < 7) this.#wheels = num;
      else throw new Error("Pas plus de 6 roues !")
    } catch (error) {
      console.error("Erreur attrapée dans le setter de wheels :", error);
    }
  }
  /**
   * Déclaration d'une nouvelle méthode qui affiche un message dans la console
   */
  start() {
    console.log(`le véhicule ${this.name} démarre en faisant rouler ses ${this.wheels} roues.`);
  }
  /**
   * Déclaration d'une nouvelle méthode qui affiche un message dans la console
   */
  stop() {
    console.log(`le véhicule ${this.name} s'arrête`);
  }
  /**
   * Polymorphisme d'héritage - override
   */
  showProduct() {
    // Appel de la méthode du même nom mais dans la classe mère
    super.showProduct();
    console.log(`Nombre de roues : ${this.wheels}`);
  }

}



const vehicule1 = new Vehicule("R5", 500, "Magnifique R5", 4);
vehicule1.start();
vehicule1.wheels = 10;
console.log(`vehicule1.wheels`, vehicule1.wheels);
