(function () {
    'use strict';

    angular
        .module('myApp.home')
        .service('homeService',[
            function () {
                var self = this;

                self.getCalculation = function () {
                    return [{
                                numberA : 1,
                                numberB : 2
                            }, {
                                numberA : 100,
                                numberB : 2
                            }, {
                                numberA : -999999,
                                numberB : -999999
                            }, {
                                numberA : -10000,
                                numberB : 1100101010
                            }];
                };

                self.add2Number = function(numberA, numberB){
                  if( (numberA/2 + numberB/2) > Number.MAX_VALUE/2 || (numberA/2 + numberB/2) < Number.MIN_VALUE/2 ){
                      return 'Number invalid!';
                  }

                  return (numberA + numberB).toString();
                };
            }
        ]);
})();