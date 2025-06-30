const transSyberian = {
  speed: 150,
  id: 45676396,
  color: "Pink",

}
const tgv = {
  speed: 300,
  id: 456763966568,
  color: "Pink"
}
console.log(`tgv`, tgv);

// spread operator pour copier (shallow copy) par valeur
//const tgv2 = { ...tgv };
const tgv2 = { wagonsNumber: 15, id: 12, ...tgv };
console.log(`tgv2`, tgv2);

if (tgv === tgv2) console.log(`tgv et tgv2 identiques`);
else console.log(`tgv et tgv2 différents`);

// Destructuring
const { speed, color } = tgv;
console.log(`speed`, speed);

class A { }
class B extends A { }
class C extends B { }
function logClasses(object) {
  while (object) {
    object = Object.getPrototypeOf(object);
    if (object) console.log("classe : ", object.constructor.name);
  }

}
logClasses(new C());
