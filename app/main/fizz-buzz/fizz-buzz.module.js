(function () {
    'use strict';

    angular
        .module('myApp.fizzbuzz', ['ui.router'])
        .config(Home);

    Home.$inject = ['$stateProvider'];

    function Home($stateProvider) {
        $stateProvider
            .state('fizzbuzz', {
                url: 'fizz-buzz',
                parent: 'main',
                template: '<ma-fizz-buzz name="\'Luis\'"></ma-fizz-buzz>'
            });
    }
})();
