myApp.controller('AddressController',['FactoryFactory', '$location', '$firebaseAuth', function(FactoryFactory, $location, $firebaseAuth) {

  console.log('AddressController running');

  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();

  self.message = 'angular sourced "Address"';

// function adds new user to DB
  self.addNewUser = function(newUser){
    var firebaseUser = auth.$getAuth();
    var newUserAddress = {
      firstName : newUser.firstName,
      lastName : newUser.lastName,
      streetAddress : newUser.streetAddress,
      city :  newUser.city,
      state :  newUser.state,
      zipCode :  newUser.zipCode
    }
      FactoryFactory.addNewUser(newUserAddress);
// empties inputs after button click
      self.newUser = {};
      $location.path('/home');
  };// end addNewUser()


}]);//end of myApp.controller
