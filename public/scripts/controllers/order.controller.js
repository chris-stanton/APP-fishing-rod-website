myApp.controller('OrderController',['FactoryFactory', function(FactoryFactory) {

  console.log('OrderController running');

  var self = this;

  self.message = 'angular sourced "Order"';

// customer rod order submission to DB
  self.submitNewOrder = function(newOrder) {
    console.log(newOrder);
    self.newOrder = {};
  }


}]);//end of myApp.controller
