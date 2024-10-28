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

// Obtener los datos del formulario
$email = $_POST['email'];
$username = $_POST['username'];
$fullname = $_POST['fullname'];
$password = $_POST['password'];

// Verificar si el nombre de usuario o el correo electrónico ya existen en la tabla
$sql_check = "SELECT * FROM user WHERE name_user= ? OR email = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("ss", $username, $email);
$stmt_check->execute();
$result_check = $stmt_check->get_result();

if ($result_check->num_rows > 0) {
    // El nombre de usuario o el correo electrónico ya existen
    echo "Ya existe este nombre de usuario o correo electrónico.";
} else {
    // Preparar la consulta para insertar un nuevo usuario
    $sql_insert = "INSERT INTO user (name_person, name_user, email, password, image) VALUES (?, ?, ?, ?, ?)";
    
    // Preparar la declaración SQL
    $stmt = $conn->prepare($sql_insert);
    // Vincular los parámetros
    $stmt->bind_param("sssss", $fullname, $username, $email, $password, $imagen);
    
    // Asignar valores a los parámetros
    $imagen = "png_images/png_icon/tristana2.png";
    
    // Ejecutar la consulta
    if ($stmt->execute()) {
        // Insertar el valor "2" en la columna LimiteOrden, el valor "2" en la columna LimitComentario y el valor "1" en la columna EstadoCuenta para el nuevo usuario
        $sql_update_limit = "UPDATE user SET limit_orders = '2', blocked = '1' WHERE name_user = ?";
        $stmt_limit = $conn->prepare($sql_update_limit);
        $stmt_limit->bind_param("s", $username);
        $stmt_limit->execute();

        echo "Usuario registrado correctamente.";
    } else {
        echo "Error al registrar el usuario: " . $stmt->error;
    }
}

// Cerrar la conexión
$conn->close();
?>
