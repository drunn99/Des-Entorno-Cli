let h = Number(prompt("Introduce la altura del triángulo"));
let triangulo1div = document.getElementById("triangulo1div");
triangulo1div.innerHTML = triangulo1(h);

let triangulo2div = document.getElementById("triangulo2div");
triangulo2div.innerHTML = triangulo2(h);

let piramide1div = document.getElementById("piramide1div");
piramide1div.innerHTML = piramide1(h);

let piramide2div = document.getElementById("piramide2div");
piramide2div.innerHTML = piramide2(h);

function triangulo1(h) {
    let msg = "";
    if (h != NaN && h > 1) {
        for (let i = 0; i <= h; i++) {
            for (let j = 0; j < i; j++) {
                msg += "* ";
            }
            msg += "</br>";
        }
    }
    return msg;
}

function triangulo2(h) {
    let msg = "";
    if (h != NaN && h > 1) {
        for (let i = h; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                msg += "* ";
            }
            msg += "</br>";
        }
    }
    return msg;
}

function piramide1(h){
    let msg = "";
    if (h != NaN && h > 1) {
        for (let i = h; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                msg += "&nbsp;";
            }
            for(let k = h; k >= i; k--){
                msg += "* ";
            }
            msg += "</br>";
        }
    }
    return msg;
}

function piramide2(h) {
    let msg = "";
    if (h != NaN && h > 1) {
        for (let i = 0; i <= h; i++) {
            for (let j = 0; j < i ; j++) {
                msg += "&nbsp;";
            }
            for(let k = i; k <= h;k++){
                msg += "* ";
            }
            msg += "</br>";
        }
    }
    return msg;
}