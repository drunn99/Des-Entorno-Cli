let Punto = function (x, y) {
    this.x = x;
    this.y = y;
    this.cambiar = function (x2, y2) {
        this.x = x2;
        this.y = y2;
    }

    this.copia =()=>(new Punto(this.x,this.y));
        

    this.iguales = function (punto2) {
        if (punto2 instanceof Punto) {
            for (let prop in this) {
                if (typeof this[prop] != "function") {
                    if (this[prop] != punto2[prop]) {
                        return false;
                    }
                    return true;
                }
            }
        } else {
            console.error("No es un punto");
        }
    }

    this.suma = function (punto2) {
        let punto3 = new Punto(this.x + punto2.x, this.y + punto2.y);
        return punto3;
    }

    this.obtenerDistancia = function(punto2){
        return Math.sqrt(Math.pow(Math.abs(this.x - punto2.x),2) + Math.pow(Math.abs(this.y - punto2.y),2));
    }

    this.toString = function(){
        return `(${this.x},${this.y})`;
    }
}

let p = new Punto(1,2);
let q = new Punto(6,-3);

p.cambiar(-5,2);

let r = p.copia();
if(p.iguales(r)){
    console.log("P y R son iguales")
} else {
    console.log("P y R no son iguales");
}

let s = p.suma(r);
console.log("s: " + s.toString());

console.log("Distancia entre p y q: " + p.obtenerDistancia(q));

