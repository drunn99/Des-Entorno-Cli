document.addEventListener("mousemove", (ev) => {
    document.getElementById("hey").style["top"] = ev.clientY + "px";
    document.getElementById("hey").style["left"] = ev.clientX + "px";
})