/**
 * Created by alexjag on 7/20/16.
 */
console.log('teams controller');

var mongoose = require('mongoose');
var Team = mongoose.model('Team');

function TeamController(){
    this.createTeam = function (req, res) {
        var teamName = new Team({
            team_name: req.body.teamName,
            wins: req.body.wins,
            losses: req.body.losses,
            gamesAhead: req.body.gamesAhead
        });
        teamName.save(function (err, result) {
            if(err){
                console.log('you have an error at the create team method in server/controllers/teams.js file');
            }else{
                var message = 'Team' + result + ' has been added';
                console.log(message);
                res.json(result);
            }
        });
    };
    this.showTeams = function (req, res) {
        Team.find({}, function (err, teams) {
            if(err){
                console.log('you have an error retrieving all teams in showAllTeams method in server/controllers/teams.js')
            }else{
                console.log('Got all teams' + teams);
                res.json(teams);
            }
        });
    };
}

module.exports = new TeamController();