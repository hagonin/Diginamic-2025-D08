console.log(`window`, window);

const h1 = document.getElementById("title-one");
console.log(`h1`, h1);

// Modification d'une propriété directe
h1.align = "center";


// Appel d'une méthode qui appartient au prototype de HTMLHeadingElement puis HTMLElement puis de Element puis de Node puis de EventTarget


// Modification de propriétés qui appartiennent aux éléments parents
//h1.hidden = true;

const newspaperSpinning = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const newspaperTiming = {
  duration: 2000,
  iterations: 1,
};



h1.animate(newspaperSpinning, newspaperTiming);

// Propriété héritée de node
h1.textContent = "Ceci est un nouveau texte";

// Méthode héritée de EventTarget
h1.addEventListener("click", (event) => {
  console.log(`H1 cliqué`);
});

//h1.remove();

// Création d'un élément du DOM

const section = document.createElement("section");

// Placement de cet élément du DOM dans l'arboresence du DOM
document.body.appendChild(section);

// Ajout de texte à l'élément du DOM
section.innerText = "Texte de la section";

// Ajout d'un attribut HTML
section.setAttribute("id", "section");

// Récupérer la valeur d'un attribut
console.log(h1.getAttribute("id"));

// Utilisation de querySelector
const firstLink = document.querySelector("ul > li:nth-child(3) > a");
console.log(firstLink.textContent);

const h2 = document.createElement("h2");
h2.innerText = "Titre de niveau 2";
document.body.insertBefore(h2, section);

// Ajout de classes via classList
h2.classList.add("text-warning", "button");

// Toggle danger
h2.classList.toggle("danger");
h2.classList.toggle("danger");

