var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalMongoose = require('passport-local-mongoose');

var Department = new Schema({
	name: String,
	company: {type: Schema.Types.ObjectId, ref: 'Company'}
});

Department.plugin(passportLocalMongoose);

module.exports = mongoose.model('Department', Department);