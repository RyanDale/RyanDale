(function () {
    'use strict';

    class HomeController {
        /* @ngInject */
        constructor() {
            console.log('home');
        }

    }

    angular
        .module('rdApp')
        .controller('HomeController', HomeController);
}());
