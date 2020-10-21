/**
 * 
 * Código js para el Ejercicio 9 Capitulo 4 Libro Javier Eguíluz Pérez
 * 9.Definir una función que muestre información sobre una cadena de texto que se le pasa como 
 * argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
 * sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{

    let elementoDiv;

    let init = function () {
        let boton = document.getElementById("boton");
        boton.addEventListener("click", controlCadena);
    }

    let controlCadena = function () {
        elementoDiv = document.getElementById("texto9");
        let cadena = document.getElementById("frase").value;
        let texto;

        if (cadena == cadena.toUpperCase()) {
            texto = "La frase introducida está escrita en Mayúsculas.";
        } else if (cadena == cadena.toLowerCase()) {
            texto = "La frase introducida está escrita en Minúculas.";
        } else
            texto = "La frase introducida está escrita tanto en Mayúsculas como en Minúsculas."

        elementoDiv.innerHTML = texto;
    }


    document.addEventListener("DOMContentLoaded", init);
}