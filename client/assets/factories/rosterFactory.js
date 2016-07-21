/**
 * Created by alexjag on 7/19/16.
 */
warperApp.factory('rosterFactory', function ($http) {
    var entireRoster = [];
    var factory = {};


    factory.addPlayer = function (playerInfo) {
        $http.post('/add', playerInfo).then(function (addedMessage) {
            console.log(addedMessage);
        });
    };

    // factory.getRosterList = function (callback) {
    //     $http.get('/allPlayers').then(function (rosterData) {
    //         console.log(rosterData);
    //         entireRoster.push(rosterData);
    //         callback(entireRoster);
    //     });
    // };

    return factory;
});




// this.showAll = function (callback) {
//     $http.get('/show').then(function (returned_roster) {
//         console.log(returned_roster.data);
//         roster = returned_roster.data;
//         callback(roster);
//     })
// }