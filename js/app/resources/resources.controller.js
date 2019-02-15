(function () {
    'use strict';

    class ResourcesController {
        /* @ngInject */
        constructor(articles) {
            this.articles = articles;
        }

    }

    angular
        .module('rdApp')
        .controller('ResourcesController', ResourcesController);
}());