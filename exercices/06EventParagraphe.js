// Import de createMarkup
import { createMarkup } from './../tests/utils/utils.js';

const section = createMarkup("section", document.body);

const button = createMarkup("button", section, "Ajouter un paragraphe");

// Gestion de l'événement click sur le bouton
button.addEventListener("click", () => {
  createMarkup("p", section, "Lorem ipsum ...");
});
