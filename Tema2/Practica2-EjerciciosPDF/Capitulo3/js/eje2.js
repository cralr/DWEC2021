/**
 * 
 * Código js para el Ejercicio 2 Capitulo 3 Libro Javier Eguíluz Pérez
 * El mensaje que se muestra al usuario se almacene en una variable llamada mensaje y el funcionamiento del script sea el mismo.
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{
    let init = function(){
        let texto = document.getElementById("texto");
        let mensaje = "Hola Mundo! \n Qué facil es incluir \' comillas simples \' \ny \" comillas dobles \"";
        texto.innerHTML = mensaje;
    }
    document.addEventListener("DOMContentLoaded",init);
}
