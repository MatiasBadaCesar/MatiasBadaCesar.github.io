document.addEventListener("DOMContentLoaded", function() {
    var usuario;
    // Realizar la solicitud al servidor para verificar la cookie de sesión
    fetch('PHP/2_Inscripcion/VerificarSesion.php', {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
        }
        return response.text(); // Obtener el texto de la respuesta
    })
    .then(data => {
        // Verificar si la respuesta está vacía
        if (data.trim() === "") {
            window.location.href = "//localhost/ShadowBox/Inscripcion.html";
            throw new Error('La respuesta está vacía');
            
        }
        // Parsear la respuesta como JSON
        return JSON.parse(data);
    })
    .then(data => {
        // Verificar si hay una sesión activa
        if (Object.keys(data).length !== 0 && data.hasOwnProperty("rutaImagen")) {
            // Mostrar mensaje de sesión iniciada
            //alert("¡Sesión Iniciada!");

            // Obtener rutas
            usuario = data.idUsuario;
            var rutaNombreUsuario = data.nombreUsuario;
            var rutaNombreCompleto = data.nombreCompleto;
            var rutaImagen = data.rutaImagen;

            // Actualizar componentes
            var nombreUsuarioElement = document.getElementById("nombreUsuario");
            nombreUsuarioElement.innerText = rutaNombreUsuario;
            var nombreCompletoElement = document.getElementById("nombreCompleto");
            nombreCompletoElement.innerText = rutaNombreCompleto;

            var boton = document.getElementById("btnUsuario");
            boton.querySelector("img").src = rutaImagen;

             // Verificar si el usuario ha alcanzado el límite de órdenes
            if (data.limiteOrden <= 0) {
                $('#LimiteOrdenes').show();
            }

            LlamarVentas(usuario)
        } else {
            // Redireccionar al usuario a la página de inicio de sesión
        }
    })
   .catch(error => {
    console.error('Error al verificar la sesión:', error);
    // Redireccionar al usuario a la página de inicio de sesión
    window.location.href = "//localhost/ShadowBox/Inscripcion.html";
});


    //LLAMAR VENTAS
    var ventas = [];
    var currentIndex = 0;

    function LlamarVentas(IdUsuario) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var respuesta = JSON.parse(xhr.responseText);

                    if (respuesta.error) {
                        alert(respuesta.error);
                    } else {
                        ventas = respuesta;
                        mostrarVenta(currentIndex);
                        actualizarBotones();
                    }
                } else {
                    alert("Error al obtener las ventas");
                }
            }
        };

        xhr.open("GET", "PHP/4_Usuario/LlamarVentas.php?IdUsuario=" + IdUsuario, true);
        xhr.send();
    }

    function mostrarVenta(index) {
        if (ventas.length > 0 && index >= 0 && index < ventas.length) {
            var venta = ventas[index];
            document.getElementById("fecha-compra").textContent = venta.fecha_horario;
            document.getElementById("monto-pagado").textContent = venta.monto;
    
            // Actualizar estado del pedido
            var pedido1 = "estado-pedido-1";
            var pedido2 = "estado-pedido-2";
            var pedido3 = "estado-pedido-3";
            var color1="red";
            var color2="green";
            var color3="black";

            if (venta.etapas_envio == 0) {
                document.getElementById(pedido1).style.color = color1;
                document.getElementById(pedido2).style.color = color3;
                document.getElementById(pedido3).style.color = color3;
            } else if (venta.etapas_envio == 1) {
                document.getElementById(pedido1).style.color = color2;
                document.getElementById(pedido2).style.color = color1;
                document.getElementById(pedido3).style.color = color3;
            } else if (venta.etapas_envio == 2) {
                document.getElementById(pedido1).style.color = color2;
                document.getElementById(pedido2).style.color = color2;
                document.getElementById(pedido3).style.color = color2;
            } else {
                document.getElementById(pedido1).style.color = color3;
                document.getElementById(pedido2).style.color = color3;
                document.getElementById(pedido3).style.color = color3;
            }
            if(venta.etapas_envio == 2){
                document.getElementById("visto-bueno1").style.display ="none";
                document.getElementById("visto-bueno2").style.display ="inline-block";
            }else{
                document.getElementById("visto-bueno1").style.display ="inline-block";
                document.getElementById("visto-bueno2").style.display ="none";
            }
    
            // Actualizar las imágenes de los componentes de la carta
            var carta = venta.carta;
            var componentesCarta = [
                'carta-componente-1',
                'carta-componente-2',
                'carta-componente-3',
                'carta-componente-4',
                'carta-componente-5-1',
                'carta-componente-5-2',
                'carta-componente-5-3',
                'carta-componente-5-4'
            ];

            componentesCarta.forEach(function(componente) {
                var start = carta.indexOf(componente + ", Imagen:") + (componente + ", Imagen:").length;
                var end = carta.indexOf("\n", start);
                if (end === -1) end = carta.length;

                var imagenSrc = carta.substring(start, end).trim();
                document.querySelector("#" + componente + " img").src = imagenSrc;
            });

            // Obtener y aplicar los valores de saturación para el marco y el borde
            var marcoHue = venta.carta.match(/Color Marco: hue-rotate\((\d+deg)\)/)[1];
            var marcoSaturate = venta.carta.match(/Saturación Marco: saturate\((\d+%)\)/)[1];
            var bordeHue = venta.carta.match(/Color Borde: hue-rotate\((\d+deg)\)/)[1];
            var bordeSaturate = venta.carta.match(/Saturación Borde: saturate\((\d+%)\)/)[1];

            var cartaComponente2Img = document.querySelector("#carta-componente-2 img");
            cartaComponente2Img.style.filter = `hue-rotate(${marcoHue}) saturate(${marcoSaturate})`;

            var cartaComponente3Img = document.querySelector("#carta-componente-3 img");
            cartaComponente3Img.style.filter = `hue-rotate(${bordeHue}) saturate(${bordeSaturate})`;
        }
        
        // Actualizar texto de aspecto e invocador
        var textoAspecto = carta.match(/TextoAspecto: ([^\n]+)/)[1];
        var textoInvocador = carta.match(/TextoInvocador: ([^\n]+)/)[1];
        
        document.getElementById("texto-aspecto").textContent = textoAspecto;
        document.getElementById("texto-invocador").textContent = textoInvocador;
    }

    function actualizarBotones() {
        document.getElementById("boton-1").style.display = currentIndex > 0 ? "inline-block" : "none";
        document.getElementById("boton-2").style.display = currentIndex < ventas.length - 1 ? "inline-block" : "none";
    }

    document.getElementById("boton-1").addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            mostrarVenta(currentIndex);
            actualizarBotones();
        }
    });

    document.getElementById("boton-2").addEventListener("click", function() {
        if (currentIndex < ventas.length - 1) {
            currentIndex++;
            mostrarVenta(currentIndex);
            actualizarBotones();
        }
    });
    

    //EDITAR USUARIO
    var editarBtn = document.getElementById('editar-btn');
    var modal = document.getElementById('modal');
    var closeBtn = document.querySelector('.close-btn');
    var guardarBtn = document.getElementById('guardar-btn');

    editarBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    guardarBtn.addEventListener('click', function () {
        var nombreCompleto = document.getElementById('nombre-completo').value;
        var nombreUsuario = document.getElementById('nombre-usuario').value;

        // Crear un objeto FormData para enviar los datos
        var formData = new FormData();
        formData.append('nuevoNombre', nombreCompleto);
        formData.append('nuevoUsuario', nombreUsuario);
        formData.append('usuario', usuario);

        // Enviar datos a PHP mediante fetch
        fetch('PHP/Usuario/EditarCuenta.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Puedes manejar la respuesta aquí, mostrar mensajes, etc.
            modal.style.display = 'none';
            // Recargar la página después de cerrar el modal
            location.reload();
        })
        .catch(error => console.error('Error:', error));
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
