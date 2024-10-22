document.addEventListener("DOMContentLoaded", async function() {
    try {
        // Realizar la solicitud al servidor para verificar la cookie de sesión
        const response = await fetch('PHP/2_Inscripcion/VerificarSesion.php');
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
        }

        // Obtener el texto de la respuesta
        const data = await response.text();
        if (data.trim() === "") {
            // Si la respuesta está vacía, redireccionar a la página de inscripción
            window.location.href = "//localhost/ShadowBox/Inscripcion.html";
            throw new Error('La respuesta está vacía');
        }

        // Parsear la respuesta como JSON
        let sessionData;
        try {
            sessionData = JSON.parse(data);
        } catch (e) {
            throw new Error('Error al parsear el JSON: ' + e.message);
        }

        // Verificar si hay una sesión activa
        if (Object.keys(sessionData).length !== 0 && sessionData.hasOwnProperty("rutaImagen")) {
            // Obtener datos de la sesión
            const rutaNombreUsuario = sessionData.nombreUsuario;
            const rutaImagen = sessionData.rutaImagen;
            const idUsuario = sessionData.idUsuario;

            // Guardar datos en sessionStorage para acceder desde otros archivos
            sessionStorage.setItem('idUsuario', idUsuario);
            sessionStorage.setItem('nombreUsuario', rutaNombreUsuario);
            sessionStorage.setItem('rutaImagen', rutaImagen);

            // Actualizar los elementos del DOM con los datos de la sesión
            const nombreUsuarioElement = document.getElementById("user_name");
            nombreUsuarioElement.innerText = rutaNombreUsuario;

            const botonUsuario = document.getElementById("btn_user");
            botonUsuario.querySelector("img").src = rutaImagen;

        } else {
            console.warn('No se encontró ninguna sesión activa.');
        }
    } catch (error) {
        // Manejo de errores
        console.error('Error al verificar la sesión:', error);
    }
});
