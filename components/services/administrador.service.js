(function(){
  'use strict';
  angular
  .module('gymApp')
  .service('administradorService', administradorService);

<<<<<<< HEAD:components/services/admin.service.js
  function adminService(){
=======
  function administradorService(){
>>>>>>> Fabian:components/services/administrador.service.js
    var users = [];
    var publicAPI = {
      setUsers : _setUsers,
      getUsers : _getUsers,
      updateUser : _updateUser
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setUsers(pUser){
      var usersList = _getUsers();

      usersList.push(pUser);
      localStorage.setItem('lsUsersList', JSON.stringify(usersList));
    }

    function _getUsers(){
      var usersList = JSON.parse(localStorage.getItem('lsUsersList'));
      if(usersList == null){
        usersList = users;
      }
      return usersList;
    }
    function _updateUser(pobjUsuario){
      var usersList = _getUsers();
      for(var i = 0; i < usersList.length; i++){
        if(usersList[i].numerodeIdentificacion == pobjUsuario.numerodeIdentificacion){
          usersList[i] = pobjUsuario;
        }
      }
      localStorage.setItem('lsUsersList', JSON.stringify(usersList));
    }


  }

})();