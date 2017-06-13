myApp.controller('ContactController',['FactoryFactory', '$http', '$location', '$firebaseAuth', function(FactoryFactory, $http, $location, $firebaseAuth) {

  console.log('ContactController running');

  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();
  var notyf = new Notyf({
        delay: 3000,
        alertIcon: 'fa fa-exclamation-circle',
        confirmIcon: 'fa fa-check-circle'
      });


  self.message = 'angular sourced "Contact"';

// button click to send email to reciever
  self.sendNewMessage = function(newMessage) {
    var firebaseUser = auth.$getAuth();
      if (firebaseUser === null) {
        swal("You must be logged in to send email", "Try Again!", "error");
      } else {
        firebase.auth().currentUser.getIdToken().then(function(idToken) {
          $http({
            method: 'POST',
            url: '/contact/newMessage',
            data: newMessage,
            headers: {
                      id_token : idToken
                      }
          }).then(function(response){
            notyf.confirm('EMAIL SENT');
              $location.path('/home');
          }).catch(function(error) {
            swal("Sorry, we could not send your email.", "Try Again!", "error");
              console.log('error sending email', error);
          });
        });//end of firebase.auth()
      }// end else
  };// end sendNewMessage()


}]);//end of myApp.controller
