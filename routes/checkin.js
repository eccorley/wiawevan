var User = require('../models/user');
var Task = require('../models/task');
var router = require('express').Router();


router.post('/checkin', function(req, res) {
    Task.findOne({name: req.body.name.toLowerCase()}, function (err, task) {
        if (err) res.status(500).json({message: 'DB Error'});
        User.findOne({username: req.user.username}, function (err, user) {
            if (err) res.status(500).json({message: 'DB Error'});
            user.log.push({task: task, hours: req.body.hours, timestamp: req.body.timestamp});
            user.save();
            task.log.push({employee: req.user, hours: req.body.hours, timestamp: req.body.timestamp });
            task.save();
            res.status(200).json({message: 'Check in Complete'});
        });
    });
});

module.exports = router;