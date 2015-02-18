var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalMongoose = require('passport-local-mongoose');

var Company = new Schema({
	name: String,
	address: String,
	city: String,
	zip: Number,
	phone: Number
});

Company.plugin(passportLocalMongoose);

module.exports = mongoose.model('Company', Company);