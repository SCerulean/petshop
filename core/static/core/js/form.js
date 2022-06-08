$(document).ready(function(){
  //ocultar errores
    $('#error').hide();
    $('#error2').hide();
    $('#error3').hide();
    $('#error4').hide();
    $('#error5').hide();
    $('#error6').hide();
    
emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //comienzo validaciones
    $("#formulario").submit(function(){
      //iniciacion de variables
      var msjEmpy = "El campo esta vacio"
      var v_nom = false
      var v_ema = false
      var v_con = false
      var v_contra_iguales = false
      //var campo nombre
        var nombre = $("#Nombre").val();
      //var campo email
      var email = $("#correo").val()
      var msjEmail = "El email es invalido"
      //var campo contraseña
        var contra = $("#contraseña").val();
        var contraR =  $("#contraseñaR").val();
        var msjContra = "Las contraseñas no coinciden"
        var msjlenght = "la contraseña debe tener almenos 6 caracteres"
      //valida campo nombre
        if(nombre ==""){
          $("#error").html(msjEmpy);
            $('#error').fadeIn();
        }else{
            $('#error').fadeOut();
            v_nom = true
        }

        //valida contraseña

        if(contra ==""){
          $("#error4").html(msjEmpy);
          $('#error4').fadeIn();  
        }else if (contra.length<6){
          $("#error4").html(msjlenght);
          $('#error4').fadeIn();  
        }
        else{
          $('#error4').fadeOut(); 
          v_con = true
        }

        if(contra != contraR){
        $("#error5").html(msjContra);
        $('#error5').fadeIn();
        } else if(contraR ==""){
          $("#error5").html(msjEmpy);
          $('#error5').fadeIn();  
        }
        else{
         $('#error5').fadeOut(); 
         v_contra_iguales = true
        }

        //valida email
        if (emailRegex.test(email)) {
          $('#error2').fadeOut(); 
          v_ema =true
         } else {
          $("#error2").html(msjEmail);
          $('#error2').fadeIn(); 
         }
  

       if(v_nom||v_ema||v_con||v_contra_iguales==false){
        event.preventDefault("sumbit")
        return false;
       }else{
         return true
       }
    });
});
