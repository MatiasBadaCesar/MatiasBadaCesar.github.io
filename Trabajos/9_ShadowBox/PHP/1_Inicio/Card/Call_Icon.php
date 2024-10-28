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

// Obtener el valor de "icono" del formulario
$icono = $_POST['icono'];

// Consulta SQL para buscar las imágenes en la tabla "icono" según el filtro
$sql = "SELECT url FROM png_icon WHERE type = ";

// Verificar si se proporcionó un valor para "icono"
if (!empty($icono)) {
    // Prevenir inyección SQL
    $icono = $conn->real_escape_string($icono);
    // Agregar el valor de "icono" a la consulta SQL
    $sql .= "$icono";
} else {
    // Si no se proporcionó ningún valor para "icono", se asume un valor predeterminado
    $sql .= "2"; // Cambiar este valor predeterminado según sea necesario
}

// Ejecutar la consulta SQL
$result = $conn->query($sql);

// Array para almacenar las ubicaciones de las imágenes
$imagenes = array();

// Verificar si se encontraron resultados
if ($result && $result->num_rows > 0) {
    // Iterar sobre los resultados y almacenar las ubicaciones de las imágenes en el array
    while($row = $result->fetch_assoc()) {
        $imagenes[] = $row['url'];
    }
}

// Devolver las ubicaciones de las imágenes como JSON
echo json_encode($imagenes);

// Cerrar la conexión a la base de datos
$conn->close();
?>
