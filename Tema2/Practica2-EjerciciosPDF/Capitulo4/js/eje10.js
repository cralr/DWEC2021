/**
 * 
 * Código js para el Ejercicio 10 Capitulo 4 Libro Javier Eguíluz Pérez
 * 
 * 10.Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
 * palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{
    let elementoDiv;

    let init = function () {
        let boton = document.getElementById("boton");
        boton.addEventListener("click", palindromo);
    }

    let palindromo = function () {
        elementoDiv = document.getElementById("texto10");
        let frase = document.getElementById("frase").value;
        let numCaracteres = frase.length;
        frase = frase.toLowerCase();
        let cadenaEspacios = "";
        let cadenaInversa = "";
        let caracter;
        let texto;

        for (i = 0; i < numCaracteres; i++) {
            caracter = frase.charAt(i);

            if (caracter != " ") {
                cadenaEspacios = cadenaEspacios + caracter;
                cadenaInversa = caracter + cadenaInversa;
            }
        }

        if (cadenaEspacios == cadenaInversa) {
            texto = ("La frase " + frase + " es un palíndromo.")
        } else {
            texto = ("La frase " + frase + " no es un palíndromo.")
        }

        elementoDiv.innerHTML = texto;

    }
    document.addEventListener("DOMContentLoaded", init);
}