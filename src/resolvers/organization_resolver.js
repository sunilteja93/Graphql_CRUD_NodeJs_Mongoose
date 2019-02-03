import  mongoose from 'mongoose';
import { Organizations } from '../mongoose_schema/organizations';

var async = require('async');

export  const organizationResolver = {
    Query : {
       async getOrganization(root, {_id}){
           return await Organizations.findById(_id).populate('loc').populate('event').exec();
       },
       async allOrganizations(){
           return await Organizations.find().populate('loc').populate('event').exec();
        }
    },
    Mutation: {
        async createOrganization(root, {input}){
            var res=await Organizations.create(input);
            return await Organizations.findById(res._id).populate('loc').populate('event').exec();
        },
        async updateOrganization(root, {input}){
            return await Organizations.findOneAndUpdate({_id:input._id},input,{new: true})
        },
        async deleteOrganization(root, {_id}){
            return await Organizations.findOneAndRemove({_id});
        }
    }
};