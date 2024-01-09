//fetch("https://randomuser.me/api/")

let main = document.querySelector("main");
main.textContent = "Esperando usuarios...";

fetch("https://randomuser.me/api/?results=10")
    .then(resp => resp.json())
    .then(data => {
        let datos = data.results;
        main.textContent="";
        for(let usuario of datos){
            let divUsuario = document.createElement("div");
            creaUsuario(divUsuario,usuario);
            generarEventoBoton(divUsuario);
            main.appendChild(divUsuario);
        }
    })
    .catch(error => {
        main.innerHTML = `<p class="error">${error}</p>`;
    })

function generarEventoBoton(capaUsuario){
    let boton = capaUsuario.querySelector("button");
    boton.addEventListener("click",(ev) => {
        capaUsuario.textContent = "Cargando...";
        fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then( data => {
            let usuario = data.results[0];
            creaUsuario(capaUsuario, usuario);
            generarEventoBoton(capaUsuario);
        })
        .catch(error => {
            capaUsuario.innerHTML = `<p class="error">${error}</p>` +
            `<p><button>Intentar de nuevo</button></p>`;
        })
    })
}

function creaUsuario(capaUsuario, usuario){
    let foto = usuario.picture.large;
    let mail = usuario.email;
    let nombre = usuario.name.first;
    let apellido = usuario.name.last;
    let calle = usuario.location.street;
    let ciudad = usuario.location.city;
    let estado = usuario.location.state;

    capaUsuario.innerHTML =
    `<figure>` +
        `<img src=${foto} alt="foto">` +
    `</figure>` +
    `<p>${nombre}</p>` +
    `<p>${mail}</p>` +
    `<p>${calle}</p>` +
    `${ciudad} , ${estado}` +
    `<p><button>Cambiar</button></p>`;
}