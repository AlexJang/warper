/**
 * Created by alexjag on 7/20/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new mongoose.Schema({
    team_name: String,
    wins: Number,
    losses: Number,
    gamesAhead: Number,
    _roster: [{type: Schema.Types.ObjectId, ref: 'Roster'}]
}, {timestamps: true});

mongoose.model('Team', TeamSchema);