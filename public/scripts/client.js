var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/home', {
          templateUrl: '/views/home.html',
          controller: 'HomeController',
          controllerAs: 'hc'
        })
        .when ('/showroom', {
            templateUrl: '/views/showroom.html',
            controller: 'ShowroomController',
            controllerAs: 'sc'
        })
        .when ('/order', {
            templateUrl: '/views/order.html',
            controller: 'OrderController',
            controllerAs: 'oc'
        })
        .when ('/contact', {
            templateUrl: '/views/contact.html',
            controller: 'ContactController',
            controllerAs: 'cc'
        })
        .otherwise ( {
            redirectTo: '/home'
        });
}]);
