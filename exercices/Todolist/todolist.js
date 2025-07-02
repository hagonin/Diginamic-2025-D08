import Task from "./Task.js";
import FormAddTask from "./FormAddTask.js";
import { createMarkup, loadTasks } from './utils/utils.js';

// Création et affichage du formulaire
new FormAddTask();

class Todolist {
  constructor() {
    this.tasks = [];

    this.sectionTasks = this.renderMainElements();
    this.setUp();

    this.manageEvents();
  }
  manageEvents() {
    // abonnement à la modification d'une tâche
    document.addEventListener("patchTask", (event) => {
      console.log(event.detail.id)
      this.patchTasks(event.detail.id);
      this.renderTasks();
    });
    // abonnement à la suppression d'une tâche
    document.addEventListener('deleteTask', (event) => {
      console.log("Tâche à supprimer dans la todolist : ", event.detail.id);
      this.deleteTask(event.detail.id);
      this.renderTasks();

    });
    // abonnement à l'ajout d'une tâche
    document.addEventListener('addTask', (event) => {
      console.log("Tâche à ajouter dans la todolist : ", event.detail);
      this.tasks.push(event.detail);
      this.renderTasks();
    });
  }
  async setUp() {

    this.tasks = await loadTasks();
    this.renderTasks();
  }
  renderMainElements() {
    const sectionTasks = createMarkup("section", document.body, "", { class: "container" });
    return sectionTasks;
  }
  renderTasks() {
    this.sectionTasks.innerHTML = "";
    this.tasks.sort((a, b) => a.done - b.done).forEach(task => {
      new Task(task, this.sectionTasks);
    })
  }
  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  patchTasks(taskId) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.done = !task.done; // Toggle : true devient false, false devient true
    }

  }
  loadTasks() {
    return fetch(this.tasksUrl)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else throw new Error("Pp dans fetch get :" + response.status)
      })
      .then(tasks => {
        console.log(`tasks`, tasks);
        return tasks;
      })
      .catch(error => {
        console.error("Erreur attrapée dans loadTasks", error)
      })
  }
}
new Todolist();

