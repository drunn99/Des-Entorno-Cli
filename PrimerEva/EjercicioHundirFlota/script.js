var grid = crearTablero();
console.table(grid);
crearPosiciones(grid);
console.table(grid);
document.getElementById("contenedor").innerHTML = generarHtml(grid);

//Crear un array bidimensional y lo llena de 0.
function crearTablero() {
    let grid = Array();
    for (let index = 0; index < 10; index++) {
        grid[index] = Array();
        for (let j = 0; j < 10; j++) {
            grid[index][j] = 0;
        }
    }
    return grid;
}

//Crea un array asistente para las semillas
function crearSeedAssist(grid) {
    let returnArray = Array();
    let contador = 1;
    for (let i = 0; i < grid.length; i++) {
        returnArray[i] = Array()
        for (let j = 0; j < grid[i].length; j++) {
            returnArray[i].push(contador);
            contador++;
        }
    }
    console.log(returnArray);
}

//Genera las naves de forma aleatoria.
function crearPosiciones(grid) {
    let contadorPortaviones = 1;
    let contadorAcorazados = 3;
    let contadorDestructores = 3;
    let contadorFragatas = 2;
    let tipoDeNave, semilla, casillaFinal, esApta = false, direccionDibujo, arrayValidez;
    let detenerEjecucion = 0;
    //Generamos naves mientras aún queden por generar
    while (contadorPortaviones + contadorAcorazados + contadorDestructores + contadorFragatas > 0) {
        //Generamos casillas nuevas mientras estas no sean aptas
        tipoDeNave = generaNaveAleatorias(contadorPortaviones, contadorAcorazados, contadorDestructores, contadorFragatas);
        direccionDibujo = Math.floor(Math.random() * 2);
        while (!esApta) {
            semilla = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            console.log(tipoDeNave);
            arrayValidez = comprobarPosicion(semilla, direccionDibujo, tipoDeNave, grid);
            esApta = arrayValidez[0];
            console.log(semilla + " seed");
            if (esApta) {
                casillaFinal = arrayValidez[2];
                console.log(" seed APTA");
            }
            debugger;
        }
        switch (tipoDeNave) {
            case 0:
                ponleUnos(semilla, casillaFinal, grid);
                contadorPortaviones--;
                break;
            case 1:
                ponleUnos(semilla, casillaFinal, grid);
                contadorAcorazados--;

                break;
            case 2:
                ponleUnos(semilla, casillaFinal, grid);
                contadorDestructores--;
                break;
            case 3:
                ponleUnos(semilla, semilla, grid);
                contadorFragatas--;
                break;
            default:
                console.error("Error");
                break;
        }
        esApta = false;
        detenerEjecucion++;
        if(detenerEjecucion > 10000){
            break;
        }
    }
    return grid;
}
/*
//Función que eliminará las semillas ya utilizadas y sus casillas colindantes
function actualizarSeedAssist(seedAssist, casilla1, casilla2) {

}
*/

//Rellena el array bidmensional con 1 en función de las casillas semilla y final.
function ponleUnos(semilla, casillaFinal, grid) {
    if (semilla == casillaFinal) {
        //Se dibuja una fragata
        grid[semilla[0]][semilla[1]] = 1;

    } else if (semilla[0] == casillaFinal[0]) {
        //Se dibujará en horizontal portavión/acorazado/destructor
        let distancia_mayor = semilla[1] > casillaFinal[1] ? [(semilla[1] - casillaFinal[1] - 1), semilla] : [(casillaFinal[1] - semilla[1] - 1), casillaFinal];
        grid[semilla[0]][semilla[1]] = 1;
        for (let i = distancia_mayor[0]; i > 0; i--) {
            grid[semilla[0]][distancia_mayor[1][1] - i] = 1;
        }
        grid[casillaFinal[0]][casillaFinal[1]] = 1;
    } else if (semilla[1] == casillaFinal[1]) {
        //Se dibujará en vertical portavión/acorazado/destructor
        let distancia_mayor = semilla[0] > casillaFinal[0] ? [(semilla[0] - casillaFinal[0] - 1), semilla] : [(casillaFinal[0] - semilla[0] - 1), casillaFinal];
        grid[semilla[0]][semilla[1]] = 1;
        for (let i = distancia_mayor[0]; i > 0; i--) {
            grid[distancia_mayor[1][0] - i][semilla[1]] = 1;
        }
        grid[casillaFinal[0]][casillaFinal[1]] = 1;
    }
}

