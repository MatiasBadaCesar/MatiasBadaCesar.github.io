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

// Consulta SQL para obtener el total de imágenes en la tabla
$sql = "SELECT COUNT(*) AS total FROM png_box";

// Ejecutar la consulta SQL
$result = $conn->query($sql);

// Verificar si se encontraron resultados
if ($result && $result->num_rows > 0) {
    // Obtener el total de imágenes
    $row = $result->fetch_assoc();
    $total = $row['total'];
    // Devolver el total de imágenes como JSON
    echo json_encode($total);
} else {
    // No se encontraron imágenes, devolver null
    echo json_encode(null);
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
