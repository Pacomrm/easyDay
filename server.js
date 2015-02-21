
/**
 * @name EasyDay
 * @author EasyDay Team
 * @description App for companies facilities.
 * @version 0.1.1 
 */

/* Packages for our app */
var express    = require('express');		
var app        = express(); 				
var bodyParser = require('body-parser'); 	
var morgan     = require('morgan'); 		
var mongoose   = require('mongoose');
var config 	   = require('./app/config.js');
var path 	   = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Configure our app to handle CORS requests
 * Don't forget the "next()" method so we can continue with the routes!
 */
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});
app.use(morgan('dev'));

/* DB connection */
mongoose.connect(config.database); 

/** Set the static route to our public files */
app.use(express.static(__dirname + '/public'));

// API ROUTES ------------------------
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

/**
 * Main route to our app.
 * @return {[login.html]}
 * This needs to be after our api Routes.
 */
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

/**
 * Start our server.
 */
app.listen(config.port);
console.log('Magic happens on port ' + config.port);