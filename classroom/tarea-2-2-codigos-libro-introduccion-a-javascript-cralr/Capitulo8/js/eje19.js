/**
 * 
 * Código js para el Ejercicio 19 Capitulo 8 Libro Javier Eguíluz Pérez
 * Mejorar el tooltip propuesto añadiendo las siguientes características:
 * 1. Que el tooltip no se muestre instantáneamente, sino que transcurra un cuarto de segundo hasta que se muestre (pista: DELAY).
 * 2. Que exista una separación horizontal de 15 píxel entre el puntero del ratón y el tooltip (pista: OFFSETX)
 * 3. Que el tooltip se muestre en la parte superior del puntero del ratón y no en la parte inferior (pista: ABOVE)
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

{

    let enlace;
    
    let init = function() {
        enlace = document.getElementsByTagName("a")[0];
        overlib_pagedefaults(WIDTH,150,FGCOLOR,'#ffffcc',BGCOLOR,'#666666',TEXTFONT,"Arial,Helvetica, Verdana",TEXTSIZE,".8em",DELAY,250,OFFSETX,15,ABOVE);
        enlace.addEventListener("mouseover",ratonSobreTooltip);
        enlace.addEventListener("mouseout",ratonFueraTooltip);
    }

    let ratonSobreTooltip= function(){
        return overlib("Prueba de tooltip básico y sencillo.");
    }

    let ratonFueraTooltip = function(){
        return nd();
    }
    
    document.addEventListener("DOMContentLoaded", init);
}