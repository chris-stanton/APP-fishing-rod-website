
  myApp.factory('AdminFactory',['$http', '$firebaseAuth', '$routeParams', function($http, $firebaseAuth, $routeParams) {
    console.log('AdminFactory running');

    var auth = $firebaseAuth();
    var firebaseUser = auth.$getAuth();
// object containers
    var selectOptions = { list: [] };
    var allInventory = { list:[] };
    var customers = { list:[] };



// sources notify
    var notyf = new Notyf({
          delay: 2000,
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
      swal("Sorry, could not send select option request", "Try Again!", "error");
      console.log('error authenticating', error);
    });
  };// end getSelectOptions()

// admin select option data on init
  function getAllInventory() {
    $http({
      method: 'GET',
      url: '/admin_init/getAllInventory'
    }).then(function(response) {
      allInventory.list = response.data;
    }).catch(function(error) {
      swal("Sorry, could not send inventory request on init", "Try Again!", "error");
      console.log('error authenticating', error);
    });
  };// end getAllInventory()

// admin inventory filter query
  function getFilteredInventory(inventoryFilter) {
    var auth = $firebaseAuth();
    var firebaseUser = auth.$getAuth();
    firebase.auth().currentUser.getIdToken().then(function(idToken) {
        $http({
          method: 'GET',
          url: '/admin_inventory/getFilteredInventory',
          headers: {
                    inventoryFilter : inventoryFilter.model,
                    id_token : idToken
                   }
        }).then(function(response) {
          allInventory.list = response.data;
        }).catch(function(error) {
          swal("Sorry, could not send filtered inventory request to DB", "Try Again!", "error");
          console.log('error authenticating', error);
        });
    });// end of firebase.auth()
  };// end getInventory()

// gets customers for admin customer view
  function getAllCustomers() {
    $http({
      method: 'GET',
      url: '/admin_init/getAllCustomers'
    }).then(function(response) {
      customers.list = response.data;
    }).catch(function(error) {
      swal("Sorry, could not send customer request to DB", "Try Again!", "error");
      console.log('error authenticating', error);
    });
  }// end getAllCustomers()








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
// return from DB to admin customer view for customers on init and filtered
      customers : customers


    }



  }]);//end of myApp.factory
