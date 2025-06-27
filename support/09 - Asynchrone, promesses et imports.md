![[diginamic_logo_3-02.png]]
- [[#1 Asynchrone|1 Asynchrone]]
		- [[#1.1.1 "Fil d'éxécution" ou thread|1.1.1 "Fil d'éxécution" ou thread]]
- [[#2 Promesse|2 Promesse]]
	- [[#2 Promesse#2.1 Ancienne méthode : via des callback|2.1 Ancienne méthode : via des callback]]
	- [[#2 Promesse#2.2 Avec les promises|2.2 Avec les promises]]
	- [[#2 Promesse#2.3 Le chaînage de promesses|2.3 Le chaînage de promesses]]
	- [[#2 Promesse#2.4 Async et await|2.4 Async et await]]
		- [[#2.4 Async et await#2.4.1 async|2.4.1 async]]
		- [[#2.4 Async et await#2.4.2 await|2.4.2 await]]
		- [[#2.4 Async et await#2.4.3 Exemple de code|2.4.3 Exemple de code]]
- [[#3 Import et exports avec les Modules|3 Import et exports avec les Modules]]
	- [[#3 Import et exports avec les Modules#3.1 Exports et imports multiples|3.1 Exports et imports multiples]]

# 1 Asynchrone
En javascript, la notion d'asynchronisme est omniprésente. Que ce soit pour la gestion des événements ou la récupération de données ou simplement avec des méthodes comme setTimeout, il est pratiquement impossible d'y échapper !
Premier exemple
```js
console.log('avant');
setTimeout(() => {console.log('affiché après 2 secondes');},2000);
console.log('après');
```
Vous constatez que le message "affiché après 2 secondes" s'affiche en dernier. On peut en conclure que la méthode setTimeout est "non bloquante", c'est à dire qu'il n'est pas nécessaire d'attendre son résultat pour passer à l'exécution de la ligne suivante. On dit alors qu'elle est **asynchrone.**
### 1.1.1 "Fil d'exécution" ou thread
Cela va nous permettre d'introduire la notion de "fil d'éxécution" ou thread. Pour comprendre cette notion, on fait souvent la comparaison avec un serveur dans un restaurant : lorsque vous commandez, le serveur part en cuisine, passe la commande et retourne en salle pour prendre d'autres commandes. On comprend que la commande est "non bloquante" ou asynchrone, c'est à dire que le serveur n'a pas besoin d'attendre que le plat soit prêt pour continuer son travail. Quand votre plat sera prêt, c'est toujours le même serveur qui vous servira votre plat. On dit alors que le service est mono-thread en opposition à multi-thread.
Il en est  de même pour le javascript classique qui est **mono-thread**, ce qui signifie qu'il n'y a qu'**une seule pile d'exécution**.
# 2 Promesse
[Article pour bien comprendre les promesses.](https://frank.taillandier.me/2017/03/23/comprendre-les-promesses-en-javascript/)
L'objet Promise , apparu avec ES2015; est utilisé pour réaliser des traitements de façon asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais ! 
Une promesse a 3 états : 

- pending (en cours)
- resolve (résolue)
- reject (rejetée)

## 2.1 Ancienne méthode : via des callback
Pour ce premier exemple, j'ai choisi de ne pas utiliser de fonction asynchrone (via setTimeout par exemple) mais  une fonction qui retourne un résultat aléatoire dans le but de simplifier le code et donc l'explication.
```js
function getToken(s, f) {
  if (Math.random() > 0.5) {
    s("XCOE4dod340CEESee7");
  } else f(new Error("Pas plus de token que de beurre à la roulante"));
}

const success = function(msg) {
  console.log(msg);
};

const failure = function(err) {
  console.error(err);
};

getToken(success, failure);
```
## 2.2 Avec les promises
La principale différence réside dans le fait que le résultat, une réussite ou un échec est renvoyé respectivement à la méthode "then" ou à la méthode "catch" :
```js
getToken = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        const token = "qsdfEDLSoie5d8899;dEDd"
        console.log('Token ok');
        resolve(token);// renvoie le résultat à la méthode "then()"
      } else reject(new Error("Pas de chance, vous n'avez pas pu obtenir de token"));// renvoie le résultat à la méthode "catch"
    }, 2000)
  })
}

getToken()
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.error("Erreur: ", error.message);
  });
```
## 2.3 Le chaînage de promesses
On peut avoir besoin d'enchaîner les appels de fonction suivant le résultat d'une opération incertaine. Nous simulons ci dessous un processus dans lequel il faut d'abord obtenir un token avant de pouvoir obtenir des infos sur un utilisateur. Il faudra que la méthode "then" renvoie une autre promesse afin de pouvoir les chaîner.
```js
getToken = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        const token = "qsdfEDLSoie5d8899;dEDd";
        console.log("Token ok");
        res(token);
      } else
        rej(new Error("Pas de chance, vous n'avez pas pu obtenir de token"));
    }, 2000);
  });
};

getUser = token => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log("User ok", token);
        resolve({ id: 1, token: token });
      } else reject(new Error("Pas d'utilisateur"));
    }, 2000);
  });
};

getToken()
  .then(value => {
    console.log("value dans le premier then : ", value);
    // notez ici que "then" doit renvoyer une promesse pour que l'on puisse "chaîner"
    return getUser(value); 
  })
  .then(value => {
    console.log("value dans le deuxième then : ", value);
  })
  .catch(error => {
    console.error("Erreur: ", error.message);
  });
```
## 2.4 Async et await
La déclaration **async function** et le mot clé await sont des « sucres syntaxiques » apparus avec ES2017. Ils permettent de retrouver une syntaxe plus classique et donc plus lisibles. 
### 2.4.1 async
Le mot clé **async** devant une déclaration de fonction la transforme en fonction asynchrone. Elle va retourner une promesse. Si la fonction retourne une valeur qui n’est pas une promesse, elle sera automatiquement comprise dans une promesse.

La promesse sera résolue avec la valeur renvoyée par la fonction asynchrone ou  sera rompue s’il y a une exception non interceptée émise depuis la fonction asynchrone.

### 2.4.2 await
Le mot clé await est valable uniquement au sein de fonctions asynchrones définies avec async.
await interrompt  l’exécution d’une fonction asynchrone tant qu’une promesse n’est pas résolue ou rejetée.
### 2.4.3 Exemple de code
**Exemple 1 : Réutilisons les fonctions getToken et getUser préalablement définies avec async et await :**

```js
async function getTokenUser() {
      try {
        const token = await getToken(); // bloque l'exécution jusqu'à obtention de la réponse de la promesse
        const user = await getUser(token);
        console.log('Token et user : ', token, user);

      } catch (error) {
        console.log('Erreur attrapée : ', error);
      }
  }
  getTokenUser();
```

**Exemple 2 : même fonction en utilisant async et await puis then()**
```js
// Promesse en utilisant async et await
async function getUniversities() {
  try {
    const response = await fetch("http://universities.hipolabs.com/search?country=Italy");
    const universities = await response.json();
    console.log('universités  : ', universities);

  } catch (error) {
    console.error('Erreur attrapée : ', error);
  }

}
// Promesse en utilisant then
function thenGetUniversities() {
  fetch("http://universities.hipolabs.com/search?country=Italy")
  .then(response => {
    return response.json();
  })
  .then(universities => {
    console.log('universités  : ', universities);
  })
  .catch(error => {
    console.error('Erreur attrapée : ', error)
  })
}
```
# 3 Import et exports avec les Modules
Depuis ES6, on peut gérer les dépendances entre fichiers avec les mots clés "import" et "export"
Ex
```js
export default class Person {
  constructor(name) {
    this.name = name;
  }
  present() {
    console.log("hello, I'm " + this.name);
  }
}
```
De cette façon, dans un autre script, on pourra avoir :
```js
import Person from "./Person.js";
const p = new Person("Bob")
```
Attention, il faudra penser à appeler votre js en utilisant l'attribut type="module"
```html
<script type="module" src="test.10-module.js">
```
## 3.1 Exports et imports multiples
Prenons l'exemple d'un fichier consts.js qui définit les deux constantes pi et nb_or :
```js
export const pi = 3.14159265359;
export const nb_or = 1.61803398875;
```
Il existe deux syntaxes pour importer ces constantes :
```js
import { pi, nb_or } from "./consts.js";
console.log("pi : ", pi);
console.log("nb_or : ", nb_or);
```
ou
```js
import * as consts from "./consts.js";
console.log("pi : ", consts.pi);
console.log("nb_or : ", consts.nb_or);
```
