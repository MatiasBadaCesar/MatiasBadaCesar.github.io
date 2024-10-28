<?php
// Conexión a la base de datos (debes proporcionar tus propias credenciales de forma segura)
$host = "";
$dbname = "";
$user = "";
$password = "";

// Crear la conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener la ruta de la imagen de la solicitud AJAX
$imgSrc = $_POST['imgSrc'];

// Consultar la base de datos para obtener el nombre del campeón correspondiente a la imagen
$sql = "SELECT champeon FROM png_skin WHERE url = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $imgSrc);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Devolver el nombre del campeón como respuesta AJAX
    $row = $result->fetch_assoc();
    echo $row["champeon"];
} else {
    echo "No se encontraron datos.";
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
