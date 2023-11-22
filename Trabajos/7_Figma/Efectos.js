$(document).ready(function(){
     //Scroll Elementos Menu
     var acercaDe = $('#acerca-de').offset().top,
     trabajos =$('#trabajos').offset().top,
     contacto = $('#contacto').offset().top;

     $('#btn-acerca').on('click', function(e){
          e.preventDefault();
          $('html,body').animate({
               scrollTop: acercaDe
          }, 500);
     });

     $('#btn-trabajos').on('click', function(e){
          e.preventDefault();
          $('html,body').animate({
               scrollTop: trabajos
          }, 500);
     });

     $('#btn-contacto').on('click', function(e){
          e.preventDefault();
          $('html,body').animate({
               scrollTop: contacto
          }, 500);
     });
});

    
