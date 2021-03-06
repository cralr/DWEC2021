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
    //Función inicial en la que se recorren las tag a del html para a cada una asignarle un click
    let init = function(){
        for (const enlace of document.getElementsByTagName("a")){//console.log(enlace);
            enlace.addEventListener("click",muestraOcultaParrafo);
        }
    }

    let muestraOcultaParrafo = function(){

        //console.log(this.id);
        //kk = this; 

        let parrafos = document.getElementById("parrafo_"+this.id);
        
        //Si el párrafo esta block o al iniciar, se pasa a none.
        if(parrafos.style.display=="block" || parrafos.style.display==""){
            parrafos.style.display="none";
            this.innerHTML = "Mostrar párrafo";
        }
        else{
            parrafos.style.display = "block";
            this.innerHTML = "Ocultar párrafo";
        }
    }

    document.addEventListener("DOMContentLoaded",init);
}
