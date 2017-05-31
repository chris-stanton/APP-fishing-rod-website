
  myApp.factory('FactoryFactory',['$http', '$firebaseAuth', function($http, $firebaseAuth) {
    console.log('FactoryFactory running');


// object containers
    var allIceRodModels = { list: [] };

// sources notify
    var notyf = new Notyf({
          delay:2000,
          alertIcon: 'fa fa-exclamation-circle',
          confirmIcon: 'fa fa-check-circle'
        });


// adds new user to DB from address view
    function addNewUser(newUserAddress) {
      firebase.auth().currentUser.getIdToken().then(function(idToken) {
        $http({
          method: 'POST',
          url: '/auth/newUserAddress',
          data: newUserAddress,
          headers: {
            id_token: idToken
          }
        }).then(function(response){
          notyf.confirm('You are now a registered user!')
        }).catch(function(error) {
          swal("Sorry, we couldn't process your address.", "Try Again!", "error");
          console.log('error authenticating', error);
        });
      });//end of firebase.auth()
    };// end addNewUser()

// gets all ice rod models for order view
    function getAllIceRodModels() {
        $http({
          method: 'GET',
          url: '/order/allIceRods'
        }).then(function(response) {
          allIceRodModels.list = response.data;
        });
    };// end getAllIceRodModels()

// adds new rod order to DB from custom_order view
    function submitNewOrder(newOrder) {
      firebase.auth().currentUser.getIdToken().then(function(idToken) {
        $http({
          method: 'POST',
          url: '/auth/newOrder',
          data: newOrder,
          headers: {
            id_token: idToken
          }
        }).then(function(response){
          notyf.confirm('Your order has been Submitted.  Please allow 3-4 weeks for arrival.')
        }).catch(function(error) {
          swal("Sorry, we couldn't process your address.", "Try Again!", "error");
          console.log('error authenticating', error);
        });
      });//end of firebase.auth()
    };// end addNewUser()









// public API
    return {
// adds new user to DB from address view
      addNewUser : addNewUser,
// request from controller for all ice rod models
      getAllIceRodModels : getAllIceRodModels,
// sends all ice rod models from DB to order view
      allIceRodModels : allIceRodModels,
// adds rod order to DB form custom_order view
      submitNewOrder : submitNewOrder

    }

  }]);//end of myApp.factory
