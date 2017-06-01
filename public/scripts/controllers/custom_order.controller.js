
myApp.controller('Custom_orderController',['FactoryFactory', '$firebaseAuth', '$location', function(FactoryFactory, $firebaseAuth, $location) {

  console.log('Custom_orderController running');

// global varibles
  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();


  self.message = 'angular sourced "custom_order"';


// gets all threads on init
  FactoryFactory.getThread();
// return of all threads for DB
  self.allThreads = FactoryFactory.allThreads;



  self.submitNewOrder = function(order) {
    var firebaseUser = auth.$getAuth();
    if (firebaseUser === null){
      swal("You must be logged in to submit order", "Try Again!", "error");
    } else {
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
    };
    console.log("new Order: ", newOrder);
    FactoryFactory.submitNewOrder(newOrder);
    self.order = {};
  };// end submitNewOrder()




}]);//end of myApp.controller
