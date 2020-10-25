/**
 * 
 * Código js para el Ejercicio 17 Capitulo 7 Libro Javier Eguíluz Pérez
 * Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún
 * puede escribir. Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas
 * horizontales cuando se haya llegado al máximo número de caracteres.
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{
    const MAXIMO_CARACTERES = 50;

    
    let elementoTextArea,
        elementoDiv;


    let init = function(){
        elementoTextArea = document.getElementById("texto17");
        elementoDiv = document.getElementById("eje17");
  
        elementoTextArea.addEventListener("keydown", limitarCaracteres);
        elementoTextArea.addEventListener("keyup", mostrarCaracteres);
  
    }

    /**
     * Se limita el no poder escribir más del máximo número de caracteres
     * @param {KeyEvent} evento 
     */
    let limitarCaracteres = function (evento) {
  
        switch (evento.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowDown':
  
            case 'Backspace':
            case 'Delete':
                return;
        }
        if (elementoTextArea.value.length >= MAXIMO_CARACTERES)
            evento.preventDefault();
  
    }
    /**
     * Muesta mensajes sobre los caracteres que quedan por introducir
     */
    let mostrarCaracteres = function () {
        elementoDiv.innerHTML = "Puedes escribir hasta " + (MAXIMO_CARACTERES - elementoTextArea.value.length) + " caracteres.";
    }
  
    document.addEventListener("DOMContentLoaded", init );
        
}
