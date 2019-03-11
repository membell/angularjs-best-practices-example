(function () {
    'use strict';

    angular
        .module('myApp.tennis', ['ui.router'])
        .config(Home);

    Home.$inject = ['$stateProvider'];

    function Home($stateProvider) {
        $stateProvider
            .state('tennis', {
                url: 'tennis',
                parent: 'main',
                template: '<ma-tennis></ma-tennis>'
            });
    }
})();
