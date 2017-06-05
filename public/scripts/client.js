var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

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
        .when ('/specific_rod/:id', {
            templateUrl: '/views/specific_rod.html',
            controller: 'Specific_rodController',
            controllerAs: 'src'
        })
        .when ('/order', {
            templateUrl: '/views/order.html',
            controller: 'OrderController',
            controllerAs: 'oc'
        })
        .when ('/address', {
            templateUrl: '/views/address.html',
            controller: 'AddressController',
            controllerAs: 'ac'
        })
        .when ('/contact', {
            templateUrl: '/views/contact.html',
            controller: 'ContactController',
            controllerAs: 'cc'
        })
        .when ('/custom_order', {
            templateUrl: '/views/custom_order.html',
            controller: 'Custom_orderController',
            controllerAs: 'coc'
        })
        .when ('/paypal', {
            templateUrl: '/views/paypal.html',
            controller: 'PaypalController',
            controllerAs: 'pc'
        })
        .when ('/career', {
            templateUrl: '/views/career.html',
            controller: 'CareerController',
            controllerAs: 'car'
        })
        .when ('/shopping_cart', {
            templateUrl: '/views/shopping_cart.html',
            controller: 'Shopping_cartController',
            controllerAs: 'scc'
        })
        .when ('/warranty', {
            templateUrl: '/views/templates/warranty.html'
        })
        .otherwise ( {
            redirectTo: '/home'
        });
}]);
