/**
 * 
 * Código js para el Ejercicio 11 Capitulo 5 Libro Javier Eguíluz Pérez
 * 1. Número de enlaces de la página
 * 2. Dirección a la que enlaza el penúltimo enlace
 * 3. Numero de enlaces que enlazan a http://prueba
 * 4. Número de enlaces del tercer párrafo
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{

    let elementoDiv;
    let parrafos;
    let enlaces;

    let init = function(){
        elementoDiv = document.getElementById("eje11");
        parrafos = document.getElementsByTagName("p");
        enlaces = document.getElementsByTagName("a");
        informacion();
    }

    //Ejercicio 1: Número de enlaces.

    let numerosEnlaces = function(){
        texto = "Número de enlaces: "+ (enlaces.length-2)+"</br>";
        elementoDiv.innerHTML = texto;
    }

    //Ejercicio 2: Dirección a la que enlaza el penúltimo enlace.

    let penultimoEnlace = function(){
        texto += "El penúltimo enlace es: "+enlaces[enlaces.length-4].href;
        elementoDiv.innerHTML = texto;
    }

    //Ejercicio 3:Número enlaces que enlazan a http://prueba

    let enlacesPrueba = function(){
        let contador = 0;
        for(let i=0; i<enlaces.length; i++) {
          if(enlaces[i].href === "http://prueba/") {
          contador++;
          }
        }
        texto = texto + "<br/>" + contador + " enlaces apuntan a http://prueba</br>";
        elementoDiv.innerHTML = texto;
      }

    //Ejercicio 4: Número de enlaces del tercer párrafo

    let enlacesTercerParrafo = function() {
        texto += "El número de enlaces en el tercer parrafo es: "+parrafos[2].getElementsByTagName("a").length;
        elementoDiv.innerHTML = texto;
        
    }



    let informacion = function(){
        numerosEnlaces();
        penultimoEnlace();
        enlacesPrueba();
        enlacesTercerParrafo();
    }


    document.addEventListener("DOMContentLoaded",init);
}
