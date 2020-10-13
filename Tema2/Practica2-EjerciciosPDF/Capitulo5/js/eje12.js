/**
 * 
 * Código js para el Ejercicio 11 Capitulo 5 Libro Javier Eguíluz Pérez
 *
 * Completar el código JavaScript proporcionado para que cuando se pinche sobre el enlace se muestre
 * completo el contenido de texto. Además, el enlace debe dejar de mostrarse después de pulsarlo por
 * primera vez. La acción de pinchar sobre un enlace forma parte de los "Eventos" de JavaScript que se
 * ven en el siguiente capítulo. En este ejercicio, sólo se debe saber que al pinchar sobre el enlace, se
 * ejecuta la función llamada muestra().
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{

    let texto;
    let enlace;

    let init = function(){
        texto = document.getElementById("texto_oculto");
        enlace = document.getElementById("enlace");
        document.addEventListener("click",mostrarTexto);
    }

    let mostrarTexto = function(){
        texto.className = "visible";
        enlace.className= "oculto";
    }

    document.addEventListener("DOMContentLoaded",init);
}
