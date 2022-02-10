function crea(opc, array, str, str1, str2, str3) {
    switch (opc) {
      case 'f':
        return `for (var i = 0; i < ${array}.length; i++) { \n return ${array};};`;
      case 'i':
        return `if (${str} === 0) { \n return ${str}; \n else if ${str1} === 0};`;
      case 'f':
        return `function ${array}(${str}){\n if (${str} === 0)\n return ${str}; \n else if (${str} === 0) \n return   ;}`;
      case 'f1':
        return `const ${array} = function(${str}){\n if (${str} === 0)\n return ${str}; \n else if (${str} === 0) \n return   ;}`;
      case 'o':
        return (
          "var " +
          array +
          " = {\n " +
          str +
          ": " +
          str +
          ",\n " +
          str1 +
          ": " +
          str1 +
          ",\n  " +
          str2 +
          ": function () {\nreturn " +
          str3 +
          ";"
        );
      case 's':
        return (
          "switch (" +
          array +
          ") {\ncase " +
          str +
          ":\nreturn opcion;\ncase " +
          str1 +
          ":\nreturn opcion2;\n" +
          "case " +
          str2 +
          ":\n return opcion3;\ncase " +
          str3 +
          ":\n" +
          "return opcion4;\ndefault: \nreturn default;}"
        );
      case 7:
  
      default:
        return "opción invalida";
    }
  }
  
  console.log(crea(6, "color", "var1", "var2", "var3", "var4"));
  // console.log(crea(2,'color', 1, 2, 3, 4));
  