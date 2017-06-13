(function(){
  angular
    .module('myApp')
    .service('citaService', citaService);

  function citaService(){
    var citas = [];
    var publicAPI = {
      setCitas : _setCitas,
      getCitas : _getCitas,
      updateCita : _updateCita
    };
    return publicAPI;

    function _setCitas(pCita){
      var listaUsuarios = _getCitas();
      listaUsuarios.push(pCita);
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    }

    function _getCitas(){
      var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
      if (listaUsuarios == null) {
        listaUsuarios = citas;
      }
      return listaUsuarios;
    }
    function _updateCita(pObjUsuario){
      submitActualizar.classList.add('display');
      submit.classList.remove('display');
      var listaUsuarios = _getCitas();
      for (var i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].id == pObjUsuario.id ) {
          listaUsuarios[i] = pObjUsuario;
        }
      }
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    }

  }


})();
