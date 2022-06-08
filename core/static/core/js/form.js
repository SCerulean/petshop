$(document).ready(function(){
  //ocultar errores
    $('#error').hide();
    $('#error2').hide();
    $('#error3').hide();
    $('#error4').hide();
    $('#error5').hide();
    $('#error6').hide();
    


  //funcion validacion rut
  var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
  validaRut : function (rutCompleto) {
  rutCompleto = rutCompleto.replace("‐","-");
  if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
    return false;
  var tmp 	= rutCompleto.split('-');
  var digv	= tmp[1]; 
  var rut 	= tmp[0];
  if ( digv == 'K' ) digv = 'k' ;
  
  return (Fn.dv(rut) == digv );
},
dv : function(T){
  var M=0,S=1;
  for(;T;T=Math.floor(T/10))
    S=(S+T%10*(9-M++%6))%11;
  return S?S-1:'k';
}

}  //fin funcion rut  \

function capcha (){
  var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  var i;
  for (i = 0; i < 6; i++) {
      var a = alpha[Math.floor(Math.random() * alpha.length)];
      var b = alpha[Math.floor(Math.random() * alpha.length)];
      var c = alpha[Math.floor(Math.random() * alpha.length)];
      var d = alpha[Math.floor(Math.random() * alpha.length)];
      var e = alpha[Math.floor(Math.random() * alpha.length)];
      var f = alpha[Math.floor(Math.random() * alpha.length)];
      var g = alpha[Math.floor(Math.random() * alpha.length)];
  }
  var txtcapcha = a+""+b +""+c+""+d+""+e+""+f+""+g
  return txtcapcha
}
//genera el capcha inicial
txtcap = capcha()
 //resetea el capcha
 $("#reset").click(function(){
  txtcap = capcha()
 $("#msjCapcha").html(txtcap);
})
   //muestra texto del capcha
   $("#msjCapcha").html(txtcap);
emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //comienzo validaciones
    $("#formulario").submit(function(){
      //iniciacion de variables
      var msjEmpy = "El campo esta vacio"
      var v_nom = false
      var v_ema = false
      var v_rut = false
      var v_con = false
      var v_capcha = false
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
        //var capcha
        var capcha_input = $("#capcha").val();
        msj_capcha = "El capcha es incorrecto"

      //valida campo nombre
        if(nombre ==""){
          $("#error").html(msjEmpy);
            $('#error').fadeIn();
        }else{
            $('#error').fadeOut();
            v_nom = true
        }

        //valida rut
        if (Fn.validaRut( $("#Rut").val() )){

        $('#error3').fadeOut(); 
          v_rut = true
          } else {
              $("#error3").html("El Rut no es válido ");
          $('#error3').fadeIn(); 
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
  
          $("#error7").html(console.log(v_nom,v_ema,v_rut,v_con,v_contra_iguales));
         $('#error7').fadeIn();
        

         if(capcha_input.trim() != txtcap){
          $("#error6").html(msj_capcha);
          $('#error6').fadeIn(); 
         }else{
            $('#error6').fadeOut(); 
           v_capcha = true
         }



       if(v_nom||v_ema||v_rut||v_con||v_contra_iguales|| v_capcha==false){
        event.preventDefault("sumbit");
       }
    });
});
