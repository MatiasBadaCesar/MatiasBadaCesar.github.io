$(document).ready(function(){

      // Efecto de aparición del menú
     $('.buttons-container a').each(function(index, elemento) {
          $(elemento).css({
               'position': 'relative',
               'top': '-200px'
          });
          
          $(elemento).delay(index * 500).animate({
               top: '0'
          }, 2000);
     });



     //Scroll Elementos Menu
     var acercaDe = $('#acerca').offset().top,
     trabajos =$('#trabajos').offset().top,
     contacto = $('#contacto').offset().top,
     menuTop = $('#menu').offset().top;
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
     $('#btnScrollTop').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({
              scrollTop: menuTop
          }, 500);
      });

});

    
