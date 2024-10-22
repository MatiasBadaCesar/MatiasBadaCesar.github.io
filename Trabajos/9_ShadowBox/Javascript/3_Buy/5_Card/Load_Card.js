// Obtener el valor de SaveCard
$(document).ready(function(){
    var contenedor1 = 'card_skin';
    var contenedor2 = 'card_box';
    var contenedor3 = 'card_bank';
    var contenedor4 = 'card_icon';
    var contenedor51 = 'card_other_1';
    var contenedor52 = 'card_other_2';
    var contenedor53 = 'card_other_3';
    var contenedor54 = 'card_other_4';
    var colorMarco = 'color-marco';
    var colorBorde = 'color-borde';
    var saturacionMarco = 'saturacion-marco';
    var saturacionBorde = 'saturacion-borde';
    var textoAspecto = 'text_aspect'
    var textoInvocador = 'text_invoker';

    setTimeout(function() {
        recuperarCarta(contenedor1);
        recuperarCarta(contenedor2);
        recuperarCarta(contenedor3);
        recuperarCarta(contenedor4);
        recuperarCarta(contenedor51);
        recuperarCarta(contenedor52);
        recuperarCarta(contenedor53);
        recuperarCarta(contenedor54);
        recuperarColor();
        recuperarTitulos();
    }, 200);

    function recuperarCarta(componente){
        var imagenRecuperada = sessionStorage.getItem( '#' + componente);
        if (imagenRecuperada) {
            $('#' + componente).attr('src', imagenRecuperada);
        }
    }
    function recuperarColor() {
        // Recuperar datos
        var colorRecuperado1 = sessionStorage.getItem(colorMarco);
        var colorRecuperado2 = sessionStorage.getItem(colorBorde);
        var saturaRecuperado1 = sessionStorage.getItem(saturacionMarco);
        var saturaRecuperado2 = sessionStorage.getItem(saturacionBorde);
    
        // Aplicar datos directamente a las imágenes usando sus IDs
        if (colorRecuperado1 && saturaRecuperado1) {
            $('#card_box').css('filter', colorRecuperado1 + ' ' + saturaRecuperado1);
        }
    
        if (colorRecuperado2 && saturaRecuperado2) {
            $('#card_bank').css('filter', colorRecuperado2 + ' ' + saturaRecuperado2);
        }
    }    

    function recuperarTitulos(){
        var elemento1 = sessionStorage.getItem(textoAspecto);
        var elemento2 = sessionStorage.getItem(textoInvocador);

        var elementoTexto1 = document.getElementById(textoAspecto);
        var elementoTexto2 = document.getElementById(textoInvocador);

        if (elementoTexto1 && elementoTexto2) { // Verifica si se encontraron los elementos
            elementoTexto1.textContent = elemento1;
            elementoTexto2.textContent = elemento2;
        } else {
            console.error("Uno o ambos elementos no fueron encontrados en el DOM.");
        }
    }
})