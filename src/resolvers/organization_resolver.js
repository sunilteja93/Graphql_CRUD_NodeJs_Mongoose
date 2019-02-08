import Organizations from '../mongoose_schema/organizations';

export  const organizationResolver = {
	Query : {
		async getOrganization(root, {_id}){
			return await Organizations.findById(_id).populate('loc eve').exec();
		},
		async allOrganizations(){
			return await Organizations.find().populate('loc eve').exec();
		}
	},
	Mutation: {
		async createOrganization(root, {input}){
			const res=await Organizations.create(input);
			return await Organizations.findById(res._id).populate('loc').populate('eve').exec();
		},
		async updateOrganization(root, {input}){
			return await Organizations.findOneAndUpdate(input,{new: true});
		},
		async deleteOrganization(root, {_id}){
			return await Organizations.findOneAndRemove({_id});
		}
	}
};
