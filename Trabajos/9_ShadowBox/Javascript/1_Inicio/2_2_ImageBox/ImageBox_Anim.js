$(document).ready(function() {
    // Animaciones de imágenes en la galería de skins
    $('#gallery-container-skins').on('mouseenter', '.overlay', function() {
        activarAnimacion($(this), '.gallery-image-skins', 'spin 3s ease infinite');
    }).on('mouseleave', '.overlay', function() {
        desactivarAnimacion($(this), '.gallery-image-skins');
    });

    // Animaciones de imágenes en la galería de marcos
    $('#containerMarco').on('mouseenter', '.overlayMarco', function() {
        activarAnimacion($(this), '.gallery-marco', 'spinMarco 3s ease infinite');
    }).on('mouseleave', '.overlayMarco', function() {
        desactivarAnimacion($(this), '.gallery-marco');
    });

    // Función para activar la animación
    function activarAnimacion(elemento, selectorSiguiente, animacion) {
        elemento.siblings(selectorSiguiente).css('animation', animacion);
    }

    // Función para desactivar la animación
    function desactivarAnimacion(elemento, selectorSiguiente) {
        elemento.siblings(selectorSiguiente).css('animation', 'none');
    }
});
