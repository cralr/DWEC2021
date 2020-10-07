/**
 * 
 * Código js para el Ejercicio 8 Capitulo 4 Libro Javier Eguíluz Pérez
 * 8.Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
 * como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
 * resultado devuelto por la función.
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{
    
    let elementoDiv;
    
    let init = function(){
        let boton = document.getElementById("boton");
        boton.addEventListener("click",esPar);
    }

    let esPar = function(){
        elementoDiv = document.getElementById("texto8");
        let num = document.getElementById("numero").value;
        let texto;

        if (num % 2 == 0){
            texto = "El número "+num+" es PAR.";
        }
        else{
            texto = "El número "+num+" es IMPAR.";
        }

        elementoDiv.innerHTML = texto;

        
    }


    document.addEventListener("DOMContentLoaded",init);
}
