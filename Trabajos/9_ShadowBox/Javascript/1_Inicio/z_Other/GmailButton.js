 $(document).ready(function(){
    // Enviar a Gmail para pregunta
    $('#btn_gmail').click(function() {
        abrirCorreo();
    });

    function abrirCorreo() {
        var destinatario = 'correo@gmail.com';
        var asunto = 'Consulta';
        var cuerpo = 'Hello good!,\n\n1- Where is my order?\n\n2- I have a problem with the product\n\n3- I have another question...\n\nThank you.';

        destinatario = encodeURIComponent(destinatario);
        asunto = encodeURIComponent(asunto);
        cuerpo = encodeURIComponent(cuerpo);

        var mailtoLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + destinatario + '&su=' + asunto + '&body=' + cuerpo;

        window.open(mailtoLink, '_blank');
    }
    

    // BOTON DE AYUDA GMAIL
    window.onscroll = function() { actualizarPosicion(); };
    function actualizarPosicion() {
        var boton = document.getElementById('btn_gmail');
        var distanciaDesdeLaParteSuperior = window.innerHeight - boton.offsetHeight - 20; // Considera el tamaño del botón y el espacio desde el borde inferior de la ventana
        boton.style.top = distanciaDesdeLaParteSuperior + 'px';
    }
})