$(document).ready(function(){
   $('.rg').mask('00.000.000-0');

   $('.modal').on('hidden.bs.modal',function(){
      $(':input').val("");
   });
});
