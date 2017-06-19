(function(){
  'use strcit';
  angular
  .module('myApp')
  .controller('medidasController', medidasController);

  medidasController.$inject = ['userService'];
  
    function medidasController(userService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var userCtrl = this;

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        userCtrl.users = userService.getUsers();
        users = calculoIMC();
        userCtrl.user = {};
        userCtrl.to = new Date();
        userCtrl.resultado = '';
        userCtrl.operacion = 0;
        userCtrl.calculoSituacion = '';
      }init();
      // Funcion que envia los datos para ser guardados al service
      userCtrl.save= function(pNewUser){

        userService.setUsers(pNewUser);
        userCtrl.user = {};
        init();
        limpiar();
      }


      userCtrl.getInfo = function(puser){
        userCtrl.user.id = puser.id;
        userCtrl.user.peso = puser.peso;
        userCtrl.user.estatura = puser.estatura;
        userCtrl.user.fecha = new Date(puser.fecha);
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



      userCtrl.update = function(){
        var usuarioEditado = {
          id : userCtrl.user.id,
          peso : userCtrl.user.peso,
          estatura : userCtrl.user.estatura,
          fecha : userCtrl.user.fecha,
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

      function limpiar(){
        userCtrl.user={};
      }

      function calculoIMC(){
        var listaUsuarios = userService.getUsers();

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
              sSituacion = 'Normal';
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

        console.log(imc);
        console.log(sSituacion);
        }
      }

      // userCtrl.imc = calculoIMC();

      // userCtrl.calculoIMC = function(puser){
      //   var nEstaturaCuadrado = userCtrl.puser.estatura * userCtrl.puser.estatura;
      //   var nCalculoIMC = userCtrl.puser.peso / nEstaturaCuadrado;
      //   var sSituacion = "";
      //   // var aResultados = [];
      //
      //
      //     if (listaMedidas[i].id == puser.id) {
      //       if (nCalculoIMC < 18.50) {
      //         sSituacion = 'Bajo peso';
      //       } else if (nCalculoIMC < 16.00) {
      //         sSituacion = 'Delgadez severa';
      //       } else if (nCalculoIMC  > 16.00 && nCalculoIMC < 16.99) {
      //         sSituacion = 'Delgadez moderada';
      //       } else if (nCalculoIMC  > 17.00 && nCalculoIMC < 18.49) {
      //         sSituacion = 'Delgadez leve';
      //       } else if (nCalculoIMC  > 18.50 && nCalculoIMC < 24.99) {
      //         sSituacion = 'Normal';
      //       } else if (nCalculoIMC >= 25.00) {
      //         sSituacion = 'Sobrepeso';
      //       } else if (nCalculoIMC  > 25.00 && nCalculoIMC < 29.99) {
      //         sSituacion = 'Preobeso';
      //       } else if (nCalculoIMC >= 30) {
      //         sSituacion = 'Obesidad';
      //       } else if (nCalculoIMC  > 30.00 && nCalculoIMC < 34.99) {
      //         sSituacion = 'Obesidad leve';
      //       } else if (nCalculoIMC  > 35.00 && nCalculoIMC < 39.99) {
      //         sSituacion = 'Obesidad media';
      //       } else if (nCalculoIMC  <= 40.00 ) {
      //         sSituacion = 'Obesidad mórbida';
      //       }
      //
      //   }
      //   userCtrl.calculoSituacion = (nCalculoIMC);
      //   aResultados.push(sSituacion);
      //
      // }

    }//cierre de funcion userCtrl

})();
