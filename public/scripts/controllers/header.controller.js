
myApp.controller('HeaderController', ['FactoryFactory', '$firebaseAuth', '$http', function(FactoryFactory, $firebaseAuth, $http) {

  console.log('HeaderController running');

  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();

  self.message = 'angular sourced "Header"';


// auth login
  self.login = function() {
    auth.$signInWithPopup("google").then(function(firebaseUser) {
      console.log("Firebase Authenticated " + firebaseUser.user.displayName + " and is now logged in");
    }).catch(function(error) {
      console.log("Authentication failed: ", error);
    });
  }// end of login()


// This code runs whenever the user changes authentication states
// e.g. whevenever the user logs in or logs out
// this is where we put most of our logic so that we don't duplicate
// the same things in the login and the logout code
  auth.$onAuthStateChanged(function(firebaseUser){
// firebaseUser will be null if not logged in
      if(firebaseUser) {
        self.userIsLoggedIn = true;
        self.displayName = firebaseUser.displayName;
        self.photo = firebaseUser.photoURL;
        self.email = firebaseUser.email;
      } else {
        self.userIsLoggedIn = false;
          console.log('You are not logged in or authorized');
      }
  });// end of auth.$onAuthStateChanged()


// auth logout
  self.logout = function() {
    auth.$signOut().then(function(){
      console.log('User has logged out');
    });
  }// end of logout()

}]);// end controller code block
