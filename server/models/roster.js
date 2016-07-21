/**
 * Created by alexjag on 7/20/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RosterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    battingAvg: Number,
    fieldingAvg: Number,
    war: Number,
    _team: [{type: Schema.Types.ObjectId, ref: 'Team'}]
}, {timestamps: true});
// register the schema as a model
var Roster = mongoose.model('Roster', RosterSchema);