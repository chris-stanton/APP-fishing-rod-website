
myApp.controller('Specific_rodController',['FactoryFactory', '$firebaseAuth', '$location', '$routeParams', function(FactoryFactory, $firebaseAuth, $location, $routeParams) {

  console.log('Specific_rodController running');

// global varibles
  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();
// specific rod ID passed from order.controller
  var rods = $routeParams;

  self.message = " Specific_rodController";
// specific rod ID being sent from order view
  self.id = rods.id;

// send request to DB for specificIceRod
  FactoryFactory.getSpecificIceRod(rods);
// return for DB with specificIceRod
  self.specificIceRod = FactoryFactory.specificIceRod;


}]);//end of myApp.controller
