(function(){
angular
.module('myApp')
.controller('adminController', adminController);

function adminController(adminService,ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
//controlador
var userCtrl = this;
userCtrl.cloudObj = ImageService.getConfiguration();


function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
userCtrl.users = userService.getUsers();
userCtrl.user = {};
}init();

userCtrl.presave= function(pNewUser){
userCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
Upload.upload(userCtrl.cloudObj)
.success(function(data){
pNewUser.photo = data.url;
userCtrl.save(pNewUser);
});


}

userCtrl.save= function(pNewUser){


userService.setUsers(pNewUser);
userCtrl.user = {};
limpiar();
init();

}


userCtrl.getInfo = function(puser){
userCtrl.user.tipodeCuenta = puser.tipodeCuenta;
userCtrl.user.tipodeIdentificacion = puser.tipodeIdentificacion;
userCtrl.user.numerodeIdentificacion = puser.numerodeIdentificacion;
userCtrl.user.nacionalidad = puser.nacionalidad;
userCtrl.user.genero = puser.genero;
userCtrl.user.primerNombre = puser.primerNombre;
userCtrl.user.segundoNombre = puser.segundoNombre;
userCtrl.user.primerApellido = puser.primerApellido;
userCtrl.user.segundoApellido = puser.segundoApellido;
userCtrl.user.fechadeNacimiento = new Date(puser.fechadeNacimiento);
userCtrl.user.edad = puser.edad;
userCtrl.user.telefono = puser.telefono;
userCtrl.user.contactoenCasodeEmergencia = puser.contactoenCasodeEmergencia;
userCtrl.user.nombredeUsuario = puser.nombredeUsuario;
userCtrl.user.photo = new File(puser.photo);
}

userCtrl.update = function(){
var usuarioEditado = {
tipodeCuenta: userCtrl.user.tipodeCuenta,
tipodeIdentificacion : userCtrl.user.tipodeIdentificacion,
numerodeIdentificacion : userCtrl.user.numerodeIdentificacion,
nacionalidad : userCtrl.user.nacionalidad,
genero: userCtrl.user.genero,
primerNombre : userCtrl.user.primerNombre,
segundoNombre : userCtrl.user.segundoNombre,
primerApellido : userCtrl.user.primerApellido,
segundoApellido : userCtrl.user.segundoApellido,
fechadeNacimiento : userCtrl.user.fechadeNacimiento,
edad : userCtrl.user.edad,
telefono : userCtrl.user.telefono,
contactoenCasodeEmergencia : userCtrl.user.contactoenCasodeEmergencia,
nombredeUsuario : userCtrl.user.nombredeUsuario,
photo: userCtrl.user.photo

}
userService.updateUser(usuarioEditado);
init();
limpiar();
}

function limpiar(){

userCtrl.user={};

}


}
//se establece un objeto de angular normal

})();
