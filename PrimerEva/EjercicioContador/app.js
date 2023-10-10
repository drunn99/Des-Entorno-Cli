var valorDiv = document.getElementById("value");
var valor = 0;

valorDiv.innerHTML = valor;

document.getElementsByClassName("decrease")[0].addEventListener("click", decrementar);
document.getElementsByClassName("increase")[0].addEventListener("click", incrementar);
document.getElementsByClassName("reset")[0].addEventListener("click", reset);

function incrementar() {
    valor++;
    if (valor > 0) {
        valorDiv.style = "color: green;"
    } else if(valor == 0){
        valorDiv.style = "color: black;"
    }
    valorDiv.innerHTML = valor;
}

function decrementar() {
    valor--;
    if (valor < 0) {
        valorDiv.style = "color: red;"
    }  else if (valor == 0){
        valorDiv.style = "color: black;"
    }
    valorDiv.innerHTML = valor;
}

function reset() {
    valor = 0;
    valorDiv.style = "color: black;"
    valorDiv.innerHTML = valor;
}

