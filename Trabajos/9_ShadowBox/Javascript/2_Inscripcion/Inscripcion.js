// BASICOS
document.addEventListener("DOMContentLoaded", function() {   
  document.getElementById("toggle-button1").addEventListener("click", function() {
    $('#subscription-form').show();  
    $('#registration-form').hide();
  });
  document.getElementById("toggle-button2").addEventListener("click", function() {
    $('#subscription-form').hide(); 
    $('#registration-form').show();  
  });
  document.getElementById("btnInicio").addEventListener("click", () => {
    window.location.href = "//localhost/Shadowbox/";
  });
})

// REGISTRARSE
document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencia al formulario de suscripción
  var subscriptionForm = document.getElementById("subscription-form");

  // Función para enviar la solicitud de suscripción
  function suscribirse(event) {
      // Detener el envío del formulario por defecto
      event.preventDefault();

      // Obtener los datos del formulario
      var formData = new FormData(subscriptionForm);

      // Realizar la solicitud POST al archivo PHP "Suscripcion.php"
      fetch('PHP/2_Inscripcion/Subscription.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(data => {
          // Mostrar mensaje al usuario según la respuesta del servidor
          alert(data);
          // Verificar si el mensaje es de éxito antes de redireccionar
          if (data === "Usuario registrado correctamente.") {
              window.location.href = "Inscripcion.html"; // Redireccionar a la página de inscripción
          }
      })
      .catch(error => {
          console.error('Error al realizar la solicitud:', error);
          // Mostrar mensaje de error al usuario
          alert('Ocurrió un error al realizar la suscripción. Por favor, inténtalo de nuevo más tarde.');
      });
  }

  // Agregar evento de envío de formulario al formulario de suscripción
  subscriptionForm.addEventListener("submit", suscribirse);
});

// INICIAR SECION
document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencia al formulario de inicio de sesión
  var loginForm = document.getElementById("registration-form");

  // Función para enviar la solicitud de inicio de sesión
  function iniciarSesion(event) {
      // Detener el envío del formulario por defecto
      event.preventDefault();

      // Obtener los datos del formulario
      var formData = new FormData(loginForm);

      // Realizar la solicitud POST al archivo PHP "InicioSesion.php"
      fetch('PHP/2_Inscripcion/StartSession.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(data => {
          // Mostrar mensaje al usuario según la respuesta del servidor
          alert(data);
          // Si el inicio de sesión fue exitoso, redireccionar a una nueva página
          if (data === "¡Inicio de sesión exitoso!") {
              window.location.href = "http://localhost/ShadowBox/Comprar.html";
          }
      })
      .catch(error => {
          console.error('Error al realizar la solicitud:', error);
          // Mostrar mensaje de error al usuario
          alert('Ocurrió un error al intentar iniciar sesión. Por favor, inténtelo de nuevo más tarde.');
      });
  }

  // Agregar evento de envío de formulario al formulario de inicio de sesión
  loginForm.addEventListener("submit", iniciarSesion);
});

