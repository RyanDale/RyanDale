(function () {
    'use strict';

    class ResourcesController {
        /* @ngInject */
        constructor() {
            console.log('res');
        }

    }

    angular
        .module('rdApp')
        .controller('ResourcesController', ResourcesController);
}());