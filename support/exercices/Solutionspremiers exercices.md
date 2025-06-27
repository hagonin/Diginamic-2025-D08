
## Chapitre 6 : Variables
### Exercice 1 : Le Détective des Variables
**Solutions :**
- `mystere1` : type `string`, valeur `"420"` (car `42 + "0"` provoque une concaténation)
- `mystere2` : type `number`, valeur `2` (car `true` vaut `1` en contexte numérique, donc `true + 1 = 2`)
- `mystere3` : type `number`, valeur `15` (car `"5"` est converti en nombre avant la multiplication)
### Exercice 2 : Le Jeu du Scope
**Solutions :**
- "Dans la caverne : or" (la variable locale `tresor` dans la fonction)
- "Dans la chambre secrète : rubis" (la variable locale `tresor` dans le bloc)
- "De retour dans la caverne : or" (la variable locale `tresor` dans la fonction)
- "De retour au camp : diamant" (la variable globale `tresor`)
### Exercice 3 : La Course des Transtypage
**Solutions :**
- Round 1: `"52"` (concaténation de string)
- Round 2: `3` (la chaîne est convertie en nombre)
- Round 3: `10.5` (l'opérateur `+` convertit la chaîne en nombre)
- Round 4: `false` (car `!!0` est équivalent à `false`)
- Round 5: `true` (car `!!"Super"` est équivalent à `true`, les chaînes non vides sont "truthy")
- Bonus round: `"33"` (d'abord `1 + 2 = 3`, puis `3 + "3" = "33"` par concaténation)
## Chapitre 7 : Instructions, expressions et structures de contrôle
### Exercice 1 : L'Aventure des Conditions
**Solutions :**
1. `if (niveau >= 5 && clésObtenues >= 2)`
2. `if (pointsDeVie < 30 || niveau < 3)`
3. `if (monstreVaincu && niveau >= 5)`
### Exercice 2 : Le Zoo des Boucles
**Solutions :**
```javascript
// 1. Boucle for classique
for (let i = 0; i < animaux.length; i++) {
  console.log(`Je donne de la ${nourriture[animaux[i]]} au ${animaux[i]}`);
}

// 2. Boucle for...of
for (let animal of animaux) {
  console.log(`Je caresse le ${animal}`);
}

// 3. Boucle for...in
for (let animal in nourriture) {
  console.log(`Nourriture pour ${animal} : ${nourriture[animal]}`);
}
```
### Exercice 3 : Le Switch Magique
**Solution :**
```javascript
function prédire(choix) {
  switch (choix) {
    case 1:
      console.log("Tu vas faire une belle rencontre !");
      break;
    case 2:
      console.log("Un trésor t'attend au tournant !");
      break;
    case 3:
      console.log("Ton code fonctionnera du premier coup aujourd'hui !");
      break;
    case 4:
      console.log("Une promotion se profile à l'horizon !");
      break;
    case 5:
      console.log("Tu vas résoudre un bug tenace !");
      break;
    default:
      console.log("L'avenir est flou... Choisis un nombre entre 1 et 5 !");
  }
}
```
## Bonus : Expressions VS Instructions
### Exercice 1 : Le Défi des Expressions
**Solutions :**
- `score = 10;` - Expression (d'affectation) et Instruction
- `score + 5;` - Expression (mais pas utilisée efficacement)
- `if (score > 7) {}` - Instruction
- `score++` - Expression (qui modifie l'état) et Instruction
- `"Ton score est " + score;` - Expression (mais non utilisée)
- `for (let i = 0; i < 3; i++) {}` - Instruction
### Exercice 2 : Le Laboratoire des Opérateurs
**Solutions :**
- `x ?? "Valeur par défaut"` : `"Valeur par défaut"` (car `null` déclenche la valeur par défaut)
- `y ?? "Valeur par défaut"` : `"Valeur par défaut"` (car `undefined` déclenche la valeur par défaut)
- `z ?? "Valeur par défaut"` : `"bonjour"` (car la valeur n'est ni `null` ni `undefined`)
- `obj.utilisateur?.adresse?.rue` : `undefined` (chaînage optionnel s'arrête car `adresse` est `null`)
- `obj.utilisateur?.nom` : `"Alice"` (chaînage optionnel fonctionne car `utilisateur` existe)
### Exercice 3 : Le Mystère de l'Égalité

**Solutions :**

- `a == b` : `true` (égalité avec conversion de type)
- `a === b` : `false` (égalité stricte, types différents)
- `a === c` : `true` (même type, même valeur)
- `d == e` : `false` (objets différents en mémoire)
- `d === e` : `false` (objets différents en mémoire)
- `d === f` : `true` (même référence d'objet)
- `d.valeur === e.valeur` : `true` (comparaison des valeurs primitives)