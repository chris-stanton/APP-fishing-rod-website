
myApp.controller('HeaderController', ['FactoryFactory', '$firebaseAuth', '$http', '$location', function(FactoryFactory, $firebaseAuth, $http, $location) {

  console.log('HeaderController running');

  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();

  var notyf = new Notyf({
        delay: 3000,
        alertIcon: 'fa fa-exclamation-circle',
        confirmIcon: 'fa fa-check-circle'
      });


  self.message = 'angular sourced "Header"';


// auth login
  self.login = function() {
    auth.$signInWithPopup("google").then(function(firebaseUser) {
      notyf.confirm(firebaseUser.user.displayName + ' is logged in');
        console.log("Firebase Authenticated " + firebaseUser.user.displayName + " and is logged in");
    }).catch(function(error) {
      console.log("Authentication failed: ", error);
    });
  };// end of login()


// This code runs whenever the user changes authentication states
// e.g. whevenever the user logs in or logs out
// this is where we put most of our logic so that we don't duplicate
// the same things in the login and the logout code
  auth.$onAuthStateChanged(function(firebaseUser){
// firebaseUser will be null if not logged in
      if(firebaseUser) {
        checkNewUser();
        checkAdminRights();
          self.userIsLoggedIn = true;
          self.displayName = firebaseUser.displayName;
          self.photo = firebaseUser.photoURL;
          self.email = firebaseUser.email;
      } else {
          self.userIsLoggedIn = false;
            console.log('user is logged out');
      }
  });// end of auth.$onAuthStateChanged()


// auth logout
  self.logout = function() {
    auth.$signOut().then(function(){
      notyf.alert('YOU ARE LOGGED OUT');
        console.log('User has logged out');
    });
  }// end of logout()

// admin redirect
  self.adminButton = function() {
    $location.path('/admin_order');
  };

// checks admin rights on server side
  function checkAdminRights() {
    var auth = $firebaseAuth();
    var firebaseUser = auth.$getAuth();
        firebase.auth().currentUser.getIdToken().then(function(idToken) {
            $http({
              method: 'GET',
              url: '/admin/checkAdminRights',
              headers: {
                        id_token : idToken
                       }
            }).then(function(response) {
              self.admin = response.data;
                if (self.admin == true) {
                  notyf.confirm(firebaseUser.displayName + ' has Admin rights');
                } else {
                  return
                }
            }).catch(function(error) {
              swal("could not check for Admin rights", "Try Again!", "error");
              console.log('error checking Admin rights', error);
            });
        });// end of firebase.auth()
  };// end checkAdminRights()

// checks for new user on server side
  function checkNewUser() {
    var auth = $firebaseAuth();
    var firebaseUser = auth.$getAuth();
        firebase.auth().currentUser.getIdToken().then(function(idToken) {
            $http({
              method: 'GET',
              url: '/admin/checkNewUser',
              headers: {
                        id_token : idToken
                       }
            }).then(function(response) {
              self.newUser = response.data;
                if (self.newUser == true) {
                  swal('Welcome ' + firebaseUser.displayName + '! You are a new Customer. ' +
                        'Please complete the address form to continue.', 'Your address will not be shared with anyone. ' +
                        'It is used for your convienace and shipping estimates.');
                    $location.path('/address');
                } else {
                  return
                }
            }).catch(function(error) {
              swal("We could not check Admin rights", "Try Again!", "error");
              console.log('error checking Admin rights', error);
            });
        });// end of firebase.auth()
  };// end checkAdminRights()




}]);// end controller code block
