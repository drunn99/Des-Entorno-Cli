// 4.6 - Añadir elementos

// 4.6.1 - Crear elementos
let capa1 = document.createElement("div");
capa1.innerHTML = "<p>Prueba de creación de capa (Añadir elemento)</p>";
capa1.setAttribute("id","capa1");
let crearElementos = document.getElementById("crear_elementos");
crearElementos.append(capa1);

// 4.6.2 - Crear nodo texto
let nodoT1 = document.createTextNode("Ejemplo de nodo de texto creado");
crearElementos.append(nodoT1);

// 4.6.3 - Añadir un nodo hijo
let capa2 = document.getElementById("principal");
let parrafo2 = document.createElement("p");
parrafo2.textContent = "Párrafo cuarto añadido por JS";
capa2.appendChild(parrafo2);

// 4.6.4 - Inserción de nodos en posiciones concretas
let nuevoP = document.createElement("p");
nuevoP.innerHTML = "Esta es una forma de introducir por en medio el nodo";
let pMedio = document.querySelectorAll("#principal p:nth-of-type(3)")[0];
capa2.insertBefore(nuevoP,pMedio);

// 4.7 - Reemplazar elementos
let capa3 = document.getElementById("principal_replace");
let nuevoP2 = document.createElement("p");
nuevoP2.textContent = "Soy el nuevo párrafo";
//nuevoP2.innerHTML = "Esta es una forma de introducir por en medio el nodo";
let pMedio2 = document.querySelectorAll("#principal_replace p:nth-of-type(2)")[0];
capa3.replaceChild(nuevoP2,pMedio2);

// 4.8 - Eliminar elementos
let capa4 = document.getElementById("principal_remove");
let pAEliminar = document.querySelectorAll("#principal_remove p:nth-of-type(1)")[0];
capa4.removeChild(pAEliminar);
capa4.appendChild(pAEliminar);