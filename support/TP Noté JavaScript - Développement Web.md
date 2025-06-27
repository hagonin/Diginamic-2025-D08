**Durée:** 7 heures  
**Format de rendu:** Fichier zip contenant tous les fichiers source (HTML, CSS, JavaScript)  
**Remarque importante:** Tout le code doit être commenté et indenté correctement.
## Barème sur 20 points
- Exercice 1 : 6 points
- Exercice 2 : 6 points
- Exercice 3 : 8 points
- Exercice 4 : 6 points bonus OPTIONNEL
- Bonus (propreté du code, optimisation) : 2 points

## Exercice 1: Génération de séquence numérique (6 points)
Dans cet exercice, vous allez créer un programme qui génère une séquence numérique selon des règles spécifiques.
**Consignes:**
1. Créer un fichier `exercice1.html` et un fichier `exercice1.js`
2. Dans le fichier JavaScript, créer une fonction `generateSequence` qui:
    - Prend trois paramètres: `start` (nombre de départ), `end` (nombre de fin), et `step` (l'incrément)
    - Utilise une boucle `for` pour générer la séquence
    - Stocke chaque nombre dans un tableau
    - Retourne le tableau final
3. Créer une seconde fonction `calculateStatistics` qui:
    - Prend un tableau de nombres en paramètre
    - Calcule la somme de tous les nombres
    - Calcule la moyenne des nombres
    - Trouve le nombre maximum et minimum
    - Retourne un objet contenant ces statistiques
4. Afficher les résultats dans la console du navigateur

**Critères d'évaluation:**
- Utilisation correcte des variables
- Implémentation correcte de la boucle `for`
- Bonne manipulation des tableaux
- Exactitude des calculs

## Exercice 2: Gestion d'une bibliothèque (6 points)

Dans cet exercice, vous allez créer un système de gestion de bibliothèque en utilisant les classes et les tableaux en JavaScript.
**Consignes:**
1. Créer un fichier `exercice2.html` et un fichier `exercice2.js`
2. Créer une classe `Book` avec les propriétés suivantes:
    - `title` (string)
    - `author` (string)
    - `publicationYear` (number)
    - `genre` (string)
    - `available` (boolean)
3. Ajouter à cette classe une méthode `displayDetails()` qui retourne une chaîne formatée avec tous les détails du livre
4. Créer une classe `Library` qui:
    - Possède une propriété `books` (tableau d'objets `Book`)
    - A une méthode `addBook(book)` qui ajoute un livre au tableau
    - A une méthode `findByAuthor(author)` qui retourne tous les livres d'un auteur donné (utiliser `forEach`)
    - A une méthode `sortByYear()` qui trie les livres par année de publication (utiliser `sort`)
    - A une méthode `countAvailableBooks()` qui retourne le nombre de livres disponibles
5. Instancier plusieurs livres et les ajouter à une bibliothèque
6. Tester toutes les méthodes et afficher les résultats dans la console

**Critères d'évaluation:**
- Utilisation correcte des classes et de l'héritage
- Implémentation correcte des méthodes
- Utilisation adéquate de `forEach` et `sort`
- Bon fonctionnement du système
## Exercice 3: Application de liste de tâches (Todo List) (8 points)
Dans cet exercice, vous allez créer une application web interactive pour gérer une liste de tâches, en manipulant le DOM et en gérant les événements.
**Consignes:**
1. Créer un fichier `exercice3.html`, un fichier `exercice3.js` et un fichier `exercice3.css`
2. Dans le HTML, créer une structure comprenant:
    - Un titre pour l'application
    - Un formulaire avec un champ de texte et un bouton pour ajouter une tâche
    - Une liste vide (`<section>`) qui contiendra les tâches
    - Un bouton pour supprimer toutes les tâches complétées
3. Dans le JavaScript, implémenter les fonctionnalités suivantes:
    - Ajouter une nouvelle tâche lorsque le formulaire est soumis
    - Marquer une tâche comme complétée lorsqu'on clique dessus (changer son apparence via CSS)
    - Supprimer une tâche avec un bouton "×" à côté de chaque tâche
    - Filtrer les tâches (toutes, actives, complétées) avec des boutons
**Critères d'évaluation:**
- Manipulation correcte du DOM
- Gestion appropriée des événements
- Interface utilisateur fonctionnelle et agréable
- Réactivité de l'application

## Exercice 4 : Visualisation de données (5 points OPTIONNEL)
Dans cet exercice, vous allez créer une visualisation simple de données en utilisant JavaScript et le HTML Canvas ou des bibliothèques externes de votre choix (Chart.js est recommandé mais pas obligatoire).
**Consignes:**
1. Créer un fichier `exercice4.html`, un fichier `exercice4.js` et un fichier `exercice4.css`
2. Créer un jeu de données représentant les ventes mensuelles d'une entreprise fictive sur une année:
    
    ```javascript
    const salesData = [  { month: "January", sales: 1200 },  { month: "February", sales: 1800 },  // ... compléter avec d'autres mois];
    ```
    
3. Implémenter une visualisation des données sous forme de graphique à barres ou linéaire
4. Ajouter des fonctionnalités interactives:
    - Pouvoir ajouter/modifier des données via un formulaire
    - Mettre à jour le graphique dynamiquement
    - Changer le type de graphique (barres/lignes) via un bouton
5. Ajouter des légendes et des étiquettes appropriées
**Critères d'évaluation:**
- Qualité de la visualisation
- Interactivité du graphique
- Manipulation avancée du DOM
- Créativité et originalité
- Qualité du code
## Instructions pour la remise du TP
1. Vérifiez que votre code est fonctionnel et commenté.
2. Organisez vos fichiers dans un dossier structuré :
```
NomPrenom/
├── exercice1/
│   ├── exercice1.html
│   └── exercice1.js
├── exercice2/
│   ├── exercice2.html
│   └── exercice2.js
├── exercice3/
│   ├── exercice3.html
│   ├── exercice3.js
│   └── exercice3.css
└── exercice4/
    ├── exercice4.html
    ├── exercice4.js
    └── exercice4.css
README.txt
```      
3. Dans le fichier README.txt, expliquez tout ce qui serait nécessaire à la l'évaluation de votre travail
4. Créez une archive ZIP de ce dossier.
5. Nommez l'archive selon le format `NOM_Prenom_TP_JS.zip`.
6. Soumettez l'archive sur la plateforme de cours en ligne avant la date limite.

Bon courage!