'use strict';

describe('FizzBuzzService', function () {
    var service;

    beforeEach(module('myApp.fizzbuzz'));

    beforeEach((function() {
        inject(function(_fizzBuzzService_) {
            service = _fizzBuzzService_;
        });
    }));

    it('return exception when number is a string', function () {
        var number = 'hai';

        expect(service.getFizzBuzzToNumber(number).mess).toEqual('Number must a number');
    });


    it('return exception when number -100', function () {
        var number = -100;

        expect(service.getFizzBuzzToNumber(number).mess).toEqual('Number must be range [1-100]');
    });

    it('return exception when number 0', function () {
        var number = 0;

        expect(service.getFizzBuzzToNumber(number).mess).toEqual('Number must be range [1-100]');
    });

    it('return correct when number 1', function () {
        expect(service.getFizzBuzzToNumber(1).result).toEqual('1');
    });

    it('return correct when number 15', function () {
        var result = '12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz';
        var number = 15;

        expect(service.getFizzBuzzToNumber(number).result).toEqual(result);
    });

    it('return correct when number 100', function () {
        var result95to100 = 'BuzzFizz9798FizzBuzz';
        var number = 100;
        var response = service.getFizzBuzzToNumber(number);
        var resultToCheck = response.result.slice(response.result.length - result95to100.length,response.result.length);

        expect(resultToCheck).toEqual(result95to100);
    });

    it('return exception when number 101', function () {
        var number = 101;
        var response = service.getFizzBuzzToNumber(number);

        expect(response.mess).toEqual('Number must be range [1-100]');
    });

    it('return exception when number 101', function () {
        var number = 101;
        var response = service.getFizzBuzzToNumber(number);

        expect(response.mess).toEqual('Number must be range [1-100]');
    });

});