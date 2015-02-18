var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalMongoose = require('passport-local-mongoose');

var Task = new Schema({
	name: String,
	hours: Number,
	company: {type: Schema.Types.ObjectId, ref: 'Company'},
	department: {type: Schema.Types.ObjectId, ref: 'Department'},
    employees: [{type: Schema.Types.ObjectId, ref: 'User'}],
	log: [{
        employee: {type: Schema.Types.ObjectId, ref: 'User'},
        hours: Number,
        timestamp: Date
    }]
});

Task.plugin(passportLocalMongoose);

module.exports = mongoose.model('Task', Task);