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
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {collection: 'Organisation'});


 export default  mongoose.model('organizations', OrganizationSchema);

//module.exports = mongoose.model('organizations', OrganizationSchema);