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

// Obtener el índice de la imagen solicitada desde la solicitud AJAX
$index = $_POST['index'];

// Consulta SQL para obtener la imagen anterior en base al índice proporcionado
$sql = "SELECT url FROM png_box LIMIT $index, 1";

// Ejecutar la consulta SQL
$result = $conn->query($sql);

// Verificar si se encontraron resultados
if ($result && $result->num_rows > 0) {
    // Obtener la ubicación de la imagen
    $row = $result->fetch_assoc();
    $imagen = $row['url'];
    // Devolver la ubicación de la imagen como JSON
    echo json_encode($imagen);
} else {
    // No se encontraron imágenes, devolver null
    echo json_encode(null);
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
