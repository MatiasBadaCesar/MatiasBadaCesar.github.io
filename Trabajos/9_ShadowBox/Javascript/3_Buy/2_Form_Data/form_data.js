// Completar formulario
document.getElementById("siguiente2").addEventListener("click", function() {
    // Obtener referencia al formulario
    var formulario = document.getElementById("formularioEnvio");
    // Verificar si todos los campos obligatorios están completos
    var camposCompletos = true;
    formulario.querySelectorAll("input[required]").forEach(function(input) {
        if (!input.value.trim()) {
            camposCompletos = false;
        }
    });
    // Si todos los campos están completos, mostrar la alerta "Formulario Completado"
    if (camposCompletos) {
        $('.etapa2').hide();
        $('.etapa3').show(); 
    } else {
        // Si falta algún campo, mostrar un mensaje de alerta
        alert("Por favor, completa todos los campos del formulario.");
    }
});
