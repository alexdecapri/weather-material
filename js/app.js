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

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('lime');
})

// app.config(function ($mdThemingProvider) {
//     var customPrimary = {
//         '50': '#6094ee',
//         '100': '#4984eb',
//         '200': '#3275e9',
//         '300': '#1b65e6',
//         '400': '#165bd1',
//         '500': '#1451ba',
//         '600': '#1247a3',
//         '700': '#0f3d8c',
//         '800': '#0d3375',
//         '900': '#0a295e',
//         'A100': '#77a3f0',
//         'A200': '#8eb3f3',
//         'A400': '#a5c2f5',
//         'A700': '#081f47'
//     };
//     $mdThemingProvider
//         .definePalette('customPrimary',
//                         customPrimary);
//
//     var customAccent = {
//         '50': '#000a08',
//         '100': '#00231d',
//         '200': '#003d31',
//         '300': '#005646',
//         '400': '#00705a',
//         '500': '#00896f',
//         '600': '#00bc97',
//         '700': '#00d6ac',
//         '800': '#00efc0',
//         '900': '#0affcf',
//         'A100': '#00bc97',
//         'A200': '#00a383',
//         'A400': '#00896f',
//         'A700': '#23ffd4'
//     };
//     $mdThemingProvider
//         .definePalette('customAccent',
//                         customAccent);
//
//     var customWarn = {
//         '50': '#e46969',
//         '100': '#e15353',
//         '200': '#dd3e3e',
//         '300': '#d92828',
//         '400': '#c52323',
//         '500': '#af1f1f',
//         '600': '#991b1b',
//         '700': '#841717',
//         '800': '#6e1313',
//         '900': '#581010',
//         'A100': '#e87f7f',
//         'A200': '#ec9494',
//         'A400': '#f0aaaa',
//         'A700': '#430c0c'
//     };
//     $mdThemingProvider
//         .definePalette('customWarn',
//                         customWarn);
//
//     var customBackground = {
//         '50': '#ffffff',
//         '100': '#ffffff',
//         '200': '#ffffff',
//         '300': '#ffffff',
//         '400': '#ffffff',
//         '500': '#ffffff',
//         '600': '#f2f2f2',
//         '700': '#e6e6e6',
//         '800': '#d9d9d9',
//         '900': '#cccccc',
//         'A100': '#ffffff',
//         'A200': '#ffffff',
//         'A400': '#ffffff',
//         'A700': '#bfbfbf'
//     };
//     $mdThemingProvider
//         .definePalette('customBackground',
//                         customBackground);
//
//    $mdThemingProvider.theme('default')
//        .primaryPalette('customPrimary')
//        .accentPalette('customAccent')
//        .warnPalette('customWarn')
//        .backgroundPalette('customBackground')
// });
