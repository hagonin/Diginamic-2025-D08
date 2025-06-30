//Exercice
// Créer un constructeur de cercle qui a pour propriétés (mettre les noms des propriétés en anglais svp) :
// "rayon" en mètre qui sera définie à l'instanciation de chaque cercle
// "nom" qui permettra de donner un nom à chaque cercle et qui sera définie à l'instanciation également de chaque cercle
// "Pi" qui sera stocké dans un seul espace mémoire (dans le prototype soit une propriété de classe)
// aire() qui affichera dans la console l'aire ( pi x rayon²).
// Créez 2 instances de Cercle, petit_cercle et grand_cercle qui auront respectivement pour rayon 2 et 4
// Appelez aire sur les 2 instances
// Essayer de définir au bon endroit "aire()"
// Puis instancier 2 cercles qui ont respectivement pour rayon : 2 et 4 mètres et pour nom petit_cercle et grand_cercle.:
// En reprenant l'exemple du cercle, voici un dessin qui tente d'expliquer l'intérêt des prototypes.

//Je créée la fonction contructeur Circle()
function Circle(radius, name) {
  this.radius = radius;
  this.name = name;
}

//Je stocke la propriété Pi dans le prototype
Circle.prototype.pi = Math.PI;

//Je stocke la méthode area() dans le prototype
Circle.prototype.area = function () {
  const area = this.pi * this.radius ** 2;
  console.log(`Area of ${this.name} is: ${area.toFixed(2)} m²`);
};

//Je créée des instances
const small_circle = new Circle(2, "small_circle");
const large_circle = new Circle(4, "large_circle");

//J'appelle les méthodes depuis chaque instance
small_circle.area();
large_circle.area();