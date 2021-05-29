const { gql } = require('apollo-server-express');

// import the gql tagged template function
const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }

    type User {
        _id: ID
        username: String
        email: String
        events: [Event]
        eventCount: Int
    }

    input EventInput {
        name: String!
        date: String!
        time: String!
        address1: String!
        city: String!
        state: String!
        zip: String!
        description: String!
      }

      type Event {
        _id: ID
        name: String!
        date: String!
        time: String!
        address1: String!
        city: String!
        state: String!
        zip: String!
        description: String!
        createdAt: String!
      }

    type Comment {
        _id: ID
        commentText: String
        username: String
        createdAt: String
    }

    type Query {
        me: User
        events(username: String): [Event]
        event(_id: ID!): Event
      }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
<<<<<<< HEAD
        addEvent(eventData: String!): Event
        addComment(commentText: String!): Comment

    }
=======
        addEvent(eventData: EventInput): Event
      }
>>>>>>> 9345edf94df391689f12d167b3779756254dfc63
`;

// export the typeDefs
module.exports = typeDefs;