/*
Somos los jueces de un casting de Operación Triunfo. Esto podría ser bueno si no fuera que se ha inscrito
demasiada gente en las pruebas de audición. 
Para seleccionar a los mejores lo que se hace es lo siguiente:
    1 - Se agrupa un número determinado de participantes y se les asigna unas notas.
    2 - El participante con el mayor número de puntos de ese grupo es seleccionado.

Puede haber casos en los cuales varios participantes del mismo grupo tengan el mismo número de puntos máximos.
En ese caso, como somos muy vagos lo que haremos será seleccionarlos a todos los que tuvieran esa nota máxima.

Nos dan 3 variables:
    N con el número de grupos. Si N fuera 0 entonces no habría grupos
    P con el número de participantes de cada grupo
    matriz con todos los puntos que cada participante ha puntuado.

¿Cuantos participantes se seleccionarán y cuantos puntos en total tienen entre todos los seleccionados?

Output
Dos enteros representando el número de participantes seleccionados y la suma de sus puntos, separados por un espacio.

*/

const N = 3;
const P = 4;
const matriz = [[2,0,5,5],[5,7,4,6],[1,8,5,4]];
// Salida debe dar: 4 25

/*
const N = 3;
const P = 4;
const matriz = [[2,0,0,5],[5,7,4,6],[1,8,5,4]];
// Salida debe dar: 3 20 */


let ganadores = 0;
let total = 0;


// -----------------------------------------------
// Incluye el código que sea
let grupo = N-1;
while (grupo >= 0){
    matriz[grupo].sort().reverse();
    let indice = 0;
    while(indice < P && matriz[grupo][0] == matriz[grupo][indice]){
        ganadores++;
        total += matriz[grupo][indice];
        indice++;
    }
    grupo--;
}
console.table(matriz);
// -----------------------------------------------

console.log(ganadores + " " + total);
