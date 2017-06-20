(function(){
    'use strict';
    angular
    .module('myApp')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService', 'UserService'];


    function LoginController($location, AuthenticationService, FlashService,UserService){
        var vm = this;

        //Funcion que valida los datos de inicio de sesion y setea los estados
        vm.login = function(){
          vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function(response){
              if (response.success) {
                  AuthenticationService.SetCredentials(vm.username, vm.password);
                  $location.path('/administrador');
              }else{
                 FlashService.Error(response.message);
                 vm.dataLoading = false;
             }
            });
        };
        //Destruye los datos del usuario logeado, al cerrar sesion
        (function initController() {
            AuthenticationService.ClearCredentials();
        })();
    }
//Funcion con datos quemados del Administrador Pili
    // function ingresoAdministrador() {
    //     var usuario = '';
    //         contrasenna = '';
    //     for (var i = 0; i < users.length; i++) {
    //       if (usuario === 'pabs' && contrasenna === 'Admin123') {
    //         tipoUsuario = 'Administrador';
    //       }
    //     }
    // }

    //Funcion que recorra objeto Administrador Pili. Función que se llama a si misma va encerrada entre paréntesis


})();
