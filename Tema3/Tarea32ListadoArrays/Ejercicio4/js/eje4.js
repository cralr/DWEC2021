/**
 * JS para ejercicio 4 Arrays
 * Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

 {

    let elementoP;

    let init = function(){
        elementoP = document.getElementById("eje4");
        arrayNaturalNumbers();
    }

    let arrayNaturalNumbers= function(){
        const array = [];
        let info ="";

        for(let i= 0;i<6;i++){
            info += `${array.push(i)-1} `;
        }

        elementoP.innerHTML = info;
    
    }

    document.addEventListener("DOMContentLoaded",init);

 }