let button = document.getElementsByTagName("button")[0];
let text = document.getElementById("areaTexto");

button.addEventListener("mouseup", (ev) => {
    if(ev.button == 0){
        text.style["display"] == "none";
    }
})