(function () {
    'use strict';
    angular
        .module('rdApp', [
            //'ngAnimate',
            'ngMaterial',
            'ngMessages',
            'ui.router',
        ])
        .config(config)
        .run(run);

    /* @ngInject */
    function config($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'js/app/home/home.html',
            controllerAs: '$ctrl',
        }).state('about', {
            url: '/about',
            controller: 'AboutController',
            templateUrl: 'js/app/about/about.html'
        }).state('resources', {
            url: '/resources',
            controller: 'ResourcesController',
            controllerAs: '$ctrl',
            templateUrl: 'js/app/resources/resources.html'
        }).state('resources-article', {
            url: '/article/:id',
            controller: 'ArticleController',
            templateUrl: 'js/app/article/article.html'
        });
    }

    /* @ngInject */
    function run($window, $state, $rootScope, $transitions) {
        /* @ngInject */
        function onSuccess($transition$) {
            let routeName = $transition$.to().name,
                fromState = $transition$.from(),
                fromRouteName = fromState.name;
            $rootScope.currentNavItem = $state.current.name.split('-')[0] || 'home';
            mixpanel.track('pageView', {
                to: routeName,
                from: fromRouteName
            });
            if (fromState) {
                $window.scrollTo(0, 0);
            }
        }

        $transitions.onSuccess({},  onSuccess);
    }

}());
