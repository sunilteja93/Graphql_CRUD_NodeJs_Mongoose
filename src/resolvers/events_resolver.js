import  mongoose from 'mongoose';
import Events from '../mongoose_schema/events';

var async = require('async');

export const eventsResolver = {
    Query : {
       async getEvent(root, {_id}){
           return await Events.findById(_id).populate('org');
       },
       async allEvents(){
           var locs = await Events.find().populate('org').exec();
           console.log(locs);
           return locs;
        }
    },
    Mutation: {
        async createEvent(root, {input}){
            var res=await Events.create(input);
            return await Events.findById(res._id).populate('org').exec();
        },
        async updateEvent(root, {input}){
            return await Events.findOneAndUpdate({_id:input._id},input,{new: true});
        },
        async deleteEvent(root, {_id}){
            return await Events.findOneAndRemove({_id});
        }
    }
};