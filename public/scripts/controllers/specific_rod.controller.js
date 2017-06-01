
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
// redirect to order view
  self.orderView = function() {
    $location.path('/order');
  };
// redirect to custom rod order view
  self.customOrderView = function() {
    $location.path('/custom_order');
  };

// buy button click for view
  self.buySpecificIceRod = function(specificIceRod) {
    var firebaseUser = auth.$getAuth();
      if (firebaseUser === null) {
        swal("You must be logged in to place order", "Try Again!", "error");
      } else {
        console.log("buy button clicked: ", specificIceRod);
      }
  };// end buySpecificIceRod()


}]);//end of myApp.controller
