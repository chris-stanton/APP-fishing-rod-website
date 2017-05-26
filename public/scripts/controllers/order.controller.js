myApp.controller('OrderController',['FactoryFactory', '$firebaseAuth', '$location', function(FactoryFactory, $firebaseAuth, $location) {

  console.log('OrderController running');

// global varibles
  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();


// request for all ice rod models on init
  FactoryFactory.getAllIceRodModels();


  self.message = 'angular sourced "Order"';
// all ice rod models avalible
  self.allIceRodModels = FactoryFactory.allIceRodModels;



// customer rod order submission to DB
  self.specificIceRod = function(rods) {
    if (rods.model === "Custom Build"){
      $location.path('/custom_order');
    } else {
      $location.path('/address');// needs to redirect to cart/pay view
    }
  }// end specificIceRod()


}]);//end of myApp.controller
