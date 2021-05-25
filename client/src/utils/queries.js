import gql from 'graphql-tag';

export const QUERY_EVENTS = gql`
  query events($username: String) {
    events(username: $username) {
      _id
      eventData
      createdAt
      username
    }
  }
`;

export const QUERY_EVENT = gql`
  query event($id: ID!) {
    event(_id: $id) {
      _id
      eventData
      createdAt
      username
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      events {
        _id
        eventData
        createdAt
    }
  }
}
`;