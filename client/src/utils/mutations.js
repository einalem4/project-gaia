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
  mutation addEvent($eventData: String!, $name: String!, $date: String!, $time: String!, $address1: String!, $city: String!, $state: String!, $zip: String!, $description: String!) {
    addEvent(eventData: $eventData) {
      _id
      eventData
      createdAt
      username
    }
  }
`;