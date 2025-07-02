import Task from "./Task.js";
import FormAddTask from "./FormAddTask.js";

// Création et affichage du formulaire
new FormAddTask();
// Test de création d'une tâche
new Task("Faire la vaisselle");
new Task("Faire les devoirs");

// Création d'un classe Todolist qui va utiliser FormAddTask et Task

// La classe Todolist doit avoir la propriété tasks qui est un tableau de tâches vide par défaut
const task = [
  {
    "id": "2",
    "title": "Nouveau titre de tâche après PATCH 698.3671742487269",
    "done": true
  },
  {
    "id": "cc26",
    "title": "Sortir les poubelles",
    "done": false
  }
]

// Ce tableau de tâches va être alimenté par json server

// Le tableau de tâches doit permettre de créer les tâches (instanciation de Task) dès qu'un changement est opéré

// La classe FormAddTask doit permettre d'ajouter une tâche persistante via fetch avec la méthode POST
// FormAddTask va également créer un nouvel événement custom (https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)

// La classe Todolist va réagir à l'événement custom émis par FormAddTask en modifiant tasks et donc en rappelant la méthode qui crée les tâches (Task) pour afficher toutes les tâches dont la nouvelle tâche

// La classe Task sert à afficher chaque tâche mais également à gérer les événements : supprimer un tâche ou modifier une tâche lors du click sur le bouton "valider / invalider". Tous ces événements doivent envoyer un requête via fetch (DELETE ou PATCH) et créer un événement custom qui sera écouté par Todolist.
