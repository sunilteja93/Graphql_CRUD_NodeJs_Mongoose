export default `
type Query {
    getOrganization(_id: ID!): Organizations
    allOrganizations: [Organizations]

    getLocation(_id: ID!): Locations
    allLocations: [Locations]

    getEvent(_id: ID!): Events
    allEvents: [Events]
   }
`