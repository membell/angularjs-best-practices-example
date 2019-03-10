'use strict';

describe('HomeController', function () {

    var $controller, $rootScope;

    beforeEach(module('myApp.fizzbuzz'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));
});