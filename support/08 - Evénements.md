![[diginamic_logo_3-02.png]]
- [[#1 Evénements|1 Evénements]]
	- [[#1 Evénements#1.1 Liste des événements|1.1 Liste des événements]]
	- [[#1 Evénements#1.2 Exemple|1.2 Exemple]]
	- [[#1 Evénements#1.3 Objet événement|1.3 Objet événement]]
		- [[#1.3 Objet événement#1.3.1 Exemple de récupération de l'objet événement|1.3.1 Exemple de récupération de l'objet événement]]
		- [[#1.3 Objet événement#1.3.2 Exemple de passage de 2 paramètres à la fonction qui est déclenchée au click sur h1|1.3.2 Exemple de passage de 2 paramètres à la fonction qui est déclenchée au click sur h1]]
	- [[#1 Evénements#1.4 addEventListener|1.4 addEventListener]]
	- [[#1 Evénements#1.5 Gestion des événements clavier|1.5 Gestion des événements clavier]]
		- [[#1.5 Gestion des événements clavier#1.5.1 Exemple|1.5.1 Exemple]]
	- [[#1 Evénements#1.6 Exercices|1.6 Exercices]]
		- [[#1.6 Exercices#1.6.1 Paragraphes Lorem ipsum|1.6.1 Paragraphes Lorem ipsum]]
		- [[#1.6 Exercices#1.6.2 Liste de tâches|1.6.2 Liste de tâches]]

# 1 Evénements
Les événements permettent de déclencher une fonction après un ... événement ! Il peut s'agir classiquement d'un clic sur un bouton.
## 1.1 Liste des événements
Voici la liste des événements principaux, ainsi que les actions à effectuer pour qu'ils se déclenchent :

| Nom de l'événement | Action pour le déclencher                                                            |
| ------------------ | ------------------------------------------------------------------------------------ |
| `click`            | Cliquer (appuyer puis relâcher) sur l'élément                                        |
| `submit`           | Soumission du formulaire                                                             |
| `mouseover`        | Faire entrer le curseur sur l'élément                                                |
| `mouseout`         | Faire sortir le curseur de l'élément                                                 |
| `mousedown`        | Appuyer (sans relâcher) sur le bouton gauche de la souris sur l'élément              |
| `mouseup`          | Relâcher le bouton gauche de la souris sur l'élément                                 |
| `mousemove`        | Faire déplacer le curseur sur l'élément                                              |
| `keydown`          | Appuyer (sans relâcher) sur une touche de clavier sur l'élément                      |
| `keyup`            | Relâcher une touche de clavier sur l'élément                                         |
| `keypress`         | Frapper (appuyer puis relâcher) une touche de clavier sur l'élément                  |
| `focus`            | « Cibler » l'élément                                                                 |
| `blur`             | Annuler le « ciblage » de l'élément                                                  |
| `change`           | Changer la valeur d'un élément spécifique aux formulaires (`input`,`checkbox`, etc.) |
| `input`            | Taper un caractère dans un champ de texte                                            |
| `select`           | Sélectionner le contenu d'un champ de texte (`input`,`textarea`, etc.)               |

## 1.2 Exemple
```js
// Récupération d'un élément du DOM
let h1 = window.document.getElementById("h1");
/**
 * Gestion de l'événement click sur h1
 * On assigne à la propriété "onclick"
 * une méthode appellée lors d'un click sur
 * l'objet en question.
 * Le "this" devient alors l'objet en question
 */
h1.onclick = function() {
  console.log("click sur le h1");
  console.log(this);
};
```

## 1.3 Objet événement

l'objet événement (qui correspond à l['interface Event](https://developer.mozilla.org/fr/docs/Web/API/Event)) est automatiquement transmis aux gestionnaires d'événements pour fournir des fonctionnalités et des informations supplémentaires. Une interface définit  les méthodes à implémenter, elle permet de définir un contrat : chaque classe implémentant l’interface sera tenue d’implémenter les méthodes de l’interface. [Voir les méthodes et propriétés de l'interface Event](https://developer.mozilla.org/fr/docs/Web/API/Event#Propri.C3.A9t.C3.A9s).

### 1.3.1 Exemple de récupération de l'objet événement
```js
// gestion de l'événement click sur h1
h1.onclick = function(e) {
  console.log("click sur le h1");
  console.log(e.target);
};
```
### 1.3.2 Exemple de passage de 2 paramètres à la fonction qui est déclenchée au click sur h1
```js
h1.onclick = function(e) {
  manageClick(e,"Hello");
};
const manageClick = function(e,j){
  console.log("click sur le h1");
  console.log(e.target);
  console.log(j);
}
```
## 1.4 addEventListener
[Documentation](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener) 
La méthode addEventListener présente deux avantages principaux par rapport à l'utilisation de propriétés de type "onclick" :

1. elle permet à un élément du dom d'écouter plusieurs événements de même type
2. elle attend un troisième paramètre qui permet de gérer plus finement les événements

La méthode addEventListener est appelée depuis une cible (un élément du dom en général) et attend trois paramètres :

1. le type d'évenement (click, hover, ...)
2. une fonction à appeler chaque fois que l'événement spécifié dans le premier argument est envoyé à la cible
3. historiquement, le troisième paramètre de addEventListener était un boolean qui indiquait s'il fallait ou non utiliser la "capture". Cette dernière peut être définie comme la [phase déscendante de la propagation de l'événement en opposition à la phase montante ou "bubbling phase"](https://developer.mozilla.org/fr/docs/Web/API/Event/eventPhase) .   
    ![js event capture bubbling](https://coopernet.fr/sites/default/files/inline-images/eventCaptureBubbling.png)  
     [Plutôt que d'ajouter davantage de paramètres à la fonction, le troisième paramètre a été changé en un objet pouvant contenir diverses propriétés définissant les valeurs des options pour configurer le processus de suppression de l'écouteur d'événement.](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener#D%C3%A9tection_de_la_prise_en_charge_des_options_en_toute_s%C3%A9curit%C3%A9)

Exemple de code pour démontrer comment la capture peut être utilisée pour intercepter et potentiellement bloquer des événements.

**HTML**
```html
<div id="parent">
  <div id="child">Click me</div>
</div>
```
```js
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

// Ajout d'une phase de capture descendante au parent
parent.addEventListener(
  "click",
  function(event) {
    console.log("Parent clicked");
    // Empêche l'événement d'atteindre l'enfant
    event.stopPropagation();
  },
  true// option pour la capture (phase descendante) à vrai 
); 

// Ecouteur classique (phase montante) sur l'enfant
child.addEventListener("click", function(event) {
  console.log("Child clicked");
});


```
## 1.5 Gestion des événements clavier
référence : [https://developer.mozilla.org/fr/docs/Web/API/Element/keydown_event](https://developer.mozilla.org/fr/docs/Web/API/Element/keydown_event)
L'événement `keydown` est déclenché lorsque l'utilisatrice ou l'utilisateur appuie sur une touche du clavier.

### 1.5.1 Exemple 
Imaginons que nous ayons une liste d'images cliquables grâce à la fonction addEventListner. La bonne pratique pour rendre cette fonctionnalité accessible sera de :
1. rendre ces images "focusables" via la touche tab
2. donner une alternative à l'événement "click" en utilisant l'événement "keydown" et en vérifiant que c'est bien  la touche "Enter" qui a été la dernière utilisée.
## 1.6 Exercices
### 1.6.1 Paragraphes Lorem ipsum
En js, ajouter un bouton et une section dans le body. Le bouton aura pour intitulé : "Ajouter un paragraphe". Au click sur ce bouton, un nouveau paragraphe sera ajouté comme dernier enfant de la section qui comprendra tous les paragraphes. Chaque paragraphe aura "Lorem ipsum ..." comme texte.
### 1.6.2 Liste de tâches
En js, ajouter un formulaire dans le body comprenant une zone de texte (input) et un bouton "Ajouter une tâche". Au click sur ce bouton, et après avoir renseigné l'input du formulaire  (`<input type="text"> `), une tâche (ex : acheter du pain ) apparaîtra juste sous le formulaire et dans une section. 
Chaque tâche est crée avec la balise section et permettra d'afficher côte à côte :
- l'intitulé de la tâche,
- un bouton pour valider la tâche (cette dernière sera alors barrée, un bouton "invalider" remplace le bouton "valider" et  toute la tâche est déplacée en fin de section qui entoure l'ensemble des tâches
- un bouton pour supprimer la tâche qui déclenchera au click une "pop-up" grâce à la méthode "confirm()"  pour que l'internaute confirme son choix de suppression. En cas de confirmation, la section "tâche" correspondante sera supprimée.
![liste taches](https://coopernet.fr/sites/default/files/inline-images/listeTaches.png)