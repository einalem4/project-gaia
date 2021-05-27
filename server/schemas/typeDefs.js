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

    type Event {
        _id: ID
        eventData: String
        createdAt: String
        username: String
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
        addEvent(eventData: String!): Event
        addComment(commentText: String!): Comment

    }
`;

// export the typeDefs
module.exports = typeDefs;