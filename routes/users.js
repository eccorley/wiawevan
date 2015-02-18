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
    if (err) { console.log('error while user register!', err); return next(err); }

    console.log('user registered!', req.user);

    res.status(200).json({message: 'User registered'})
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.status(200).json({message: 'Log in Complete', user: req.user})
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({message: 'Log out complete'});
});

module.exports = router;