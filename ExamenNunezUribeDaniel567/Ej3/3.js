/**
 * Somos los responsables de un salón de Bingo y queremos expandirnos de forma "online". Para ello crearemos un sistema de generación de tarjetas
 * de Bingo y también un sistema para que simulen los "sorteos".
 * 
 * Por tanto:
 * Hay que crear un sistema que genere tarjetas de bingo con números aleatorios entre 0 a 9. 
 * Esos números aleatorios los introduciremos en cada uno de los td de la tabla que se encuentra en el HTML.
 * 
 * Posteriormente, cuando se clique el enlace "Clica aquí para que se genere un número aleatorio" se generará un número al azar del 0 al 9
 * y se rellenarán con sombreado todas aquellas casillas que coincidan con el número (se incluirá la clase coloreado, ver el css para saber
 * que hace).
 * Cuando hayan aparecido TODOS los números de la tarjeta que tenemos (y por consiguiente todas las casillas estén coloreadas) en ese momento
 * mostraremos un mensaje por pantalla diciendo que ha rellenado todo.
 * 
 * Importante: Sólo se modificará el archivo JS, ni el html ni en el css (a través del js por supuesto se podrán introducir las modificaciones 
 * en el DOM necesarias para que funcione, incluyendo clases o ids o introduciendo lo necesario)
 */

// -----------------------------------------------
// Incluye el código que sea

var allTds = document.body.getElementsByTagName("td");
var cont = 0;
var pullNumbers = []
var bingo = false;

for (let i = 0; i < 10; i++) {
  pullNumbers.push(i);
}

//Rellena las celdas con numeros aleatorios
for (let nodes of allTds) {
  let randomNumber = parseInt(Math.random() * 10);
  nodes.innerHTML = randomNumber;
}

// -----------------------------------------------

let numeroAleatorio = document.getElementById("crearNumero");
numeroAleatorio.addEventListener("click", function (e) {
  e.preventDefault();
  // En el momento en el que se clique en el enlace asociado al nodo con id crearNumero se accederá aquí
  // -----------------------------------------------
  // Incluye el código que sea

  //Mezlo el array de números y obtengo su primera posición
  let shuffle = (array) => array.sort((a, b) => Math.floor(Math.random() * a) - Math.floor(Math.random() * b));
  shuffle(pullNumbers);
  let randomNumber = pullNumbers[0];

  for (let nodes of allTds) {
    if (parseInt(nodes.innerHTML) == randomNumber) {
      nodes.style["backgroundColor"] = "green";
      cont += nodes.style.backgroundColor == "green" ? 1 : 0;
    }
  }
  //Retiro la primera posición para evitar que se repitan números
  pullNumbers.shift();

  //Comprobamos que todas las casillas han cambiado de estilo al menos una vez y que aún NO hay bingo
  if (cont == 25 && !bingo) {
      let h1 = document.createElement("h1");
      h1.innerHTML = "¡BINGO!";
      document.body.insertBefore(h1, document.body.getElementsByTagName("h1")[0]);
      bingo = true;
  }
  // -----------------------------------------------
});