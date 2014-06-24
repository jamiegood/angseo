'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);



phonecatApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

      //$locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');


    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });

      //$locationProvider.hasPrefix('!');
  }

]);



/*
phonecatApp.config(['$location',
    function($location) {
        $location.hashPrefix('!');
    }
]);

    */