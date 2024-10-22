//Base de Datos
$(document).ready(function(){
    //INICIAL
    setTimeout(function() {
        //Seleccionar primer boton
        $('#btnSkin').click();
    }, 200);

    //NOMBRE DE LA CARTA
    const aspect = document.getElementById('name_aspect');
    const invoker = document.getElementById('name_invoker');
    const textoAspecto = document.getElementById('text_aspect');
    const textoInvocador = document.getElementById('text_invoker');
    aspect.addEventListener('input', updateText1);
    invoker.addEventListener('input', updateText2);
    // Actualizar Textos
    function updateText1() {
        if(aspect.value){
            textoAspecto.textContent = aspect.value;
            sessionStorage.setItem('text_aspect',  textoAspecto.textContent);
        }else{
            sessionStorage.setItem('text_aspect',  textoAspecto.textContent);
        }
    }
    function updateText2() {
        if(invoker.value){
            textoInvocador.textContent = invoker.value;
            sessionStorage.setItem('text_invoker', textoInvocador.textContent);
        }else{
            sessionStorage.setItem('text_invoker', textoInvocador.textContent);
        }
    }
      
    //BOTONES DE CARTA
    //(los 5 botones de abajo)
    //Resetear Interfaz
    function restartInterface() {
        $('#campeon-input').val('');
        $('#btnSkin, #btnMarco, #btnBorde, #btnIcono, #btnOtros').removeClass('active');
        $('#gallery_1').hide(); 
        $('#gallery_2').hide(); 
        $('#gallery_box_container').hide();
        $('#btn_icon_return').hide();
        $('#campeon-input').hide();
        $('#search').hide();
        $('#btnSkinReturn').hide();
        $('#marco-input').hide();
        $('#icono-input').hide();
        $('#gallery_icon').hide(); 
        $('#otros-input').hide(); 
        $('#gallery_other').hide();
    }
    //Skin
    $('#btnSkin').click(function() {
        restartInterface()
        $('#gallery_1').show(); 
        $('#search').show();
        $('#campeon-input').show();
        skins();
    });
    //Skin Return
    $('#btnSkinReturn').click(function() {
        restartInterface();
        $('#btnSkin').click();
    });
    //Marco
    $('#btnMarco').click(function() {
        restartInterface()
        $('#gallery_box_container').show();
        box();
    });
    //Borde
    $('#btnBorde').click(function() {
        restartInterface()
        $('#gallery_2').show(); 
        borde();
    });
    //Iconos
    $('#btnIcono').click(function() {
        restartInterface();
        $('#gallery_icon').show();
        $('#icono-input').show().attr('placeholder', 'Icono');
        callIconCover();
    });
    $('#btn_icon_1, #btn_icon_2, #btn_icon_3, #btn_icon_4, #btn_icon_5').click(function() {
        restartInterface();
        $('#gallery_1').show();   
        $('#btn_icon_return').show();        
        icons($(this).attr('id').slice(-1));
    });
    $('#btn_icon_return').click(function(){
        $('#btnIcono').click();
    });
    //Otros
    $('#btnOtros').click(function() {
        restartInterface();
        $('#gallery_other').show();  
        $('#otros-input').show().attr('placeholder', 'Otros');
        other();
    });
    //Comprar
    $('#btn_buy_false').click(function() {
        window.location.href = '//localhost/Shadowbox/Inscripcion.html';
    });
    $('#btn_buy').click(function(){
        window.location.href = '//localhost/Shadowbox/Comprar.html';
    }); 

    //BASE DE DATOS
    //Variables
    var currentImageIndex = 0;
    var totalImages = 0;
    var card_component_1 = '#card_skin';
    var card_component_2 = '#card_box';
    var card_component_3 = '#card_bank';
    var card_component_4 = '#card_icon';
    var card_component_5_1 = '#card_other_1';
    var card_component_5_2 = '#card_other_2';
    var card_component_5_3 = '#card_other_3';
    var card_component_5_4 = '#card_other_4';

    //Skin
   // Función para cargar las skins
    function skins() {
        var url = 'PHP/1_Inicio/Card/Call_Skins.php';
        emptyGalleries();

        // Realizamos la solicitud AJAX para obtener todas las imágenes de skins
        $.ajax({
            url: url,
            method: 'POST',
            data: {}, // No enviamos ningún dato de filtro
            dataType: 'json',
            success: function(response) {
                // Iterar sobre las ubicaciones de las imágenes y mostrarlas en el contenedor
                for (var i = 0; i < response.length; i++) {
                    var imgContainer = $('<div class="prefab_skin_container"></div>'); // Crear el contenedor de la imagen
                    var img = $('<img src="' + response[i] + '" alt="Imagen" class="prefab_skin">'); // Crear la imagen
                    imgContainer.append(img); // Agregar la imagen al contenedor
                    $('#gallery_1').append(imgContainer); // Agregar el contenedor al contenedor principal
                }

                // Agregar el evento de clic a las nuevas imágenes en el cuadro de imágenes
                $('.prefab_skin').click(function() {
                    var imgSrc = $(this).attr('src');
                    callSkinsNameChampeon(imgSrc); // Llama a la función para obtener el campeón correspondiente a la imagen
                });
            }
        });
    }

    // Función para obtener el campeón a partir de la imagen seleccionada
    function callSkinsNameChampeon(imgSrc) {
        $.ajax({
            url: 'PHP/1_Inicio/Card/Call_Skin_Name_Cp.php',
            method: 'POST',
            data: { imgSrc: imgSrc }, // Envía la ruta de la imagen al servidor
            success: function(response) {
                callSkinsChampeons(response);
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    }

    // Función para obtener campeones similares
    function callSkinsChampeons(Champeon = '') {
        var data = { campeon: Champeon }; // Incluir el parámetro "campeon" en los datos enviados
        emptyGalleries();
        restartInterface();
        $('#btnSkinReturn').show();
        $('#gallery_2').show(); 
        
        // Realizar la solicitud AJAX
        $.ajax({
            url: 'PHP/1_Inicio/Card/Call_Skin_Cp.php',
            method: 'POST',
            data: data,
            dataType: 'json',
            success: function(response) {
                // Iterar sobre las ubicaciones de las imágenes y mostrarlas en el contenedor
                for (var i = 0; i < response.length; i++) {
                    var imgContainer = $('<div class="prefab_champeon_container"></div>'); // Crear el contenedor de la imagen y el fondo blanco
                    var img = $('<img src="' + response[i] + '" alt="Imagen" class="prefab_champeon">'); // Crear la imagen
                    var background = $('<div class="prefab_champeon_background"></div>'); // Crear el fondo blanco
                    var overlay = $('<img src="' + response[i] + '" alt="Imagen" class="prefab_champeon_overlay">'); // Crear la imagen de superposición
                    imgContainer.append(img).append(background).append(overlay); // Agregar la imagen y los fondos al contenedor
                    $('#gallery_2').append(imgContainer); // Agregar el contenedor al contenedor principal         
                }
    
                // Agregar el evento de clic a las nuevas imágenes en el cuadro de imágenes
                $('.prefab_champeon_overlay').click(function() {           
                    var imgSrc = $(this).attr('src'); // Obtener el nombre del campeón seleccionado
                    $(card_component_1).attr('src', imgSrc); // Actualizar solo el atributo "src" de la imagen
                    saveCard(card_component_1);
                });
            }
        });   
    }
    
    //Marco
    function box() {
        emptyGalleries();
        $.ajax({
            url: 'PHP/1_Inicio/Card/Call_Box.php',
            method: 'POST',
            data: { index: currentImageIndex },
            dataType: 'json',
            success: function(response) {
                if (response !== null) {
                        // Obtener la primera ubicación de imagen
                        var imgSrc = response;
                        // Mostrar la imagen en el contenedor junto con el fondo blanco
                        var imgContainer = $('<div class="prefab_box_container"></div>'); // Crear el contenedor de la imagen y el fondo blanco
                        var img = $('<img src="' + imgSrc + '" alt="Imagen" class="prefab_box">'); // Crear la imagen
                        var background = $('<div class="prefab_box_background"></div>'); // Crear el fondo blanco
                        var overlay = $('<img src="' + imgSrc + '" alt="Imagen" class="prefab_box_overlay">'); // Crear la imagen
                        imgContainer.append(img).append(background).append(overlay); // Agregar la imagen y los fondos al contenedor
                        $('#gallery_box').html(imgContainer); // Agregar el contenedor al contenedor principal
            
                        // Agregar animación de giro solo a la imagen al pasar el ratón sobre ella
                        img.on('mouseenter', function() {
                            $(this).css({
                                'animation': 'spin 2.2s ease infinite' // Aplicar la animación de giro solo a la imagen
                            });
                        }).on('mouseleave', function() {
                            $(this).css({
                                'animation': 'none' // Detener la animación al retirar el ratón
                            });
                        });
                    
                    // Agregar el evento de clic a la nueva imagen en el cuadro de imágenes
                    $('.prefab_box_overlay').click(function() {
                        $(card_component_2).attr('src', imgSrc); // Actualizar solo el atributo "src" de la imagen
                        saveCard(card_component_2);
                    });
                } else {
                    console.error('No se devolvió una imagen válida.');
                }
            },
            error: function(xhr, status, error) {
                console.error('Error en la solicitud AJAX:', status, error);
            }
        });
    }
    $('#prevImageBtn').click(function() {
        // Incrementar el índice para obtener la siguiente imagen
        currentImageIndex++;
        // Si el índice supera el límite, volver al inicio
        if (currentImageIndex >= totalImages) {
            currentImageIndex = 0;
        }
        // Realizar la solicitud AJAX para obtener la siguiente imagen
        box();
    });
    $('#toggleImageBtn').click(function() {
        // Decrementar el índice para obtener la imagen anterior
        currentImageIndex--;
        // Verificar si el índice es menor que cero, lo establecemos al último índice
        if(currentImageIndex < 0) {
            // Realizar la solicitud AJAX para obtener el total de imágenes
            $.ajax({
                url: 'PHP/1_Inicio/Card/Call_Box_All.php', // Ruta a tu archivo PHP para obtener el total de imágenes
                method: 'GET',
                dataType: 'json',
                success: function(total) {
                    if(total !== null) {
                        // Establecer el índice al último índice de la lista
                        currentImageIndex = total - 1;
                        // Obtener y mostrar la imagen anterior
                        box();
                    } else {
                        // No se pudo obtener el total de imágenes, restablecer el índice a cero
                        currentImageIndex = 0;
                        $('#gallery_box').html('<p>Error al obtener el total de imágenes.</p>');
                    }
                }
            });
        } else {
            // Obtener y mostrar la imagen anterior
            box();
        }
    });
 
    //Borde
    function borde() {
        var url = 'PHP/1_Inicio/Card/Call_Bank.php';
        var data = {}; // Aquí puedes agregar parámetros que necesites enviar en la solicitud
        emptyGalleries()

        // Realizar la solicitud AJAX
        $.ajax({
            url: url,
            method: 'POST',
            data: data,
            dataType: 'json',
            success: function(response) {
                for (var i = 0; i < response.length; i++) {
                    var imgContainer = $('<div class="prefab_champeon_container"></div>'); // Crear el contenedor de la imagen y el fondo blanco
                    var img = $('<img src="' + response[i] + '" alt="Imagen" class="prefab_champeon">'); // Crear la imagen
                    var background = $('<div class="prefab_champeon_background"></div>'); // Crear el fondo blanco
                    var overlay = $('<img src="' + response[i] + '" alt="Imagen" class="prefab_champeon_overlay">'); // Crear la imagen
                    imgContainer.append(img).append(background).append(overlay); // Agregar la imagen y los fondos al contenedor
                    $('#gallery_2').append(imgContainer); // Agregar el contenedor al contenedor principal
                }
    
                // Agregar el evento de clic a las nuevas imágenes en el cuadro de imágenes
                $('.prefab_champeon_overlay').click(function() {
                    var imgSrc = $(this).attr('src');
                    $(card_component_3).attr('src', imgSrc); // Actualizar solo el atributo "src" de la imagen
                    saveCard(card_component_3);
                });
            }
        });
    }
    
    //Icon
    function icons(icono) {
        emptyGalleries();
        const url = 'PHP/1_Inicio/Card/Call_Icon.php';
        const data = { icono: icono };
    
        $.ajax({
            url: url,
            method: 'POST',
            data: data,
            dataType: 'json',
            success: function(response) {
                // Verificar si se devolvió una imagen
                if (response && response.length > 0) {            
                    // Iterar sobre las ubicaciones de las imágenes y mostrarlas en el contenedor
                    for (var i = 0; i < response.length; i++) {
                        var imgContainer = $('<div class="prefab_skin_container"></div>'); // Crear el contenedor de la imagen
                        var img = $('<img src="' + response[i] + '" alt="Imagen" class="prefab_skin">'); // Crear la imagen
                        imgContainer.append(img); // Agregar la imagen al contenedor
                        $('#gallery_1').append(imgContainer); // Agregar el contenedor al contenedor principal
                    }
    
                    // Agregar el evento de clic a las nuevas imágenes en el cuadro de imágenes
                    $('.prefab_skin').click(function() {
                        var imgSrc = $(this).attr('src');
                        $(card_component_4).attr('src', imgSrc); // Actualizar solo el atributo "src" de la imagen
                        saveCard(card_component_4);
                    });
                }
            }
        });
    }
    function callIconCover() {
        for (let tipo = 1; tipo <= 5; tipo++) {
            $.ajax({
                url: 'PHP/1_Inicio/Card/Call_Icon_Cover.php',
                method: 'POST',
                data: { tipo: tipo },
                success: function(response) {
                    $(`#image-icono${tipo}`).html(response);
                }
            });
        }
    }

    //Other
    function other() {
        function call_Other(type, containerId, className, cartaComponente) {
            $.ajax({
                url: 'PHP/1_Inicio/Card/Call_Other.php',
                method: 'POST',
                data: { type: type }, // Envía el valor de type
                dataType: 'json',
                success: function(response) {
                    // Iterar sobre las ubicaciones de las imágenes y mostrarlas en el contenedor
                    for (var i = 0; i < response.length; i++) {
                        var img = '<img src="' + response[i] + '" alt="Imagen" class="' + className + '">';
                        $(containerId).append(img);
                    }

                    // Agregar el evento de clic a las nuevas imágenes en el cuadro de imágenes
                    $('.' + className).click(function() {
                        var imgSrc = $(this).attr('src');
                        $(cartaComponente).attr('src', imgSrc); // Actualiza la imagen
                        saveCard(cartaComponente);
                    });
                }
            });
        }
    
        // Llamadas para cargar imágenes en diferentes contenedores
        call_Other(1, '#gallery_other_1', 'prefabt_other_1', card_component_5_1);
        call_Other(2, '#gallery_other_2', 'prefabt_other_2', card_component_5_2);
        call_Other(3, '#gallery_other_3', 'prefabt_other_3', card_component_5_3);
        call_Other(4, '#gallery_other_4', 'prefabt_other_4', card_component_5_4);
    }

    //Limpiar Galeria
    function emptyGalleries(){
        $('#gallery_1').empty();
        $('#gallery_2').empty();
        $('#gallery_box').empty();
        $('#gallery_other_1').empty();
        $('#gallery_other_2').empty();
        $('#gallery_other_3').empty();
        $('#gallery_other_4').empty();
    }

    // GUARDAR CARTA
    function saveCard(idComponente) {
        var srcImagen = $(idComponente).attr('src'); // Acceder directamente a la imagen por su ID

        // Verificar si la URL de la imagen no es undefined o null
        if (srcImagen) {
            sessionStorage.setItem(idComponente, srcImagen);
        }
    }  
});
