myApp.controller('OrderController',['FactoryFactory', '$firebaseAuth', function(FactoryFactory, $firebaseAuth) {

  console.log('OrderController running');

  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();

  self.message = 'angular sourced "Order"';
// hard codes values (needs get request to DB)
  self.iceRodModels = [
    {
      id : 1,
      blankModel : 'Mini Bite',
      blankLength : '21"',
      handleLength : '3"'
    },
    {
      id : 2,
      blankModel : 'El Dente',
      blankLength : '28"',
      handleLength : '5"'
    },
    {
      id : 3,
      blankModel : 'Perch Pounder',
      blankLength : '32"',
      handleLength : '5"'
    },
    {
      id : 4,
      blankModel : 'Gill Seeker',
      blankLength : '32"',
      handleLength : '5"'
    },
    {
      id : 4,
      blankModel : 'Walleye Stinger',
      blankLength : '32"',
      handleLength : '5"'
    }
  ];

// customer rod order submission to DB
  self.submitNewOrder = function(newOrder) {
    console.log(newOrder);
    self.newOrder = {};
  }


}]);//end of myApp.controller

// firebaseUser.displayName;
