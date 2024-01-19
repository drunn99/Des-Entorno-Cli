// Soy padre, y eso implica que me salen de forma natural los chistes de padre.
// Pero tengo el problema de que me quedo sin ellos, con lo cual lo que os voy a pedir es que generéis una aplicación que lo que haga sea:
// Cuando cliquemos al botón realizaremos una llamada a https://icanhazdadjoke.com/
// Tenemos que recibir un json que trataremos incluyéndolo dentro del <p class="result">
// Importante, en el fetch es necesario incluir un header que acepte "application/json"
// Es necesario también que gestionemos los posibles errores que puedan surgir del fetch

let button = document.querySelector("button");
button.addEventListener("click", (ev) => {
    fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: { "Accept": "application/json" }
    })
        .then(Response => Response.json())
        .then(data => {
            let joke = document.querySelector(".result");
            joke.innerHTML = data.joke;
        }).catch(error => {
            let joke = document.querySelector(".result");
            joke.innerHTML = "Error obteniendo el chiste (Casi que mejor)";
        })
})

// ¡¡¡¡IMPORTANTE!!!! ES OBLIGATORIO REALIZARLO UTILIZANDO THEN CATCH,... PROHIBIDO USAR EL AWAIT Y EL ASYNC
