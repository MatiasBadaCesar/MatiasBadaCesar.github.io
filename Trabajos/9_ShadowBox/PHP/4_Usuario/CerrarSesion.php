<?php
// Iniciar sesión si no está iniciada
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Destruir la sesión
session_destroy();

// Redireccionar al usuario a la página de inicio de sesión
header("Location: http://localhost/ejemplo/Inscripcion.html");
exit();
?>
