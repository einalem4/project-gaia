import gql from 'graphql-tag';

export const ADD_EVENT = gql`
  mutation addEvent($eventText: String!) {
    addEvent(eventText: $eventText) {
      _id
      eventText
      createdAt
      username
    }
  }
`;