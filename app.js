'use strict';

// Setup Initial
var http	= require('http'),
	path	= require('path'),
	express = require('express'),
	exphbs	= require('express-handlebars'),
	morgan	= require('morgan');

// Initialize expressJS
var app 	= express();

// Setup Morgan - Logger
app.use(morgan('combined'));

// Express-Handlebars setup
// app.use('views',path.join(__dirname,'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Static File Enable
app.use(express.static(path.join(__dirname,'public')));

// Routing
app.get('/', function(req, res) {
	res.render('home');
});


// Better usage of app/http
var server = http.createServer(app);
server.listen(3000, function() {
	console.log("Server Started on: %s:%s",this.address().address,this.address().port);
});
