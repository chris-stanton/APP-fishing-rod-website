myApp.controller('AddressController',['FactoryFactory', function(FactoryFactory) {

  console.log('AddressController running');

  var self = this;

  self.message = 'angular sourced "Address"';

// function adds new user to DB
  self.addNewUser = function(newUserAddress){
    console.log('newUserAddress: ', newUserAddress);
    FactoryFactory.addNewUser(newUserAddress);
// empties inputs after button click
    self.newUserAddress = {};
  }


}]);//end of myApp.controller
