(function(){
  'use strict'
  angular
  .module('myApp', ['ui.router','ngMessages','ngCookies','oc.lazyLoad','angularCSS'])
  .config(configuration)
  .run(run);

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider){ //stateProvider
    $stateProvider
      .state('landing',{
        url : '/inicio',
        templateUrl : './components/landingPage/landing.view.html',
        css : './css/style.landing.css'
      })
      .state('login',{
        url : '/iniciarSesion',
        templateUrl: './components/login/login.view.html',
        resolve: {
		    	load: ['$ocLazyLoad', function($ocLazyLoad){
		    		return $ocLazyLoad.load('./components/login/login.controller.js')
		    	}]
		    },
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('perfil',{
        url: '/perfil',
        templateUrl: './components/home/home.view.html',
        resolve: {
		    	load: ['$ocLazyLoad', function($ocLazyLoad){
		    		return $ocLazyLoad.load('./components/home/home.controller.js')
		    	}]
		    },
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('registro', {
        url : '/register',
        templateUrl: './components/register/register.view.html',
        resolve: {
   		    load: ['$ocLazyLoad', function($ocLazyLoad){
   		    	return $ocLazyLoad.load('./components/register/register.controller.js')
   		    }]
        },
        controller: 'RegisterController',
        controllerAs: 'vm'
      })
      .state('solicitud',{
        url : '/solicitud', //ruta del url del estado
        templateUrl : './components/citas/cita.view.html',//vista que se va a cargar para este estado
        resolve: {
   		    load: ['$ocLazyLoad', function($ocLazyLoad){
   		    	return $ocLazyLoad.load('./components/citas/cita.controller.js')
   		    }]
        },
        controller: 'citaController',
        controllerAs: 'ctrl'
      })
      .state('control',{
        url : '/control',
        templateUrl: 'components/citas/cita.controlCitas.html'
      })
      .state('medidas',{
        url : '/medidas',
        templateUrl: 'components/medidas/medidas.view.html',
        resolve: {
   		    load: ['$ocLazyLoad', function($ocLazyLoad){
   		    	return $ocLazyLoad.load('./components/medidas/medidas.controller.js')//recarga los controladores dependiendo de la vista que se agregue es decir lo cambia de manera dinámica
   		    }]
        },
        controller: 'medidasController',
        controllerAs: 'userCtrl'
      })
      .state('admin',{
        url : '/admin',
        templateUrl : 'components/admin/admin.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/admin/admin.controller.js')
          }]
        },
        controller: 'adminController',
        controllerAs:'userCtrl'
      })


      $urlRouterProvider.otherwise('/inicio');
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

         //  $rootScope.$on('$locationChangeStart', function (event, next, current) {
        //     // redirect to login page if not logged in and trying to access a restricted page
        //       var restrictedPage = $.inArray($location.path(), ['/iniciarSesion', '/register']) === -1;
        //      var loggedIn = $rootScope.globals.currentUser;
        //      if (restrictedPage && !loggedIn) {
        //          $location.path('/iniciarSesion');
        //     }
        // });
    }
})();
