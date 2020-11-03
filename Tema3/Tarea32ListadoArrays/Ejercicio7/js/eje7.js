/**
 * JS para ejercicio 7 Arrays
 * Crea una función que elimine todos los undefined de un array.
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

 {

    let elementoP;

    let init = function(){
        elementoP = document.getElementById("eje7");
        eliminarUndefined();
    }

    let eliminarUndefined = function(){
        const array = [1,"Hola",undefined,"Adios",2,undefined];
        elementoP.innerHTML += `Array con undefined: `;
        for (x in array)
            elementoP.innerHTML += `${array[x]} `;

       arraySinUndefined = array.filter(function(valor){
            return valor != undefined
        });
        elementoP.innerHTML += `</br> Array sin undefined: `;
        for (x in arraySinUndefined)
            elementoP.innerHTML += `${arraySinUndefined[x]} `;
    }

    

    document.addEventListener("DOMContentLoaded",init);

 }