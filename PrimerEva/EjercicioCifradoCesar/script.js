
switch (prompt("Escoge tu opción: d(decodificar)|c(codificar)")) {
    case 'c':
        let string = prompt("Introduce tu codigo y la clave separada por una contrabarra '/'");
        string.trim();
        let stringArray = string.split('/');
        let respuesta = codificar(stringArray[0],stringArray[1]);
        document.write(respuesta);
        break;
    case 'd':
    default:
}

function codificar(string, cambio) {
    let nuevoString = "";
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
            if (string.charCodeAt(i) + cambio > 90) {
                nuevoString += ((string.charCodeAt(i) + cambio)- 26);
            } else {
                nuevoString += (string.charCodeAt(i) + cambio);
            }
        } else if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123){
            if (string.charCodeAt(i) + cambio > 122) {
                nuevoString += ((string.charCodeAt(i) + cambio) - 26);
            } else {
                nuevoString += (string.charCodeAt(i) + cambio);
            }
        }
    }
    return nuevoString;
}
