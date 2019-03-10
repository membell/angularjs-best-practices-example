(function () {
    'use strict';

    angular
        .module('myApp.home')
        .component('maHome', maHome());

    function maHome() {
        var directive = {
            controller: HomeController,
            templateUrl: 'main/home/home.html',
            restrict: 'E',
            bindings: {
                name: '='
            }
        };

        return directive;
    }

    HomeController.$inject = ['$timeout', 'homeService'];

    function HomeController($timeout, homeService) {
        var vm = this;
        vm.title = 'HomeController';
        vm.blogs = [];

        init();

        function init() {
            vm.blogs = homeService.getCalculation();
        }

        vm.sum = function( item ){
            return homeService.add2Number(item.numberA, item.numberB);
        };
    }
})();

