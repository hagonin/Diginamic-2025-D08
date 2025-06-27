![[images/diginamic_logo_3-02.png]]

# 1 Fetch
La méthode fetch() permet de récupérer des ressources à travers le réseau de manière asynchrone.

Elle utilise les "promise". La réponse au "fetch" est un [objet stream](https://streams.spec.whatwg.org/), sur lequel on peut appeler les méthodes json() ou text() qui retournent eux-même une promesse.
Ex :
```js
fetch("https://www.coopernet.fr/session/token")
  .then(function(response) {
    if (response.status !== 200) { // si ça c'est mal passé
      throw new Error("Le serveur n'a pas répondu correctement");
    } else return response.text(); // renvoie une promesse
  })
  .then(function(data) { // data correspond au retour du résolve (ici deux lignes au dessus)
    console.log("Token récupéré : ", data);
  })
  .catch(error => {console.log("Erreur attrapée : ", error)});
```
L'image ci-dessous tente d'expliquer comment les données sont passées de puis la méthode "then" vers une autre méthode "then" ou vers une catpure d'erreur (catch).
![fetch promise](https://coopernet.fr/sites/default/files/inline-images/fetch_promise_1.png)

## 1.1 Un exemple complet
 ```js
 getUsers = (callbackSuccess, callbackFailed) => {
    // création de la requête
    console.log("Dans getUsers de coopernet.");
    return fetch(this.url_server + "memo/users/", {
      // permet d'accepter les cookies ?
      credentials: "same-origin",
      method: "GET",
      headers: {
        "Content-Type": "application/hal+json",
        "X-CSRF-Token": this.token,
        "Authorization": "Basic " + btoa(this.user.uname + ":" + this.user.upwd) // btoa = encodage en base 64
      }
    })
      .then(response => {
        console.log("data reçues dans getUsers avant json() :", response);
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse ", response);
      })
      .then(data => {
        console.log("data reçues dans getTerms :", data);
        if (data) {
          // ajout de la propriété "open" à "false" pour tous les termes de
          // niveau 1
          //data.forEach()
          return data;
        } else {
          throw new Error("Problème de data ", data);
        }
      })
      .catch(error => { console.error("Erreur attrapée dans getUsers", error); });
  };
```

## Exercice 1

Utilisez le endpoint de "universities.hipolabs.com" dont voici un exemple :

http://universities.hipolabs.com/search?country=Italy
### Partie 1
- Vous créez un formulaire qui permet de choisir un pays (France, Italie, Espagne, ...)
- A la validation du formulaire, vous utilisez la méthode "fetch" pour interroger l'API.
- Vous stockez les résultats dans une variable univs (array).
- Vous affichez dans l'interface le nombre de résultats.
- A partir de la variable "univs", vous créez des instances de University qui affichent les résumés d'université (Nom, site web) dans une grille bootstrap de 4 colonnes. Chaque résultat est entouré d'une bordure avec des arrondis.

### Partie 2

Une fois le pays choisi, un autre formulaire apparait et permet de "filtrer" les résultas par nom. Par exemple, si vous entrez "montp", vous ne devriez voir plus que les universistés dont le nom contient "montp".

- Attention à gérer les majuscules et minuscules et si vous y arrivez, les accents.
- Faites en sorte que le filtre ne commence qu'après avoir entré au moins 3 caractères
- Faites en sorte que l'on puisse "revenir" en arrière, c'est à dire par exemple, revenir à "mont" si on a entré "montk"
- Utilisez la [méthode includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

## Exercice 2
Inscrivez-vous sur [https://openweathermap.org/](https://openweathermap.org/ "https://openweathermap.org/").
Faites un formulaire afin d'écire le nom de la ville dont vous voulez connaître la météo.
Utilisez cette api https://openweathermap.org/api/geocoding-api afin de recevoir la longitude et latitude de la ville.
Récuperez les données de cette api https://openweathermap.org/current et affichez :

- L'icône.
- Le nom de la ville.
- La description du temps en français.
- Les températures actuelle, minimal et maximal, en celsius.

## Exercice 3 - Mise en place d'un serveur local "json-server"

Références :

- [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)
- [https://bobbyhadz.com/blog/npm-command-not-found-json-server](https://bobbyhadz.com/blog/npm-command-not-found-json-server)

Installer json-server
```shell
npm install -g json-server
```
Créer le répertoire json-server **en dehors de votre répertoire où vous allez créer votre application**
Se rendre sur le répertoire (cd json-server)
Lancer le serveur :
```shell
json-server --watch db.json
```
Créer un fichier db.json : 
```json
{
  "tasks": [
    { "id": 1, "label": "Faire le ménage", "done": "false" }
  ]
}
```

Lancer la commande suivante
```shell
npx json-server --watch db.json --port 3000
```

Tester l'url suivante dans votre navigateur: http://localhost:3000/posts

Les routes utilisables :
Requête Http    Route  
GET    /posts  
GET    /posts/1  
POST    /posts  
PUT    /posts/1  
PATCH    /posts/1  
DELETE    /posts/1  
Pas besoin de préciser l'id dans le corps de votre requête POST / PUT / PATCH
POST / PUT / PATCH doivent inclure Content-Type: application/json dans leur header de requête.
Exemple de requête GET : 
```js
fetch("http://localhost:3000/posts")
    .then(response => {
      console.log(`response status`, response.status);
      return response.json();
    })
    .then(data => {
      console.log(`data : `, data);
    })
    .catch(error => {
      console.log(`erreur attrapée : `, error);
    })
```
  
Exemple de requête POST : 
```js
fetch("http://localhost:3000/posts",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ "title": "Simon", "author": "Yvan" })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
```

