$(document).ready(function(){
   setTimeout(function(){
      window.location.replace("index.html");
   },6000);

   $('#sucesso').addClass('animated fadeInDown');
   setTimeout(function(){
      $('#sucesso').removeClass('animated fadeInDown');
      $('#sucesso').addClass('animated fadeOutUp');
   },5000);
});
