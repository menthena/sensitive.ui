'use strict';

angular.module('sensitivejs')
  .controller('FocusController', function() {

    $('.sensitive-input').sensitive({
      type: 'focus',
      sensitivity: 125
    });
    
  });
