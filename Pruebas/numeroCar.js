function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
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
    if (stringOrdenado[i] !== letrabase) {
      numLetras += `${letrabase}: ${contador}, `;
      letrabase = stringOrdenado[i];
      contador = 1;
    } else contador += 1;
  }
  numLetras += `${letrabase}: ${contador}`;

  return numLetras;
}

console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"));
