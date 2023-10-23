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

//Genera las naves de forma aleatoria.
function crearPosiciones(grid) {
    let contadorPortaviones = 1;
    let contadorAcorazados = 3;
    let contadorDestructores = 3;
    let contadorFragatas = 2;
    let tipoDeNave, semilla, casillaFinal;
    let forzarDetencion = 0;
    //Generamos naves mientras aún queden por generar
    while (contadorPortaviones + contadorAcorazados + contadorDestructores + contadorFragatas > 0) {
        //Generamos casillas nuevas mientras estas no sean aptas
        let casillaApta = false;
        while (!casillaApta) {
            let direccionDibujo = Math.floor(Math.random() * 2);
            semilla = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            tipoDeNave = Math.floor(Math.random() * 4);
            let arrayValidez = comprobarPosicion(semilla, direccionDibujo, tipoDeNave, grid);
            casillaApta = arrayValidez[0];
            if (casillaApta) {
                casillaFinal = arrayValidez[2];
                console.log(semilla);
            }
        }
        switch (tipoDeNave) {
            case 0:
                if (contadorPortaviones > 0) {
                    ponleCeros(semilla, casillaFinal, grid);
                    contadorPortaviones--;
                } else {
                    console.error("Ya no pueden haber más portaviones");
                    break;
                }
                break;
            case 1:
                if (contadorAcorazados > 0) {
                    ponleCeros(semilla, casillaFinal, grid);
                    contadorAcorazados--;
                } else {
                    console.error("Ya no pueden haber más acorazados");
                    break;
                }
                break;
            case 2:
                if (contadorDestructores > 0) {
                    ponleCeros(semilla, casillaFinal, grid);
                    contadorDestructores--;
                } else {
                    console.error("Ya no pueden haber más destructores");
                    break;
                }
                break;
            case 3:
                if (contadorFragatas > 0) {
                    ponleCeros(semilla, semilla, grid);
                    contadorFragatas--;
                } else {
                    console.error("Ya no pueden haber más fragatas");
                    break;
                }
                break;
            default:
                console.error("Error");
                break;
        }
        forzarDetencion++;
        if(forzarDetencion == 5000){
            break;
        }
    }
    return grid;
}

//Rellena el array bidmensional con 1 en función de las casillas semilla y final.
function ponleCeros(semilla, casillaFinal, grid) {
    let casillasPorDibujar = [semilla, casillaFinal];
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
            return null;
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


function generarHtml (grid){
    let cadenaDivs = "";
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == 0){
                cadenaDivs += "<div class='celda'></div>";
            } else {
                cadenaDivs += "<div class='celda ocupada'></div>";
            }
        }
    }
    return cadenaDivs;
}