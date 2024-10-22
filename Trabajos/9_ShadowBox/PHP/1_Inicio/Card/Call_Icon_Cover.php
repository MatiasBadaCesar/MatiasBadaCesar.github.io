<?php
// Conexión a la base de datos
$host = "b1clxpxdrpcigs7sg9xc-mysql.services.clever-cloud.com";
$dbname = "b1clxpxdrpcigs7sg9xc";
$user = "ul8oe8f8xiygp0tx";
$password = "vAzDek28JQqPD7rBGg1L";

// Crear la conexión
$conn = new mysqli($host, $user, $password, $dbname);


if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener el valor de "tipo" de la función JavaScript
$tipo = $_POST['tipo']; // O cualquier otra forma de recibir el valor

// Consulta SQL para buscar las imágenes en la tabla "icono" según el filtro
$sql = "SELECT url FROM png_icon WHERE type = '$tipo'"; // Ajustado para obtener solo la primera imagen
$result_icono = $conn->query($sql);

// Muestra la primera imagen de la tabla "icono"
if ($result_icono->num_rows > 0) {
    $row_icono = $result_icono->fetch_assoc();
    echo '<img src="' . $row_icono["url"] . '" alt="Imagen de Icono">';
} else {
    echo "No se encontraron imágenes de iconos para el tipo seleccionado.";
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
