let test = new Baraja();
console.error(test.toString());
test.barajar();
console.error("\n" + test.toString());


function Baraja(){
    const cartas = [];
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 10; j++) {
            cartas.push(new Carta(i,j));
        }
    }
    
    this.toString = function(){
        let strCartas = "";
        for (let i = 0; i < cartas.length; i++) {
            strCartas += cartas[i].toString() + " ";
        }
        return strCartas;
    }

    this.barajar = ()=>(cartas.sort(function(a,b){return Math.random()*10 - Math.random()*10}));
}

function Carta(palo,numero) {
    if (validarDatos(palo,numero)) {
        this.palo = palo;
        this.numero = numero;
    } else {
        return null;
    }

    this.darValor = function (palo,numero){
        if(validarDatos(palo,numero)){
            this.palo = palo;
            this.numero = numero;
        } else {
            return null;
        }
    }

    this.toString = function(){
        let numero = ["As","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho","Nueve","Sota","Caballo","Rey"];
        let palo = ["Oros","Espadas","Copas","Bastos"];
        return `${numero[this.numero-1]} de ${palo[this.palo-1]}`;
    }

    function validarDatos(palo, numero) {
        if (palo < 1 || palo > 4) {
            return false;
        }
        if (numero < 1 || numero > 10) {
            return false;
        } 
        return true;
    }


    
}