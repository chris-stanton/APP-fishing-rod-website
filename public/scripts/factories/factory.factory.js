
  myApp.factory('FactoryFactory',['$http', '$firebaseAuth', '$routeParams', function($http, $firebaseAuth, $routeParams) {
    console.log('FactoryFactory running');


// object containers
    var allIceRodModels = { list: [] };
    var allThreads = { list: [] };
    var specificIceRod = { list: [] };
    var allCartItems = { list: [] };

// sources notify
    var notyf = new Notyf({
          delay: 2000,
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
                    id_token : idToken
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
                    id_token : idToken
                   }
        }).then(function(response){
          notyf.confirm('Your order has been added to your cart')
        }).catch(function(error) {
          swal("Sorry, we couldn't process your address.", "Try Again!", "error");
          console.log('error authenticating', error);
        });
      });//end of firebase.auth()
    };// end addNewUser()

// gets thread colors form DB for custom_order view
    function getThread() {
        $http({
          method: 'GET',
          url: '/order/getThread'
        }).then(function(response) {
          allThreads.list = response.data;
        });
    };// end getAllIceRodModels()

// gets specfic ice rod for specific_rod view
    function getSpecificIceRod(rods) {
        $http({
          method: 'GET',
          url: '/order/getSpecificIceRod/' + rods.id,
          headers: {
                    rods : rods
                   }
        }).then(function(response) {
          specificIceRod.list = response.data;
        });
    };// end getSpecificIceRod()

// GETs all cart items for cart view on init based of firebaseUser
    function getCart() {
      firebase.auth().currentUser.getIdToken().then(function(idToken) {
          $http({
            method: 'GET',
            url: '/cart/getCart',
            headers: {
                      id_token : idToken
                     }
          }).then(function(response) {
            allCartItems.list = response.data;
          }).catch(function(error) {
            swal("Sorry, you must be logged in to see your cart", "Try Again!", "error");
            console.log('error authenticating', error);
          });
      });// end of firebase.auth()
    };// end getAllIceRodModels()

//updates cart at DB
    function updateCart(cart) {
        firebase.auth().currentUser.getIdToken().then(function(idToken) {
          $http({
            method: 'POST',
            url: '/cart/updateCart/' + cart.id,
            data: cart,
            headers: {
                      id_token : idToken
                      }
          }).then(function(response){
            notyf.confirm('Order has been updated');
            getCart();
          }).catch(function(error) {
            swal("We were not able to update cart", "Try Again!", "error");
            console.log('error updating', error);
          });//end of catch
        });// end firebase.auth()
    };// end updateCart()

// deletes items at DB from cart view
    function deleteCart(cart){
        firebase.auth().currentUser.getIdToken().then(function(idToken) {
          $http({
            method: 'DELETE',
            url: '/cart/deleteCart/' + cart.id,
            data: cart,
            headers: {
                      id_token : idToken
                     }
          }).then(function(response){
            notyf.confirm('Item deleted from cart');
            getCart();
          }).catch(function(error) {
            swal("We could not delete item", "Try Again!", "error");
            console.log('error deleting', error);
          });// end of catch
        });// end firebase.auth()
    };// end of deleteAdmin()









// public API
    return {
// adds new user to DB from address view
      addNewUser : addNewUser,
// request from controller for all ice rod models
      getAllIceRodModels : getAllIceRodModels,
// sends all ice rod models from DB to order view
      allIceRodModels : allIceRodModels,
// adds rod order to DB form custom_order view
      submitNewOrder : submitNewOrder,
// gets thread colors form DB for custom_order view
      getThread : getThread,
// all threads form DB for custom_order view
      allThreads : allThreads,
// gets specfic ice rod from specific_rod view
      getSpecificIceRod : getSpecificIceRod,
// return of specific rod for specific_rod view
      specificIceRod : specificIceRod,
// GETs all cart items for cart view on init based of firebaseUser
      getCart : getCart,
//return off all cart items of user at cart view
      allCartItems : allCartItems,
// updates cart at DB from cart view
      updateCart : updateCart,
// deletes items at DB from cart view
      deleteCart : deleteCart
    }

  }]);//end of myApp.factory
