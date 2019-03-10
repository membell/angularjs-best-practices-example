'use strict';

describe('CylinderService', function () {
    var service;

    beforeEach(module('myApp.cylinder'));

    beforeEach((function() {
        inject(function(_cylinderService_) {
            service = _cylinderService_;
        });
    }));

});