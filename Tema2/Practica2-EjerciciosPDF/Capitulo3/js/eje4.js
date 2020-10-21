/**
 * 
 * Código js para el Ejercicio 4 Capitulo 3 Libro Javier Eguíluz Pérez
 * 
 * A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola","adios", 2];
 * 
 * 1. Determinar cual de los dos elementos de texto es mayor.
 * 2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
 * 3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{
    let elementoDiv;

    let init = function () {
        elementoDiv = document.getElementById("texto");
        let texto;
        let valores = [true, 5, false, "hola", "adios", 2];

        //Determinar cual de los dos elementos de texto es mayor.
        texto = "1. Elemento de texto mayor: ";
        if (valores[3] > valores[4])
            texto += valores[3] + " es mayor que " + valores[4] + "</br>";
        else
            texto += valores[4] + " es mayor que " + valores[3] + "</br>";

        //Resultado true
        texto += "2.1 Resultado True: ";
        if (valores[0] || valores[2])
            texto += valores[0] + " OR " + valores[2] + " es True</br>";
        else
            texto += valores[0] + " OR " + valores[2] + " es False</br>";

        //Resultado False
        texto += "2.2 Resultado False: ";
        if (valores[0] && valores[2])
            texto += valores[0] + " AND " + valores[2] + " es True</br>";
        else
            texto += valores[0] + " AND " + valores[2] + " es False</br>";

        //Suma
        texto += "3.1 Suma de los dos números: " + valores[1] + " + " + valores[5] + " = " + (valores[1] + valores[5]) + "</br>";

        //Resta
        texto += "3.2 Resta de los dos números: " + valores[1] + " - " + valores[5] + " = " + (valores[1] - valores[5]) + "</br>";

        //Multiplicación
        texto += "3.3 Producto de los dos números: " + valores[1] + " * " + valores[5] + " = " + (valores[1] * valores[5]) + "</br>";

        //División
        texto += "3.4 División de los dos números: " + valores[1] + " / " + valores[5] + " = " + (valores[1] / valores[5]) + "</br>";

        //Módulo
        texto += "3.5 Módulo de los dos números: " + valores[1] + " % " + valores[5] + " = " + (valores[1] % valores[5]) + "</br>";

    
        /* 
             //templates
            `numero1 = ${num1} es`
        
        */


        elementoDiv.innerHTML = texto;
    }



    document.addEventListener("DOMContentLoaded", init);
}