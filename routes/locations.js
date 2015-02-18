var Location = require('../models/location');
var Department = require('../models/department');
var Company = require('../models/company');
var router = require('express').Router();

router.post('/search_locations', function(req, res) {
	Location
		.findOne({name: req.body.query.toLowerCase()})
		.populate('company')
		.populate('department', 'name')
		.exec(function (err, location) {
			if (err) res.status(500).json({message: 'DB Error'});
			if (location == null) res.status(204).json({message: 'Location not Found'});
			else res.status(200).json(location)
		});
});

router.post('/add_location', function(req, res, next) {
	for (var prop in req.body) {
		console.log(typeof req.body[prop]);
		req.body[prop] = typeof req.body[prop] === 'string' ? req.body[prop].toLowerCase() : req.body[prop];
	}
	Company.find({'name': req.body.company}, function(err, company) {
		if (err) res.status(500).json({message: 'DB Error'});
		Department.find({'name': req.body.department}, function(err, department) {
			if (err) res.status(500).json({message: 'DB Error'});
			new Location({
				name: req.body.name,
				address: req.body.address,
				city: req.body.city,
				state: req.body.state,
				zip: req.body.zip,
				company: company[0],
				department: department[0]
			}).save();
			res.status(200).json({message: 'Location Added'})
		})
	});
});

module.exports = router;