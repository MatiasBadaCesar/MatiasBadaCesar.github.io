
// Alertar falta de comprobante
document.getElementById("EnviarOrdenFalso").addEventListener("click", function() {
    alert("¡Carga un comprobante primero!");
});

//Cargar Comprobante
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia a los elementos del DOM
    var inputImagen = document.getElementById("inputImagenComprobante");
    var imagenComprobante = document.getElementById("imagenComprobante");
    var inputComprobante2 = document.getElementById("comprobante2"); // Verifica que este ID exista
    var botonEnviar = document.getElementById("EnviarOrdenFalso");
    
    // Asegúrate de que inputImagen y imagenComprobante existen antes de añadir el evento
    if (inputImagen && imagenComprobante) {
        // Agregar un evento de cambio al input de imagen
        inputImagen.addEventListener("change", function() {
            // Verificar si se ha seleccionado un archivo
            if (inputImagen.files && inputImagen.files[0]) {
                // Crear un objeto URL para mostrar la imagen seleccionada
                var reader = new FileReader();
                reader.onload = function(e) {
                    imagenComprobante.src = e.target.result; // Mostrar la imagen
                };
                // Leer el archivo como una URL de datos
                reader.readAsDataURL(inputImagen.files[0]);
                
                // Cambiar visibilidad de botones
                botonEnviar.style.display = 'none'; // Ocultar el botón de "Enviar Orden Falso"
                document.getElementById("EnviarOrden").style.display = 'block'; // Mostrar el botón de "Enviar Orden"
                
                // Verifica que inputComprobante2 exista antes de intentar asignar archivos
                if (inputComprobante2) {
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(inputImagen.files[0]); // Usar el archivo del input de imagen
                    inputComprobante2.files = dataTransfer.files; // Asignar archivos al segundo input
                    console.log('El archivo se ha cargado con éxito en ambos componentes.');
                }
            }
        });
    }
});
