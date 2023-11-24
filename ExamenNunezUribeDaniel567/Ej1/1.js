/**
 * Crea dos funciones:
 * Una función "calcularMedia" que recibe un array de notas y devuelve la nota media
 * Una función "calcularNotas" a la que se le puedan pasar varios argumentos (una serie de notas, como mínimo dos) y lo que debe devolver es un texto
 *   Si la nota media es menor que 5 retornamos 'Suspenso';
 *   Entre 5 y 7 retornamos 'Aprobado';
 *   Entre 7 y 9 retornamos 'Notable';
 *   Entre 9 y 10 retornamos 'Sobresaliente';
 *   Si la nota media es 10 retornamos 'Matricula'
 * 
 * Las notas introducidas pueden ser entre 0 y 10 (ambos incluidos)
 */

// -----------------------------------------------
// A partir de aquí hay que crear la función
function calcularMedia(arrayNotas) {
    let media = 0;
    arrayNotas.forEach(element => {
        media += element;
    });
    return media / arrayNotas.length;
}

function calcularNotas(...notas) {
    let media = calcularMedia(notas);;
    return media == 10 ? "Matricula" : media >= 9 ? "Sobresaliente" : media >= 7 ? "Notable" : media >= 5 ? "Aprobado" : media >= 0 ? "Suspenso" : "Error";
}




// -----------------------------------------------

let resultado;
resultado = calcularNotas(5, 6, 6);
console.log("Media de la clase: " + resultado); // resultado = Aprobado

resultado = calcularNotas(10, 10, 10, 10);
console.log("Media de la clase: " + resultado); // resultado = Matrícula

resultado = calcularNotas(3, 4, 9, 1, 1, 0);
console.log("Media de la clase: " + resultado); // resultado = Suspenso

resultado = calcularNotas(3, 4, 9, 1, 1, 0, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9);
console.log("Media de la clase: " + resultado); // resultado = Notable
