let allP = document.body.querySelectorAll("li");

setTimeout(() => confirma(allP), 3000);

function confirma(nodos){
    if(confirm("Quieres ordenar?")){
        ordena(nodos);
    }
}

function ordena(lista){
    let textoLi = [...lista];
    textoLi.sort((a,b) => a.textContent.trim().toLowerCase().localeCompare(b.textContent.trim().toLowerCase()));

    lista.forEach(element => {
        element.remove();
    });

    textoLi.forEach(element => {
        document.body.appendChild(element);
    });
}