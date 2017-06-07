myApp.controller('Admin_customerController', ['AdminFactory', '$location', function(AdminFactory, $location) {

  console.log('Admin_customerController running');

  var self = this;


// gets all customers on init
  AdminFactory.getAllCustomers();
//return from DB for customers on init and filtered
  self.customers = AdminFactory.customers;


  self.message = 'angular sourced "Admin_customer"';




}]); // end controller code block
