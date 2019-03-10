(function () {
    'use strict';

    angular
        .module('myApp.cylinder')
        .service('cylinderService',[
            function () {
                var self = this;

                self.getVolume = function( radius, height ) {
                    return self.getPerimeter(radius) * height + 2 * self.getBaseArea(radius);
                };

                self.getBaseArea = function( radius ) {
                  return  Math.PI * radius * radius;
                };

                self.getPerimeter = function( radius ) {
                    return  2 * Math.PI  * radius;
                };
            }
        ]);
})();