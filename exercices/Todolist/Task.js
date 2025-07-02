import { createMarkup, deleteTask, patchTask } from './utils/utils.js';
export default class Task {
  constructor(task, sectionTasks) {
    this.title = task.title;
    this.done = task.done;
    this.id = task.id;

    // Affichage des éléments du DOM
    this.domElts = this.render(sectionTasks);

    this.manageEvents();
  }
  manageEvents() {
    this.domElts.buttonDelete.addEventListener("click", (event) => {
      console.log(`button suppression cliqué`);
      // Faire un fetch pour supprimer la tâche sur le serveur
      deleteTask(this.id);

      // Si la tâche est bien supprimée sur le serveur, j'emets un événement custom (deleteTask) qui indique l'id de la tâche qui vient d'être supprimée
      const eventDeleteTask = new CustomEvent("deleteTask", {
        detail: {
          id: this.id,
        },
      });
      document.dispatchEvent(eventDeleteTask);
    });
    this.domElts.buttonValidate.addEventListener("click", (event) => {
      console.log(`bouton validé cliqué`);
      // Faire un fetch pour patcher la tâche sur le serveur
      patchTask(this.id, { done: !this.done });


      // Si la tâche est bien modifiée sur le serveur, j'emets un événement custom (deleteTask) qui indique l'id de la tâche qui vient d'être supprimée
      const eventPatchTask = new CustomEvent("patchTask", {
        detail: {
          id: this.id,
        },
      });
      document.dispatchEvent(eventPatchTask);
    })
  }
  render(sectionTasks) {
    const section = createMarkup("section", sectionTasks, "", { class: "d-flex align-items-center my-3" });
    const h2 = createMarkup("h2", section, this.title);
    h2.style.textDecoration = this.done ? "line-through" : "none";
    const buttonValidate = createMarkup("button", section, (this.done) ? "Invalider" : "Valider", { class: "btn btn-success m-2" });
    const buttonDelete = createMarkup("button", section, "Supprimer", { class: "btn btn-danger m-2" });

    return {
      buttonValidate,
      buttonDelete
    }
  }
}