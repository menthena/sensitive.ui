'use strict';

angular.module('sensitivejs')
  .controller('HoverController', function() {

    $('.sensitive-hover').sensitive({
      type: 'click',
      sensitivity: 100
    });
    
  });
