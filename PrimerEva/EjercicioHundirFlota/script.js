var grid = crearTablero();
crearPosiciones(grid);
console.table(grid);

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
            console.log(direccionDibujo + " " + semilla + " " + tipoDeNave);
            //casillaApta = comprobarPosicion(semilla, direccionDibujo, tipoDeNave, grid);
        }
        
        break;
    }
    return grid;
}

function comprobarPosicion(semilla, direccionDibujo, tipoDeNave, grid) {
    let 
    switch (tipoDeNave) {
        //Portaviones
        case 0:
            if (direccionDibujo == 0) {
                if (semilla[0] + 3 <= 9) {
                    let casillaFinal = [semilla[0] + 3, semilla[1]];
                    if(comprobarCasillas(semilla,casillaFinal)){
                        for (let i = 0; i < 4; i++) {
                            grid[semilla[0]+i,semilla[1]];
                        }
                    }
                } else {
                    let casillaFinal = [semilla[0] - 3, semilla[1]];
                    if(comprobarCasillas(semilla,casillaFinal)){
                        for (let i = 0; i < 4; i++) {
                            grid[semilla[0]-i,semilla[1]];
                        }
                    }
                }
            } else {
                if (semilla[1] + 3 <= 9) {
                    let casillaFinal = [semilla[0], semilla[1] + 4];
                    if(comprobarCasillas(semilla,casillaFinal)){
                        for (let i = 0; i < 4; i++) {
                            grid[semilla[0],semilla[1]+i];
                        }
                    }
                } else {
                    let casillaFinal = [semilla[0], semilla[1] - 4];
                    if(comprobarCasillas(semilla,casillaFinal)){
                        for (let i = 0; i < 4; i++) {
                            grid[semilla[0]-i,semilla[1]-i];
                        }
                    }
                }
            }
            break;
            //Acorazados
        case 1:
            if (direccionDibujo == 0) {
                if (semilla[0] + 3 <= 9) {
                    let casillaFinal = [semilla[0] + 3, semilla[1]];
                    if(comprobarCasillas(semilla,casillaFinal)){
                        for (let i = 0; i < 3; i++) {
                            grid[semilla[0]+i,semilla[1]];
                        }
                    }
                } else {
                    let casillaFinal = [semilla[0] - 3, semilla[1]];
                    if(comprobarCasillas(semilla,casillaFinal)){
                        for (let i = 0; i < 3; i++) {
                            grid[semilla[0]-i,semilla[1]];
                        }
                    }
                }
            } else {
                if (semilla[1] + 3 <= 9) {
                    let casillaFinal = [semilla[0], semilla[1] + 3];
                    if(comprobarCasillas(semilla,casillaFinal)){
                        for (let i = 0; i < 3; i++) {
                            grid[semilla[0],semilla[1]+i];
                        }
                    }
                } else {
                    let casillaFinal = [semilla[0], semilla[1] - 3];
                    if(comprobarCasillas(semilla,casillaFinal)){
                        for (let i = 0; i < 3; i++) {
                            grid[semilla[0],semilla[1]-i];
                        }
                    }
                }
            }
            break;
            //Destructores
        case 2:
            if (direccionDibujo == 0) {
                if (semilla[0] + 2 <= 9) {
                    let casillaFinal = [semilla[0] + 2, semilla[1]];
                    if(comprobarCasillas(semilla,casillaFinal)){
                        for (let i = 0; i < 2; i++) {
                            grid[semilla[0]+i,semilla[1]];
                        }
                    }
                } else {
                    let casillaFinal = [semilla[0] - 2, semilla[1]];
                    if(comprobarCasillas(semilla,casillaFinal)){
                        for (let i = 0; i < 2; i++) {
                            grid[semilla[0]-i,semilla[1]];
                        }
                    }
                }
            } else {
                if (semilla[1] + 2 <= 9) {
                    let casillaFinal = [semilla[0], semilla[1] + 2];
                    if(comprobarCasillas(semilla,casillaFinal)){
                        for (let i = 0; i < 2; i++) {
                            grid[semilla[0],semilla[1]+i];
                        }
                    }
                } else {
                    let casillaFinal = [semilla[0], semilla[1] - 2];
                    if(comprobarCasillas(semilla,casillaFinal)){
                        for (let i = 0; i < 2; i++) {
                            grid[semilla[0],semilla[1]-i];
                        }
                    }
                }
            }
            break;
            //Fragatas
        case 3:

            break;
    }
}

function comprobarCasillas(casilla1, casilla2) {
    for (let i = casilla1[0] - 1; i < 3; i++) {
        for (let j = casilla1[1] - 1; j < 3; j++) {
                if (casilla1[i][j] == 1) {
                    return false;
            }
        }
    }
    for (let i = casilla2[0] - 1; i < 3; i++) {
        for (let j = casilla2[1] - 1; j < 3; j++) {
                if (casilla2[i][j] == 1) {
                    return false;
                }
        }
    }
    return true;
}