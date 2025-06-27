![[diginamic_logo_3-02.png]]
# Variables
Si l'on en croit wikipedia,  les variables sont des symboles qui associent un nom (l'identifiant) à une valeur. Le nom est unique ([mais différents des mots réservés](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s) ).
Dans la plupart des langages et notamment les plus courants comme javascript, les variables peuvent changer de valeur au cours du temps.
Une variable est un espace de stockage pour un résultat. Cependant les possibilités d'une variable sont intimement liées au langage de programmation auquel on fait référence. Par exemple une variable en javascript aura 4 caractéristiques :
- son **nom** c'est-à-dire sous quel nom est déclarée la variable ;
- son **type**, c'est la convention d'interprétation de la séquence de bits qui constitue la variable.
- sa **valeur**, c'est la séquence de bits elle-même
- sa **portée**, c'est la portion de code source où elle est accessible, par exemple :
    - la portée d'une variable déclarée dans une fonction avec le mot clé "**var**" (non globale) s'entend de sa définition à la fin du bloc de la dite fonction. On dit alors que la variable est "function scope"
    - la portée d'une variable déclarée dans un bloc de code avec le mot clé "**let**" (non globale)  s'entend de sa définition à la fin du bloc où elle est définie. On dit alors que la variable est "block scope"

## 6.1 Nom des variables ou identifiant
- Début du nom de la variable : Les noms des variables peuvent commencer par n'importe quel lettre [unicode](https://fr.wikipedia.org/wiki/Unicode) ou underscore (\_) ou dollar ($).  
    Attention à ne pas utiliser de nombre ou le "-" qui serait compris comme l'opérateur arithmétique "moins".
- Les caractères suivants doivent être des lettres unicode ou underscore (\_) ou dollar ($)  
- Listes des mots à ne pas utiliser comme nom de variable : https://www-sop.inria.fr/members/Sylvain.Chevillard/fr.selfhtml.org/javascript/langage/reserve.htm
**Javascript dispose de types de données primitifs :**
- string (chaînes de caractères)
- number (nombres)
- boolean (booléen)
- undefined (indéfini)
- null (nul)

**... et de types de données plus évolués :**
- object (objet),
- function (fonction)
- array (tableau),
- ...
## 6.2 Typage dynamique
Il n'est pas nécessaire de déclarer le type d'une variable avant de l'utiliser. Le type de la variable sera automatiquement déterminé lorsque le programme sera exécuté. Cela signifie également que la même variable pourra avoir différents types au cours de son existence.
L'opérateur typeof() permet de connaître le type de données d'une variables. Ex :
```js
var i = 12;
i = i + 3; // addition
var j = true;
var k = "Hellow World";
var l;
console.log(typeof(i));
console.log(typeof(j));
console.log(typeof(k));
console.log(typeof(l));
```
> [!FAQ]- Selon vous, qu'affichera le code ci-dessus dans la console ?
> ```js
> number
> boolean
> string
> undefined
> ```
## 6.3 Transtypage

Il est parfois nécessaire de spécifier le type d'une variable.
On peut alors utiliser :
- parseInt
- parseFloat ( ou + Ex : const customerId = + req.params.id;)
- toString
Mais il existe aussi des opérateurs  :
- + pour convertir en ``number``. Ex : 
  ``console.log(+'10');``
    [En savoir plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- !! pour convertir en booléen :
    
    ```
     value       │  !!value
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     false       │   false
     true        │   true
     null        │   false
     undefined   │   false
     0           │   false
     -0          │   false
     1           │   true
     -5          │   true
     NaN         │   false
     ''          │   false
     'hello'     │   true
    ```
    
## 6.4 Portée des variables
Avec le mot clé "**var**", les variables sont "function scope", c'est à dire qu'elles sont définies à l'intérieur du bloc de code ({Ceci est un bloc de code}) de la fonction et inconnues en dehors.
Avec les mots clés "**let**" et "**const**", les variables sont "block scope", c'est à dire qu'elles sont définies à l'intérieur du bloc de code ({Ceci est un bloc de code}) où elles ont été crées et inconnues au dehors.
**Exercice**
Examinez le code suivant :
```js
{
  var i = 5;
  let j = 12;
  console.log("valeur de i dans le bloc : " + i);
  console.log("valeur de j dans le bloc : " + j);
}
console.log("valeur de i dans le contexte d'exécution global : " + i);
console.log("valeur de j dans le contexte d'exécution global : " + j);
```
>[!FAQ]- Selon vous, qu'affichera le code ci-dessus dans la console ?
> ```js
>valeur de i dans le bloc : 5
>exo3.js:9 valeur de j dans le bloc : 12
>exo3.js:11 valeur de i dans le contexte d'exécution global : 5
>exo3.js:12 Uncaught ReferenceError: j is not defined
>    at exo3.js:12
>(anonymous) @ exo3.js:12
>
>## Explication
>Bien que i soit définie dans un bloc de code ({}), c'est une variable globale car elle a été définie avec le mot clé var en dehors d'une fonction.
>En revanche, j est une varible locale car elle a été définie avec le mot clé let dans un bloc de code. Elle est donc inconnue en dehors de ce bloc de code.
>
En revanche, j est une varible locale car elle a été définie avec le mot clé let dans un bloc de code. Elle est donc inconnue en dehors de ce bloc de code.> 
> ```
