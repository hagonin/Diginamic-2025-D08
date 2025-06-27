"use strict";
// pour déclarer une variable, il existe 3 termes : var, let et const
// Le typage est dynamique et il existe 5 principaux types primitifs
{
  var i = 12;
  i = 4;
  console.log(`type de i : `, typeof (i));
  i = "Toto";
  console.log(`type de i : `, typeof (i));
  i = false;
  i = undefined;
  console.log(`type de i : `, typeof (i));
  i = 3;
  console.log(`type de i : `, typeof (i));
  i = null;
  console.log(`type de i : `, typeof (i));

  if ("") console.log(`vrai`);
  else console.log(`faux`);

  // Portée des variables
  // let et const sont "bloc scope"
  // var est function scope

}
console.log(`i : `, i);