(function () {
    'use strict';

    angular
        .module('myApp.cylinder')
        .service('cylinderService',['numberService',
            function (numberService) {
                var self = this;

                self.getVolume = function( radius, height ) {
                    return numberService.roundNumber(self.getPerimeter(radius) * height + 2 * self.getBaseArea(radius), 2 );
                };

                self.getBaseArea = function( radius ) {
                  return Math.round( Math.PI * radius * radius , 2);
                };

                self.getPerimeter = function( radius ) {
                    return  2 * Math.PI  * radius;
                };
            }
        ]);
})();