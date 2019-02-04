import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import { organizationResolver } from '../resolvers/organization_resolver';
import { locationsResolver } from '../resolvers/locations_resolver';
import { eventsResolver } from '../resolvers/events_resolver';
import  Mutation from './mutations';
import Query from './queries';

const typeDefs = `

 type Organizations {
  _id: ID!
  name: String!
  createdAt: String
  updatedAt: String
  loc: Locations
  eve: Events
 }

 type Locations {
  _id: ID
  name: String
  address: String
  latitude: String
  longitude: String
  createdAt: String
  updatedAt: String
  org : Organizations
 }

 type Events {
  _id: ID
  name: String!
  date: String!
  time: String!
  description: String
  createdAt: String
  updatedAt: String
  org : Organizations
 }

${Query}

 input OrganizationsInput {
  _id: ID
  name: String!
  createdAt: String
  updatedAt: String
  loc: ID
  eve: ID
 }

 input LocationsInput{
  _id: ID
  name: String
  address: String
  latitude: String
  longitude: String
  org: ID
 }

 input EventsInput {
  _id: ID
  name: String!
  date: String
  time: String
  description: String
  createdAt: String
  updatedAt: String
  org: ID
 }

${Mutation}
`;

const schema = makeExecutableSchema({
	typeDefs,
	resolvers: merge(organizationResolver, locationsResolver, eventsResolver),
});

export default schema;