
  myApp.factory('FactoryFactory',['$http',function($http) {
    console.log('FactoryFactory running');

// sources notify
  var notyf = new Notyf({
        delay:2000,
        alertIcon: 'fa fa-exclamation-circle',
        confirmIcon: 'fa fa-check-circle'
    });



// adds new user to DB from address view
    function addNewUser(newUserAddress) {
// post request goes here
    }







// public API
    return {
// adds new user to DB from address view
      addNewUser : addNewUser
    }

  }]);//end of myApp.factory
