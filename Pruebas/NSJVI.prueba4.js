// https://www.youtube.com/watch?v=ERVUtjBojGo
// https://www.youtube.com/watch?v=AZd_CzcRhXs
function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var nvoStr = "";
  var nvoStr0 = "";
  var nvoStr2 = "";
  var j = 0;
  //var ies=[];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === " " || i === str.length) {
      nvoStr0 = str.slice(j, i);
      nvoStr += nvoString(nvoStr0)+' ';
   //   ies.push(' J: ');
   //   ies.push(nvoStr);
   // ies.push(j);
      j = i + 1;
   //  ies.push('I: ');
  //    if (i > 4)
  //    return '('+nvoStr+')'+' j: '+j+' i: '+i+' Ies:'+ies;
  //    continue;
    }
  //  ies.push(i);
  }
  nvoStr0 = str.slice(j, i+1);
  nvoStr += nvoString(nvoStr0);
  //ies.push(' J: ');
  //ies.push(nvoStr);
  //ies.push(j);
  //ies.push('I: ');
  //return nvoStr+' Ies:'+ies;
  return nvoStr;
  function nvoString(strInt) {
    nvoStr2='';
    for (var k = strInt.length; k > 0; k--) {
      nvoStr2 += strInt[k - 1];
    }
    return nvoStr2;
  }
}
// console.log(nvoStr('eht '));
console.log(asAmirror("ehT yrneH egnellahC si !esolc"));
