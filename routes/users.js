var passport = require('passport');
var User = require('../models/user');
var router = require('express').Router();

router.get('/', function(req, res) {
  res.render('index', { user: req.user });
});

router.post('/search_employees', function(req, res) {
  User
    .findOne({name: req.body.query})
    .exec(function (err, user) {
		  if (err) res.status(204).json({message: "employee not found"});
		  if (user !== null) {
			  var employee = {
				  name: user.name,
				  email: user.username
			  };
		    res.status(200).json(employee)
		  }
      else res.status(204).json({message: 'Employee not Found'});
    });
});

router.post('/register', function(req, res, next) {
  console.log('registering user');
  User.register(new User({ name: req.body.name, username: req.body.username, phone: req.body.phone }), req.body.password, function(err) {
    if (err) {
      console.log('Error During Registration', err);
      res.status(409).json({message: err.message});
    } else {
      console.log('user registered!');
      var user = {
        name: req.body.name,
        username: req.body.username,
        phone: req.body.phone
      };
      res.status(200).json({message: 'User registered', user: user});
    }
  });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.send({ success : false, message : 'authentication failed'});
    }
    return res.send({ success : true, message : 'authentication succeeded', user: req.user });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({message: 'Log out complete'});
});

module.exports = router;