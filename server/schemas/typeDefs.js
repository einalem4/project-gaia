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
<<<<<<< HEAD
<<<<<<< HEAD
        addEvent(eventData: String!): Event
        addComment(commentText: String!): Comment

    }
=======
        addEvent(eventData: EventInput): Event
      }
>>>>>>> 9345edf94df391689f12d167b3779756254dfc63
=======
        addEvent(input: EventInput): Event
        addComment(eventId: ID!, commentText: String!): Event
        addFriend(friendId: ID!): User
    }
>>>>>>> 66540aabe1e978132c596e3c4363205c42ab34db
`;

// export the typeDefs
module.exports = typeDefs;