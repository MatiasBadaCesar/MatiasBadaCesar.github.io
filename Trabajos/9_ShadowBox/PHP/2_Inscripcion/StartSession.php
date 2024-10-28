<?php
// Conexión a la base de datos
$host = "";
$dbname = "";
$user = "";
$password = "";

// Crear la conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Iniciar la sesión
session_start();

// Obtener los datos del formulario
$email = $_POST['email'];
$password = $_POST['password'];

// Consultar la base de datos para verificar las credenciales del usuario
$sql = "SELECT * FROM user WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Las credenciales son válidas, el usuario ha iniciado sesión exitosamente
    // Almacenar la información del usuario en la sesión
    $_SESSION['email'] = $email;
    echo "¡Inicio de sesión exitoso!";
} else {
    // Las credenciales no son válidas, mostrar un mensaje de error
    echo "Credenciales inválidas. Por favor, inténtelo de nuevo.";
}

// Cerrar la conexión
$conn->close();
?>
