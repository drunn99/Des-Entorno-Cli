let nif = prompt("Introduce tu NIF");
let validated = validarNif(nif) ? "Tu NIF es correcto 😊" : "Tu NIF no es correcto ☹";

document.getElementById("print").innerHTML = validated;



function validarNif(nif){
    nif = nif.toUpperCase();
    if(nif.match(`^X|Y|Z|[0-9][0-9]{7}`)){
        if(nif.substr(8,1) == crearLetra(nif)){
            return true
        } else {
            return false;
        }
    } else {
        return false
    }
}

function crearLetra(nif) {
    let suma = 0;
    let arrayLetras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    switch (nif.charAt(0)){
        case "X":
            nif = nif.replace("X",0);
        break;
        case "Y":
            nif = nif.replace("Y",1);
        break;
        case "Z":
            nif = nif.replace("Z",2);
        break;
    }

    suma = nif.substr(0,8).split("").reduce((sum, a) => parseInt(sum) + parseInt(a), 0)%23;
    console.error(arrayLetras[suma]);
    return (arrayLetras[suma]);
}