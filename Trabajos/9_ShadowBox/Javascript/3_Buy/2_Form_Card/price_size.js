document.addEventListener("DOMContentLoaded", function() {
  // Carta
  var Cartas = 0;

  // Tamaño
  var tPrecio1 = 1;
  var tPrecio2 = 2;
  var tPrecio3 = 3;
  var tBase = tPrecio1;
  var tImagen1 = 'tamañ1';
  var tImagen2 = 'tamañ2';
  var tImagen3 = 'tamañ3';
  var tImagenBase = tImagen1;

  // Relieve
  var rPrecio1 = 2;
  var rPrecio2 = 4;
  var rPrecio3 = 6;
  var rBase = rPrecio1;
  var rImagen1 = 'reliev1';
  var rImagen2 = 'reliev2';
  var rImagen3 = 'reliev3';
  var rImagenBase = rImagen1;

  // Reiniciar Imagenes
  function reiniciarImagenes(){
      $('#' + tImagen1).hide();
      $('#' + tImagen2).hide();
      $('#' + tImagen3).hide();
      $('#' + rImagen1).hide();
      $('#' + rImagen2).hide();
      $('#' + rImagen3).hide();
      $('#' + tImagenBase).show(); 
      $('#' + rImagenBase).show(); 
  }

 // Cambiar precio
function preciototal() {
  var total = parseFloat(tBase) + parseFloat(rBase) + parseFloat(Cartas); // Convertir a números y luego sumar
  var precioElement = document.querySelector(".precio");
  precioElement.textContent = total;
  var precio2Element = document.querySelector(".precio2");
  precio2Element.textContent = total;
}


  // Obtener precios del archivo PHP
  $.ajax({
      url: 'PHP/3_Comprar/LlamarPrecios.php',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
          // Asignar precios obtenidos del archivo PHP
          Cartas = data['Carta'];
          tPrecio1 = data['M16x28'];
          tPrecio2 = data['L35x20'];
          tPrecio3 = data['XL58x34'];
          rPrecio1 = data['Relieve1'];
          rPrecio2 = data['Relieve2'];
          rPrecio3 = data['Relieve3'];

          // Ejecutar el resto del código después de obtener los precios
          document.getElementById("tamaño1").click();
          document.getElementById("relieve1").click();
      },
      error: function(xhr, status, error) {
          console.error(error);
      }
  });
  // Eventos para cambiar el tamaño
  document.getElementById("tamaño1").addEventListener("click", function() {
      tBase = tPrecio1;
      tImagenBase = tImagen1
      reiniciarImagenes();
      preciototal();
  });
  document.getElementById("tamaño2").addEventListener("click", function() {
      tBase = tPrecio2;
      tImagenBase = tImagen2
      reiniciarImagenes();
      preciototal();
  });
  document.getElementById("tamaño3").addEventListener("click", function() {
      tBase = tPrecio3;
      tImagenBase = tImagen3
      reiniciarImagenes();
      preciototal();
  });

  // Eventos para cambiar el relieve
  document.getElementById("relieve1").addEventListener("click", function() {
      rBase = rPrecio1;
      rImagenBase = rImagen1;
      reiniciarImagenes();
      preciototal();
  });
  document.getElementById("relieve2").addEventListener("click", function() {
      rBase = rPrecio2;
      rImagenBase = rImagen2;
      reiniciarImagenes();
      preciototal();
  });
  document.getElementById("relieve3").addEventListener("click", function() {
      rBase = rPrecio3;
      rImagenBase = rImagen3;
      reiniciarImagenes();
      preciototal();
  });
});
