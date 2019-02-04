import  mongoose from 'mongoose';


const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({

	name: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	loc: {
		type: Schema.Types.ObjectId,
		ref: 'locations'
	},
	eve: {
		type: Schema.Types.ObjectId,
		ref: 'events'
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
}, {collection: 'Organisation'});

module.exports = mongoose.model('organizations', OrganizationSchema);