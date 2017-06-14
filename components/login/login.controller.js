(function(){
    'use strict';
    angular
    .module('app')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];

    function LoginController($location, AuthenticationService, FlashService){
        var vm = this;
        //Funcion que valida los datos de inicio de sesion y setea los estados
        vm.login = function(){
          vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function(response){
              if (response.success) {
                  AuthenticationService.SetCredentials(vm.username, vm.password);
                  $location.path('/perfil');
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
})();
