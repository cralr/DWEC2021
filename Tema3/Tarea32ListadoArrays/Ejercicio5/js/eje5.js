/**
 * JS para ejercicio 5 Arrays
 * Crea  una función que devuelva un array con cada uno de los argumentos.
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

 {

    let elementoP;

    let init = function(){
        elementoP = document.getElementById("eje5");
        arrayForEach();
    }

    let arrayForEach = function(){
        let info="";
        const array = ["Hola", "como", "estas"];

        array.forEach(function(elemento,indice,array){
            info+=`En el índice ${indice} se encuentra el valor ${elemento} <br>`;
        });

        elementoP.innerHTML = info;
       
    }

    document.addEventListener("DOMContentLoaded",init);

 }