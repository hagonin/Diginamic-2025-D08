import { createMarkup } from './utils.js';
export default class FormAddTask {
  constructor() {


    // Affichage des éléments du DOM
    this.formElt = this.render();

    // Gestion des événements
    this.manageEvents();
  }
  render() {
    const form = createMarkup("form", document.body);
    const label = createMarkup("label", form, "Nom de la tâche", { for: "task" });
    const input = createMarkup("input", form, "", { type: "text", id: "task" });
    const buttonValidate = createMarkup("button", form, "Ajouter une tâche");
    return form;
  }
  manageEvents() {
    this.formElt.addEventListener("submit", (event) => {
      event.preventDefault();
    })
  }
}