let div = document.getElementById("color");

div.addEventListener("mouseenter" , () =>{
    div.style["backgroundColor"] = "green";
})

div.addEventListener("mouseleave", () =>{
    div.style["backgroundColor"] = "white";
})

div.addEventListener("mousedown", (ev) => {
    div.style["backgroundColor"] = ev.button == 0 ? "red" : ev.button == 2 ? "blue" : "";
})

div.addEventListener("mouseup", (ev) => {
    div.style["backgroundColor"] = "green";
})

div.addEventListener("contextmenu", (ev) => {
    ev.preventDefault();
})