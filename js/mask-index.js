$(document).ready(function(){
   $('.rg').mask('00.000.000-0');

   $('.modal').on('hidden.bs.modal',function(){
      $(':input').val("");
   });

   $('.card').addClass('animated fadeIn faster');
   $('#selecione').addClass('animated fadeInLeft faster');

   setTimeout(function(){
      $('.card').removeClass('animated fadeIn faster');
      $('#selecione').removeClass('animated fadeInLeft faster');
   },700);

});
