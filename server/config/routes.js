/**
 * Created by alexjag on 7/20/16.
 */
console.log('routes');
// WE NEED TO ADD a few lines of code up here!
// What is this 'friends' object we are referencing below??

//must require the controller
var rosterController = require('../controllers/rosters.js');
var teamController = require('../controllers/teams.js');

module.exports = function(app){
    app.post('/add', function (req, res) {
        rosterController.createPlayer(req, res);
    });

    // app.get('/allPlayers', function (req, res) {
    //     rosterController.showAll(req, res);
    // });

    app.post('/addTeams', function (req, res) {
        teamController.createTeam(req, res);
    });

    app.get('/showTeams', function (req, res) {
        teamController.showTeams(req, res);
    });
};