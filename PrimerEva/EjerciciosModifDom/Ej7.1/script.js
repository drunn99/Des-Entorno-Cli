
let numeroLi = 0;
let textoEntrada = prompt("Introduce tu texto");
let all = document.children;

console.error(all);

while (numeroLi < 1 || numeroLi > 10) {
    numeroLi = prompt("Indica donde colocarlo");
    if((numeroLi < 1 || numeroLi > 10) && numeroLi != null){
        alert("Introduce un numero válido (1-10)")
    }
    if(numeroLi == null){
        break;
    }
}

if (textoEntrada != null && numeroLi != null) {
    let lista = document.getElementsByTagName("ol")[0];
    let hijoTarget = document.querySelectorAll(`li:nth-child(${numeroLi})`)[0];
    let replacement = document.createElement("li");
    replacement.innerHTML = `<b>${textoEntrada}</b>`;
    lista.insertBefore(replacement,hijoTarget);
} 