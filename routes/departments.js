var Department = require('../models/department');
var Company = require('../models/company');
var router = require('express').Router();

router.post('/search_departments', function(req, res) {
	Department
		.findOne({name: req.body.query.toLowerCase()})
		.populate('company')
		.exec(function (err, department) {
			if (err) res.status(500).json({message: 'DB Error'});
			if (department == null) res.status(204).json({message: 'Department not Found'});
			else res.status(200).json(department)
		});
});

router.post('/add_department', function(req, res, next) {
	for (var prop in req.body) {
		console.log(typeof req.body[prop]);
		req.body[prop] = typeof req.body[prop] === 'string' ? req.body[prop].toLowerCase() : req.body[prop];
	}
	Company.find({'name': req.body.company}, function(err, company) {
		if (err) res.status(500).json({message: 'DB Error'});
		new Department({
			name: req.body.name,
			company: company[0]
		}).save();
		res.status(200).json({message: 'Department Added'})
	});
});

module.exports = router;