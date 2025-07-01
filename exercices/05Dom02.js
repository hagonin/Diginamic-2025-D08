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
// Création du paragraphe
const lorem = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores animi iure expedita placeat quae laudantium rem obcaecati iste nobis, provident sapiente assumenda impedit laboriosam saepe ducimus corporis esse vero dignissimos porro! Molestiae cupiditate ratione libero dicta eligendi deserunt eveniet earum.";
const p = createMarkup("p", document.body, lorem, { style: "width: 25%" });


const pTranslate = [
  // animation
  { transform: "translateX(0%)", offset: 0 }, //offset pour déterminer un pourcentage du temps "duration"
  { transform: "translateX(300%)", offset: 0.66 },
  { transform: "translateX(0%)", offset: 1 }
]


const pDuration = {
  // temporisation
  duration: 1500, // Il faut additionner les deux temps 1000 pour l'entrée et 500 pour la sortie
  iterations: 1,
  fill: "forwards", //temps d'arrêt lorsque p arrive en translate à 300%
}


p.animate(pTranslate, pDuration);