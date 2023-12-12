let botones = document.querySelectorAll("button");
let input = document.querySelectorAll(".entrada");
let salida = document.querySelector(".salida");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        if (input[0].value.length > 0 && input[1].value.length > 0) {
            let valor1 = parseInt(input[0].value);
            let valor2 = parseInt(input[1].value);
            switch (boton.className) {
                case "mas":
                    salida.value = valor1 + valor2;
                    break;
                case "menos":
                    salida.value = valor1 - valor2;
                    break;
                case "por":
                    salida.value = valor1 * valor2;
                    break;
                case "div":
                    salida.value = valor1/valor2;
                    break;
                case "reset":
                    input[0].value = "";
                    input[1].value = "";
                    salida.value = "";
                    break;
            }
        }
    })
})