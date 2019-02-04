//Mutations for Update, Delete and Create Operations
export default `
type Mutation {
    createLocation(input: LocationsInput) : Locations
    updateLocation(input: LocationsInput): Locations
    deleteLocation(_id: ID!) : Locations

    createOrganization(input: OrganizationsInput) : Organizations
    updateOrganization(input: OrganizationsInput): Organizations
    deleteOrganization(_id: ID!) : Organizations

    createEvent(input: EventsInput) : Events
    updateEvent(input: EventsInput): Events
    deleteEvent(_id: ID!) : Events
   }
`;