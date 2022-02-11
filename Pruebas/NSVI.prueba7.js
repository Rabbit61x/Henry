function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    var nvoArray = '';
      var l = 0;
    var long = arr.map(function(x) {return x.length;})
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
  console.log(sortArray(["You", "are", "beautiful", "looking"]));