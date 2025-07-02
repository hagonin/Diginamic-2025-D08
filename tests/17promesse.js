const getToken = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // cas favorable
      if (Math.random() > 0.5) {
        resolve("SDFSIELSDFPSDPPGER");
      }
      else {
        reject("Problème pour obtenir le token")
      }
    }, 1000)
  });
}
const getUser = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // cas favorable
      if (Math.random() > 0.5) {
        resolve({ name: "Bob", id: 158 });
      }
      else {
        reject("Problème pour obtenir l'utilisateur")
      }
    }, 1000)
  });
}
// Appel de la fonction getToken qui renvoie une promesse
getToken()
  .then(function (token) { return getUser(token); })
  .then(user => {
    console.log(`Utilisateur récupéré `, user);
  })
  .catch((error) => { console.error(`Erreur attrapée`, error); });

// Async et await
/* async function fetchData() {
  try {
    const token = await getToken();
    console.log(`Token reçu`, token);
    // Promesse tenue
    const user = await getUser(token);
    console.log(`Utilisateur récupéré `, user);
  } catch (error) {
    console.error(`Erreur attrapée`, error);
  }
}
fetchData(); */
