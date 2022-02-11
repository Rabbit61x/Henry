const axios = require('axios');
var a = 0;
const conteoRegresivo = a => (a){ 
    if (a<0) return;
      console.log(a);
      return conteoRegresivo(a -1);
}
    
  
  conteoRegresivo(10);