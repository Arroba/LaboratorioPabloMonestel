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

        console.log(newCita);
        citaService.setCitas(newCita);
        limpiar();
        init();

      };

      citaCtrl.adCita = function(){

      }


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
        var listaUsuarios = citaService._getCitas();
        if (cita.estado = 'en Revision') {
          if (true) {

          }// cierre del inf par el ciclo
          cita.estado = 'aprobadas';
        }// cierre del if principal

      }// Cierre de la funcion aprobación

      citaCtrl.remover = function(cita){
        var listaUsuarios = citaService._getCitas();
        if (cita.estado = 'en Revision') {
          if (true) {

          }// cierre del inf par el ciclo
          cita.estado = 'rechazadas';
        }// cierre del if principal

      }// Cierre de la funcion aprobación



    }


})();
