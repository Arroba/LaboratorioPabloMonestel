(function(){
  'use strict'
  angular
  .module('myApp', ['ui.router','ngMessages','ngCookies'])
  .config(configuration)
  .run(run);

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider){ //stateProvider
    $stateProvider
      .state('login',{
        url : '/iniciarSesion',
        templateUrl: './components/login/login.view.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('perfil',{
        url: '/perfil',
        templateUrl: './components/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      // .state('registro', {
      //   url : '/register',
      //   templateUrl: './components/register/register.view.html',
      //   controller: 'RegisterController',
      //   controllerAs: 'vm'
      // })
      .state('solicitud',{
        url : '/solicitud', //ruta del url del estado
        templateUrl : './components/citas/cita.view.html',//vista que se va a cargar para este estado
        controller: 'citaController',
        controllerAs: 'ctrl'
      })
      .state('control',{
        url : '/control',
        templateUrl: 'components/citas/cita.controlCitas.html'
      })

      $urlRouterProvider.otherwise('/iniciarSesion');
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        // $rootScope.$on('$locationChangeStart', function (event, next, current) {
        //     // redirect to login page if not logged in and trying to access a restricted page
        //     var restrictedPage = $.inArray($location.path(), ['/iniciarSesion', '/register']) === -1;
        //     var loggedIn = $rootScope.globals.currentUser;
        //     if (restrictedPage && !loggedIn) {
        //         $location.path('/iniciarSesion');
        //     }
        // });
    }
})();
