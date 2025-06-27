![[diginamic_logo_3-02.png]]
- [[#1 Document Object Model (DOM)|1 Document Object Model (DOM)]]
	- [[#1 Document Object Model (DOM)#1.1 Références :|1.1 Références :]]
	- [[#1 Document Object Model (DOM)#1.2 Représentation générique du DOM|1.2 Représentation générique du DOM]]
	- [[#1 Document Object Model (DOM)#1.3 Un exemple de construction du DOM par un navigateur à partir d'un fichier HTML|1.3 Un exemple de construction du DOM par un navigateur à partir d'un fichier HTML]]
	- [[#1 Document Object Model (DOM)#1.4 Principales méthodes|1.4 Principales méthodes]]
		- [[#1.4 Principales méthodes#1.4.1 Accéder à un élément en utilisant son identité|1.4.1 Accéder à un élément en utilisant son identité]]
		- [[#1.4 Principales méthodes#1.4.2 Supprimer un élément du DOM|1.4.2 Supprimer un élément du DOM]]
		- [[#1.4 Principales méthodes#1.4.3 Créer un élément du DOM (ici une section)|1.4.3 Créer un élément du DOM (ici une section)]]
		- [[#1.4 Principales méthodes#1.4.4 Ajouter un élément à l'arbre du document|1.4.4 Ajouter un élément à l'arbre du document]]
		- [[#1.4 Principales méthodes#1.4.5 Ajouter du texte à un élément du dom|1.4.5 Ajouter du texte à un élément du dom]]
		- [[#1.4 Principales méthodes#1.4.6 Ajouter un attribut|1.4.6 Ajouter un attribut]]
		- [[#1.4 Principales méthodes#1.4.7 Récupérer la valeur d'un attribut|1.4.7 Récupérer la valeur d'un attribut]]
	- [[#1 Document Object Model (DOM)#1.5 Héritage des éléments du DOM|1.5 Héritage des éléments du DOM]]
	- [[#1 Document Object Model (DOM)#1.6 Sélection avancée des éléments du DOM|1.6 Sélection avancée des éléments du DOM]]
	- [[#1 Document Object Model (DOM)#1.7 Exercice 1|1.7 Exercice 1]]
	- [[#1 Document Object Model (DOM)#1.8 Exercice 2|1.8 Exercice 2]]
	- [[#1 Document Object Model (DOM)#1.9 Exercice 3|1.9 Exercice 3]]
	- [[#1 Document Object Model (DOM)#1.10 Exercice 4|1.10 Exercice 4]]

# 1 Document Object Model (DOM)
## 1.1 Références :
- Document : [https://developer.mozilla.org/fr/docs/Web/API/Document](https://developer.mozilla.org/fr/docs/Web/API/Document)
- Node  : [https://developer.mozilla.org/fr/docs/Web/API/Node#m%C3%A9thodes](https://developer.mozilla.org/fr/docs/Web/API/Node#m%C3%A9thodes)
- Element (élément du dom) : [https://developer.mozilla.org/fr/docs/Web/API/Element](https://developer.mozilla.org/fr/docs/Web/API/Element)

Le Document Object Model (DOM) est une interface de programmation pour les documents HTML. Il fournit une page dont des programmes peuvent modifier la structure, son style et son contenu. Cette représentation du document permet de le voir comme un groupe structuré de nœuds et d'objets possédant différentes propriétés et méthodes. Fondamentalement, il relie les pages Web aux scripts ou langages de programmation.

## 1.2 Représentation générique du DOM

![Représentation historique du DOM](https://coopernet.fr/sites/default/files/inline-images/dom.gif)

## 1.3 Un exemple de construction du DOM par un navigateur à partir d'un fichier HTML

![dom](https://coopernet.fr/sites/default/files/inline-images/dom.png)

## 1.4 Principales méthodes
Il existe de nombreuses méthodes js pour accéder et modifier le DOM. Vous trouverez ci-dessous une sélection des propriétés indispensables à connaître par coeur :

### 1.4.1 Accéder à un élément en utilisant son identité
```js
const element = document.getElementById("id-de-l-element-html");
```

### 1.4.2 Supprimer un élément du DOM
```js
element.remove();
```

### 1.4.3 Créer un élément du DOM (ici une section)
```js
const section = document.createElement("section");
```

### 1.4.4 Ajouter un élément à l'arbre du document 
```js
window.document.body.appendChild(section);
```

### 1.4.5 Ajouter du texte à un élément du dom 
```js
section.innerText = "Texte à ajouter";
```

### 1.4.6 Ajouter un attribut 
Ici l'identité "news à l'élement stocké dans la const section
```js
section.setAttribute("id","news");
```

### 1.4.7 Récupérer la valeur d'un attribut 
```js
section.getAttribute("id");
```

## 1.5 Héritage des éléments du DOM

Imaginons que votre page html contienne un balise h2 ayant pour valeur de l'attribut id "h2". Pour récupérer une référence à cet élément du dom, vous pouvez vous y prendre comme ceci :
```js
let h2 = document.getElementById("h2");
```

Si vous êtes curieux, vous pouvez chercher à savoir de quel classe est issu cet élément :

```js
console.log("class de h2 : ", h2.constructor.name);// affiche class de h2 : HTMLHeadingElement
```

Si vous êtes très curieux, vous pouvez remonter la chaîne des prototypes pour savoir exactement de qui h2 hérite :
```js
while (h2) {
  console.log("class de h2 : ", h2.constructor.name);
  // Remonte la chaîne des prototypes
  h2 = Object.getPrototypeOf(h2);
}
```

[En vérifiant dans la documentation de Mozzilla](https://developer.mozilla.org/fr/docs/Web/API/HTMLHeadingElement), vous pouvez en apprende plus sur chacune des interfaces dont héritent les éléments du DOM :

L'interface **`HTMLHeadingElement`** représente les différents éléments d'en-tête [`<h1>` à `<h6>`](https://coopernet.fr/fr/docs/Web/HTML/Element/Heading_Elements). Elle hérite des méthodes et des propriétés de l'interface [`HTMLElement`](https://coopernet.fr/fr/docs/Web/API/HTMLElement).

EventTargetNodeElementHTMLElementHTMLHeadingElement

## 1.6 Sélection avancée des éléments du DOM

[document.querySelector(".open-close > h2")](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector); permet de récupérer **le premier élément** du DOM qui correspond au sélecteur passé en paramètre

[document.querySelectorAll(".open-close > h2");](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll) permet de **récupérer un tableau d'éléments** qui correspondent au sélecteur passé en paramètre

[elt.nextElementSibling](https://developer.mozilla.org/fr/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling) : permet de récupérer l'élément suivant l'élément elt

## 1.7 Exercice 1

Retrouvez à quelle interface du DOM appartiennent les propriétés suivantes :

- innerText
- focus
- insertBefore
- innerHTML
- classList
- addEventListener

Profitez-en pour les retenir, elles vous serviront dans votre vie de développeur front-end !

## 1.8 Exercice 2
Créer en js une balise "nav" qui contient 4 boutons avec les textes "Item 1", "Item 2", "Item 3", Item 4". Placez cet élément du dom dans le header.
Faites en sorte que le premier item soit de couleur rouge (utilisez querySelector puis la propriété "style.color").
Utilisez pour cela uniquement du javascript. Ré-utilisez la fonction createCustomElement ou createMarkup dont voici le code :
```js
/**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
   * @param {String} markup_name 
   * @param {domElement} parent 
   * @param {String} text 
   * @param {Object} attributes
   * @returns domElement
   */
function createMarkup(markupname, parent, text = "", attributes = {}) {
  const markup = document.createElement(markupname);
  markup.textContent = text;
  parent.appendChild(markup);
  for (key in attributes) {
   markup.setAttribute(key, attributes[key]);
  }
  return markup;
}
```
## Exercice 2 bis
En javascript, créez un texte (Loremipsum40) de 25% de largeur du body et qui va s'animer (se déplacer) pour aller jusqu'à la droite du body en 1 seconde et qui va revenir à gauche du body(position initiale) en 0.5 seconde. Utilisez pour cela la fonction createCustomElement que nous avons vu ensemble.
Une fois que cela fonctionne faites en sorte que la taille de la police soit de 2rem au bout d'une seconde et revienne à 1 rem une demi-seconde plus tard.
Je vous demande de ne pas utiliser de CSS.
## 1.9 Exercice 3

Améliorez la fonction createMarkup de façon à ce que l'on puisse ajouter plusieurs attributs. Le paramètre attribute sera remplacé par "attributes" et ne sera plus de type "Objet" mais de type "Array".

Pour finir, faites en sorte que cette fonction n'attende qu'un seul paramètre de type "Object"

## 1.10 Exercice 4
Le but de cet exercice est de créer un simple diaporama qui permet de faire défiler des images.
Voici comment agencer votre code :
- Créer une classe Slideshow
- le constructeur de cette classe attend 4 paramètres :
    - nb_images (le nombre d'images que va gérer le slideshow,
    - width (la largeur du slideshow),
    - height (la hauteur du slideshow),
    - speed (la vitesse de changement d'images en millisecondes).
- Dans le constructeur, vous initialisez 5 propriétés :
    - nb_images (number)
    - images (array)
    - width (number)
    - height (number)
    - speed (number)
- puis, toujours dans le constructeur, vous faites appel à trois méthodes
    - feedSs (// remplissage du tableau d'images "images")  
        Pour créer des images (élément du DOM "img"), vous utiliserez la méthode suivante :
        ```js
        createImage = function() {
        	  // création d'une image
	        	  const img = document.createElement("img");
        	  img.setAttribute("src",`https://picsum.photos/${this.width}/${this.height}?id=${Math.random()*1000}`);
        	  return img;
        }
```
        
        
    - render (rendu du slideshow)
    - animateSs(animation du slideshow)
- Pour l'animation, vous serez amené à utiliser soit setTimeout soit setInterval
