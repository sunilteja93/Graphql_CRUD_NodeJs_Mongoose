import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EventSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    time: {type: Number},
    description: {type: Number},
    org: {
        type: Schema.Types.ObjectId,
        ref: 'organizations'
    },
    orgList: ['organizations'],
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

