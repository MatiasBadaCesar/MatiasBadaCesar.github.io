<?php
// Recibir datos del formulario
$nuevoNombre = $_POST['nuevoNombre'];
$nuevoUsuario = $_POST['nuevoUsuario'];
$usuario = $_POST['usuario'];

<?php
// Conexión a la base de datos
$host = "b1clxpxdrpcigs7sg9xc-mysql.services.clever-cloud.com";
$dbname = "b1clxpxdrpcigs7sg9xc";
$user = "ul8oe8f8xiygp0tx";
$password = "vAzDek28JQqPD7rBGg1L";

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