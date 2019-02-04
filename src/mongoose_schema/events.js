import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EventSchema = new Schema({

	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
	},
	time: {type: String},
	description: {type: String},
	org: {
		type: Schema.Types.ObjectId,
		ref: 'organizations'
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
}, {collection: 'Event'});

module.exports = mongoose.model('events', EventSchema);

