(function () {
    'use strict';

    class ArticleController {
        /* @ngInject */
        constructor($stateParams) {
            angular.element('.article-container').load(`articles/${$stateParams.id}.html`);
        }

    }

    angular
        .module('rdApp')
        .controller('ArticleController', ArticleController);
}());