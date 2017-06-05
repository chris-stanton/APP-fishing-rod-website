
myApp.controller('Shopping_cartController',['FactoryFactory', '$location', function(FactoryFactory, $location) {

  console.log('Shopping_cartController running');

  var self = this;

// gets all cart items on init
  FactoryFactory.getCart();
// return of all cart items form DB
  self.allCartItems = FactoryFactory.allCartItems;


  self.message = 'angular sourced "shopping_cart"';

// updates items at DB
  self.updateCart = function(cart) {
    FactoryFactory.updateCart(cart);
  };// end updateCart

// deletes items at DB
  self.deleteCart = function(cart) {
    FactoryFactory.deleteCart(cart);
  };// end deletecart

// checkout redirect
  self.checkout = function() {
    console.log('checkout button clicked');
    $location.path('/paypal')
  }



}]);//end of myApp.controller
