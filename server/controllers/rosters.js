/**
 * Created by alexjag on 7/20/16.
 */
console.log('rosters controller');


var mongoose = require('mongoose');
var Roster = mongoose.model('Roster');


function RosterController() {
    this.createPlayer = function (req, res) {
        var rosterPlayer = new Roster({name: req.body.name,
            age: req.body.age,
            battingAvg: req.body.battingAvg,
            fieldingAvg: req.body.fieldingAvg,
            war: req.body.war});
        rosterPlayer.save(function(err) {
            if (err) {
                console.log('you are in the create function of rosters');
            } else {
                var addedMessage = 'you have added' + rosterPlayer;
                console.log(addedMessage);
                res.json({messsage: addedMessage});
            }

        });
    };


    // TODO: THIS GOES INTO TEAM DATATABLE
    // this.showRoster = function (req, res) {
    //     Roster.find({}, function (err, teamRoster) {
    //         if(err){
    //             console.log('you have an error at server/controller/rosters showAll() function');
    //         }else{
    //             res.json({roster: teamRoster});
    //         }
    //     })
    // }
}

module.exports = new RosterController();