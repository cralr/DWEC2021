/**
 * 
 * Código js para el Ejercicio 1 Capitulo 2 Libro Javier Eguíluz Pérez
 * 1. Todo el código JavaScript se encuentre en un archivo externo llamado codigo.js y el script siga funcionando de la misma manera.
 * 2. Después del primer mensaje, se debe mostrar otro mensaje que diga "Soy el primer script"
 * 3. Añadir algunos comentarios que expliquen el funcionamiento del código
 * 4. Añadir en la página XHTML un mensaje de aviso para los navegadores que no tengan activado el soporte de JavaScript
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{
    let init = function(){
        let texto = document.getElementById("texto");
        let mensaje = "Hola Mundo, soy el primer Script";
        texto.innerHTML = mensaje;
    }
    document.addEventListener("DOMContentLoaded",init);
}
