$(document).ready(function(){
     //Scroll Elementos Menu
     var caracteristicas = $('#caracteristicas').offset().top,
       precio= $('#precios').offset().top,
       contacto= $('#contacto').offset().top;

     //Botones Principales
     $('#btn-inicio').on('click', function(e){
          e.preventDefault();
          $('html,body').animate({
               scrollTop: caracteristicas
          }, 20);
     });
     $('#btn-precio').on('click', function(e){
          e.preventDefault();
          $('html,body').animate({
               scrollTop: precio
          }, 20);
     });

     $('#btn-contacto').on('click', function(e){
          e.preventDefault();
          $('html,body').animate({
               scrollTop: contacto
          }, 20);
     });

     //Botones Secundarios
     $('#btn-inicios').on('click', function(e){
          e.preventDefault();
          $('html,body').animate({
               scrollTop: caracteristicas
          }, 20);
     });
     $('#btn-precios').on('click', function(e){
          e.preventDefault();
          $('html,body').animate({
               scrollTop: precio
          }, 20);
     });
});

    
