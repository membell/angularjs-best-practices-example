(function () {
    'use strict';

    angular
        .module('myApp.tennis')
        .component('maTennis', maTennis());

    function maTennis() {
        var directive = {
            controller: TennisController,
            templateUrl: 'main/fizz-buzz/fizz-buzz.html',
            restrict: 'E',
            bindings: {
                name: '='
            }
        };

        return directive;
    }

    TennisController.$inject = ['tennisService'];

    function TennisController(tennisService) {
        var vm = this;
        vm.title = 'TennisController';

        init();

        function init() {
            // vm.resultString = tennisService.getFizzBuzzToNumber(15);
        }

    }
})();

