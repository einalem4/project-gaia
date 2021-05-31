import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        }
    }
}
`;

export const ADD_EVENT = gql`
  mutation addEvent($input: EventInput) {
    addEvent(input: $input) {
      _id
      createdAt
      name
      date
      time
      address
      city
      state
      zip
      username
      description
    }
  }
`;

export const ADD_COMMENT = gql`
<<<<<<< HEAD
mutation addComment($commentText: String!) {
  addComment(commentText: $commentText) {
      _id
      username
      commentText
      createdAt
=======
mutation addComment($eventId: ID!, $commentText: String!) {
  addComment(eventId: $eventId, commentText: $commentText) {
      _id
      comments {
        _id
        commentText
        createdAt
        username
      }
  }
}
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
>>>>>>> 66540aabe1e978132c596e3c4363205c42ab34db
    }
  }
`;