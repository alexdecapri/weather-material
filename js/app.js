var app = angular.module('weatherMaterial', ['ui.router', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('search', {
      url:'/search',
      templateUrl: '/views/search/searchTmpl.html',
      controller: 'searchCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/views/about/aboutTmpl.html',
      controller: 'aboutCtrl'
    })

  $urlRouterProvider
    .otherwise('/');

});
