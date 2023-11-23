let allP = document.body.querySelectorAll("li");

setTimeout(confirma(allP), 3000);

function confirma(nodos){
    if(confirm("Quieres ordenar?")){
        ordena(nodos);
    }
}

function ordena(lista){
    
}