/**
 * JS para ejercicio 1 Arrays
 * Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

 {

    let elementoP;

    let init = function(){
        elementoP = document.getElementById("eje1");
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