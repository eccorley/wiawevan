var User = require('../models/user');
var Task = require('../models/task');
var Department = require('../models/department');
var Company = require('../models/company');
var router = require('express').Router();

router.post('/get_tasks', function(req, res) {
	if (req.user === undefined) res.status(200).json({message: 'Must login to check in'});
    else {
		Task.find({employees: req.user}, function (err, tasks) {
			if (err) res.status(500).json({message: 'DB Error'});
			res.status(200).json(tasks);
		})
	}
});

router.post('/search_tasks', function(req, res) {
	Task
		.findOne({name: req.body.query.toLowerCase()})
		.populate('company')
		.populate('department')
		.populate({path: 'log'})
		.exec(function (err, task) {
			if (err) res.status(500).json({message: 'DB Error'});

			var opts = {
				path: 'log.employee',
				select: 'username',
				model: 'User'
			};


			if (task == null) res.status(204).json({message: 'task not Found'});
			else Task.populate(task, opts, function (err, task) {
				if (err) res.status(500).json({message: 'DB Error'});
				else res.status(200).json(task);
			})
		});
});

// TODO: check why tasks not showing up at check-in
router.post('/add_task', function(req, res, next) {
	for (var prop in req.body) {
		console.log(typeof req.body[prop]);
		req.body[prop] = typeof req.body[prop] === 'string' ? req.body[prop].toLowerCase() : req.body[prop];
	}
	Company.find({'name': req.body.company}, function(err, company) {
		if (err) res.status(500).json({message: 'DB Error'});
		Department.find({'name': req.body.department}, function (err, department) {
			if (err) res.status(500).json({message: 'DB Error'});
			var task = new Task({
				name: req.body.name,
				hours: req.body.hours,
				company: company[0],
				department: department[0]
			});
            task.employees.push(req.user);
            task.save();
		});
		res.status(200).json({message: 'Task Added'})
	});
});

/*
router.post('/edit_task', function(req,res) {
    // TODO: Implement adding employees to task, adding hours, etc. use req.body.type to determine actions
});
*/

module.exports = router;