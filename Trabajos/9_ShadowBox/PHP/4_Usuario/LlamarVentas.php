<?php
// Conexión a la base de datos
$host = "";
$dbname = "";
$user = "";
$password = "";

// Crear la conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}

// Obtener el IdUsuario de la solicitud GET
$IdUsuario = isset($_GET['IdUsuario']) ? intval($_GET['IdUsuario']) : 0;

$response = [];

if ($IdUsuario > 0) {
    // Preparar y ejecutar la consulta SQL para obtener las órdenes del usuario
    $sql = "SELECT date, amount, card, stages_process FROM order_card WHERE id = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("i", $IdUsuario);
        $stmt->execute();
        $result = $stmt->get_result();

        // Verificar si se encontraron órdenes
        if ($result->num_rows > 0) {
            // Salida de datos de cada fila
            while ($row = $result->fetch_assoc()) {
                $response[] = $row;
            }
        } else {
            $response[] = ["error" => "Todavía no realizaste ninguna venta."];
        }

        // Cerrar la declaración
        $stmt->close();
    } else {
        $response[] = ["error" => "Error en la consulta: " . $conn->error];
    }
} else {
    $response[] = ["error" => "IdUsuario no proporcionado o inválido."];
}

// Cerrar la conexión
$conn->close();

header('Content-Type: application/json');
echo json_encode($response);
?>
