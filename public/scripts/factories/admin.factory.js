
  myApp.factory('AdminFactory',['$http', '$firebaseAuth', '$routeParams', function($http, $firebaseAuth, $routeParams) {
    console.log('AdminFactory running');

    var auth = $firebaseAuth();
    var firebaseUser = auth.$getAuth();
// object containers
    var allIceRodModels = { list: [] };


// sources notify
    var notyf = new Notyf({
          delay: 2000,
          alertIcon: 'fa fa-exclamation-circle',
          confirmIcon: 'fa fa-check-circle'
        });















// public API
      return {


        }



  }]);//end of myApp.factory
