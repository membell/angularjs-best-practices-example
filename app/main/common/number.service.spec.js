'use strict';

describe('NumberService', function () {
    var service;
    var statusOk = 0;
    var messsStatusOk = 'Ok';
    var statusError = -1;

    beforeEach(module('myApp'));

    beforeEach((function() {
        inject(function(_numberService_) {
            service = _numberService_;
        });
    }));

    describe('NumberService.invalidIsInteger', function () {
        it('return exception when number is a string', function () {
            var number = 'hai';
            var result = {
                mess: 'Number must a number',
                status: statusError
            };

            expect(service.invalidIsInteger(number)).toEqual(result);
        });

        it('return correct when number is 0', function () {
            var number = 0;
            var result = {
                mess: messsStatusOk,
                status: statusOk
            };

            expect(service.invalidIsInteger(number)).toEqual(result);
        });

        it('return correct when number is 15', function () {
            var number = 15;
            var result = {
                mess: messsStatusOk,
                status: statusOk
            };

            expect(service.invalidIsInteger(number)).toEqual(result);
        });

    });

    describe('NumberService.roundNumber', function () {
        it('return 0 when number is a string', function () {
            var number = 'hai';
            var decimal = 0;
            var result = 0;

            expect(service.roundNumber(number, decimal)).toEqual(result);
        });

        it('return 0 when decimal is a string', function () {
            var number = 0;
            var decimal = 'hai';
            var result = 0;

            expect(service.roundNumber(number, decimal)).toEqual(result);
        });

        it('return 0 when decimal less 0', function () {
            var number = 0;
            var decimal = -1;
            var result = 0;

            expect(service.roundNumber(number, decimal)).toEqual(result);
        });

        it('return correct when number is 1.0333331', function () {
            var number = 1.0333331;
            var decimal = 2;
            var result = 1.03;

            expect(service.roundNumber(number, decimal)).toEqual(result);
        });

        it('return correct when number is 1.0373337', function () {
            var number = 1.0373337;
            var decimal = 2;
            var result = 1.04;

            expect(service.roundNumber(number, decimal)).toEqual(result);
        });

        it('return correct when number is 1.0333337 and decimal 0', function () {
            var number = 1.0333337;
            var decimal = 0;
            var result = 1;

            expect(service.roundNumber(number, decimal)).toEqual(result);
        });
    });

});