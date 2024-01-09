async function procesarFetch(apikey, elemento) {
    let form = elemento.querySelector("form");
    let headers = new Headers({
        "cache-control": "no-cache"
    });
    let conf = {
        method: "GET",
        mode: "cors",
        headers: headers,
    }
    try {
        const resp1 = await fetch("https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key=" + apikey, conf);
        const data1 = await resp1.json();
        const resp2 = await fetch(data1.datos, conf);
        const mapa = await resp2.blob();
        const img = document.createElement("img");
        img.setAttribute("src", URL.createObjectURL(mapa));
        elemento.removeChild(form);
        elemento.appendChild(img);
    }
    catch (error) {
        let p = document.createElement("p");
        p.innerHTML = "<strong>Error al cargar el mapa:</strong> " + error;
        elemento.appendChild(p);
    }
}

window.addEventListener("load", (ev) => {
    let main = document.querySelector("main");
    let apiKey = document.querySelector("textarea");
    let boton = document.querySelector("button");

    boton.addEventListener("click",(ev) => {
        ev.preventDefault();
        procesarFetch(apiKey.value,main);
    })  
})