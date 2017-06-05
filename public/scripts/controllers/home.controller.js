myApp.controller('HomeController', ['FactoryFactory', '$location', function(FactoryFactory, $location) {

  console.log('HomeController running');

  var self = this;

  self.message = 'angular sourced "Home"';

  self.redirect = function() {
    console.log('button clicked');
      $location.path('/specific_rod/4');
  }


}]); // end controller code block
