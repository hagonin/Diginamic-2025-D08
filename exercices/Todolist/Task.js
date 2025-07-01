import { createMarkup } from './utils.js';
export default class Task {
  constructor(title, done = false) {
    this.title = title;
    this.done = done;

    // Affichage des éléments du DOM
    this.render();
  }
  render() {
    const section = createMarkup("section", document.body);
    const h2 = createMarkup("h2", section, this.title);
    const buttonValidate = createMarkup("button", section, "Valider");
    const buttonDelete = createMarkup("button", section, "Supprimer");
  }
}