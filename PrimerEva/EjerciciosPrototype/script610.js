
Map.prototype.invertirMapa = function(){
    let mapaInvertido = new Map();
    for(let [key,value] of this){
        if(!mapaInvertido.has(value)){
            mapaInvertido.set(value, key);
        } else {
            mapaInvertido.set(value,`${(mapaInvertido.get(value))}` + `${key}`);
        }
    }
    return mapaInvertido;
}

let mapa = new Map([[1,"Óptimo"],[2,"Notable"],[3,"Notable"],[4,"Excelente"],[5,"Mejorable"],[6,"Excelente"],[7,"Notable"]]);

console.log(mapa.invertirMapa());