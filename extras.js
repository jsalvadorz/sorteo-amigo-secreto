// Gestiona el año actual en el footer
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.querySelector("#year");
    yearSpan.textContent = new Date().getFullYear();
});

// Gestiona la ventana modal
const modal = document.querySelector("#miModal");

function mostrarModal(mensaje) {
    const p = modal.querySelector("#mensaje-modal");
    p.innerHTML = mensaje;
    modal.style.display = "block";
}

// Cierra el modal al hacer clic en la "X"
document.querySelector(".cerrar").onclick = function () {
    modal.style.display = "none";
};

// Cierra al hacer clic fuera del modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

mensajeBienvenida = `¡Bienvenid@ al juego del <b>Amigo Secreto</b>! 🎁 <br><br>
Agrega los nombres de tus amigos usando el campo de texto y el botón <b>"Añadir"</b>.
Verás una lista con cada nombre que ingreses. Cuando todos estén listos
presiona <b>"Sortear amigo"</b> para elegir aleatoriamente a tu amigo secreto.<br><br>
¡Diviértete y que comience el sorteo! 🥳`

mostrarModal(mensajeBienvenida);