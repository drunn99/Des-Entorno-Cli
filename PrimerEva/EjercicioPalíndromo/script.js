let htmlPalindromo = document.getElementById("palindromo");
let frase_original = prompt("Introduce tu frase a comprobar");

console.log(limpiarCadena(frase_original));

if (es_palindromo(limpiarCadena(frase_original))){
    htmlPalindromo.innerHTML = frase_original + " SÍ es un palíndromo";
} else {
    htmlPalindromo.innerHTML = frase_original + " NO es un palíndromo";
}

function es_palindromo(frase){
    let index_inverso;
    for (let index = 0; index < frase.length; index++) {
        index_inverso = frase.length - (index+1);
        if(frase[index] != frase[index_inverso]){
            return false;
        } 
    }
    return true;
}

function limpiarCadena (frase){
    /*
    const removeAccents = str =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    */
    frase = frase.trim();
    frase = frase.split(" ");
    let frase_limpia = "";
    for (const iterator of frase) {
        frase_limpia += iterator;
    }
    frase_limpia = frase_limpia.toLowerCase();
    // removeAccents(frase);
    return frase_limpia;
}