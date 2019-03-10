(function () {
    'use strict';

    angular
        .module('myApp.cylinder')
        .component('maCylinder', maCylinder());

    function maCylinder() {
        var directive = {
            controller: CylinderController,
            templateUrl: 'main/cylinder/cylinder.html',
            restrict: 'E',
            bindings: {
                name: '='
            }
        };

        return directive;
    }

    CylinderController.$inject = ['cylinderService'];

    function CylinderController(cylinderService) {
        var vm = this;
        vm.title = 'CylinderController';

        init();

        function init() {
            vm.resultString = cylinderService.getVolume(15, 10);
        }

    }
})();

