<?php
// Deshabilitar la salida de errores HTML
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(0);
// Conexión a la base de datos
$host = "b1clxpxdrpcigs7sg9xc-mysql.services.clever-cloud.com";
$dbname = "b1clxpxdrpcigs7sg9xc";
$user = "ul8oe8f8xiygp0tx";
$password = "vAzDek28JQqPD7rBGg1L";

// Crear la conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consulta SQL para obtener los precios
$sql = "SELECT * FROM price";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Obtener la única fila de resultados
    $row = $result->fetch_assoc();

    // Crear un array asociativo con los datos de los precios
    $precios = array(
        'Carta' => $row['card'],
        'M16x28' => $row['m16x28'],
        'L35x20' => $row['l35x20'],
        'XL58x34' => $row['xl58x34'],
        'Relieve1' => $row['relieve1'],
        'Relieve2' => $row['relieve2'],
        'Relieve3' => $row['relieve3']
    );

    // Devolver los precios como JSON
    echo json_encode($precios);
} else {
    echo "No se encontraron datos de precios";
}

// Cerrar la conexión
$conn->close();
?>
