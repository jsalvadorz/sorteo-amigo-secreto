// Elementos del DOM
const arrayAmigos = [];
const inputAmigo = document.querySelector("#amigo");
const listaAmigosHTML = document.querySelector("#listaAmigos");
const resultadoHTML = document.querySelector("#resultado");

// Agrega evento al botón "Añadir"
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (!nombre) {
        mostrarModal("⚠️ Upps! Campo de texto vacío.<br> Por favor, ingresa un nombre.");
    } else {
        arrayAmigos.push(nombre);
        actualizarListaAmigosHTML(nombre);
    }

    limpiarCaja();
}

// Actualiza la lista de amigos en el HTML
function actualizarListaAmigosHTML(nombre) {
    const li = document.createElement("li");
    li.textContent = nombre;
    li.className = "nombre-amigo";
    listaAmigosHTML.appendChild(li);
}

// Agrega evento al botón "Sortear Amigo"
function sortearAmigo() {
    if (!arrayAmigos.length) {
        mostrarModal("⚠️ Upps! Tu lista está vacía.<br> No hay amigos para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * arrayAmigos.length);
    const nombreSorteado = arrayAmigos[indice];
    actualizarResultadoHTML(nombreSorteado);
}

// Actualiza el HTML del resultado
function actualizarResultadoHTML(nombre) {
    resultadoHTML.innerHTML = `Tu amigo secreto es: <b>${nombre}</b>`;
}

// Limpia la caja de texto y enfoca el cursor
function limpiarCaja() {
    inputAmigo.value = "";
    inputAmigo.focus();
}