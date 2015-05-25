'use strict';

angular.module('sensitivejs')
  .controller('ClickController', function() {

    $('.sensitive-button').sensitive({
      type: 'click',
      sensitivity: 50
    });
    
  });
