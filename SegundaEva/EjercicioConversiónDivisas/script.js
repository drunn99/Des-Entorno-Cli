generaSelect();
let convertir = document.getElementById("conv");
convertir.addEventListener("click", (ev) => {
    let wrapper = document.getElementById("wrapper");
    wrapper.removeChild(wrapper.lastChild);
    let cantidad = document.getElementById("input").value;
    let divisa = document.getElementById("select").value;

    fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=a5d7f6a20fad17c13813a541efbba351&format=1`)
        .then(response => response.json())
        .then(data => {
            let result = data.rates[`${divisa}`] * cantidad;
            let resulth3 = document.createElement("h3");
            resulth3.innerHTML = "El resultado es: " + result + " " + divisa;
            wrapper.appendChild(resulth3);
        })
        .catch(error => {
            console.log(error);
        })
})

function generaSelect() {
    fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=a5d7f6a20fad17c13813a541efbba351&format=1`)
        .then(response => response.json())
        .then(data => {
            let select = document.getElementById("select");
            for (const key in data.rates) {
                let newExchange = document.createElement("option");
                newExchange.innerHTML = key;
                newExchange.setAttribute("id", key);
                select.appendChild(newExchange);

            }

        })
        .catch(error => {
            console.log(error);
        })
}