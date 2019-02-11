(function () {
    'use strict';

    class AboutController {
        /* @ngInject */
        constructor() {
            console.log('about');
        }

    }

    angular
        .module('rdApp')
        .controller('AboutController', AboutController);
}());