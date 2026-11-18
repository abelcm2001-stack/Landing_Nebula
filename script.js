// Seleccionamos los elementos de la galería

const imagenPrincipal = document.getElementById("imagen-principal");
const descripcionImagen = document.getElementById("descripcion-imagen");
const miniaturas = document.querySelectorAll(".galeria img");


// Función para cambiar la imagen principal

function cambiarImagen(miniatura) {

    // Obtenemos la información de la miniatura

    const nuevaImagen = miniatura.dataset.imagen;
    const nuevoAutor = miniatura.dataset.autor;
    const nuevoTexto = miniatura.alt;

    // Aplicamos una transición de desaparición

    imagenPrincipal.style.opacity = "0";

    setTimeout(() => {

        // Actualizamos la imagen y su información

        imagenPrincipal.src = nuevaImagen;
        imagenPrincipal.alt = nuevoTexto;
        descripcionImagen.textContent = nuevoAutor;

        // Volvemos a mostrar la imagen

        imagenPrincipal.style.opacity = "1";

    }, 200);


    // Quitamos la clase activa de todas las miniaturas

    miniaturas.forEach(imagen => {
        imagen.classList.remove("activa");
    });

    // Marca la miniatura seleccionada

    miniatura.classList.add("activa");
}


// Añadimos eventos a cada miniatura

miniaturas.forEach(miniatura => {
    miniatura.addEventListener("click", () => {
        cambiarImagen(miniatura);
    });

    // Evento de teclado: Enter o barra espaciadora

    miniatura.addEventListener("keydown", (evento) => {

        if (evento.key === "Enter" || evento.key === " ") {

            evento.preventDefault();
            cambiarImagen(miniatura);

        }

    });

});


// Seleccionamos la primera miniatura por defecto

miniaturas[0].classList.add("activa");


const modalVideo = document.getElementById("modal-video");
const botonAbrir = document.getElementById("abrir-modal");
const botonCerrar = document.getElementById("cerrar-modal");
const videoModal = document.getElementById("video-modal");

botonAbrir.addEventListener("click", () => {

    modalVideo.showModal();

    videoModal.play().catch(error => {
        console.log("No se pudo iniciar el vídeo:", error);
    });

});

function cerrarVideo() {

    videoModal.pause();

    videoModal.currentTime = 0;

    modalVideo.close();

}

botonCerrar.addEventListener("click", cerrarVideo);

modalVideo.addEventListener("click", (evento) => {

    if (evento.target === modalVideo) {
        cerrarVideo();
    }

});

modalVideo.addEventListener("close", () => {

    videoModal.pause();

    videoModal.currentTime = 0;

});


const audioNebula = document.getElementById("audio-nebula");
const botonAudio = document.getElementById("boton-audio");
const botonSilencio = document.getElementById("boton-silencio");
const estadoAudio = document.getElementById("estado-audio");


botonAudio.addEventListener("click", () => {

    if (audioNebula.paused) {

        audioNebula.play();

    } else {

        audioNebula.pause();

    }

});


audioNebula.addEventListener("play", () => {

    botonAudio.textContent = "Pausar";
    estadoAudio.textContent = "Reproduciendo ambiente futurista";

});

audioNebula.addEventListener("pause", () => {

    botonAudio.textContent = " Reproducir";
    estadoAudio.textContent = "Audio detenido";

});

botonSilencio.addEventListener("click", () => {

    audioNebula.muted = !audioNebula.muted;

    if (audioNebula.muted) {

        botonSilencio.textContent = "Activar sonido";

    } else {

        botonSilencio.textContent = "Silenciar";

    }

});