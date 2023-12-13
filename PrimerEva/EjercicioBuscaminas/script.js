let height = 20;
let width = 20;
let minas = 100;
const colors = ["blue","green","red","purple","darkred","cyan","black"];

//Bucle que se asegura que no haya más minas que casillas posibles
/*
while (height * width < minas) {
    height = parseInt(prompt("Introduce el ancho del tablero"));
    width = height;
    minas = parseInt(prompt("Introduce el número de minas"));
}
*/

tablero = crearTablero(height, width, minas);
tablero = analizarTablero(tablero);
document.getElementById("tablero").innerHTML = generarHtml(tablero);
console.table(tablero);

let celdas = document.querySelectorAll(".celda");
celdas.forEach(celda => {
    celda.addEventListener("click", () => {
        if (celda.hasAttribute("hidden")) {
            celda.toggleAttribute("hidden");
            let indices = celda.getAttribute("id").split(";");
            let content = tablero[indices[0]][indices[1]];
            if (content != "💣") {
                if (content > 0) {
                    //Introducimos el valor de la celda clickada si este no es una mina y es mayor que cero
                    celda.firstChild.innerHTML = tablero[indices[0]][indices[1]];
                    celda.style["background-color"] = "darkgray";
                    celda.firstChild.style["color"] = colors[content-1];
                } else {
                    /*
                    Bucle que recorre las 8 celdas colindantes y muestra su contenido si no es 0 
                    además de eliminar su listener del evento "CLICK"
                    */
                    for (let i = -1; i < 2; i++) {
                        for (let j = -1; j < 2; j++) {
                            celda.style["background-color"] = "darkgray";
                            compareNextCell(`${(parseInt(indices[0]) + i) + ";" + (parseInt(indices[1]) + j)}`);
                        }
                    }
                }
            } else {
                //Bucle para mostrar todas las minas una vez se clicka una (Game Over!)
                celdas.forEach(celdaMina => {
                    let celdaXY = celdaMina.getAttribute("id").split(";");
                    if (tablero[celdaXY[0]][celdaXY[1]] == "💣") {
                        celdaMina.firstChild.innerHTML = "💣";
                    }
                });
                alert("Has muerto :(");
            }
        }
    })
});


celdas.forEach(celda => {
    celda.addEventListener("mouseup", (ev) => {
        if (ev.button = 2 && celda.hasAttribute("hidden")) {
            //Prevención de menú contextual al hacer click derecho
            celda.addEventListener("contextmenu", (ev2) => {
                ev2.preventDefault();
                celda.firstChild.innerHTML = celda.firstChild.innerHTML == "🚩" ? "" : "🚩";
            })
        }
    })
})

// - - - FUNCIONES - - -

function crearTablero(height, width, minas) {
    tablero = [];
    //Creamos tablero vacío
    for (let i = 0; i < height; i++) {
        tablero[i] = new Array();
        for (let j = 0; j < width; j++) {
            tablero[i][j] = 0;
        }
    }
    //Rellenamos con minas
    while (minas > 0) {
        let x = Math.floor(Math.random() * width);
        let y = Math.floor(Math.random() * height);
        if (tablero[x][y] == 0) {
            tablero[x][y] = "💣";
            minas--;
        }
    }
    return tablero;
}

//Rellena el tablero con los numeros de minas que colindan a una casilla
function analizarTablero(tablero) {
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] == 0) {
                tablero[i][j] = analizarCasilla(i, j, tablero);
            }
        }
    }
    return tablero;
}

//Devuelve el numero de minas alrededor de una casilla
function analizarCasilla(x, y, tablero) {
    let contador = 0;
    for (let i = x - 1; i < x + 2; i++) {
        for (let j = y - 1; j < y + 2; j++) {
            if (i > -1 && i < height && j > -1 && j < width && tablero[i][j] == "💣") {
                contador++;
            }
        }
    }
    return contador;
}

//Genera el tablero a jugar
function generarHtml(tablero) {
    let divs = "";
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            divs += `<div id="${i + ";" + j}" class="celda" hidden><div class="text"></div></div>`;
        }
    }
    return divs;
}

/*
Busca la siguiente celda proporcionada por la línea 38
*/
function compareNextCell(index) {
    let nextCell = document.getElementById(index);
    nextCell?.click();
    nextCell?.removeEventListener("click", nextCell);
    nextCell?.removeEventListener("mouseup", nextCell);
}