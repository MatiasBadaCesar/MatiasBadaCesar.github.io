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

// Obtener el término de búsqueda desde el input (si existe)
$champeon = isset($_POST['champeon']) ? $_POST['champeon'] : '';

// Consulta SQL básica para buscar todas las imágenes en la tabla "png_skin" con 'skin = 0'
$sql = "SELECT DISTINCT url FROM png_skin WHERE skin = 0";

// Si el campo de búsqueda no está vacío, agregar un filtro por el nombre del campeón
if (!empty($champeon)) {
    $sql .= " AND champeon LIKE '" . $conn->real_escape_string($champeon) . "%'";
}

// Ejecutar la consulta SQL
$result = $conn->query($sql);

// Array para almacenar las ubicaciones de las imágenes
$imagenes = array();

// Verificar si se encontraron resultados
if ($result->num_rows > 0) {
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
