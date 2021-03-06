/**
 * 
 * Código js para el Ejercicio 3 Capitulo 3 Libro Javier Eguíluz Pérez
 * Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
 * Mostrar por pantalla los doce nombres utilizando la función alert().
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{
    let elementoDiv;

    let init = function(){
        elementoDiv = document.getElementById("texto");
        mostrarMeses();
    }

    let mostrarMeses = function() {
        let texto;
        let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        texto = "Los meses son: </br>";

        for(const mes of meses){
            texto += mes+ " </br>";
        }
        elementoDiv.innerHTML = texto;
    }

    document.addEventListener("DOMContentLoaded",init);
}
