// Inicialmente se deberá ver un preloader con forma de comecocos. Este preloader debe ocultarse cuando la ventana se
// haya cargado completamente. Para ocultar el preloader fijarse en la clase "hide-preloader".

// Una vez oculto el video ya debería de aparecer en play. También habrá un slider (que realmente es un botón), que si 
// se clica se debe de cambiar su estado (clase "slide") y debe de pausarse el vídeo o si se vuelve a clicar se cambia de 
// nuevo el estado y se vuelve a poner en movimiento.

window.addEventListener("load", (ev) => {
    //Añado un timeout para que se vea la carga (sino es demasiado rápido)
    setTimeout(function () {
        let loader = document.getElementsByClassName("preloader")[0];
        loader.setAttribute("class", "hide-preloader");
        loader.style["display"] = "none";
        console.log("loaded");
    }, 1000);
})

let button = document.getElementsByClassName("switch-btn")[0];
button.addEventListener("click", (ev) => {
    //Mover botón
    button.classList.toggle("slide");


    //Pausar / reproducir video
    let video = document.querySelector("video");
    if(!video.hasAttribute("paused")){
        video.pause();
        video.toggleAttribute("paused");
    } else {
        video.play();
        video.toggleAttribute("paused");
    }
})