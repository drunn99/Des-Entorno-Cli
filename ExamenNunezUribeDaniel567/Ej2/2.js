/**
 * Tenemos muchos arrays que contienen tanto texto como números entre sus elementos.
 * Vemos interesante añadir un método a todos los arrays que devuelva el número de números que contiene (lo llamaremos numeroDeNumeros).
 * 
 * Modificar el prototipo de los arrays para añadir dicho método
 */

// -----------------------------------------------
// A partir de aquí hay que crear la función

Array.prototype.numeroDeNumeros = function(){
    let cont = 0;

    [...this.entries()].forEach(element => {
        if(!isNaN(element[1])){
            cont++;
        }
    });
    return cont;
}

// -----------------------------------------------


let arr1 = [5,5,5,5,5];
console.log("Hay " + arr1.numeroDeNumeros() + " numeros en el array1"); //Hay 5 numeros en el array1

let arr2 = ["aprobado","suspenso","sobresaliente","bien","matricula"];
console.log("Hay " + arr2.numeroDeNumeros() + " numeros en el array2"); //Hay 0 numeros en el array2

let arr3 = [5,5,5,"5",5];
console.log("Hay " + arr3.numeroDeNumeros() + " numeros en el array3"); //Hay 5 numeros en el array3

let arr4 = ["aprobado","suspenso","sobresaliente",10,5];
console.log("Hay " + arr4.numeroDeNumeros() + " numeros en el array4"); //Hay 2 numeros en el array4

let arr5 = ["6aprobado","4suspenso","10sobresaliente",5,5];
console.log("Hay " + arr5.numeroDeNumeros() + " numeros en el array5"); //Hay 2 numeros en el array5