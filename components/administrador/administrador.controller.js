(function(){
  angular
    .module('myApp')
    .controller('administradorController', administradorController);

    function administradorController(administradorService,ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var adminCtrl = this;
      adminCtrl.cloudObj = ImageService.getConfiguration();


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        adminCtrl.users = administradorService.getUsers(); 
        adminCtrl.user = {};
      }init();

      adminCtrl.presave= function(pNewUser){
        adminCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(adminCtrl.cloudObj)
          .success(function(data){
            pNewUser.photo = data.url;
            adminCtrl.save(pNewUser);
          });


      }

      adminCtrl.save= function(pNewUser){


        administradorService.setUsers(pNewUser); 
        adminCtrl.user = {};
        limpiar();
        init();

      }


      adminCtrl.getInfo = function(puser){
        adminCtrl.user.tipodeCuenta = puser.tipodeCuenta;
        adminCtrl.user.tipodeIdentificacion = puser.tipodeIdentificacion;
        adminCtrl.user.numerodeIdentificacion = puser.numerodeIdentificacion;
        adminCtrl.user.nacionalidad = puser.nacionalidad;
        adminCtrl.user.genero = puser.genero;
        adminCtrl.user.primerNombre = puser.primerNombre;
        adminCtrl.user.segundoNombre = puser.segundoNombre;
        adminCtrl.user.primerApellido = puser.primerApellido;
        adminCtrl.user.segundoApellido = puser.segundoApellido;
        adminCtrl.user.fechadeNacimiento = new Date(puser.fechadeNacimiento);
        adminCtrl.user.edad = puser.edad;
        adminCtrl.user.telefono = puser.telefono;
        adminCtrl.user.contactoenCasodeEmergencia = puser.contactoenCasodeEmergencia;
        adminCtrl.user.nombredeUsuario = puser.nombredeUsuario;
        adminCtrl.user.photo = new File(puser.photo);
      }

      adminCtrl.update = function(){
        var usuarioEditado = {
          tipodeCuenta: adminCtrl.user.tipodeCuenta,
          tipodeIdentificacion : adminCtrl.user.tipodeIdentificacion,
          numerodeIdentificacion : adminCtrl.user.numerodeIdentificacion,
          nacionalidad : adminCtrl.user.nacionalidad,
          genero: adminCtrl.user.genero,
          primerNombre : adminCtrl.user.primerNombre,
          segundoNombre : adminCtrl.user.segundoNombre,
          primerApellido : adminCtrl.user.primerApellido,
          segundoApellido : adminCtrl.user.segundoApellido,
          fechadeNacimiento : adminCtrl.user.fechadeNacimiento,
          edad : adminCtrl.user.edad,
          telefono : adminCtrl.user.telefono,
          contactoenCasodeEmergencia : adminCtrl.user.contactoenCasodeEmergencia,
          nombredeUsuario : adminCtrl.user.nombredeUsuario,
          photo: adminCtrl.user.photo

        }
        administradorService.updateUser(usuarioEditado);  
        init();
        limpiar();
      }

      function limpiar(){

        adminCtrl.user={};

      }


      function mostrarCliente(){
  var listaCliente = getListaCliente();
  var tamanno = listaCliente.length;
  var select = document.querySelector('#sltCliente');

  select.innerHTML = '';

  var opcion = document.createElement('option');
  opcion.value = '';
  opcion.text = '--Seleccione el Dueño--';

  select.appendChild(opcion);

  for(var i = 0; i < tamanno; i++){
    var opcion = document.createElement('option');
    opcion.value = listaCliente[i].cedula;
    opcion.text = listaCliente[i].cedula;

    select.appendChild(opcion);
  }
}



    }
     //se establece un objeto de angular normal

})();