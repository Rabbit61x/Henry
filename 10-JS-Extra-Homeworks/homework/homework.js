// No cambies los nombres de las funciones.

const { has } = require("markdown-it/lib/common/utils");

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  // https://www.youtube.com/watch?v=pKefSEbKBW0
  /* var nuevoArray =[];
  for(var clave in objeto){
    nuevoArray.push([clave, objeto[clave]])
  }
  return nuevoArray;
} */
  var a = Object.getOwnPropertyNames(objeto);
  var b = [];
  for (var i = 0; i < a.length; i++) {
    b.push(new Array(2).fill(null));
  }
  for (var i = 0; i < a.length; i++) {
    b[i][0] = a[i];
    //   b(new objeto(1).fill(objeto[a[i]]));
    b[i][1] = objeto[a[i]];
  }
  return b;
}

/* return Object.entries(objeto); Woow
 const array = [];
 for (const clave in objeto){
 array.push([clave, objeto[clave]])
 }
 return array;
}
console.log(deObjetoAmatriz({  D: 1,
                              B: 2,
                              C: 3})); */

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí

  const obj = {};
  for (let i = 0; i < string.length; i++) {
  //  if (obj.hasOwnPropierty(string[i])) {
    if (Object.hasOwn(obj, string[i])) {
      obj[string[i]]++;
    } else obj[string[i]] = 1;
  }
  return obj;
}
console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"));
/*  var objeto = {};
  for (var i = 0; i < string.length; i++) {
    if (objeto.hasOwnPropierty(string[i])) {
      objeto[string[i]]++;
    } else 
      objeto[string[i]] = 1;
      }
    return objeto;
  } 

 var stringOrdenado = [];
  var letrabase = "";
  var numLetras = [];
  var contador = 1;
  for (var i = 0; i < string.length; i++) {
    stringOrdenado[i] = string[i];
  }
for (var i = 0; i < stringOrdenado.length; i++) {
    for (var j = i + 1; j < stringOrdenado.length; j++) {
      if (stringOrdenado[i] > stringOrdenado[j]) {
        letrabase = stringOrdenado[i];
        stringOrdenado[i] = stringOrdenado[j];
        stringOrdenado[j] = letrabase;
      }
    } 
  } 
  letrabase = stringOrdenado[0];
  for (var i = 1; i < stringOrdenado.length; i++) {
    for (var j = i+1;j< stringOrdenado.length; j++){
    if (stringOrdenado[i] !== letrabase) {
      numLetras += `${letrabase}: ${contador}, `;
      letrabase = stringOrdenado[i];
      contador = 1;
    } else contador += 1;
  }
}
  numLetras += `${letrabase}: ${contador}`;

  return numLetras;
} */

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mays = "";
  var mins = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) mays += s[i];
    else mins += s[i];
  }
  return mays + mins;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var invertida = str.split(" ").map(function (elemento) {
    return elemento.split("").reverse().join("");
  });
  return invertida.join(" ");
}
/*var nvoStr = "";
  var nvoStr0 = "";
  var nvoStr2 = "";
  var j = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === " " || i === str.length) {
      nvoStr0 = str.slice(j, i);
      nvoStr += nvoString(nvoStr0)+' ';
      j = i + 1;
     }
   }
  nvoStr0 = str.slice(j, i+1);
  nvoStr += nvoString(nvoStr0);
   return nvoStr;
  function nvoString(strInt) {
    nvoStr2='';
    for (var k = strInt.length; k > 0; k--) {
      nvoStr2 += strInt[k - 1];
    }
    return nvoStr2; */

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  /*  var str = numero.toString();
  var NvoStr = "";
  for (var i = str.length; i > 0; i--) {
    NvoStr += str[i - 1];
  }
  if (str === NvoStr) return "Es capicua";
  else return "No es capicua";
}
*/
  var numString = numero.toString();
  var resultado = numString.split("").reverse().join("");
  if (numString === resultado) return "Es capicua";
  else return "No es capicua";
}
function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nvaCadena = "";
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c") continue;
    else nvaCadena += cadena[i];
  }
  return nvaCadena;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var nvoArray = "";
  var l = 0;
  var long = arr.map(function (x) {
    return x.length;
  });
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (long[i] > long[j]) {
        nvoArray = arr[j];
        arr[j] = arr[i];
        arr[i] = nvoArray;
        l = long[j];
        long[j] = long[i];
        long[i] = l;
      }
    }
  }
  return arr;
}
//console.log(sortArray(["You", "are", "beautiful", "looking"]));
function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var arreglo3 = [];
  for (var i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) arreglo3.push(arreglo1[i]);
    }
  }
  return arreglo3;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
