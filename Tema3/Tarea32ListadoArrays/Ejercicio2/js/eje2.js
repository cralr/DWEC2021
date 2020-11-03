/**
 * JS para ejercicio 2 Arrays
 * Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

 {

    let elementoP1;
    let elementoP2;

    let init = function(){
        elementoP1 = document.getElementById("eje21");
        elementoP2 = document.getElementById("eje22");
        arrayForInOb();
        arrayForInArray();
    }

    let arrayForInOb = function(){
        const persona = {nombre:"Rafa",apellido:"Cruz",edad:"27"};
        let info = "";
        for (let i in persona){
            info += `${persona[i]} `;
        }
       elementoP1.innerHTML = info;
    }

    let arrayForInArray = function(){
        const frutas = ["Manzana","Naranja"];
        let info = "";
        for (let i in frutas){
            info += `${frutas[i]} `;
        }
       elementoP2.innerHTML = info;
    }

    document.addEventListener("DOMContentLoaded",init);

 }