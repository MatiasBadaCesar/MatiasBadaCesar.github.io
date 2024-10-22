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
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener los datos del cuerpo de la solicitud POST
$data = json_decode(file_get_contents('php://input'), true);
$idUsuario = $data['idUsuario'] ?? '';
$fechaHorario = $data['fechaHorario'] ?? '';
$monto = $data['monto'] ?? '';
$carta = $data['carta'] ?? '';
$country = $data['departamento'] ?? ''; // Cambiado de departamento a country
$city = $data['ciudad'] ?? '';
$direccionEnvio = $data['direccionEnvio'] ?? '';
$documento = $data['documento'] ?? '';
$celularContacto = $data['celularContacto'] ?? '';
$nombreCompleto = $data['nombreCompleto'] ?? '';

// Valor para etapas_envio
$etapasEnvio = 0;

// Validar datos
if (empty($idUsuario) || empty($fechaHorario) || empty($monto) || empty($carta) || empty($country) || empty($city) || empty($direccionEnvio) || empty($documento) || empty($celularContacto) || empty($nombreCompleto)) {
    die("Por favor, complete todos los campos.");
}

// Iniciar una transacción
$conn->begin_transaction();

try {
    // Sentencia SQL para insertar los datos en la tabla order_card
    $sqlVentas = "INSERT INTO order_card (id, date, amount, card, country, city, address_office, postal_code, contact_number, full_name, stages_process)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // Preparar la declaración SQL para Ventas
    $stmtVentas = $conn->prepare($sqlVentas);
    
    // Verificar si la preparación tuvo éxito
    if (!$stmtVentas) {
        throw new Exception("Error en la preparación de la sentencia: " . $conn->error);
    }

    // Vincular parámetros para Ventas
    // Asegúrate de que los tipos coincidan con los tipos de datos en tu tabla
    $stmtVentas->bind_param("isssssssssi", $idUsuario, $fechaHorario, $monto, $carta, $country, $city, $direccionEnvio, $documento, $celularContacto, $nombreCompleto, $etapasEnvio);

    // Ejecutar la declaración para Ventas
    if (!$stmtVentas->execute()) {
        throw new Exception("Error en la inserción de ventas: " . $stmtVentas->error);
    }

    // Actualizar la tabla Usuario
    $sqlUsuario = "UPDATE user SET limit_orders = limit_orders - 1 WHERE id= ?";

    // Preparar la declaración SQL para Usuario
    $stmtUsuario = $conn->prepare($sqlUsuario);
    
    // Verificar si la preparación tuvo éxito
    if (!$stmtUsuario) {
        throw new Exception("Error en la preparación de la sentencia para usuario: " . $conn->error);
    }

    // Vincular parámetros para Usuario
    $stmtUsuario->bind_param("i", $idUsuario);

    // Ejecutar la declaración para Usuario
    if (!$stmtUsuario->execute()) {
        throw new Exception("Error en la actualización del usuario: " . $stmtUsuario->error);
    }

    // Confirmar la transacción
    $conn->commit();
    echo "Los datos se han insertado correctamente y se ha actualizado el límite de orden para el usuario.";
} catch (Exception $e) {
    // Revertir la transacción en caso de error
    $conn->rollback();
    echo "Error al insertar datos: " . $e->getMessage();
} finally {
    // Cerrar las declaraciones y la conexión
    if (isset($stmtVentas)) {
        $stmtVentas->close();
    }
    if (isset($stmtUsuario)) {
        $stmtUsuario->close();
    }
    $conn->close();
}
?>
