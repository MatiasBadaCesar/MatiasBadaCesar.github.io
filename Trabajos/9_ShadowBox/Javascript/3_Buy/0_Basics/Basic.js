document.addEventListener("DOMContentLoaded", function() {   
    document.getElementById("siguiente").addEventListener("click", function() {
        $('.etapa1').hide();
        $('.etapa2').show(); 
    })
    document.getElementById("atras").addEventListener("click", function() {
        $('.etapa2').hide();
        $('.etapa1').show(); 
    })
    document.getElementById("atras2").addEventListener("click", function() {
        $('.etapa3').hide();
        $('.etapa2').show(); 
    })
})