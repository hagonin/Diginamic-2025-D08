import { createMarkup, postTask } from './utils/utils.js';
export default class FormAddTask {
  constructor() {


    // Affichage des éléments du DOM
    this.formElt = this.render();

    // Gestion des événements
    this.manageEvents();
  }
  render() {
    const form = createMarkup("form", document.body, "", { class: "container my-4" });
    const div = createMarkup("div", form, "", { class: "d-flex align-items-center gap-3" });
    const label = createMarkup("label", div, "Nom de la tâche", { for: "task", class: "" });
    const input = createMarkup("input", div, "", { type: "text", id: "task", class: "form-control w-25" });
    const buttonValidate = createMarkup("button", div, "Ajouter une tâche", { class: "btn btn-success" });
    return {
      form,
      input
    };
  }
  manageEvents() {
    this.formElt.form.addEventListener("submit", async (event) => {
      event.preventDefault();
      // appel du serveur
      const addedTask = await postTask({ title: this.formElt.input.value, done: false });
      // création d'un événement custom
      const eventAddTask = new CustomEvent("addTask", {
        detail: addedTask,
      });
      document.dispatchEvent(eventAddTask);

      this.formElt.input.value = "";
    })
  }
}