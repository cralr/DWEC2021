/**
 * 
 * Código js para el Ejercicio 14 Capitulo 6 Libro Javier Eguíluz Pérez
 * 
 * A partir de la página web proporcionada, completar el código JavaScript para que:
 * 1. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 * 2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
 * 3. Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
 * 4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{
    let init = function(){
        let [...enlaces] = document.getElementsByTagName("a");
        /* for (i in enlace){
            enlace[i] = document.addEventListener("click",muestraOcultaParrafo);
        } */
        for (i in enlaces){
            enlaces[i]= document.addEventListener("click",muestraOcultaParrafo);
        }
    }


    let muestraOcultaParrafo = function(){

        let [...parrafo] = document.getElementsByTagName("p"); 
        let enlaces;

        for (i in parrafo){
            if(parrafo[i].style.display == "block"){
                parrafo[i].style.display = "none"; 
                //enlaces.innerHTML = "Mostrar Párrafo";
            } 
            else{
                parrafo[i].style.display = "block"; 
                //enlaces.innerHTML = "Ocultar Párrafo";
            }
        }
        
    }

    document.addEventListener("DOMContentLoaded",init);
}

