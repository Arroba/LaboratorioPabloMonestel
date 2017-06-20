(function(){
  'use strict'
  angular
    .module('gymApp')
    .service('citaService', citaService);

  function citaService(){
    var citas = [];
    var publicAPI = {
      setCitas : _setCitas,
      getCitas : _getCitas,
      updateState: _updateState
    };
    return publicAPI;

    function _setCitas(pCita){
      var listaUsuarios = _getCitas();
      listaUsuarios.push(pCita);
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    }
    function _updateState(pListaCitas){

      localStorage.setItem('listaUsuarios', JSON.stringify(pListaCitas));
    }

    function _getCitas(){
      var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
      if (listaUsuarios == null) {
        listaUsuarios = citas;
      }
      return listaUsuarios;
    }


  }


})();
