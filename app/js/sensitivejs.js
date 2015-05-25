'use strict';

(function ( $ ) {

  $.fn.sensitive = function(options) {

    var Sensitive = {

      pointer: {},

      init: function() {
        this.reset();
        this.listen();
      },

      reset: function() {
        this.movement = {
          vertical: 0,
          horizontal: 0
        };
      },
      
      listen: function() {
        $(document).mousemove(function(event) {
          this.setPointerPosition(event.pageX, event.pageY);
        }.bind(this));
      },

      setPointerPosition: function(x, y) {
        this.pointer.x = x;
        this.pointer.y = y;
      },

      getCloseness: function(position) {
        var pointerPosition = this.pointer;
        return {
          x: Math.abs(position.x - pointerPosition.x),
          y: Math.abs(position.y - pointerPosition.y)
        };
      }

    };

    var SensitiveElement = function(element, options) {
      this.element = $(element);
      this.options = options;
      this.options.sensitivity = this.options.sensitivity || 200;
    };

    SensitiveElement.prototype = {

      init: function() {
        this.listen();
        this.perform(false);
      },

      getSize: function() {
        return {
          width: this.element.width(),
          height: this.element.height()
        };
      },

      getPosition: function() {
        var position = this.element.offset();
        var size = this.getSize();
        return {
          x: position.left + (size.width / 2),
          y: position.top
        };
      },

      isClose: function() {
        var closeness = Sensitive.getCloseness(this.getPosition()),
            result = false;

        if (closeness.y < this.options.sensitivity) {
          result = true;
        }

        return result;
      },

      perform: function(isClose) {
        if (this.options.type === 'slide' ) {
          if (isClose) {
            this.element.slideDown();
          } else {
            this.element.slideUp();
          }
        } else if (this.options.type === 'focus') {
          if (isClose) {
            this.element.trigger('focus');
          } else {
            this.element.trigger('blur');
          }
        } else if (this.options.type === 'click') {
          if (isClose) {
            this.element.trigger('focus');
          } else {
            this.element.trigger('blur');
          }
        } else if (this.options.type === 'hover') {
          if (isClose) {
            this.element.trigger('click');
          }
        }
      },

      listen: function() {
        $(document).click(function(event) {
          var isClose = this.isClose();
          if (isClose && event.toElement && event.toElement !== this.element) {
            this.element.trigger('click');
          }
        }.bind(this));
        $(document).mousemove(function() {
          var isClose = this.isClose();
          this.perform(isClose);
        }.bind(this));
      }

    };

    Sensitive.init();


    return this.each(function() {
      var element = new SensitiveElement(this, options);
      element.init();
    });
  };
 
}( jQuery ));