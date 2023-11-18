let pes = document.getElementsByTagName("p");
let total = 0;

for(let i = 0; i< pes.length; i++){
    total += pes[i].textContent.split(" ").length;
}

let primerP = document.querySelectorAll("p:first-child")[0];
let parrafo = document.createElement("p");
parrafo.innerHTML = `<h1>El número de palabras es: ${total}</h1>`;

document.body.insertBefore(parrafo,primerP);