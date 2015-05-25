'use strict';

angular.module('sensitivejs')
  .controller('SlideController', function() {
    $('#navbar .container').sensitive({
      type: 'slide'
    });

    
  });
