// fonction anynyme immédiate
(function () {
  // Quel intérêt ? ISOLER LE CODE et donc éviter les collisions de nom de variable
  var i = 12;
})();

console.log(`i`, i);