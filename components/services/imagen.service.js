(function(){
<<<<<<< HEAD
  angular
  .module('myApp')
=======
  'use strict';
  angular
  .module('gymApp')
>>>>>>> master
  .service('ImageService', ImageService);

  function ImageService($http){

    var cloudObj = {
      url:'https://api.cloudinary.com/v1_1/dxnv8pnia/image/upload',
      data:{
        upload_preset: '1Laboratorio',
        tags:'Any',
        context:'photo=test'
      }
    };

    var public_api = {
      getConfiguration:getConfiguration
    }
    return public_api;

    function getConfiguration(){
      return cloudObj;
    }


  }

})();