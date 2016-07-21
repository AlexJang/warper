/**
 * Created by alexjag on 7/20/16.
 */
warperApp.factory('teamFactory', function ($http) {
    var updateTeamList = [];
    var factory = {};

    factory.addTeamToList = function (teamInfo) {
        $http.post('/addTeams', teamInfo).then(function (addedInfo) {
            console.log(addedInfo.data);
            updateTeamList.push(addedInfo.data);

        });
    };

    factory.showAllTeams = function (callback) {
        $http.get('/showTeams').then(function (allTeams) {
            updateTeamList = allTeams.data;
            console.log(updateTeamList);
            callback(updateTeamList);
        });
    };
    return factory;
});