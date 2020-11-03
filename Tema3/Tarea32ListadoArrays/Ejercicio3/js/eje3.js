/**
 * JS para ejercicio 3 Arrays
 * Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

 {

    let elementoP1;
    let elementoP2;

    let init = function(){
        elementoP1 = document.getElementById("eje31");
        elementoP2 = document.getElementById("eje32");
        arrayOrObject();
    }

    let arrayOrObject = function(){
        const persona = {nombre:"Rafa",apellido:"Cruz",edad:"27"};
        const frutas = ["Manzana","Naranja"];
        let info1="";
        let info2="";

        info1+= Array.isArray(persona) ? `${persona} es un array.` : `${persona} es un objeto.`;
        info2+= Array.isArray(frutas) ? `${frutas} es un array.` : `${frutas} es un objeto.`;

        elementoP1.innerHTML = info1;
        elementoP2.innerHTML = info2;
    
    }

    document.addEventListener("DOMContentLoaded",init);

 }