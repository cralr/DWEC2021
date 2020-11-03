/**
 * JS para ejercicio 6 Arrays
 * Crea  una función que devuelva un array con cada uno de los argumentos. 
 * En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

 {

    let elementoP;

    let init = function(){
        elementoP = document.getElementById("eje6");
        mostrarArray();
    }

    let crearArray = function(){
      let array = [];
      for (let i = 0;i < arguments.length;i++){
          let elemento = arguments[i];
          if(Array.isArray(elemento)){
              elemento.forEach(function(valor){
                  array.push(valor);
              })
          }else
              array.push(elemento);
      }
      return  array;
    }

    let mostrarArray = function(){
        elementoP.innerHTML = `El array creado es : ${crearArray([1,2,3,4,5],"Rafa","Cruz",["Manzara","Sandia"])}`;
    }

    document.addEventListener("DOMContentLoaded",init);

 }