/**
 * Código js para el Ejercicio 6 Capitulo 3 Libro Javier Eguíluz Pérez
 * 
 * Factorial de un número.
 * @author Rafael Miguel Cruz Álvarez
*/

{
    let elementoDiv;
   
    let init = function() {
        let boton = document.getElementById("boton");
        boton.addEventListener("click", factorial);
    }

    /**
     * Función factorial 
     */
    let factorial = function(){
        elementoDiv= document.getElementById("texto7");
        let numero = document.getElementById("factorial").value;
        let texto;
        let i;
        let factorial=1;
        for (i = numero;i > 0; i--){
            factorial = factorial *i;
        }
        texto = "El factorial es: "+factorial;

        elementoDiv.innerHTML=texto;
    }
    document.addEventListener("DOMContentLoaded", init);

}