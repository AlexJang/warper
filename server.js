/**
 * Created by alexjag on 7/19/16.
 */
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client'))); //connect the factories to server controllers and routes
app.use(express.static(path.join(__dirname, './bower_components'))); //connect the factories to server controllers and routes
console.log(__dirname);


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function () {
    console.log('listening to port 8000');
});