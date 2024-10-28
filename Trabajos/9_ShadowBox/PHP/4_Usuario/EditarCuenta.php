<?php
// Recibir datos del formulario
$nuevoNombre = $_POST['nuevoNombre'];
$nuevoUsuario = $_POST['nuevoUsuario'];
$usuario = $_POST['usuario'];

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
  die("Conexión fallida: " . $conn->connect_error);
}

// Actualizar datos en la base de datos
$sql = "UPDATE user SET name_person='$nuevoNombre', name_user='$nuevoUsuario' WHERE id='$usuario'";

if ($conn->query($sql) === TRUE) {
  echo "Los datos se actualizaron correctamente.";
} else {
  echo "Error al actualizar los datos: " . $conn->error;
}

$conn->close();
?>
