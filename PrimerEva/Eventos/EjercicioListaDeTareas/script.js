let tareas = document.getElementById("tareas");
let input = document.getElementById("input");

document.getElementById("more").addEventListener("click", () => {
    if(input.value){
        let li = document.createElement("li");
        tareas.appendChild(li);
    }
});