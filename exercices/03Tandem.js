// Ecrire une classe qui permet de créer des "Bike" qui auront pour propriétés "brand", "model", "weight"
// et pour méthode "pedal" qui renvoie simplement dans la console : "Je pédale !"
// >Déclarer une classe Tandem qui étend Bike
// >Ajouter une propriété de classe qui indique le nombre de personnes qui peuvent utiliser le tandem.
// >Réécrire la méthode "pedal" qui renvoie dans la console (uniquement pour les tandems et en utilisant
// une propriété de classe) : "Nous sommes 2 à pédaler !"
// >Pour les plus avancés, faites en sorte que brand et model soient des propriétés privées et qui seront
// manipulées via un getter et un setter.

class Bike {
  constructor(brand, model, weight) {
    this.brand = brand;
    this.model = model;
    this.weight = weight;
  }
  pedal() {
    console.log(`je pédale !`);
  }
}
class Tandem extends Bike {
  static nberPerson = 2;
  pedal() {
    console.log(`Nous sommes ${Tandem.nberPerson} à pédaler !`);
  }
}

let bike1 = new Bike("Peugeot", "ezrr56", 12);
bike1.pedal();
let tandem1 = new Tandem("Lapierre", "tandemxcv2432", 25);
tandem1.pedal();