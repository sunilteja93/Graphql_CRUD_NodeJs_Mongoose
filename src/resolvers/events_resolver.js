import Events from '../mongoose_schema/events';

export const eventsResolver = {
	Query : {
		async getEvent(root, {_id}){
			return await Events.findById(_id).populate('org');
		},
		async allEvents(){
			const locs = await (Events.find().populate('org')).exec();
			return locs			
		}
	},
	Mutation: {
		async createEvent(root, {input}){
			const res = await Events.create(input);
			return await Events.findById(res._id).populate('org').exec();
		},
		async updateEvent(root, {input}){
			return await Events.findOneAndUpdate(input,{new: true}).populate('org').exec();
		},
		async deleteEvent(root, {_id}){
			return await Events.findOneAndRemove({_id});
		}
	}
};
