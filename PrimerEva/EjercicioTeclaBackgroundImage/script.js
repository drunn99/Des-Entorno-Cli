window.addEventListener("keyup" ,(ev) => {
    if(ev.altKey && ev.key == "F12"){
        let capa = document.getElementById("fondo");
        capa.style["backgroundImage"] = "url(https://source.unsplash.com/random)";
    }
})