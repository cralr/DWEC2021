/**
 * 
 * Código js para el Ejercicio 18 Capitulo 8 Libro Javier Eguíluz Pérez
 * Realizar un Reloj que muestre la hora actual. (Usando setInterval)
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{
    let reloj;
    
    let init = function() {
        reloj = document.getElementById("eje18");
        mostrarReloj();
        setInterval(mostrarReloj,1000);
    }

    let mostrarReloj = function(){
        let date = new Date();
        let horas = new String(date.getHours());
        let minutos = new String(date.getMinutes());
        let segundos = new String(date.getSeconds());
        if (horas.length == 1) 
            horas = "0" + horas;
        if (minutos.length == 1) 
            minutos = "0" + minutos;
        if (segundos.length == 1) 
            segundos = "0" + segundos;

        reloj.innerHTML = horas + ":" + minutos + ":" + segundos+" h";
    }

    document.addEventListener("DOMContentLoaded", init);
}
