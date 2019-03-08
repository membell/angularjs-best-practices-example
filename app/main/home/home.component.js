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

    HomeController.$inject = ['$timeout', 'homeServices'];

    function HomeController($timeout, homeServices) {
        var vm = this;
        vm.title = 'HomeController';
        vm.blogs = [];

        init();

        function init() {
            vm.blogs = homeServices.getCalculation();
        }

        vm.sum = function( item ){
            return homeServices.add2Number(item.numberA, item.numberB);
        };
    }
})();

