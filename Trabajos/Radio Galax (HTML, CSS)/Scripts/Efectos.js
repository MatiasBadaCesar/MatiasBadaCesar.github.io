$(document).ready(function(){
     //Scroll Elementos Menu
     var caracteristicas = $('#inicio').offset().top,
       precio= $('#ganador').offset().top,
       contacto= $('#contacto').offset().top;

     $('#btn-inicio').on('click', function(e){
          e.preventDefault();
          $('html,body').animate({
               scrollTop: caracteristicas
          }, 400);
     });
     $('#btn-precio').on('click', function(e){
          e.preventDefault();
          $('html,body').animate({
               scrollTop: precio
          }, 400);
     });
     $('#btn-contacto').on('click', function(e){
          e.preventDefault();
          $('html,body').animate({
               scrollTop: contacto
          }, 400);
     });

});

    
