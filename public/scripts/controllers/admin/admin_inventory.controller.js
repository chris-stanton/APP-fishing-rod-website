
myApp.controller('Admin_inventoryController', ['AdminFactory', '$location', function(AdminFactory, $location) {

  console.log('Admin_inventoryController running');

  var self = this;

// calls DB for inventory on init
  AdminFactory.getSelectOptions();
  AdminFactory.getAllInventory();


  self.message = 'angular sourced "Admin_inventory"';
// all inventory for select option from DB on init
  self.selectOptions = AdminFactory.selectOptions;
// all inventory items from DB on init and filters
  self.allInventory = AdminFactory.allInventory;
  console.log(self.allInventory);



// button click to DB for filtered inventory items
  self.getFilteredInventory = function(inventoryFilter) {
    AdminFactory.getFilteredInventory(inventoryFilter);
  }




}]); // end controller code block
