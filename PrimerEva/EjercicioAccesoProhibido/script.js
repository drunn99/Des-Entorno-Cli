let today = new Date().getDay();
let hour = new Date().getHours();
let minutes = new Date().getMinutes();

let bienvenida = document.getElementById("welcome");

if (today > 0 && today < 6 && hour > 8 && hour < 14) {
    bienvenida.innerHTML = "¡BIENVENIDO!";
} else if (today > 0 && today < 6 && hour > 8 && hour == 14 && minutes == 0){
    bienvenida.innerHTML = "¡BIENVENIDO!";
} else {
    bienvenida.innerHTML = "Página cerrada :(";
}
