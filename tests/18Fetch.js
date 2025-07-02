/* fetch("https://www.coopernet.fr/session/token")
  .then(response => {
    console.log(`statut de la réponse`, response.status);
    if (response.status == 200) return response.text();
    else throw new Error("Pb lors de la récupération du token " + response.status)
  })
  .then(token => {
    console.log(`token récupéré : `, token);
  })
  .catch(error => { console.error(`Erreur attrapée`, error); }) */

// Avec async et await
(async function () {
  try {
    const response = await fetch("https://www.coopernet.fr/session/token");
    if (response.status == 200) {
      const token = await response.text();
      console.log(`token : `, token);
    } else throw new Error("Pb lors de la récupération du token " + response.status)
  } catch (error) {
    console.error(`Erreur attrapée `, error);
  }
})();
