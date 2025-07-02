// Récupérer les taches
const endpointUrl = 'http://localhost:3000/tasks';
fetch(endpointUrl)
  .then(response => {
    if (response.status == 200) {
      console.log(response.status);
      return response.json();
    }
    else throw new Error("Problème de statut de la réponse : ", response.status);
  })
  .then(tasks => {
    console.log(`tasks récupérés : `, tasks);
  })
  .catch(error => {
    console.error("Erreur attrapée : ", error)
  })

const buttonAddTask = document.getElementById("add-task");
buttonAddTask.addEventListener("click", () => {
  // Fetch avec la méthode post
  fetch(endpointUrl,
    {
      method: "POST",
      body: JSON.stringify({ "title": "Sortir les poubelles", "done": false })
    }
  )
    .then(response => {
      console.log(`response.status`, response.status);
      if (response.status == 201) {
        console.log(response.status);
        return response.json();
      }
      else throw new Error("Problème de statut de la réponse : ", response.status);
    })
    .then(task => {
      console.log(`task : `, task);
    })
    .catch(error => {
      console.error("Erreur attrapée : ", error)
    })
})

const buttonDeleteTask = document.getElementById("delete-task");


buttonDeleteTask.addEventListener("click", () => {
  // Fetch avec la méthode post
  fetch(endpointUrl + '/1',
    {
      method: "DELETE"
    }
  )
    .then(response => {
      console.log(`response.status`, response.status);
      if (response.status == 200) {
        console.log(response.status);
        return response.json();
      }
      else throw new Error("Problème de statut de la réponse : ", response.status);
    })
    .then(task => {
      console.log(`task : `, task);
    })
    .catch(error => {
      console.error("Erreur attrapée : ", error)
    })
})