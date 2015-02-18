var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalMongoose = require('passport-local-mongoose');

var Location = new Schema({
	name: String,
	address: String,
	city: String,
	state: String,
	zip: Number,
	company: {type: Schema.Types.ObjectId, ref: 'Company'},
	department: {type: Schema.Types.ObjectId, ref: 'Department'}
});

Location.plugin(passportLocalMongoose);

module.exports = mongoose.model('Location', Location);