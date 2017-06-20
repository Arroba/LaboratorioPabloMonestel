(function(){
  'use strict';
  angular
  .module('gymApp')
  .service('userService', userService);

  function userService(){
    var users = [];
    var publicAPI = {
      setUsers : _setUsers,
      getUsers : _getUsers,
      updateUser : _updateUser
    };
    return publicAPI;


    // Función de registar datos del usuario
    function _setUsers(pUser){
      var usersList = _getUsers();
      usersList.push(pUser);
      localStorage.setItem('lsUsersList', JSON.stringify(usersList));
    }


    // Función de obtener datos actualizados
    function _getUsers(){
      var usersList = JSON.parse(localStorage.getItem('lsUsersList'));
      if(usersList == null){
        usersList = users;
      }
      return usersList;
    }


    //Función de permitir cambios editados, si, solo si la identificación es la misma
    function _updateUser(pobjUsuario){
      var usersList = _getUsers();
      for(var i = 0; i < usersList.length; i++){
        if(usersList[i].id == pobjUsuario.id){
          usersList[i] = pobjUsuario;
        }
      }
      localStorage.setItem('lsUsersList', JSON.stringify(usersList));
    }


  //   function _porcentajeGrasaSubCutanea(){
  //     var usersList = _getUsers();
  //     var nSumatoriaPliegues = 0;
  //     var nPorcentajeGrasa = 0;
  //     var nConstanteMasculina = 0.1051;
  //     var nConstanteFemenina = 0.1548;
  //
  //     for(var i = 0; i < usersList.length; i++){
  //
  //       var nSumatoriaPliegues = usersList[i].tricepIzq + usersList[i].tricepDer + usersList[i].subescapularDer + usersList[i].subescapularIzq + usersList[i].supraespinalDer + usersList[i].supraespinalIzq +usersList[i].abdominalDer + usersList[i].abdominalIzq + usersList[i].musloDerPliegue + usersList[i].musloIzqPliegue + usersList[i].pantorrillaIzqPliegue + usersList[i].pantorrillaDerPliegue;
  //
  //       if (usersList[i].genero == masculino || indefinido) {
  //         nPorcentajeGrasa = nConstanteMasculina * nSumatoriaPliegues + (2.585);
  //         nPesoGraso = ( usersList[i].peso  * nPorcentajeGrasa) / 100; // falta Peso
  //         nPorcentajeMasa = usersList[i].peso - nPesoGraso;
  //       }else{
  //         if (usersList[i].genero == femenino) {
  //           nPorcentajeGrasa = nConstanteFemenina * nSumatoriaPliegues + (3.580);
  //           nPesoGraso = ( usersList[i].peso  * nPorcentajeGrasa) / 100; // falta Peso
  //           nPorcentajeMasa = usersList[i].peso - nPesoGraso;
  //       }
  //     }
  //   }
  //   return nPorcentajeGrasa;
  //   localStorage.setItem('lsUsersList', JSON.stringify(usersList));
  // }

}
})();