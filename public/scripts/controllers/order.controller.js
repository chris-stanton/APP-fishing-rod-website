myApp.controller('OrderController',['FactoryFactory', '$firebaseAuth', '$location', '$routeParams', function(FactoryFactory, $firebaseAuth, $location, $routeParams) {

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
console.log(self.allIceRodModels);


// customer rod order submission to DB
  self.specificIceRod = function(rods) {
    console.log(rods);
    if (rods.model === "Custom Build"){
      $location.path('/custom_order');
    } else {
      $location.path('/specific_rod/' + rods.id);
      //blanklength handlelength, handlematerial, image, model, price
    }
  }// end specificIceRod()


}]);// end of myApp.controller


// + '/' + rods.image + '/' + rods.price
