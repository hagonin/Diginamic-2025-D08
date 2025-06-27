let i = 1;
function a() {
  let j = 2;
  b();
  console.log(`j`, j);
  console.log(`b`, b);
  function b() {

    let l = 4;
    console.log(l);
    {
      var k = 3;
      console.log("k", k);
    }
  }
}
a();

// Que "voit" le scope global ? : i et a()
// Le scope suivant est celui de la fonction a() qui a accès à : j, b, i et a()
// Le scope suivant est celui de la fonction b() qui a accès à : l, j, b, i et a()
// Le scope suivant est du bloc à l'intérieur du bloc de la fonction b() qui a accès à : k, l, j, b, i et a()