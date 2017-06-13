
myApp.controller('CareerController',['FactoryFactory', '$http', '$location', '$firebaseAuth', function(FactoryFactory, $http, $location, $firebaseAuth) {

  console.log('CareerController running');

  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();
  var notyf = new Notyf({
        delay: 3000,
        alertIcon: 'fa fa-exclamation-circle',
        confirmIcon: 'fa fa-check-circle'
      });


  self.message = 'angular sourced "Career"';

// button click to send email to reciever
  self.sendApplication = function(application) {
    var firebaseUser = auth.$getAuth();
      if (firebaseUser === null) {
        swal("You must be logged in to send email", "Try Again!", "error");
      } else {
        firebase.auth().currentUser.getIdToken().then(function(idToken) {
          $http({
            method: 'POST',
            url: '/career/application',
            data: application,
            headers: {
                      id_token : idToken
                      }
          }).then(function(response){
            notyf.confirm('APPLICATION SENT');
              $location.path('/home');
          }).catch(function(error) {
            swal("Sorry, we could not send your application.", "Try Again!", "error");
              console.log('error sending email', error);
          });
        });//end of firebase.auth()
      }// end else
  };// end sendApplication()


}]);//end of myApp.controller
