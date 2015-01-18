var express = require('express'),
    app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 8080;
var User = require('./app/models/user');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
    next();
});

app.use(morgan('dev'));

app.get('/', function(req,res){
   res.send('Home');
});

var apiRouter = express.Router();

apiRouter.get('/', function(req,res){
   res.send('Im a user');
});

app.route('/login')
.get(function(req,res){
    res.send('starting login form');
});

//mongoose.connect();

app.listen(port);
app.use('/api',apiRouter);