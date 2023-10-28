/*
A veces, cuando lavamos la ropa en la lavadora los calcetines... ¡¡desaparecen!!
Ahora estás delante de tu lavadora y la vacías. Mientras lo haces quieres saber si has perdido calcetines y cuales.

Input
Nos dan un array:
    arr, que en cada celda contiene un string que consiste en; tipoRopa(string) + tamanyoRopa(entero) +  colorRopa(string). Podría ser un array vacío
Calcetines tienen el tipoRopa -> calcetin
Pantalones tienen el tipoRopa -> pantalon
Camisetas tienen el tipoRopa -> camiseta
...

Dos calcetines forman un par si tienen el mismo tipoRopa, tamanyoRopa y colorRopa
Cualquier calcetín que salga de la lavadora que no es parte de un par te indica que has perdido el otro par

Output
Primera linea: El número de calcetines desaparecidos
Siguientes líneas: El tamanyoRopa y el colorRopa(separado por un espacio) de todos los calcetines perdidos separados por líneas. 
Nada si todos los calcetines tienen pareja.

Como nota importante los calcetines deben estar ordenados primero por orden númerico y después por orden alfabético. 
Significa que los calcetines deben estar ordenados por su tamaño y si tienen el mismo tamaño por su color.

Algo que se valorará es que se realice con MAPAS (aunque en caso de no saber realizarlo mediante este tipo de objetos mejor que esté con Arrays o de la forma que se pueda)

Ejemplo:
const arr = ["camiseta 2 blue", "calcetin 42 rojo", "calcetin 42 rojo", "jersey 3 marron", "calcetin 37 gris"]
/*
Salida
1
37 gris
*/
const arr = ["camiseta 2 blue", "calcetin 42 rojo", "calcetin 42 rosa", "jersey 3 marron", "calcetin 37 gris"]
/*
Salida
3
37 gris
42 rojo
42 rosa
*/
//const arr = ["camiseta 2 blue", "calcetin 42 rojo", "calcetin 42 rojo", "jersey 3 marron", "calcetin 37 gris"]
const calcetinesPerdidos = new Map(); // o map
// -----------------------------------------------
// Incluye el código que sea

var calcetines = new Map();
//Rellenamos el array Calcetines solo con calcetines
for (let prenda of arr) {
    if (getTipos(prenda)[0] == "calcetin") {
        if (!calcetines.has(prenda)) {
            calcetines.set(prenda, 1)
        } else {
            calcetines.set(prenda, calcetines.get(prenda) + 1);
        }
    }
}

//Reordenamos el mapa en función de su contenido, para ello será más fácil devolverlo a array;
let arrayOrdenacion = [...calcetines];

//Como el contenido del array son strings podemos ordenarlos automáticamente (37 también será menor que 42 en código unicode)
arrayOrdenacion.sort();

//Rellenamos el array CalcetinesPerdidos con el contenido ordenado)
for (let prenda of arrayOrdenacion) {
    //Guardamos solo aquellos que sean impares (Como van en parejas siempre que sean impares del mismo tipo, se habrá perdido 1)
    if (prenda[1] % 2 > 0) {
        calcetinesPerdidos.set(prenda[0], prenda[1]);
    }
}


//Devuelve un array con el contenido separado [tipoDePrenda,Numero,Color]
function getTipos(cadena) {
    let tipos = [];
    tipos = cadena.split(" ");
    return tipos;
}

// -----------------------------------------------

console.log(calcetinesPerdidos.size); // o calcetines Perdidos.size en caso de que se use Map

// Y aquí un bucle para mostrar los perdidos
// -----------------------------------------------
// Incluye el código que sea

for (let calcetinesImprimir of calcetinesPerdidos) {
    let arrayTipos = getTipos(calcetinesImprimir[0]);
    console.log(arrayTipos[1] + " " + arrayTipos[2]);
}





// -----------------------------------------------
