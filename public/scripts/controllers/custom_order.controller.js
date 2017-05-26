
myApp.controller('Custom_orderController',['FactoryFactory', '$firebaseAuth', '$location', function(FactoryFactory, $firebaseAuth, $location) {

  console.log('Custom_orderController running');

// global varibles
  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();


  self.message = 'angular sourced "custom_order"';


  self.submitNewOrder = function(order) {
    var firebaseUser = auth.$getAuth();
    var newOrder = {
      blankModel : order.blankModel,
      blankLength : order.blankLength,
      handleMaterial : order.handleMaterial,
      handleLength : order.handleLength,
      guides : order.guides,
      threadColorMain : order.threadColorMain,
      threadColorTrim : order.threadColorTrim,
      firebaseUserId : firebaseUser.uid
    }
    self.order = {};
    console.log("new Order: ", newOrder);

  };// end submitNewOrder()




}]);//end of myApp.controller
