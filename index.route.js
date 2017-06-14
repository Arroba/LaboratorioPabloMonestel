

(function(){
  angular
    .module('myApp', ['ui.router','ngMessages'])
    .config(configuration);
    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('solicitud',{
          url : '/solicitud', //ruta del url del estado
          templateUrl : 'components/citas/cita.view.html',//vista que se va a cargar para este estado
          controller: 'citaController',
          controllerAs: 'ctrl'
        })
        .state('control',{
          url : '/control',
          templateUrl: 'components/citas/cita.controlCitas.html',
          controller: 'citaController',
          controllerAs: 'ctrl'
        })

      $urlRouterProvider.otherwise('/solicitud');
    }
})();
