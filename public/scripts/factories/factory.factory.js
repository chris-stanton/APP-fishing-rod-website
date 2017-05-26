
  myApp.factory('FactoryFactory',['$http',function($http) {
    console.log('FactoryFactory running');


// object containers
    var allIceRodModels = { list: [] };


// sources notify
    var notyf = new Notyf({
          delay:2000,
          alertIcon: 'fa fa-exclamation-circle',
          confirmIcon: 'fa fa-check-circle'
        });



// adds new user to DB from address view
    function addNewUser(newUserAddress) {
// post request goes here
    }// end addNewUser()

    function getAllIceRodModels() {
        $http({
          method: 'GET',
          url: '/order/allIceRods'
        }).then(function(response) {
          allIceRodModels.list = response.data;
        });
    };// end getAllIceRodModels()












// public API
    return {
// adds new user to DB from address view
      addNewUser : addNewUser,
// request from controller for all ice rod models
      getAllIceRodModels : getAllIceRodModels,
// all ice rod models for DB to order view
      allIceRodModels : allIceRodModels

    }

  }]);//end of myApp.factory
