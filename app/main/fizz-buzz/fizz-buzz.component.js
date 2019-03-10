(function () {
    'use strict';

    angular
        .module('myApp.fizzbuzz')
        .component('maFizzBuzz', maFizzBuzz());

    function maFizzBuzz() {
        var directive = {
            controller: FizzBuzzController,
            templateUrl: 'main/fizz-buzz/fizz-buzz.html',
            restrict: 'E',
            bindings: {
                name: '='
            }
        };

        return directive;
    }

    FizzBuzzController.$inject = ['$timeout', 'fizzBuzzService'];

    function FizzBuzzController($timeout, fizzBuzzService) {
        var vm = this;
        vm.title = 'FizzBuzzController';

        init();

        function init() {
            vm.resultString = fizzBuzzService.getFizzBuzzToNumber(15);
        }

    }
})();

