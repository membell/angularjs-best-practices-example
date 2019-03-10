(function () {
    'use strict';

    angular
        .module('myApp')
        .service('numberService',[
            function () {
                var self = this;
                var statusOk = 0;
                var messsStatusOk = 'Ok';
                var statusError = -1;

                self.invalidIsInteger = function( number ) {
                    var result = {  mess: messsStatusOk,
                                    status: statusOk };

                    if( !Number.isInteger(number) ){
                        result.mess = 'Number must a number';
                        result.status = statusError;

                        return result;
                    }

                    return result;
                };


                self.invalidIsNumber = function( number ) {
                    var result = {  mess: messsStatusOk,
                        status: statusOk };

                    if( isNaN(number) ){
                        result.mess = 'Number must a number';
                        result.status = statusError;

                        return result;
                    }

                    return result;
                };

                /**
                 * @return {number}
                 */
                self.roundNumber = function( number, decimal ) {
                    var numberBuffer = 1;

                    if( self.invalidIsNumber(number).status === statusError || self.invalidIsInteger(decimal).status === statusError || decimal < 0 ){
                        return 0;
                    }

                    for (var i = 1; i <= decimal ; i++) {
                        numberBuffer *= 10;
                    }

                    return Math.round(number * numberBuffer)/numberBuffer;
                };
            }
        ]);
})();