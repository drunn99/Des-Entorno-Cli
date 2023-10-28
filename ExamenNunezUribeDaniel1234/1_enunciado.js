/*
Dado un número N suma todos los números pares desde el 2 hasta N.
Output -> Línea 1: Un entero K, la suma de todos los números pares en el rango de 2 a N (Incluidos)

Limites: 
0 <= N <= 10000

Ejemplo:
N 10
Output 30
*/

const N = 0;
// -----------------------------------------------
// Incluye el código que sea
let suma = 0;
for (let i = N; i > 1; i--){
    suma+= i%2 == 0 ? i : 0;
}
// ---------------------------------------

    console.log(suma);
