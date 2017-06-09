
myApp.controller('Admin_orderController', ['AdminFactory', '$location', function(AdminFactory, $location) {

  console.log('Admin_orderController running');

  var self = this;




  self.message = 'angular sourced "Admin_order"';


//button click from filter to DB
  self.getFilteredOrder = function(orderFilter) {
    console.log(orderFilter);
  }


}]); // end controller code block
