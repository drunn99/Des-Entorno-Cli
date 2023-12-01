let OSI = document.getElementById("OSIcontrol");
let TCPIP = document.getElementById("TCPIPcontrol");
let hideModels = document.getElementById("hideModels");
let hideEverything = document.getElementById("hideEverything");

OSI.addEventListener("click", () => {
    if (OSI.checked) {
        document.getElementById("OSI").style["visibility"] = "visible";
    } else {
        document.getElementById("OSI").style["visibility"] = "hidden";
    }

})

TCPIP.addEventListener("click", () => {
    if (TCPIP.checked) {
        document.getElementById("TCPIP").style["visibility"] = "visible";
    } else {
        document.getElementById("TCPIP").style["visibility"] = "hidden";
    }
})

hideModels.addEventListener("click", () => {
    let osiVisibility = document.getElementById("OSI").style["visibility"];
    let tcpVisibility = document.getElementById("TCPIP").style["visibility"];
    if (osiVisibility == "visible" || tcpVisibility == "visible") {
        document.getElementById("OSI").style["visibility"] = "hidden";
        document.getElementById("TCPIP").style["visibility"] = "hidden";
        OSI.checked = false;
        TCPIP.checked = false;
    }
})

hideEverything.addEventListener("click", () =>{
    let veloNegro = document.getElementById("veloNegro");
    let globalContent = document.getElementById("global");
    veloNegro.style["height"] = "1px";
    veloNegro.style["transform"] = "scaleY(1985)"
    veloNegro.style["transition"] = "all 1s";
    veloNegro.addEventListener("mouseup", (ev) => {
        if(ev.button == 0){
            veloNegro.style["transform"] = "scaleY(0)"
        }
    })
})