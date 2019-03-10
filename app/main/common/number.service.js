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
            }
        ]);
})();