let button = document.getElementsByTagName("button")[0];
let text = document.getElementById("areaTexto");

text.addEventListener("scroll", () => {    
    if(text.offsetHeight + text.scrollTop >= text.scrollHeight){
        button.style["display"] = "block";
    }
})

button.addEventListener("click", () => {
    text.style["display"] = "none";
})