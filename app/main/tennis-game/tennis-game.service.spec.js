'use strict';

describe('FizzBuzzService', function () {
    var service;

    beforeEach(module('myApp.tennis'));

    beforeEach((function() {
        inject(function(_tennisService_) {
            service = _tennisService_;
        });
    }));

    it('return exception when number is a string', function () {
        // var number = 'hai';
        //
        // expect(service.getFizzBuzzToNumber(number).mess).toEqual('Number must a number');
    });

});