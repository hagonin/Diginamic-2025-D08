# Introduction
L'Observer est un modèle de conception (design pattern)  qui vous permet de définir un mécanisme d'abonnement pour informer plusieurs objets de tout événement survenant sur l'objet qu'ils observent.

## Quand utiliser le design pattern Observer ?
Lorsque les modifications apportées à l'état d'un objet nécessitent la modification d'autres objets, et que la liste des objets qui doivent être mis à jour en fonction du changement d'état est inconnue au préalable ou change dynamiquement. 

Par exemple, vous avez créé une classe de bouton personnalisée et vous souhaitez laisser les clients associer du code personnalisé à votre bouton afin qu'il se déclenche chaque fois qu'un utilisateur appuie sur le bouton. Vous pouvez ajouter le mécanisme d'abonnement à votre classe de boutons, permettant aux clients de connecter leur code personnalisé via des classes d'abonnés personnalisées.

Certains objets de votre application doivent en observer d’autres, mais seulement pour une durée limitée ou dans des cas précis. La liste des observateurs est dynamique, de sorte que les abonnés peuvent rejoindre ou quitter la liste quand ils en ont besoin.

## Qu'est-ce que le Observer pattern ?
Le modèle Observateur se compose d’un observable et d’un observateur.

### Observable / Subject / Publisher
C'est une objet/class qui maintient une liste d'observateurs/abonnés qu'il doit notifier lorsqu'il est mis à jour. Il devra également fournir un mécanisme d'abonnement pour permettre aux observateurs de s'abonner ou de se désinscrire de ses flux d'événements. En réalité, ce mécanisme consiste à :
- observers : cette propriété de classe contient un tableau d’observers.
- addObserver() : Cette méthode ajoute un observateur au tableau des observateurs
- removeObserver() : Cette méthode supprime un observateur du tableau des observateurs
- notify() : Cette méthode informe tous les observateurs qu'un changement s'est produit.
### Observer/Abonné 
Tout objet/classe qui souhaite s'abonner/écouter les modifications apportées à l'éditeur en implémentant une méthode update() qui sera appelée par la méthode notify() de l'éditeur.

# Comment implémenter le modèle Observer ?
Dans les applications du monde réel, il peut y avoir plusieurs classes/objets d'abonnés différents s'abonnant à la même classe d'éditeur. Nous ne voudrions donc pas associer l’éditeur à toutes ces classes d’abonnés. C'est pourquoi il est crucial que tous les abonnés implémentent la même interface et que l'éditeur communique avec eux uniquement via cette interface. Cependant, comme nous utiliserons du JS vanilla pour garder les choses simples, nous n'avons pas accès aux interfaces. Nous pouvons créer des classes parentes à partir desquelles nous pouvons étendre. Plus précisément, les classes parentes Observable et Observer auront les propriétés et méthodes requises pour implémenter le modèle d'observateur.
## Exemple complet
Pour cet exemple, je pars du principe que l'on va créer un observable et 2 observeurs : un paragraphe et une image (figure + img + figcaption).
L'observable va émettre une notification lors d'un click sur un bouton.
Le paragraphe et l'image ne vont pas réagir de la même façon. Voyons cela de plus près

classe Observable
```javascript
class Observable {

  constructor() {
    // Tableau des observeurs
    this.observers = [];
  }

  // Ajout d'un observeur
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Suppression d'un observeur
  removeObserver(observer) {
    const removeIndex = this.observers.findIndex((obs) => {
      return observer === obs;
    });
    if (removeIndex !== -1) {
      this.observers = this.observers.slice(removeIndex, 1);
    }
  }

  // Parcourt les observeurs et appelle la méthode "update" pour chacun d'eux
  notify(data) {
    if (this.observers.length > 0) {
      this.observers.forEach((observer) => observer.update(data));
    }
  }
}

export default Observable;
```
Classe Observer
```javascript
class Observer {
   // La méthode qui sera appelée lors d'une notification
   update() {}
 }
 /**
   * Rien à voir avec un observable mais comme je vais avoir besoin de créer 
   * des élément du dom, j'en porofite pour placer ici cette méthode
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
   * @param {String} markup_name
   * @param {String} text
   * @param {domElement} parent
   * @param {Array[Object]} attributes  (doit comprendre les propriétés name et value)
   * @returns domElement
   */

  createMarkup(markupname, text, parent, attributes = []) {
    const markup = document.createElement(markupname);
    markup.textContent = text;
    parent.appendChild(markup);
    for (const attribute of attributes) {
      for (let key in attribute) {
        markup.setAttribute(key, attribute[key]);
      }
    }
    return markup;
  }

export default Observer;
```
classe Paragraphe qui étend Observer
```js
import Observer from "./Observer.js";


export default class Paragraphe extends Observer {
  constructor(observer, text) {
    super();
    this.observer = observer;
    this.text = text;
    this.dom_element = this.render();
    this.observer.addObserver(this);
  }

  render() {
    return this.createMarkup("p", this.text, document.body);
  }

  update(message) {
    this.dom_element.innerText += ` ${message}...`;
  }
}
```
classe Image qui étend Observer
```js
import Observer from "./Observer.js";

export default class Image extends Observer {
  constructor(observer, image_path) {
    super();
    this.observer = observer;
    this.image_path = image_path;
    this.dom_element = this.render();
    this.observer.addObserver(this);
    this.rotate = 45;
    this.position = 0;
  }

  render() {
    const figure = this.createMarkup("figure", this.text, document.body);
    figure.style.display = "table";
    const image = this.createMarkup("img", '', figure, [{ src: this.image_path }]);
    const caption = this.createMarkup("figcaption", '', figure);
    return {
      figure,
      caption
    }
  }

  update(message) {
    this.position = (this.position + this.rotate) % 360;
    this.dom_element.caption.innerText += message + '... ';
    this.dom_element.figure.style.transform = `rotate(${this.position}deg)`;
    console.log(`this.position : `, this.position);
  }
}
```
index.js : création de l'observable et des deux observeurs
```js
import Image from "./Image.js";
import Observable from "./Observable.js";
import Paragraphe from "./Paragraphe.js";


// Création d'un Observable
const obs1 = new Observable();
// création d'un Observer Paragraphe
const paragraphe1 = new Paragraphe(obs1, "Texte du paragraphe");

// création d'un Observer Image
const image1 = new Image(obs1, "/images/duck.png");

// Le click sur le bouton appelle la notification par l'observable
const btn = document.getElementById("click-me");

btn.onclick = () => { obs1.notify("bouton cliqué") };
```
... et enfin le fichier index.html qui appelle index.js et qui crée le bouton cliquable
```HTML
<!DOCTYPE html>

<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Observable observé</title>
  <script type="module" src="./js/index.js" defer></script>
</head>
<body>
  <button id="click-me">Clic moi !</button>
</body>
</html>
```