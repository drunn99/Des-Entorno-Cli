var grid = crearTablero();
console.table(grid);


function crearTablero (){
    let grid = Array();
    for (let index = 0; index < 10; index++) {
        grid[index] = Array();
        for (let j = 0; j < 10; j++) {
            grid[index][j] = 0;
        }
    }
    return grid;
}

function crearPosiciones(grid){
    
}

function comprobarPosicion(){

}