

(function(){
  angular
    .module('myApp', ['ui.router','ngMessages'])
    .config(configuration);
    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('login',{
          url: '/login',
          templateUrl: 'components/citas/login.view.html'
        })
        .state('solicitud',{
          url : '/solicitud', //ruta del url del estado
          templateUrl : 'components/citas/cita.view.html',//vista que se va a cargar para este estado
          controller: 'citaController',
          controllerAs: 'ctrl'
        })
        .state('control',{
          url : '/control',
          templateUrl: 'components/citas/cita.controlCitas.html'
        })

      $urlRouterProvider.otherwise('/solicitud');
    }
})();
