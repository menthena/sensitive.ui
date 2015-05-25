'use strict';

angular.module('sensitivejs', [
    'ngRoute'
  ]).config(function($routeProvider) {
    $routeProvider
      .when('/slide', {
        templateUrl: 'views/slide.html',
        controller: 'SlideController'
      })
      .when('/focus', {
        templateUrl: 'views/focus.html',
        controller: 'FocusController'
      })
      .when('/click', {
        templateUrl: 'views/click.html',
        controller: 'ClickController'
      })
      .when('/hover', {
        templateUrl: 'views/hover.html',
        controller: 'HoverController'
      })
      .otherwise({
        redirectTo: '/slide'
      });
  });
