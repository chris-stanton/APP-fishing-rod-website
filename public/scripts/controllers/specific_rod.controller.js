
myApp.controller('Specific_rodController',['FactoryFactory', '$firebaseAuth', '$location', '$routeParams', function(FactoryFactory, $firebaseAuth, $location, $routeParams) {

  console.log('Specific_rodController running');

  // global varibles
  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();
// specific rod ID passed from order.controller
  var rods = $routeParams;

  self.message = " Specific_rodController";
  self.rods = rods;

}]);//end of myApp.controller
