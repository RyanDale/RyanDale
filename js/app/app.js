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
        console.log('c');

        /*
        $mdThemingProvider.definePalette('primary', SRP_THEME.THEMES.primary);
        $mdThemingProvider.definePalette('secondary', SRP_THEME.THEMES.secondary);
        $mdThemingProvider.theme('qbw')
            .primaryPalette('primary')
            .accentPalette('secondary');

        $mdThemingProvider.definePalette('quotebooksBlue', SRP_THEME.THEMES.primaryAlt);
        $mdThemingProvider.definePalette('pricebooksGreen', SRP_THEME.THEMES.secondaryAlt);
        $mdThemingProvider.theme('default')
            .primaryPalette('quotebooksBlue')
            .accentPalette('pricebooksGreen');
        */

        /*
        $urlRouterProvider.otherwise(function($injector, $location){
            var state = $injector.get('$state');
            state.go('404');
            return $location.path();
        });

        $urlRouterProvider.rule(function ($injector, $location) {
            var path = $location.url();

            // check to see if the path already has a slash where it should be
            if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
                return;
            }

            if (path.indexOf('?') > -1) {
                return path.replace('?', '/?');
            }

            return path + '/';
        });
        */
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'js/app/home/home.html'
        }).state('about', {
            url: '/about',
            controller: 'AboutController',
            templateUrl: 'js/app/about/about.html'
        }).state('resources', {
            url: '/resources',
            controller: 'ResourcesController',
            templateUrl: 'js/app/resources/resources.html'
        }).state('article', {
            url: '/article/',
            controller: 'ArticleController',
            templateUrl: 'js/app/article/article.html'
        });
    }

    /* @ngInject */
    function run($window, /*mixpanelService,*/ $state, /*routerHelper, */ $timeout, $rootScope, $transitions) {
        /* @ngInject */
        function onSuccess($transition$) {
            let routeName = $transition$.to().name,
                fromState = $transition$.from(),
                fromRouteName = fromState.name;
            $rootScope.currentNavItem = $state.current.name.split('.')[0] || 'home';
            /*mixpanelService.track('routeChange', {
                to: routeName,
                from: fromRouteName
            });*/
            if (fromState) {
                $window.scrollTo(0, 0);
            }
        }

        $transitions.onSuccess({},  onSuccess);
    }

}());
