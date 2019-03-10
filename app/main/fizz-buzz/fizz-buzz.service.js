(function () {
    'use strict';

    angular
        .module('myApp.fizzbuzz')
        .service('fizzBuzzService',[
            function () {
                var self = this;
                var FizzNumber = 3;
                var FizzString = "Fizz";
                var BuzzNumner = 5;
                var BuzzString = "Buzz";

                self.getFizzBuzzByNumber = function( number ) {
                    var stringResult = "";
                    var isFizz  = number % FizzNumber === 0;
                    var isBuzz = number % BuzzNumner === 0;

                    if( isFizz ){
                        stringResult += FizzString;
                    }

                    if( isBuzz ){
                        stringResult += BuzzString;
                    }

                    if( stringResult.length === 0 ){
                        stringResult = number.toString();
                    }

                    return stringResult;
                };

                self.getFizzBuzzToNumber = function( toNumber ){
                    var result = {  mess: "Ok",
                                    result: "" };

                    if( !Number.isInteger(toNumber) ){
                        result.mess = 'Number must a number';

                        return result;
                    }

                    if( toNumber <= 0 || toNumber > 100 ){
                        result.mess = 'Number must be range [1-100]';

                        return result;
                    }

                    for (var i = 1; i <= toNumber; i++) {
                        result.result += self.getFizzBuzzByNumber(i);
                    }

                    return result;
                };
            }
        ]);
})();