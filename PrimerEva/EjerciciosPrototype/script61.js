Array.prototype.mediaAritmetica = function(){
    let media = 0;
    let contador = 0;
    for(let prop in this){
        console.log(typeof this[prop]);
        if(typeof this[prop] == "number"){
            media+=this[prop];
            contador++;
        }
    }
    return media/contador;
}

let array = [1,2,3,4,5,6];

console.log(array.mediaAritmetica());