let speed = document.getElementById("speed");

document.body.addEventListener("keydown", (ev) => {
    if(ev.key == "ArrowUp") {
        if(speed.textContent < 120){
            speed.textContent = parseInt(speed.textContent) + 1;
        }
    }

    if(ev.key == "ArrowDown"){
        if(speed.textContent > 0){
            speed.textContent =parseInt(speed.textContent) - 1;
        }
    }
})