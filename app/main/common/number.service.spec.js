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

});