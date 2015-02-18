var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
	name: String,
	username: String,
	password: String,
    phone: Number,
    log: [{
        task: {type: Schema.Types.ObjectId, ref: 'Task'},
        hours: Number,
        timestamp: Date
    }],
    availability: [{
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String
    }]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);