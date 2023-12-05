let listaTareas = document.getElementById("tareas");
let input = document.getElementById("text");
let tareas = document.querySelectorAll(".task");
let taskDelete = document.getElementById("taskDelete");

/*Crea tareas a través de las cookies 
(las muy fulanas de las cookies(Me ha llevado hacer esto 3 horas)).
 Bugs encontrados:
 -> Dos tareas con el mismo nombre no se guardan en las cookies.
 -> El orden no se conserva en las cookies.
*/
if (document.cookie) {
    let cookies = document.cookie.split(";");
    let arrayListaTareas = [];
    cookies.forEach(element => { (arrayListaTareas.push(element.split("=")[0].trim())) })
    arrayListaTareas.forEach(cookieTarea => {
        crearNuevaTarea(cookieTarea);
    })
}

//Crea tareas a través del input.
document.getElementById("more").addEventListener("click", () => {
    if (input.value.length > 0) {
        crearNuevaTarea(input.value);
        //Fecha de caducidad de la cookie -> Una semana
        let date = new Date();
        let expiracy = new Date(date.getTime() + (1000 * 60 * 60 * 24 * 7));
        document.cookie = `${input.value}=true; expires=${expiracy}`;
        //Reset del campo input
        input.value = "";
    }
});

//Función que crea las tareas y les añade los eventos de click para ordenar y borrar.
function crearNuevaTarea(nombreTarea) {
    let listDiv = document.createElement("div");
    listDiv.setAttribute("class", "task");
    //Creación de los elementos html
    let taskTitle = document.createElement("h4");
    let taskDelete = document.createElement("button");
    taskDelete.setAttribute("id", "taskDelete");
    //Evento de ordenación de la tarea
    taskTitle.addEventListener("click", () => {
        let firstChild = listaTareas.children[0];
        listaTareas.insertBefore(listDiv, firstChild);
    })
    //Evento de eliminación de la tarea
    taskDelete.addEventListener("click", () => {
        listaTareas.removeChild(listDiv);
        let deleteCookie = new Date(1);
        document.cookie = `${nombreTarea}=;expires=${deleteCookie}`
    })

    taskTitle.innerHTML = nombreTarea;
    taskDelete.innerHTML = "quitar";

    listDiv.appendChild(taskTitle);
    listDiv.appendChild(taskDelete);
    listaTareas.appendChild(listDiv);
}