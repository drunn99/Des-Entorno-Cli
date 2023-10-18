let numeros = 1;
let media = 0;
let contador = 0;

while (numeros != 0) {
    numeros = parseInt(prompt("Introduce un número (0 para terminar el programa)"));
    if (numeros != 0 && !isNaN(numeros)) {
        contador += 1;
        media += numeros;
    } else if (isNaN(numeros)){
        break;
    }
}

if (contador > 0 && !isNaN(numeros)) {
    let resultado = (media / contador);
    document.body.innerHTML = `<h1>La media es: ${resultado}</h1>`;
} else {
    document.body.innerHTML = "No se han proporcionado números, el usuario ha cancelado";
}

