/**
 * 
 * Código js para el Ejercicio 13 Capitulo 5 Libro Javier Eguíluz Pérez
 *
 * Completar el código JavaScript proporcionado para que se añadan nuevos elementos a la lista cada
 * vez que se pulsa sobre el botón. Utilizar las funciones DOM para crear nuevos nodos y añadirlos a la
 * lista existente. Al igual que sucede en el ejercicio anterior, la acción de pinchar sobre un botón forma
 * parte de los "Eventos" de JavaScript que se ven en el siguiente capítulo. En este ejercicio, sólo se
 * debe saber que al pinchar sobre el botón, se ejecuta la función llamada anade().
 *
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{

    let elemento;
    let frase;
    let lista;
    let newElemento;

    let init = function(){
        elemento = document.createElement("li");
        frase = document.createTextNode("Elemento de Prueba.");
        lista = document.getElementById("lista");
        document.addEventListener("click",annadirFrase)
    }

    let annadirFrase = function(){
        elemento.appendChild(frase);
        lista.appendChild(elemento);
        newElemento = "<li>Texto de prueba</li>"
        lista.innerHTML += newElemento;
    }

    document.addEventListener("DOMContentLoaded",init);
}
