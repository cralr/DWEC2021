/**
 * JS para ejercicio 8 Arrays
 * Indica la diferencia entre los siguientes métodos, 
 * y demuestra su uso con algunos arrays:  Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()
 * 
 * @author Rafael Miguel Cruz Álvarez
 * 
 */

 {

    let elementoP;
    const array = [1,2,3,4,10,20];
    let init = function(){
        elementoP = document.getElementById("eje8");
        mostrarEjemplos();
    
    }

    let mostrarEjemplos = function(){
        elementoP.innerHTML += `Array: ${array} </br>`;
        elementoP.innerHTML += `</br><b>forEach():</b> recorre el array mostrando el índice y el valor del mismo.</br>`;
        array.forEach(function (valor, indice) {
        elementoP.innerHTML += `Índice: ${indice} y Valor: ${valor}.<br/>`;
        });

        elementoP.innerHTML += `<br><b>every():</b> Determina si todos los elementos en el array satisfacen una condición.</br>
        Todos los elementos son mayor que 10. 
        ${array.every(function (valor) {
            return valor > 10;
        }) } </br>`;

        elementoP.innerHTML += `</br><b>some():</b> Comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.</br>
        Algún elemento es mayor que 5. 
        ${array.some(function (valor) {
            return valor > 5;
        }) } </br>`;

        elementoP.innerHTML += `</br><b>filter():</b> Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.</br>
        Nuevo array solo con los mayores de 5.` 
        const array2 = array.filter(function (valor) { 
            return valor > 5; 
        });
        elementoP.innerHTML += `</br>Resultado del nuevo array= ${array2} </br>`;

    }
    


    

    document.addEventListener("DOMContentLoaded",init);

 }