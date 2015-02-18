var Company = require('../models/company');
var router = require('express').Router();

router.post('/search_companies', function(req, res) {
	Company.find({'name': req.body.query.toLowerCase()}, function (err, company) {
		if (err) res.status(500).json({message: 'DB Error'});
		if (company[0] == undefined) res.status(204).json({message: 'Company not Found'});
		else res.status(200).json(company)
	});
});

router.post('/add_company', function(req, res, next) {
	for (var prop in req.body) {
		console.log(typeof req.body[prop]);
		req.body[prop] = typeof req.body[prop] === 'string' ? req.body[prop].toLowerCase() : req.body[prop];
	}
	new Company({
		name: req.body.name,
		address: req.body.address,
		city: req.body.city,
		zip: req.body.zip,
		phone: req.body.phone
	}).save();
	res.status(200).json({message: 'Company Added'})
});

module.exports = router;