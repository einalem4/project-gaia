import gql from 'graphql-tag';

export const QUERY_EVENTS = gql`
  query events($eventData: String!, $name: String!, $date: String!, $time: String!, $address1: String!, $address2: String!, $city: String!, $state: String!, $zip: String!, $description: String!) {
    events(eventData: $eventData) {
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