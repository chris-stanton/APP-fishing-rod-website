
  myApp.factory('AdminFactory',['$http', '$firebaseAuth', '$routeParams', function($http, $firebaseAuth, $routeParams) {
    console.log('AdminFactory running');

    var auth = $firebaseAuth();
    var firebaseUser = auth.$getAuth();
// object containers
    var selectOptions = { list: [] };
    var allInventory = { list:[] };



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
      swal("Sorry, you must be logged in to see your cart", "Try Again!", "error");
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
      swal("Sorry, you must be logged in to see your cart", "Try Again!", "error");
      console.log('error authenticating', error);
    });
  };// end getSelectOptions()

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
          swal("Sorry, you must be logged in to see your cart", "Try Again!", "error");
          console.log('error authenticating', error);
        });
    });// end of firebase.auth()
  };// end getInventory()












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



        }



  }]);//end of myApp.factory
