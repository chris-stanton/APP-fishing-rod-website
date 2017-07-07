
  myApp.factory('AdminFactory',['$http', '$firebaseAuth', '$routeParams', function($http, $firebaseAuth, $routeParams) {
    console.log('AdminFactory running');

    var auth = $firebaseAuth();
    var firebaseUser = auth.$getAuth();
// object containers
    var selectOptions = { list:[] };
    var allInventory = { list:[] };
    var customers = { list:[] };
    var customerLastNamesOptions = { list:[] };



// sources notify
    var notyf = new Notyf({
          delay: 3000,
          alertIcon: 'fa fa-exclamation-circle',
          confirmIcon: 'fa fa-check-circle'
        });


// admin select option data on init
  function getSelectOptions() {
    $http({
      method: 'GET',
      url: '/admin_init/getSelectOptions'
    }).then(function(response) {
      selectOptions.list = response.data;
    }).catch(function(error) {
      swal("Sorry, could not get select option data request", "Try Again!", "error");
      console.log('select option data request', error);
    });
  };  // end getSelectOptions()

// gets all active inventory on init
  function getAllInventory() {
    $http({
      method: 'GET',
      url: '/admin_init/getAllInventory'
    }).then(function(response) {
      allInventory.list = response.data;
    }).catch(function(error) {
      swal("Sorry, could not send inventory request", "Try Again!", "error");
      console.log('select option data request on init', error);
    });
  };  // end getAllInventory()

// updates inventory item at DB
  function updateInventory(inventoryItem) {
      firebase.auth().currentUser.getIdToken().then(function(idToken) {
        $http({
          method: 'POST',
          url: '/admin_inventory/updateInventory/' + inventoryItem.id,
          data: inventoryItem,
          headers: {
                    id_token : idToken
                    }
        }).then(function(response){
          notyf.confirm('INVENTORY ITEM IS UPDATED');
        }).catch(function(error) {
          swal("We were not able to update inventory item info", "Try Again!", "error");
          console.log('error updating inventory info', error);
        }); //end of catch
      }); // end firebase.auth()
  };  // end updateInventory


// admin inventory filter query
  function getFilteredInventory(inventoryFilter) {
    var auth = $firebaseAuth();
    var firebaseUser = auth.$getAuth();
    firebase.auth().currentUser.getIdToken().then(function(idToken) {
        $http({
          method: 'GET',
          url: '/admin_inventory/getFilteredInventory',
          headers: {
                    inventoryFilter : inventoryFilter.active,
                    id_token : idToken
                   }
        }).then(function(response) {
          allInventory.list = response.data;
        }).catch(function(error) {
          swal("Sorry, could not send filtered inventory request", "Try Again!", "error");
          console.log('filtered inventory request error', error);
        });
    }); // end of firebase.auth()
  };  // end getFilteredInventory()

// gets all active customers for admin customer view
  function getAllCustomers() {
    $http({
      method: 'GET',
      url: '/admin_init/getAllCustomers'
    }).then(function(response) {
      customers.list = response.data;
    }).catch(function(error) {
      swal("Sorry, could not send customer request", "Try Again!", "error");
      console.log('customer request error ', error);
    });
  }; // end getAllCustomers()

// updates customer at DB
  function updateCustomer(customer) {
      firebase.auth().currentUser.getIdToken().then(function(idToken) {
        $http({
          method: 'POST',
          url: '/admin_customer/updateCustomer/' + customer.id,
          data: customer,
          headers: {
                    id_token : idToken
                    }
        }).then(function(response){
          notyf.confirm('CUSTOMER INFO HAS BEEN UPDATED');
        }).catch(function(error) {
          swal("We were not able to update customer info", "Try Again!", "error");
          console.log('error updating customer info', error);
        }); //end of catch
      }); // end firebase.auth()
  };  // end updateCustomer()

// admin customer filter
  function getFilteredCustomer(customerFilter) {
    var auth = $firebaseAuth();
    var firebaseUser = auth.$getAuth();
    firebase.auth().currentUser.getIdToken().then(function(idToken) {
        $http({
          method: 'GET',
          url: '/admin_customer/getFilteredCustomer',
          headers: {
                    customerFilter : customerFilter.lastName,
                    id_token : idToken
                   }
        }).then(function(response) {
          customers.list = response.data;
        }).catch(function(error) {
          swal("Sorry, could not send filtered customer request", "Try Again!", "error");
          console.log('filtered customer request error', error);
        });
    }); // end of firebase.auth()
  };  // end getFilteredCustomer()

// gets all customer last names for select options on admin cystomer view
  function getCustomersSelect() {
    $http({
      method: 'GET',
      url: '/admin_init/getCustomersSelect'
    }).then(function(response) {
      customerLastNamesOptions.list = response.data;
    }).catch(function(error) {
      swal("Sorry, could not send customer request", "Try Again!", "error");
      console.log('customer request error ', error);
    });
  }; // endgetCustomersSelect()










// public API
  return {
// inventory items in init and filtered items for admin_inventory view
      selectOptions : selectOptions,
// call to DB on init to populate select options
      getSelectOptions : getSelectOptions,
// gets all inventory on init for admin inventory view
      getAllInventory : getAllInventory,
// return og all items for admin inventory view from DB
      allInventory : allInventory,
// calls DB for filtered inventory for admin_inventory view on init
      getFilteredInventory : getFilteredInventory,
// gets all customers on init for admin customer view
      getAllCustomers : getAllCustomers,
// filter from admin customer view request to DB
      getFilteredCustomer : getFilteredCustomer,
// return from DB to admin customer view for customers on init and filtered
      customers : customers,
// updates customer at DB
      updateCustomer : updateCustomer,
// updates inventory item at DB
      updateInventory : updateInventory,
// gets last names for admin customer select option on init
      getCustomersSelect : getCustomersSelect,
// return form DB of all customer last names for admin customer view
      customerLastNamesOptions : customerLastNamesOptions

    }



  }]);//end of myApp.factory
