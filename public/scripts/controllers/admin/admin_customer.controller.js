myApp.controller('Admin_customerController', ['AdminFactory', '$location', function(AdminFactory, $location) {

  console.log('Admin_customerController running');

  var self = this;

  self.message = 'angular sourced "Admin_customer"';


// gets all customers on init
  AdminFactory.getAllCustomers();
//return from DB for customers on init and filtered
  self.customers = AdminFactory.customers;



// button click to update customer info
  self.updateCustomer = function(customer){
    console.log(customer);
    AdminFactory.updateCustomer(customer);
  };

// button click to delete customer info
  self.deleteCustomer = function(customer){
    console.log(customer);
    AdminFactory.deleteCustomer(customer);
  };




}]); // end controller code block
