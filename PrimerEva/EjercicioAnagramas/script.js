let textArray = [];
let mostrar = document.getElementById("text");
while (textArray.length < 2) {
    let text = prompt("Introduce las palabras separadas por coma (,) (mínimo 2)");
    text = text.toLocaleLowerCase();
    textArray = text.split(",");
}

if(sonAnagramas(textArray)){
    mostrar.innerHTML = "Todos son anagramas";
} else {
    mostrar.innerHTML = "NO son anagramas";
}

function sonAnagramas (textArray){
    let letrasBase = textArray[0].split("").sort();
    for(let i = 1; i < textArray.length; i++){
        let letrasCompare = textArray[i].split("").sort();
        for(let j = 0; j < letrasBase.length; j++){
            if(letrasBase[j] != letrasCompare[j]){
                return false;
            }
        }
    }
    return true;
}
