let nombre = prompt("Escribe tu nombre");
let apellidos = prompt("Escribe tus apellidos");
let salario = parseFloat(prompt("Indica tu salario"));
let edad = parseInt(prompt("Indice tu edad"));

imprimeDatos(salario,nombre,apellidos,edad);

function imprimeDatos(salario,nombre,apellidos,edad){
    console.log = "ImprimeDatos";
    salarioFinal = calculoSalario(salario);
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = `<p>Nombre = ${nombre}</p>`
     + `<p>Apellidos = ${apellidos}</p>` 
     + `<p>edad = ${edad}</p>`
     + `<p>salario = ${salario}</p>` 
     + `<p>salario final = ${Math.floor(salarioFinal)}</p>`;

}

function calculoSalario(salario){
    consoleLog = "CalculoSalario";
    let salarioFinal = salario;
    if(salario < 2000 && salario > 1000){
        if(edad > 45){
            salarioFinal *= 1.05;
        } else {
            salarioFinal *= 1.10;
        }
    } else if(salario < 1000 && salario > 0){
        if(edad<30){
            salarioFinal = 1100;
        } else if(edad>=30 && edad <= 45){
            salarioFinal *= 1.03;
        } else {
            salarioFInal *= 1.15;
        }
    }
    return salarioFinal;
}