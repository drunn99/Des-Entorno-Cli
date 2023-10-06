let body = document.body;
let htmlCuadrados = ""; 
for (let index = 0; index < 2000; index++) {
    htmlCuadrados += generarNuevoCuadrado();
    console.log(index);
}

console.log(htmlCuadrados);
body.innerHTML = htmlCuadrados;

function generarNuevoCuadrado(){
    let top = Math.floor(Math.random()*1080); 
    let left = Math.floor(Math.random()*document.body.getBoundingClientRect().width);
    let cuadrado = `<div style = "background-color : ${generarColorAleatorio()}; top: ${top}px;left: ${left}px"></div>`;
    return cuadrado;
}

function generarColorAleatorio(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    let selector = 0;
    for(let i = 0; i < 6; i++){
        selector = Math.floor(Math.random()*15);
        hexColor += hex[selector];
    }
    return hexColor;
}

