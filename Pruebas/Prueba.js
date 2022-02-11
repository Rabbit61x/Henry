// https://www.youtube.com/watch?v=pKefSEbKBW0
objMat = function () {
  var objeto = {
    x: 1,
    y: 2,
  };
  var a = Object.getOwnPropertyNames(objeto);
  var b = [];
  for (var i = 0; i < a.length; i++) {
  b.push(new Array(2).fill(""));
  }
  for (var i = 0; i < a.length; i++) {
    b[i][0] = a[i];
 //   b(new objeto(1).fill(objeto[a[i]]));
    b[i][1]=objeto[a[i]];
  }
  return b;
};

//    console.log(objMat(x: 1, y: 2));
console.log(objMat());
