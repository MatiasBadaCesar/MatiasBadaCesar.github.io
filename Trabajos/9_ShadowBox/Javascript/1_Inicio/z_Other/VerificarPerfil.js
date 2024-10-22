document.addEventListener("DOMContentLoaded", async function() {
    // Acceso a los elementos del DOM
    const btnInscription = document.getElementById("inscription");
    const user = document.getElementById("user");
    const userName = document.getElementById("user_name");
    const btnBuyFalse = document.getElementById("btn_buy_false");
    const btnBuy = document.getElementById("btn_buy");
    const btnUser = document.getElementById("btn_user");

    try {
        // Realizar la solicitud al servidor para verificar la cookie de sesión
        const response = await fetch('PHP/2_Inscripcion/VerificarSesion.php');
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
        }

        // Obtener el texto de la respuesta
        const data = await response.text();
        if (data.trim() === "") {
            // No hay sesión activa, pero no es un error
            console.log('No se encontró ninguna sesión activa.');
            btnInscription.style.display = "block";
            user.style.display = "none";
            return; // Finalizar la ejecución sin errores
        }

        // Intentar parsear el JSON
        let sessionData;
        try {
            sessionData = JSON.parse(data);
        } catch (e) {
            throw new Error('Error al parsear el JSON: ' + e.message);
        }

        // Verificar si hay una sesión activa
        if (Object.keys(sessionData).length !== 0 && sessionData.hasOwnProperty("rutaImagen")) {
            // Actualizar los componentes con los datos de la sesión
            userName.innerText = sessionData.nombreUsuario;
            btnUser.querySelector("img").src = sessionData.rutaImagen;

            // Mostrar/ocultar elementos
            btnInscription.style.display = "none";
            btnBuyFalse.style.display = "none";
            user.style.display = "block";
            btnBuy.style.display = "block";
        } else {
            // El caso de sesión no iniciada no debería lanzar un error
            console.warn("El usuario no ha iniciado sesión.");
            btnInscription.style.display = "block";
            user.style.display = "none";
        }
    } catch (error) {
        // Manejo de errores
        console.error('Error en la verificación de la sesión:', error);
        alert('Ocurrió un error al verificar la sesión. Inténtelo más tarde.');
    }
});
