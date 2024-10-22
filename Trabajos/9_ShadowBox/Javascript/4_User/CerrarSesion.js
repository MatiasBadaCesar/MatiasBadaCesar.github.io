document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón de cerrar sesión
    var cerrarSesionBtn = document.getElementById("cerrar-sesion-btn");

    // Función para cerrar la sesión del usuario
    function cerrarSesion() {
        // Realizar la solicitud POST al archivo PHP "CerrarSesion.php"
        fetch('PHP/4_Usuario/CerrarSesion.php', {
            method: 'POST'
        })
        .then(response => {
            // Verificar si la solicitud se completó correctamente
            if (response.ok) {
                // Redirigir al usuario a la página de inicio de sesión
                window.location.href = "//localhost/ShadowBox/Inscripcion.html";
            } else {
                // Mostrar mensaje de error si la solicitud falla
                alert('Ocurrió un error al intentar cerrar sesión. Por favor, inténtelo de nuevo más tarde.');
                window.location.href = "//localhost/ShadowBox/Inscripcion.html";
            }
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
            // Mostrar mensaje de error al usuario
            alert('Ocurrió un error al intentar cerrar sesión. Por favor, inténtelo de nuevo más tarde.');
        });
    }

    // Agregar evento de clic al botón de cerrar sesión
    cerrarSesionBtn.addEventListener("click", cerrarSesion);
});
