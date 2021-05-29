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
  mutation addEvent($eventData: EventInput!) {
    addEvent(eventData: $eventData) {
      _id
      createdAt
      name
      date
      time
      address1
      city
      state
      zip
      description
    }
  }
`;

export const ADD_COMMENT = gql`
mutation addComment($commentText: String!) {
  addComment(commentText: $commentText) {
      _id
      username
      commentText
      createdAt
    }
  }
`;