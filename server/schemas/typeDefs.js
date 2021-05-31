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
        friends: [User]
        friendCount: Int
        image: String
    }
    input EventInput {
        name: String!
        date: String!
        time: String!
        address: String!
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
        address: String!
        city: String!
        state: String!
        zip: String!
        description: String!
        username: String
        comments: [Comment]
        image: String
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
        users: [User]
        user(username: String!): User
        events: [Event]
        userEvents(username: String!): [Event]
        singleEvent(_id: ID!): Event
        searchEvents(city: String!): [Event]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addEvent(input: EventInput): Event
        addComment(eventId: ID!, commentText: String!): Event
        addFriend(friendId: ID!): User
    }
`;
// export the typeDefs
module.exports = typeDefs;