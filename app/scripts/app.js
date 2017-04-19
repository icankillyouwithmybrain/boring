(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         $stateProvider
         .state('landing', {
             url: '/',
             controller: 'RoomsCtrl',
             templateUrl: '/templates/landing.html'
         });
     }
    angular
         .module('boringChat', ['ui.router', 'firebase'])
         .config(config);
 })();
