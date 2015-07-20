// This is the main file of our chat app. It initializes a new
// express.js instance, requires the config and routes files
// and listens on a port. Start the application by running
// 'node app.js' in your terminal


var express = require('express'),
        app = express();

// This is needed if the app is run on heroku:

var port = process.env.PORT || 8080;

// Initialize a new socket.io object. It is bound to
// the express app, which allows them to coexist.

// var io = require('socket.io').listen(app.listen(port), '46.101.34.63');
var socketio = require('socket.io');
var server = app.listen(port, '46.101.34.63');
var io = require('socket.io').listen(server);

// Require the configuration and the routes files, and pass
// the app and io as arguments to the returned functions.

require('./config')(app, io);
require('./routes')(app, io);

console.log('Your application is running on http://46.101.34.63:' + port);
