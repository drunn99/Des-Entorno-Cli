let contP = 0;

let allP = document.body.querySelectorAll("p");
let invertedP = Array.from(allP).reverse();

while (contP < allP.length){
    document.body.appendChild(invertedP[contP]);
    contP++;
}