<?php
// Conexión a la base de datos (debes proporcionar tus propias credenciales de forma segura)
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

// Obtener el nombre del campeón de la solicitud AJAX
$campeon = $_POST['campeon'];

// Consultar la base de datos para obtener todas las imágenes con el mismo nombre de campeón
$sql = "SELECT url FROM png_skin WHERE champeon = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $campeon);
$stmt->execute();
$result = $stmt->get_result();

$imagenes = array();

if ($result->num_rows > 0) {
    // Almacenar las rutas de las imágenes en un array
    while ($row = $result->fetch_assoc()) {
        $imagenes[] = $row["url"];
    }
}

// Devolver el array de rutas de imágenes como respuesta AJAX
echo json_encode($imagenes);

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
