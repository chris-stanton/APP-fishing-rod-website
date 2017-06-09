myApp.controller('Admin_customerController', ['AdminFactory', '$location', function(AdminFactory, $location) {

  console.log('Admin_customerController running');

  var self = this;

  self.message = 'angular sourced "Admin_customer"';


// gets all customers on init
  AdminFactory.getAllCustomers();
// gets customer lastnames for select options
  AdminFactory.getCustomersSelect();
//return from DB for customers on init and filtered
  self.customers = AdminFactory.customers;
// return off all customer last names on init
  self.customerLastNamesOptions = AdminFactory.customerLastNamesOptions;



// button click to update customer info
  self.updateCustomer = function(customer){
    console.log(customer);
    AdminFactory.updateCustomer(customer);
  };

// customer filter button click
  self.getFilteredCustomer = function(customerFilter) {
    console.log(customerFilter);
    if (customerFilter.lastName === 'all') {
      AdminFactory.getAllCustomers();
    } else {
      AdminFactory.getFilteredCustomer(customerFilter);
    };
  };





}]); // end controller code block
