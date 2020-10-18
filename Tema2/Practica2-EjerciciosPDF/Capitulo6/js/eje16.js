/**
 * 
 * Código js para el Ejercicio 16 Capitulo 6 Libro Javier Eguíluz Pérez
 * 
 * Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas
 * definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. Para
 * determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador()
 * proporcionada.
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */


{
    let elementoDiv;

    /**
     * Función inicial en el que se crea un escuchador para cuando hagamos click en la pantalla.
     */
    let init = function(){
        elementoDiv = document.getElementById("eje16");
        
        document.addEventListener("click",informacion);
    }

    /**
     * Función que devuelve la información que se mostrará por pantalla según donde hagamos el click.
     * @param {*} evento 
     */
    let informacion = function (evento) {
        let coordenadaX = evento.clientX;
        let coordenadaY = evento.clientY;

        let [tamanoX,tamanoY] = tamanoVentanaNavegador();

        let posicionHorizontal =(coordenadaX > tamanoX/2) ? "Derecha" : "Izquierda";
        let posicionVertical = (coordenadaY > tamanoY/2) ? "Abajo" : "Arriba";

        muestraInformacion(['Posición', posicionHorizontal, posicionVertical]);
    }

    /**
     * Función que mostrará el mensaje
     * @param {*} mensaje 
     */
    let muestraInformacion = function (mensaje) {
        let texto = '<h1>' + mensaje[0] + '</h1>';
        for (let i = 1; i < mensaje.length; i++) {
          texto += '<p>' + mensaje[i] + '</p>';
        }
        elementoDiv.innerHTML = texto;
    }

    /**
     * Función que devuelve el tamaño de la ventana.
     */
    let tamanoVentanaNavegador = function () {
        return [window.innerWidth, window.innerHeight];
    }

    

    document.addEventListener("DOMContentLoaded",init);
}