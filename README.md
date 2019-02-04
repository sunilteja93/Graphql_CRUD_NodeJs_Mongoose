# Graphql_CRUD_NodeJs_Mongoose

## Introduction:
This Graphql API interacts with NodeJs to perform various CRUD operations on Mongoose

## Getting Started:
1. Clone or download the project first
2. Install the dependencies using ```npm install```
3. Generate a google API key to fetch latitude and logitude for a given address.
   >Ref: https://developers.google.com/maps/documentation/javascript/get-api-key
4. API key can be configured in the ```/config/api_config.js```   
5. MongoDB connectivity can be modified in ```index.js/mongoose.connect('mongodb://localhost/gql_demo_db');```
6. Once the above steps are accomplished next run the project using ```npm start```


## CRUD Operation Queries:
```
mutation {
  createOrganization(input: {
    name : "Amazon"
  })
  {
    _id
    name
    createdAt
    updatedAt
  }
}


mutation {
  createLocation(input: {
    name: "550 Moreland Way",
    address: "550 Moreland Way, Sant Clara , Califronia, 95054",
    org: "5c57960d1f3213383cd03bd3"
  }) {
    _id
    name
    address
    latitude
    longitude
    org {
      _id
      name
      createdAt
    }

  }
}


mutation {
  createEvent( input: {
    name :"SALE",
    date : "10-10-2019"
    time :"23:00"
    description:"SALE CAMPAIGN",
    org:"5c57960d1f3213383cd03bd3"
    
    
  })
  {
    _id
    name
    createdAt
    updatedAt
    org{
      _id
      name
      createdAt
      updatedAt
    }
   
  }
}


query{
  allOrganizations{
    _id
    name
    createdAt
    updatedAt
    loc{
      _id
      name
      latitude
      longitude
      address
    }
    event{
      name
    }
  }
}


query{
 allLocations {
  name
  address
  latitude
  longitude
  org{
    _id
    name
    createdAt
    updatedAt
  }
}
}


query{
  allEvents{
    _id,
    name,
    description,
    createdAt,
    updatedAt,
    org{
      _id
      name

    }
  }
}


mutation {
  updateOrganization(input: 
    {
      _id: "5c57960d1f3213383cd03bd3", 
      name: "Amazon Labs"
    }) 
  {
    _id
    name
    createdAt
    updatedAt
  }
}


mutation {
  updateLocation(input: 
    {
      _id: "6c53b8486f5bbb6eb08a0870", 
      name: "Starbucks - Cooper Square - West"
      address: "13-25 Astor Place, New York, NY 10003"
    }) 
  {
    _id
    name
    address
    latitude
    longitude
  }
}


mutation {
  updateEvent(input: 
    {
      _id : "5c57a02d0c0a1d188c89aa07",
      name : "SALE",
    })
  
  {
    _id
    name
    description
    org{
      _id
      name
    }

  }
}


query{
getLocation(
  _id: "6c53b8486f5bbb6eb08a0870")
  {
    _id
    name
    latitude
    longitude
    org{
      _id
      name
      createdAt
    }
  }
}


mutation {
  deleteLocation ( _id: "6c53b8486f5bbb6eb08a0870") {
    _id
    name    
  }   
}


mutation {
  deleteOrganization ( _id: "5c579d5a819785234068c0a1") {
    _id
    name    
  }   
}


mutation {
  deleteEvent ( _id: "5c57a02d0c0a1d188c89aa07") {
    _id
    name    
  }   
}

```
