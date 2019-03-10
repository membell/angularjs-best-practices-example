(function () {
    'use strict';

    angular
        .module('myApp.main', [
            'ui.router',
            'footer',
            'navbar',
            'myApp.home',
            'myApp.about',
            'myApp.fizzbuzz',
            'myApp.cylinder'
        ])
        .config(Main);

    Main.$inject = ['$stateProvider'];

    function Main($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                redirectTo: 'home',
                template: '<ma-main></ma-main>'
            });
    }
})();
