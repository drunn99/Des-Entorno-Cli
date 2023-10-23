var grid = crearTablero();
crearPosiciones(grid);
console.table(grid);

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
    let casillaApta = false;
    while (contadorPortaviones + contadorAcorazados + contadorDestructores + contadorFragatas != 0) {
        while (!casillaApta) {
            let direccionDibujo = Math.floor(Math.random() * 2);
            let semilla = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            let tipoDeNave = Math.floor(Math.random() * 4);
            let arrayValidez = comprobarPosicion(semilla, direccionDibujo, tipoDeNave, grid);
            console.log(direccionDibujo + " " + semilla + " " + tipoDeNave);
            casillaApta = arrayValidez[0];
            if(casillaApta){
                let casillaFinal = arrayValidez[2];
            }
        }
        switch(tipoDeNave){
            case 0:
                if(contadorPortaviones > 1){
                    
                }

        }
    }
    return grid;
}

//Rellena el array bidmensional con 1 en función de las casillas semilla y final.


//Genera un array que devuelve las casillas inicial(semilla) y final, así como si puede o no dibujarse sin tocar otras naves y la dirección en la que ha de dibujarse (1,2,3 ó 4).
function comprobarPosicion(semilla, direccionDibujo, tipoDeNave, grid) {
    let arrayReturn = [];
    switch (tipoDeNave) {
        //Portaviones
        case 0:
            if (direccionDibujo == 0) {
                if (semilla[0] + 3 <= 9) {
                    //Portaviones desde semilla hacia la derecha
                    let casillaFinal = [semilla[0] + 3, semilla[1]];
                    if (comprobarCasillas(semilla, casillaFinal)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }

                } else {
                    //Portaviones desde semilla hacia la izquierda
                    let casillaFinal = [semilla[0] - 3, semilla[1]];
                    if (comprobarCasillas(semilla, casillaFinal)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                }

            } else {
                if (semilla[1] + 3 <= 9) {
                    //Portaviones desde semilla hacia abajo
                    let casillaFinal = [semilla[0], semilla[1] + 4];
                    if (comprobarCasillas(semilla, casillaFinal)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                } else {
                    //Portaviones desde semilla hacia arriba
                    let casillaFinal = [semilla[0], semilla[1] - 4];
                    if (comprobarCasillas(semilla, casillaFinal)) {
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
                if (semilla[0] + 2 <= 9) {
                    //Acorazado desde semilla hacia la derecha
                    let casillaFinal = [semilla[0] + 2, semilla[1]];
                    if (comprobarCasillas(semilla, casillaFinal)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                } else {
                    //Acorazado desde semilla hacia la izquierda
                    let casillaFinal = [semilla[0] - 2, semilla[1]];
                    if (comprobarCasillas(semilla, casillaFinal)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                }
            } else {
                if (semilla[1] + 2 <= 9) {
                    //Acorazado desde semilla hacia abajo
                    let casillaFinal = [semilla[0], semilla[1] + 2];
                    if (comprobarCasillas(semilla, casillaFinal)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                } else {
                    //Acorazado desde semilla hacia arriba
                    let casillaFinal = [semilla[0], semilla[1] - 2];
                    if (comprobarCasillas(semilla, casillaFinal)) {
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
                if (semilla[0] + 1 <= 9) {
                    //Destructor desde semilla hacia la derecha
                    let casillaFinal = [semilla[0] + 1, semilla[1]];
                    if (comprobarCasillas(semilla, casillaFinal)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                } else {
                    //Destructor desde semilla hacia la izquierda
                    let casillaFinal = [semilla[0] - 1, semilla[1]];
                    if (comprobarCasillas(semilla, casillaFinal)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                }
            } else {
                if (semilla[1] + 1 <= 9) {
                    //Destructor desde semilla hacia abajo
                    let casillaFinal = [semilla[0], semilla[1] + 1];
                    if (comprobarCasillas(semilla, casillaFinal)) {
                        arrayReturn = [true, semilla, casillaFinal];
                        return arrayReturn;
                    } else {
                        arrayReturn = [false];
                        return arrayReturn;
                    }
                } else {
                    //Destructor desde semilla hacia arriba
                    let casillaFinal = [semilla[0], semilla[1] - 1];
                    if (comprobarCasillas(semilla, casillaFinal)) {
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
            if (comprobarCasillas(semilla, semilla)) {
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
function comprobarCasillas(casilla1, casilla2,grid) {
    for (let i = casilla1[0] - 1; i < 3; i++) {
        for (let j = casilla1[1] - 1; j < 3; j++) {
            if (i > -1 && i < 10 && j > -1 && j < 10 && grid[i][j] == 1) {
                return false;
            }
        }
    }
    for (let i = casilla2[0] - 1; i < 3; i++) {
        for (let j = casilla2[1] - 1; j < 3; j++) {
            if (i > -1 && i < 10 && j > -1 && j < 10 && grid[i][j] == 1) {
                return false;
            }
        }
    }
    return true;
}