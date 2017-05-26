myApp.controller('OrderController',['FactoryFactory', '$firebaseAuth', function(FactoryFactory, $firebaseAuth) {

  console.log('OrderController running');

// global varibles
  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();


// request for all ice rod models on init
  FactoryFactory.getAllIceRodModels();


  self.message = 'angular sourced "Order"';
// all ice rod models avalible
  self.iceRodModels = FactoryFactory.alliceRodModels;



// customer rod order submission to DB
  self.specificIceRod = function(rods) {
    console.log(rods);
  }


}]);//end of myApp.controller
