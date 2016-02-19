var p = new Promise(function(resolve, reject) {
  resolve(1);
});

p.then(function() {
  an_undefined_reference;
});
