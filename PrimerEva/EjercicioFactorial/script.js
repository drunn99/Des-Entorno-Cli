
let valor = parseInt(prompt("Indica un numero"));
let valorhtml = document.getElementById("valorhtml");

valorhtml.innerHTML = calcularFactorial(valor);
function calcularFactorial (valor){
    return valor == 0 ? 1 : valor * calcularFactorial(valor-1);
}