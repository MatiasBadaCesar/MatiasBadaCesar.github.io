<?php
// Conexión a la base de datos
$host = "b1clxpxdrpcigs7sg9xc-mysql.services.clever-cloud.com";
$dbname = "b1clxpxdrpcigs7sg9xc";
$user = "ul8oe8f8xiygp0tx";
$password = "vAzDek28JQqPD7rBGg1L";

// Crear la conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Iniciar la sesión
session_start();

// Verificar si el usuario ha iniciado sesión
if (isset($_SESSION['email'])) {
    // El usuario ha iniciado sesión, obtener su correo electrónico
    $email = $_SESSION['email'];

    // Consultar la base de datos para obtener los datos del usuario
    $sql = "SELECT id, name_person, name_user, image, limit_orders FROM user WHERE email= ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Obtener los datos del usuario
        $row = $result->fetch_assoc();
        $userData = array(
            "idUsuario" => $row['id'],
            "nombreCompleto" => $row['name_person'],
            "nombreUsuario" => $row['name_user'],
            "rutaImagen" => $row['image'],
            "limiteOrden" => $row['limit_orders']
        );

        // Establecer el encabezado de la respuesta como JSON
        header('Content-Type: application/json');
        // Convertir el array a formato JSON y mostrarlo
        echo json_encode($userData);
    } else {
        // Establecer el encabezado de la respuesta como JSON
        header('Content-Type: application/json');
        echo json_encode(array("error" => "No se encontraron datos del usuario."));
    }
} else {
    // El usuario no ha iniciado sesión
    header('Content-Type: application/json');
}

// Cerrar la conexión
$conn->close();
?>
