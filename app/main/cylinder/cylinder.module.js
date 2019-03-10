(function () {
    'use strict';

    angular
        .module('myApp.cylinder', ['ui.router'])
        .config(Home);

    Home.$inject = ['$stateProvider'];

    function Home($stateProvider) {
        $stateProvider
            .state('cylinder', {
                url: 'cylinder',
                parent: 'main',
                template: '<ma-cylinder></ma-cylinder>'
            });
    }
})();
