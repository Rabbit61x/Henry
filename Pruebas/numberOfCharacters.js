function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí

  var array = string.split('');
  var obj = Object.assign(array);
  // obj.hasOwnPropierty(array);
  var ies = [];
  var js = [];
  // poner las letras en su lugar;
  /* array.push(string[0]);
  var a = true;
  for (let i = 0; i < string.length; i++) {
      ies.push(`I: ${i} `);
    for (let j = 0; j <= i; j++) {
        ies.push(j);
      if (array[i] !== string[j]) {
        array.push(string[j]);
        break;
      }
    }
  } */
  return obj; 
}

console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"));
