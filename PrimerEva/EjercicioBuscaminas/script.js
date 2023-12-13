let height = 10;
let width = 10;
let minas = 10;

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
            if (tablero[indices[0]][indices[1]] != "💣") {
                if (tablero[indices[0]][indices[1]] > 0) {
                    celda.firstChild.innerHTML = tablero[indices[0]][indices[1]];
                } else {
                    celda.innerHTML = casilla0(indices[0], indices[1]);
                }
            } else {
                celda.firstChild.innerHTML = tablero[indices[0]][indices[1]];
                alert("Has muerto :(");
            }
        } else {

        }
    })
});


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


function generarHtml(tablero) {
    let divs = "";
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            divs += `<div id="${i + ";" + j}" class="celda" style="width:${100 / width}%" hidden><div class="text"></div></div>`;
        }
    }
    return divs;
}

function casilla0(x, y) {
    console.log(x, y);
    if (tablero[x][y] > 1) {
        return tablero[x][y];
    } else {
        if (x < 9)
            casilla0(x++, y);
        if (x > 0)
            casilla0(x--, y);
        if (y < 9)
            casilla0(x, y++);
        if (y > 0)
            casilla0(x, y--);
    }
}

/*
function generarHtmlFinal(tablero) {
    let cadenaDivs = "";
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            cadenaDivs += "<div class='celda' style='width:"+100/width+"%'><div class='text'>";
            if (tablero[i][j] == "💣") {
                cadenaDivs += "💣";
            } else {
                cadenaDivs += tablero[i][j];
            }
            cadenaDivs += "</div></div>";
        }
    }
    return cadenaDivs;
}
*/