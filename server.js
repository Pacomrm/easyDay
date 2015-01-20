var express = require('express'),
    app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 8080;
var User = require('./app/models/user');
<<<<<<< HEAD
var login = require('login');

/*Grab info from Posts*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
/*App Config*/
=======

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

>>>>>>> 7782ff1fa28af6412de57d81cc19abf94260c166
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
    next();
});

<<<<<<< HEAD
/*Logs to console*/
app.use(morgan('dev'));

/*DB connection*/
mongoose.connect('mongodb://michael:michael1@proximus.modulusmongo.net:27017/pYd7opus');

/*Routes*/
=======
app.use(morgan('dev'));

>>>>>>> 7782ff1fa28af6412de57d81cc19abf94260c166
app.get('/', function(req,res){
   res.send('Home');
});

<<<<<<< HEAD
app.render('email', function(err, html){
  // ...
});

//app.set('title','login');
/*
app.get('/login', function(req,res){
        res.render('login')
        console.log("View login");
});*/
    

var apiRouter = express.Router();
/*Loggin function validation*/
apiRouter.use(function(req,res, next){

    console.log('autenticacion users');
    next();
});

apiRouter.get('/', function(req,res){
    res.json({message: 'Welcome to our api!'});
    
});

apiRouter.route('/users')
    .post(function(req, res){
    
    var user = new User();
    user.name = req.body.name;
    user.username = req.body.username;
    user.password = req.body.password;
    
    user.save(function(err){
        console.log('Inside SAVE');
        if(err){
            if(err.code == 11000){
                return res.json({ success: false, message: 'A user with that already exists.'});
            }else
            return res.send(err);
        }
        res.json({message: 'User created!'});
    });
    
})
	// get all the users (accessed at GET http://localhost:8080/api/users)
	.get(function(req, res) {
		User.find(function(err, users) {
			if (err) return res.send(err);

			// return the users
			res.json(users);
		});
	});

// on routes that end in /users/:user_id
// ----------------------------------------------------
/*apiRouter.route('/users/:user_id')

	// get the user with that id
	.get(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {
			if (err) return res.send(err);

			// return that user
			res.json(user);
		});
	})

	// update the user with this id
	.put(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {

			if (err) return res.send(err);

			// set the new user information if it exists in the request
			if (req.body.name) user.name = req.body.name;
			if (req.body.username) user.username = req.body.username;
			if (req.body.password) user.password = req.body.password;

			// save the user
			user.save(function(err) {
				if (err) return res.send(err);

				// return a message
				res.json({ message: 'User updated!' });
			});

		});
	})

	// delete the user with this id
	.delete(function(req, res) {
		User.remove({
			_id: req.params.user_id
		}, function(err, user) {
			if (err) return res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});
*/
=======
var apiRouter = express.Router();

apiRouter.get('/', function(req,res){
   res.send('Im a user');
});

app.route('/login')
.get(function(req,res){
    res.send('starting login form');
});

//mongoose.connect();
>>>>>>> 7782ff1fa28af6412de57d81cc19abf94260c166

app.listen(port);
app.use('/api',apiRouter);