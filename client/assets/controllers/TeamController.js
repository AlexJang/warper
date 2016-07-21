/**
 * Created by alexjag on 7/20/16.
 */
warperApp.controller('TeamController', function ($scope, teamFactory) {
    $scope.orderOptions = ['Name', 'Wins', 'Losses', 'Games Ahead'];

    $scope.orderTeamBySpecificOption = function () {
        $scope.reverseTeamOrder = true;
        $scope.sortingTeamOption = $scope.selectOption;
    };

    $scope.addNewTeam = function () {
        //TODO: convert team list from the passed pack team list
        teamFactory.addTeamToList($scope.newTeamInfo);
    };

    teamFactory.showAllTeams(function (teamData) {
        $scope.teamList = teamData;
        console.log($scope.teamList);
    });
});