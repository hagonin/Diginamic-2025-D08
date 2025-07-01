import { createMarkup } from "./utils/utils.js";

const h1 = createMarkup("h1", document.body, "Titre de niveau 1");

function onClickH1(text) {
  console.log(`H1 cliqué ${text}`);
};
function onClickH1Bis() {
  console.log(`H1 cliqué Bis`);
};
console.log(`h1.onclick`, h1.onclick);

// addEventListener 
h1.addEventListener("click", () => { onClickH1("Toto") });
h1.addEventListener("click", onClickH1Bis);