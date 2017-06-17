(function(){
  angular
    .module('myApp')
    .controller('citaController', citaController);
    function citaController(citaService){

      var citaCtrl = this;

      function init(){
        citaCtrl.citas = citaService.getCitas();
      }init();

      citaCtrl.save= function(){

        var newCita = {
          id: citaCtrl.id,
          descripcion: citaCtrl.descripcion,
          fecha: citaCtrl.fecha,
          hora: citaCtrl.hora,
          estado: 'en Revision'
        }

        citaService.setCitas(newCita);
        limpiar();
        init();

      };


      citaCtrl.getInfo = function(pcita){
        submitActualizar.classList.remove('display');
        submit.classList.add('display');
        citaCtrl.id = pcita.id;
        citaCtrl.descripcion = pcita.descripcion;
        citaCtrl.fecha = pcita.fecha;
        citaCtrl.hora = pcita.hora;
      }

      function limpiar(){
        citaCtrl.id = " ";
        citaCtrl.fecha = " ";
        citaCtrl.hora = " ";
      }
      citaCtrl.aprobacion = function(cita){
        var listaUsuarios = citaService.getCitas();
          for (var i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i].id == cita.id) {
              listaUsuarios[i].estado = 'aprobadas';
              console.log(listaUsuarios[i].estado)
            }// Cierre del if
          }// Cierre del ciclo
        citaService.setCitas(listaUsuarios);
      }// Cierre de la funcion aprobación

      citaCtrl.remover = function(cita){
        var listaUsuarios = citaService.getCitas();
        for (var i = 0; i < listaUsuarios.length; i++) {
          if (listaUsuarios[i].id == cita.id) {
            listaUsuarios[i].estado = 'rechazadas';
            console.log(listaUsuarios[i].estado)
          }// Cierre del if
        }// Cierre del ciclo
      citaService.setCitas(listaUsuarios);
      }// Cierre de la funcion aprobación



    }


})();