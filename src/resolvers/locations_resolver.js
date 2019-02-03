import mongoose from 'mongoose';
import Locations from '../mongoose_schema/locations';
import API_KEY from '../../config/api_config';

const googleMapsClient = require('@google/maps').createClient({
    key: API_KEY,
    Promise: Promise
});

export const locationsResolver = {
    Query: {
        async getLocation(root, { _id }) {
            return await Locations.findById(_id).populate('org').exec();
        },
        async allLocations() {
            var locs = await Locations.find().populate('org').exec();
            console.log(locs);
            return locs;
        }
    },
    Mutation: {
        async createLocation(root, { input }) {
            const result = await googleMapsClient.geocode({ address: input.address })
            await result.asPromise()
                .then((response) => {
                    input['latitude'] = response.json.results[0].geometry.location.lat
                    input['longitude'] = response.json.results[0].geometry.location.lng
                })
                .catch((err) => {
                    console.log(err);
                });

            var res = await Locations.create(input);
            return await Locations.findById(res._id).populate('org').exec();
        },
        async updateLocation(root, { input }) {
            return await Locations.findOneAndUpdate({ _id: input._id }, input, { new: true });
        },
        async deleteLocation(root, { _id }) {
            return await Locations.findOneAndRemove({ _id });
        }

    }
};