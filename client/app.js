/**
 * Created by alexjag on 7/19/16.
 */
var warperApp = angular.module('WarperApp', ['ngRoute']);
warperApp.config(function ($routeProvider) {
    $routeProvider
        //
        .when('/', {
            templateUrl: 'partials/homePartial.html',
            controller: 'homeController'
        })
        .when('/teams', {
            templateUrl: 'partials/teamPartial.html',
            controller: 'TeamController'
        })
        .when('/roster', {
            templateUrl: 'partials/rosterPartial.html',
            controller: 'RosterController'
        })
        .otherwise({
            redirectTo: '/'
        })
});