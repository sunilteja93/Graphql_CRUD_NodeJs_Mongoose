import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LocationSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    address: {type: String},
    latitude: {type: String},
    longitude: {type: String},
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
}, {collection: 'Location'});

module.exports = mongoose.model('locations', LocationSchema);


