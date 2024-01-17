// Variables globales
var listaTareas = new Set();
var btMas = document.getElementById("mas");
var tTarea = document.getElementById("tarea");
var ulista = document.getElementById("lista");

function anadirTarea(nuevaTarea) {
    if (listaTareas.has(nuevaTarea) == false) {
        listaTareas.add(nuevaTarea);
        actualizarLista();
        let liNuevo = document.createElement("li");
        liNuevo.innerHTML = `<span>${nuevaTarea}</span> <button>Eliminar</button>`;
        prepararBorrar(liNuevo);
        if (ulista.children.length > 0) {
            for (let li of ulista.children) {
                let contenidoLi = li.querySelector("span").textContent;
                if (contenidoLi.localeCompare(nuevaTarea, "es") > 0) {
                    ulista.insertBefore(liNuevo, li);
                    return;
                }
            }
        }
        ulista.appendChild(liNuevo);
    }
}

function prepararBorrar(tarea) {
    let boton = tarea.querySelector("button");
    boton.addEventListener("click", (ev) => {
        let textoLista = ev.target.parentNode.querySelector("span");
        ulista.removeChild(ev.target.parentNode);
        listaTareas.delete(textoLista.textContent);
        actualizarlista();
    });
}


function prepararlista(arrayTareas) {
    for (let textoLi of arrayTareas) {
        let liNuevo = document.createElement("li");
        let boton = document.createElement("button");
        boton.textContent = "Eliminar";
        liNuevo.innerHTML = `<span>${textoLi}</span>`;
        prepararBorrar(liNuevo);
        ulista.appendChild(liNuevo);
    }
}

function actualizarLista() {
    localStorage.setItem("listaTareas", JSON.stringify([...listaTareas]));
    arrayTareas.sort((a, b) => a.localeCompare(b, "es"));
    prepararlista(arrayTareas);
}

// Lectura del array de tareas en LocalStorage
if (localStorage.getItem("listaTareas")) {
    let arrayTareas = JSON.parse(localStorage.getItem("listaTareas"));
    arrayTareas.sort((a, b) => a.localeCompare(b, "es"));
    prepararlista(arrayTareas);
    listaTareas = new Set(arrayTareas);
}

btMas.addEventListener("click", (ev) => {
    ev.preventDefault();
    anadirTarea(tTarea.value);
    tTarea.value = "";
    tTarea.focus();
})