//Genera un array que devuelve las casillas inicial(semilla) y final, así como si puede o no dibujarse sin tocar otras naves.
function comprobarPosicion(semilla, direccionDibujo, tipoDeNave, grid) {
    let arrayReturn = [];
    switch (tipoDeNave) {
        //Portaviones
        case 0:
            if (direccionDibujo == 0) {
                if (semilla[1] + 3 <= 9) {
                    //Portaviones desde semilla hacia la derecha
                    let casillaFinal = [semilla[0], semilla[1] + 3];
                    if (comprobarCasillas(semilla, casillaFinal, grid)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }

                } else {
                    //Portaviones desde semilla hacia la izquierda
                    let casillaFinal = [semilla[0], semilla[1] - 3];
                    if (comprobarCasillas(semilla, casillaFinal, grid)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                }

            } else {
                if (semilla[0] + 3 <= 9) {
                    //Portaviones desde semilla hacia abajo
                    let casillaFinal = [semilla[0] + 3, semilla[1]];
                    if (comprobarCasillas(semilla, casillaFinal, grid)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                } else {
                    //Portaviones desde semilla hacia arriba
                    let casillaFinal = [semilla[0] - 3, semilla[1]];
                    if (comprobarCasillas(semilla, casillaFinal, grid)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                }
            }
            break;
        //Acorazados
        case 1:
            if (direccionDibujo == 0) {
                if (semilla[1] + 2 <= 9) {
                    //Acorazado desde semilla hacia la derecha
                    let casillaFinal = [semilla[0], semilla[1] + 2];
                    if (comprobarCasillas(semilla, casillaFinal, grid)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                } else {
                    //Acorazado desde semilla hacia la izquierda
                    let casillaFinal = [semilla[0], semilla[1] - 2];
                    if (comprobarCasillas(semilla, casillaFinal, grid)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                }
            } else {
                if (semilla[0] + 2 <= 9) {
                    //Acorazado desde semilla hacia abajo
                    let casillaFinal = [semilla[0] + 2, semilla[1]];
                    if (comprobarCasillas(semilla, casillaFinal, grid)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                } else {
                    //Acorazado desde semilla hacia arriba
                    let casillaFinal = [semilla[0] - 2, semilla[1]];
                    if (comprobarCasillas(semilla, casillaFinal, grid)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                }
            }
            break;
        //Destructores
        case 2:
            if (direccionDibujo == 0) {
                if (semilla[1] + 1 <= 9) {
                    //Destructor desde semilla hacia la derecha
                    let casillaFinal = [semilla[0], semilla[1] + 1];
                    if (comprobarCasillas(semilla, casillaFinal, grid)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                } else {
                    //Destructor desde semilla hacia la izquierda
                    let casillaFinal = [semilla[0], semilla[1] - 1];
                    if (comprobarCasillas(semilla, casillaFinal, grid)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                }
            } else {
                if (semilla[0] + 1 <= 9) {
                    //Destructor desde semilla hacia abajo
                    let casillaFinal = [semilla[0] + 1, semilla[1]];
                    if (comprobarCasillas(semilla, casillaFinal, grid)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                } else {
                    //Destructor desde semilla hacia arriba
                    let casillaFinal = [semilla[0] - 1, semilla[1]];
                    if (comprobarCasillas(semilla, casillaFinal, grid)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                }
            }
            break;
        //Fragatas
        case 3:
            if (comprobarCasillas(semilla, semilla, grid)) {
                arrayReturn = [true, semilla, semilla];
                return arrayReturn;
            } else {
                arrayReturn = [false];
                return arrayReturn;
            }
            break;
        default:
            console.log("Caso defectuoso " + semilla);
            return [false];
            break;
    }
}

//Comprueba las 9 casillas entorno a dos de estas para comprobar que la futura nave no se tocará con otra
function comprobarCasillas(casilla1, casilla2, grid) {
    for (let i = casilla1[0] - 1; i < casilla1[0] + 3; i++) {
        for (let j = casilla1[1] - 1; j < casilla1[1] + 3; j++) {
            if (i > -1 && i < 10 && j > -1 && j < 10 && grid[i][j] == 1) {
                return false;
            }
        }
    }
    for (let i = casilla2[0] - 1; i < casilla2[0] + 3; i++) {
        for (let j = casilla2[1] - 1; j < casilla2[1] + 3; j++) {
            if (i > -1 && i < 10 && j > -1 && j < 10 && grid[i][j] == 1) {
                return false;
            }
        }
    }
    return true;
}

//Genera el html a mostrar
function generarHtml(grid) {
    let cadenaDivs = "";
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 0) {
                cadenaDivs += "<div class='celda'></div>";
            } else {
                cadenaDivs += "<div class='celda ocupada'></div>";
            }
        }
    }
    return cadenaDivs;
}

//Genera naves aleatoris (siempre que su contador sea > 0)
function generaNaveAleatorias(contadorPortaviones, contadorAcorazados, contadorDestructores, contadorFragatas) {
    let arrayContadores = new Map();
    arrayContadores.set(0, contadorPortaviones);
    arrayContadores.set(1, contadorAcorazados);
    arrayContadores.set(2, contadorDestructores);
    arrayContadores.set(3, contadorFragatas);
    let arrayContadoresMayorCero = [];
    for (let i = 0; i < arrayContadores.size; i++) {
        if (arrayContadores.get(i) > 0) {
            arrayContadoresMayorCero.push(i);
        }
    }
    arrayContadoresMayorCero = shuffle(arrayContadoresMayorCero);
    console.log(arrayContadoresMayorCero);
    return arrayContadoresMayorCero[0];
}

//Baraja el array de naves restantes por generar
function shuffle(array) {
    let indice = array.length, indiceAleatorio;
    let aux;
    while (indice > 0) {
        indiceAleatorio = Math.floor(Math.random() * indice);
        indice--;
        aux = array[indice];
        array[indice] = array[indiceAleatorio];
        array[indiceAleatorio] = aux;
    }
    return array;
}