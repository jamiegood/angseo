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

      $locationProvider.html5Mode(true);
      //$locationProvider.hashPrefix('!');


    $routeProvider.
      when('/app/phones', {
        templateUrl: '/app/partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/app/phones/:phoneId', {
        templateUrl: '/app/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/app/phones'
      });

      //$locationProvider.hasPrefix('!');
  }

]);