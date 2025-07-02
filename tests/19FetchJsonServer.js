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