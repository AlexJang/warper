/**
 * Created by alexjag on 7/19/16.
 */
warperApp.controller('RosterController', function ($scope, rosterFactory) {

    $scope.updatedRoster = [];
    $scope.orderOptions = ['name', 'age', 'battingAvg', 'fieldingAvg', 'war'];
    $scope.orderBySpecificOption = function(){
        $scope.reverseOrder = true;
        $scope.sortingOption = $scope.selectOption;
    };

    $scope.addNewPlayerToRoster = function () {
        console.log($scope.newPlayerInfo);
        rosterFactory.addPlayer($scope.newPlayerInfo);
    };

    //TODO: get roster of specific team_id (pass as parameter)
    // $scope.updatedRoster = rosterFactory.getRosterList(function (rosterData) {
    //     $scope.updatedRoster = rosterData;
    // });



});