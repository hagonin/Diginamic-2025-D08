![[diginamic_logo_3-02.png]]
- [[#1 Liens utiles|1 Liens utiles]]
- [[#2 Introduction|2 Introduction]]
- [[#3 **Observable**|3 **Observable**]]
- [[#4 Hot Observable vs cold Observable|4 Hot Observable vs cold Observable]]
- [[#5 **Subscription**|5 **Subscription**]]
- [[#6 **Operators**|6 **Operators**]]
- [[#7 **Observer**|7 **Observer**]]
	- [[#7 **Observer**#7.1 **Subject**|7.1 **Subject**]]
- [[#8 **Schedulers**|8 **Schedulers**]]
- [[#9 Erreurs|9 Erreurs]]
	- [[#9 Erreurs#9.1 Déclencher une erreur|9.1 Déclencher une erreur]]
	- [[#9 Erreurs#9.2 Intercepter une erreur|9.2 Intercepter une erreur]]
	- [[#9 Erreurs#9.3 Réessayer:|9.3 Réessayer:]]

# 1 Liens utiles
Références :
- https://www.learnrxjs.io/
- https://www.youtube.com/watch?v=TrDqaABq-UY&ab_channel=DevoxxFR

Code : https://github.com/yvandouenel/rxjsTypeScript

# 2 Introduction
RxJS est une bibliothèque de programmation réactive utilisant des "observables", pour faciliter la composition de code asynchrone ou basé sur les "callbacks".

ReactiveX a été conçu pour gérer de manière idéale les séquences d'événements. 

Les concepts essentiels de RxJS qui résolvent la gestion des événements asynchrones sont :

# 3 **Observable** 

Un observable représente l'idée d'une collection invocable de valeurs ou d'événements futurs. On peut voir un observable comme un flux de données qui vont arriver séquentiellement de façon asynchrone ou pas. Un observable émet trois types de notifications :

- **next :** émission d'une nouvelle valeur,
- **error :** erreur qui termine l'observable, 
- **complete :** termine l'observable sans erreur.

**Exemple de création d'un observable directement en instanciant la classe Observable :**
```js
import { Observable } from 'rxjs';
const myObservable = new Observable((observer) => {
  let count = 0;
  const timer = setInterval(() => {
    observer.next(count);
    count++;
    if (count === 10) {
      observer.complete();
      clearInterval(timer);
    }
  }, 1000);
});
```


On peut créer des observables depuis :

- [un événement](https://www.learnrxjs.io/learn-rxjs/operators/creation/fromevent) ,
- [la fonction fetch](https://rxjs.dev/api/fetch/fromFetch),
- un tableau,
- une chaîne de caractères,
- une promesse,
- ...

Exemple de création d'un observable depuis la fonction fetch (extrait d'une classe) :
```js
import { fromFetch } from "rxjs/fetch";
import { switchMap, catchError, shareReplay } from "rxjs/operators";
import { Observable, of } from "rxjs";

export class Data {
...
  buildRequestObservale() {
    return fromFetch("http://localhost:3000/books").pipe(
      // switchMap : la seule réponse qui nous intéresse est la dernière
      switchMap((response) => {
        if (response.ok) {
          console.log(`Reponse ok`);
          return response.json()
        }
        else return of({ error: true, message: `Error ${response.status}` })
      }),
      // shareReplay va renvoyer le dernier résultat sans que la requête soit à nouveau exécutée
      shareReplay(1),
      catchError((err) => {
        console.error(err)
    
        return of({ error: true, message: err.message })
      })
    );
  }
}
```

# 4 Hot Observable vs cold Observable
Un observable peut être "froid" ou "chaud". 
**Un observable est froid** lorsque la série d'émissions se rejoue à chaque souscription. Comme une vidéo youtube que chaque utilisateur peut rejouer depuis le début. Chaque abonné a son propre contexte d'exécution, ils sont donc en monodiffusion (**monocast**).

**Un observable est chaud** lorsque la série d'émissions  ne se rejoue pas à chaque souscription. Comme un match de rugby retransmis en direct que chaque utilisateur peut "rejoindre" en cours  d'émission. On parle alors de multidiffusion (**multicast**).

Par défaut les observables sont souvent froids mais une fonction comme  "**shareReplay()**" a pour effet de les rendre "chauds".

# 5 **Subscription**

Une subscription représente l'exécution d'un Observable. Elle permet également d'annuler l'exécution via la méthode unsubscribe.

Exemple de souscription à "myObservable" précédemment défini :

```js
import { Observable } from "rxjs";
const myObservable = new Observable((observer) => {
  let count = 0;
  const timer = setInterval(() => {
    observer.next(count);
    count++;
    if (count === 10) {
      observer.complete();
      clearInterval(timer);
    }
  }, 1000);
});

setTimeout(()=>{
  const subscription = myObservable.subscribe({
    next: (v) => console.log("setTimeout 1s - valeur " + v),
    error: (e) => console.error(e),
    complete: () => {
      console.info("completed");
      subscription.unsubscribe();
    },
  });
},1000);


setTimeout(()=>{
  const subscription = myObservable.subscribe({
    next: (v) => console.log("setTimeout 3s - valeur " + v),
    error: (e) => console.error(e),
    complete: () => {
      console.info("completed");
      subscription.unsubscribe();
    },

  });

},3000);
```
Dans ce cas, myObservable est un Observable froid.

Un observable froid ne commence pas à produire des valeurs jusqu'à ce que quelqu'un y souscrive. Dans le code ci-dessus, l'Observable commence à émettre des valeurs lorsqu'on s'y abonne avec myObservable.subscribe(...).

Cela est évident car la fonction setInterval, qui est responsable de l'émission des valeurs, est appelée dans le constructeur Observable, et l'Observable n'est réellement démarré que lorsque la méthode d'abonnement est appelée.
# 6 **Operators**

Les opérateurs sont des fonctions qui permettent un style de programmation fonctionnel permettant de gérer des collections avec des opérateurs tels que **map**, **filter**, **concat**, **reduce**, etc.

Les opérateurs RxJs sont des fonctions pures qui **revoient toujours un nouvel observable** sans modifier celui d'origine.

Les opérateurs se "branchent" sur un observable via la méthode "**pipe()"** à laquelle on passe des fonctions qui sont les opérateurs. [Il existe plus d'une centaine d'opérateurs](https://www.learnrxjs.io/learn-rxjs/operators).

Voici quelques exemples d'opérateurs classiques :

- [**filter**](https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter) : renvoie un observable qui émet des valeurs qui satisfont la condition fournie
- [**every**](https://www.learnrxjs.io/learn-rxjs/operators/conditional/every) : renvoie un observable à partir d'un test (vrai ou faux) sur tous les éléments. 
- [**map**](https://www.learnrxjs.io/learn-rxjs/operators/transformation/map) : renvoie un observable créé à partir de la projection de chaque valeur de la source
- [**reduce**](https://www.learnrxjs.io/learn-rxjs/operators/transformation/reduce) : renvoie un observable aprés avoir réduit les valeurs observables de la source à une valeur unique émise lorsque la source est terminée.
- **[shareReplay](https://www.learnrxjs.io/learn-rxjs/operators/multicasting/sharereplay)** : Permet de rejouer les valeurs d'un abonnement. Par exemple shareReplay(1) renvoie le dernier résultat de l'observable.
- [debounceTime](https://rxjs.dev/api/operators/debounceTime) : Émet une notification à partir de la source Observable  après qu'un laps de temps particulier s'est écoulé sans autre émission de source.
- [distinctuntilchanged](https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinctuntilchanged) : N'émet que lorsque la valeur actuelle est différente de la précédente.
- ...

Exemple de l'utilisation de l'operateur filter :

```js
import { filter } from "rxjs/operators";
const even = myObservable.pipe(filter((num:number) => num % 2 === 0));
```

# 7 **Observer**

Observer est une collection de rappels qui sait écouter les valeurs fournies par l'Observable.

## 7.1 **Subject**
Dans RxJS, un sujet est un type spécial d'observable qui permet de diffuser des valeurs en multidiffusion vers de nombreux observateurs. Alors que les observables simples sont en monodiffusion (chaque observateur abonné possède une exécution indépendante de l'observable), les sujets sont en multidiffusion.

Un "Subject" équivaut à un "EventEmitter" et constitue le moyen de multidiffuser une valeur ou un événement vers plusieurs observateurs.
Contrairement aux observables simples, les "subjects" maintiennent un registre de nombreux auditeurs.

Le multicast avec un Subject est recommandé quand il existe plusieurs émetteurs et/ou plusieurs observateurs. 

Cependant, même avec un seul émetteur et un seul observateur l'utilisation de Subject peut rester pertinente car elle permet de les découpler.

Dans le contexte de la programmation réactive et de RxJS, un « émetteur »  fait référence à un observable qui produit des données, et un « observateur » fait référence à quelque chose qui consomme les données d'un observable.

Le découplage signifie que l'émetteur n'a pas besoin de savoir quoi que ce soit sur l'observateur, et vice versa. Ils peuvent fonctionner indépendamment les uns des autres. Il s'agit d'un principe clé du génie logiciel appelé "separation of concerns", qui rend le code plus facile à comprendre, à tester et à maintenir.

L'émetteur (Observable) produit des données et les envoie au "Subject".
Le "Subject" reçoit les données de l'émetteur et les envoie également à tous les observateurs (abonnés).
Les observateurs reçoivent les données du "Subject" et les traitent.
De cette façon, l'émetteur et les observateurs sont complètement indépendants les uns des autres. Ils n’ont pas besoin de connaître l’existence de chacun ou les détails de mise en œuvre. Tout ce qu'ils doivent savoir, c'est qu'ils peuvent envoyer et recevoir des données via le Subject.

Un exemple d'un "hot observable" créé à partir d'un "Subject":
```ts
import { Subject } from "rxjs";

const subject = new Subject();
let count = 0;
const timer = setInterval(() => {
  const data = Math.random();
  subject.next(data);
  count++;
  if (count === 10) {
    clearInterval(timer);
  }
}, 1000);

subject.subscribe(data => console.log(`Observer 1 - count : ${count} - value : ${data}`));

setTimeout(()=>{
  subject.subscribe(data => console.log(`Observer 2 - count : ${count} - value : ${data}`));
}, 3000);
```
Dans RxJS, un sujet est considéré à la fois comme un observable chaud et froid.

En tant qu'observable froid, il ne commence pas à produire de valeurs tant que quelqu'un n'y souscrit pas. 

En tant qu'observable chaud, il produit des valeurs, qu'il y ait ou non des abonnés. Dans le code ci-dessus, le sujet émet des valeurs toutes les secondes avec setInterval(...), avant même qu'un observer soit abonné. Nous sommes donc ici dans le cas d'un "Hot Observable".

L'utilisation de l'opérateur "shareReplay" permet, comme son nom l'indique, de rejouer un certain nombre de fois les valeurs émises en fonction de la mémoire tampon de relecture ou de la configuration. Exemple :
```js
import { Subject, shareReplay } from "rxjs";

const subject = new Subject();



const coldObservable = subject.asObservable().pipe(
  shareReplay()
);

// Emit values from the Subject
let count = 0;
const timer = setInterval(() => {
  subject.next(count);
  count++;
  if (count === 5) {
    subject.complete();
    clearInterval(timer);
  }
}, 1000);

coldObservable.subscribe((data) => console.log("Observer 1:", data));

setTimeout(() => {
  coldObservable.subscribe((data) => console.log("Observer 2:", data));
}, 3000);
```
  
Dans l'exemple ci-dessus, on convertit explicitement un sujet en observable à l'aide de .asObservable(). Cela empêchera des parties externes de s'abonner directement au sujet et d'émettre des notifications "next". On crée ainsi une vue en lecture seule du sujet à laquelle vous pouvez vous abonner en toute sécurité depuis l'extérieur du module ou du composant où le sujet a été créé.
# 8 **Schedulers**

Ce sont des répartiteurs centralisés pour contrôler la concurrence, nous permettant de coordonner le moment où le calcul a lieu, par exemple. setTimeout ou requestAnimationFrame ou autres.

# 9 Erreurs
Le principe de base reste le même que lors de la gestion d'une erreur en JS. Il s'agit de remonter les erreurs au niveau le plus adéquat pour les traiter.

Typiquement, lorsqu'un service fait une requête http, c'est à l'observateur (celui qui souscrit) de gérer l'erreur via la notification "error".

## 9.1 Déclencher une erreur
- throwError('error');
Exemple : 
```ts
import { throwError } from 'rxjs';

//emits an error with specified value on subscription
const source = throwError('This is an error!');

//output: 'Error: This is an error!'
const subscribe = source.subscribe({
	next: val => console.log(val),
	complete: () => console.log('Complete!'),
	error: val => console.log(`Error: ${val}`)
});
```

## 9.2 Intercepter une erreur 
- catchError
Dans le cas où on ne veut pas que l'erreur "remonte".
L'opérateur **catchError** est utilisé dans Angular (ou plus généralement dans RxJS) lorsque l'on souhaite gérer les erreurs qui surviennent lors de l'exécution d'un flux Observable.

⚠ Pensez à renvoyer un observable depuis la fonction catchError !
Ex: 
```ts
// RxJS v6+
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
//emit error
const source = throwError('This is an error!');
//gracefully handle error, returning observable with error message
const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
//output: 'I caught: This is an error'
const subscribe = example.subscribe(val => console.log(val));
```

## 9.3 Réessayer:
- retry
- retryWhen
Exemple : 
```ts
// RxJS v6+
import { interval, of, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

//emit value every 1s
const source = interval(1000);
const example = source.pipe(
  mergeMap(val => {
    //throw error for demonstration
    if (val > 5) {
      return throwError('Error!');
    }
    return of(val);
  }),
  //retry 2 times on error
  retry(2)
);
/*
  output:
  0..1..2..3..4..5..
  0..1..2..3..4..5..
  0..1..2..3..4..5..
  "Error!: Retried 2 times then quit!"
*/
const subscribe = example.subscribe({
  next: val => console.log(val),
  error: val => console.log(`${val}: Retried 2 times then quit!`)
});
```


