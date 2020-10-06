/**
 * 
 * Código js para el Ejercicio 5 Capitulo 3 Libro Javier Eguíluz Pérez
 * 
 * 5.Completar las condiciones de los if del siguiente script para que los mensajes de los alert() se muestren siempre de forma correcta:
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{

    let elementoDiv;

    let init = function(){
        elementoDiv = document.getElementById("texto");
        let texto;
        let numero1 = 5;
        let numero2 = 8;

        if(numero2 >= numero1)
            texto= "Número1: "+numero1+" no es mayor que numero2: "+numero2+"</br>";

        if(numero2 >= 0)
            texto+= "Número2: "+numero2+" es positivo</br>";

        if(numero1 < 0 || numero1 != 0)
            texto+= "Número1: "+numero1+" es negativo o distinto de 0</br>";

        if(++numero1 < numero2)
            texto+= ("Incrementar en 1 unidad el valor de numero1: "+ numero1 +" no lo hace mayor o igual que numero2: "+numero2);
        
        
        elementoDiv.innerHTML = texto;
    }

    

    document.addEventListener("DOMContentLoaded",init);
}