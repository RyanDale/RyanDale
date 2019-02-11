(function () {
    'use strict';

    class ArticleController {
        /* @ngInject */
        constructor() {
            console.log('article');
        }

    }

    angular
        .module('rdApp')
        .controller('ArticleController', ArticleController);
}());