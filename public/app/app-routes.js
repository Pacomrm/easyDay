angular.module('uiRoutes', ['ui.router'])


.config(function($stateProvider, $urlRouterProvider) {
   
  console.log("Routes working!");
  $urlRouterProvider.otherwise("/home"); 

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl : 'app/views/login.html',
      controller  : 'loginController',
      controllerAs: 'login'
    })
    .state('home',{
      url: "/home",
      templateUrl : 'app/views/index.html',
      controller  : 'loginController',
      controllerAs: 'login'  
    })
    .state('rideOn',{
      url: "/rideOn",
      templateUrl : 'app/views/rideOn/all.html',
      controller  : 'rideOnController',
      controllerAs: 'rideOn'  
    });
});
