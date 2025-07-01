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
// Création d'un header
const header = createMarkup("header", document.body);
// Création d'une nav
const nav = createMarkup("nav", header);

for (let i = 0; i < 4; i++) {
  const button = createMarkup("button", nav, `item ${i + 1}`);
  if (i == 0) button.style.color = "red";
}