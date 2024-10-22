document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el contenedor para la animación
    const carta = document.getElementById('card_complement');
    
    // Función para activar la animación
    function iniciarAnimacion() {
        let inicio = null; // Tiempo de inicio de la animación
        const tamañoInicial = 1;
        const tamañoFinal = 1.1;
        const velocidad = 4000; // Duración total de la animación en ms
        const tamañoCarga = 1.002; // Factor de escala adicional

        // Función de animación que se llama en cada fotograma
        function animar(fechaActual) {
            if (!inicio) inicio = fechaActual; // Inicializar el tiempo de inicio
            const progreso = (fechaActual - inicio) / velocidad; // Calcular el progreso

            // Calcular la escala actual según el progreso
            const escalaActual = progreso < 0.5
                ? tamañoInicial + progreso * (tamañoFinal - tamañoInicial) * tamañoCarga
                : tamañoInicial + (1 - progreso) * (tamañoFinal - tamañoInicial) * tamañoCarga;
            
            // Aplicar la escala al contenedor
            carta.style.transform = `scale(${escalaActual})`;
            
            // Continuar la animación si no se ha completado
            if (progreso < 1) {
                requestAnimationFrame(animar);
            }
        }

        // Iniciar la animación
        requestAnimationFrame(animar);
    }
    
    // Ejecutar la animación inicialmente
    iniciarAnimacion();
    
    // Repetir la animación cada 4 segundos
    setInterval(iniciarAnimacion, 4000); // 4000 ms entre animaciones
});
