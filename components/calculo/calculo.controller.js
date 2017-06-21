(function(){
  angular
  .module('gymApp')
  .controller('userController', userController);
  // userController.$inject = ['userService'];

    function userController(userService){
      var userCtrl = this;


      function init(){
        userCtrl.users = userService.getUsers();
        users = calculoIMC();
        userCtrl.user = {};
        userCtrl.to = new Date();
      }init();


      // Inicio de función que envía los datos para ser guardados al service
      userCtrl.save= function(pNewUser){
        userService.setUsers(pNewUser);
        userCtrl.user = {};
        init();
        limpiar();
      }
      // Fin de función que envía los datos para ser guardados al service


      // Inicio de función de obtener datos del usuario
      userCtrl.getInfo = function(puser){
        userCtrl.user.id = puser.id;
        userCtrl.user.fecha = new Date(puser.fecha);
        userCtrl.user.peso = puser.peso;
        userCtrl.user.estatura = puser.estatura;
        userCtrl.user.operacion = puser.operacion;
        userCtrl.user.bicepIzquierdo = puser.bicepIzquierdo;
        userCtrl.user.bicepDerecho = puser.bicepDerecho;
        userCtrl.user.bicepContraidoIzq = puser.bicepContraidoIzq;
        userCtrl.user.bicepContraidoDer = puser.bicepContraidoDer;
        userCtrl.user.pantorrillaIzq = puser.pantorrillaIzq;
        userCtrl.user.pantorrillaDer = puser.pantorrillaDer;
        userCtrl.user.musloIzq = puser.musloIzq;
        userCtrl.user.musloDer = puser.musloDer;
        userCtrl.user.cintura = puser.cintura;
        userCtrl.user.abdomen = puser.abdomen;
        userCtrl.user.cadera = puser.cadera;
        userCtrl.user.pecho = puser.pecho;
        userCtrl.user.espalda = puser.espalda;
        userCtrl.user.tricepIzq = puser.tricepIzq;
        userCtrl.user.tricepDer = puser.tricepDer;
        userCtrl.user.subescapularIzq = puser.subescapularIzq;
        userCtrl.user.subescapularDer = puser.subescapularDer;
        userCtrl.user.supraespinalIzq = puser.supraespinalIzq;
        userCtrl.user.supraespinalDer = puser.supraespinalDer;
        userCtrl.user.abdominalIzq = puser.abdominalIzq;
        userCtrl.user.abdominalDer = puser.abdominalDer;
        userCtrl.user.musloIzqPliegue = puser.musloIzqPliegue;
        userCtrl.user.musloDerPliegue = puser.musloDerPliegue;
        userCtrl.user.pantorrillaIzqPliegue = puser.pantorrillaIzqPliegue;
        userCtrl.user.pantorrillaDerPliegue = puser.pantorrillaDerPliegue;
      }
      // Fin de función de obtener datos del usuario


      // Inicio de función de obtener datos para ser editados
      userCtrl.update = function(){
        var usuarioEditado = {
          id : userCtrl.user.id,
          fecha : userCtrl.user.fecha,
          peso : userCtrl.user.peso,
          estatura : userCtrl.user.estatura,
          operacion : userCtrl.user.operacion,
          bicepIzquierdo : userCtrl.user.bicepIzquierdo,
          bicepDerecho : userCtrl.user.bicepDerecho,
          bicepContraidoIzq : userCtrl.user.bicepContraidoIzq,
          bicepContraidoDer : userCtrl.user.bicepContraidoDer,
          pantorrillaIzq : userCtrl.user.pantorrillaIzq,
          pantorrillaDer : userCtrl.user.pantorrillaDer,
          musloIzq : userCtrl.user.musloIzq,
          musloDer : userCtrl.user.musloDer,
          cintura : userCtrl.user.cintura,
          abdomen : userCtrl.user.abdomen,
          cadera : userCtrl.user.cadera,
          pecho : userCtrl.user.pecho,
          espalda : userCtrl.user.espalda,
          tricepIzq : userCtrl.user.tricepIzq,
          tricepDer : userCtrl.user.tricepDer,
          subescapularIzq : userCtrl.user.subescapularIzq,
          subescapularDer : userCtrl.user.subescapularDer,
          supraespinalIzq : userCtrl.user.supraespinalIzq,
          supraespinalDer : userCtrl.user.supraespinalDer,
          abdominalIzq : userCtrl.user.abdominalIzq,
          abdominalDer : userCtrl.user.abdominalDer,
          musloIzqPliegue : userCtrl.user.musloIzqPliegue,
          musloDerPliegue : userCtrl.user.musloDerPliegue,
          pantorrillaIzqPliegue : userCtrl.user.pantorrillaIzqPliegue,
          pantorrillaDerPliegue : userCtrl.user.pantorrillaDerPliegue
        }
        userService.updateUser(usuarioEditado);
        init();
        limpiar();
      }
      // Fin de función de obtener datos para ser editados


      // Inicio de función de limpiar datos después de registar
      function limpiar(){
        userCtrl.user={};
      }
      // Fin de función de limpiar datos después de registar
      

      // Función de calcular el índice de masa corporal(IMC)
      function calculoIMC(){
        var listaUsuarios = userService.getUsers();
        var sSituacion = '';

        for (var i = 0; i < listaUsuarios.length; i++) {
          var imc = listaUsuarios[i].peso / (listaUsuarios[i].estatura * listaUsuarios[i].estatura);

          if(imc < 18.50){
              sSituacion = 'Bajo peso';
          } else if (imc < 16.00) {
              sSituacion = 'Delgadez severa';
          } else if (imc  > 16.00 && imc < 16.99) {
              sSituacion = 'Delgadez moderada';
          } else if (imc  > 17.00 && imc < 18.49) {
              sSituacion = 'Delgadez leve';
          } else if (imc  > 18.50 && imc < 24.99) {
              sSituacion =  sSituacion = 'Normal';
          } else if (imc >= 25.00) {
              sSituacion = 'Sobrepeso';
          } else if (imc  > 25.00 && imc < 29.99) {
              sSituacion = 'Preobeso';
          } else if (imc >= 30) {
              sSituacion = 'Obesidad';
          } else if (imc  > 30.00 && imc < 34.99) {
              sSituacion = 'Obesidad leve';
          } else if (imc  > 35.00 && imc < 39.99) {
              sSituacion = 'Obesidad media';
          } else if (imc  <= 40.00 ) {
              sSituacion = 'Obesidad mórbida';
          }
          userCtrl.situacion = sSituacion;
          console.log(sSituacion);
        }
      }


    }//cierre de funcion userCtrl
})();
