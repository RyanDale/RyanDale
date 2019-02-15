(function () {
    'use strict';

    class HomeController {
        /* @ngInject */
        constructor(articles) {
            this.articles = articles;
        }

    }

    angular
        .module('rdApp')
        .controller('HomeController', HomeController);
}());
