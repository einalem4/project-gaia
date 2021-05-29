import gql from 'graphql-tag';

export const QUERY_USER_EVENTS = gql`
  query userEvents($username: String) {
    userEvents(username: $username) {
      _id
      name
      date
      time
      address
      city
      state
      zip
      description
      createdAt
      username
      comments {
        _id
        createdAt
        commentText
        username
      }
    }
  }
`;

export const QUERY_SINGLE_EVENT = gql`
  query singleEvent($id: ID!) {
    singleEvent(_id: $id) {
      _id
      name
      date
      time
      address
      city
      state
      zip
      description
      createdAt
      username
      comments {
        _id
        createdAt
        commentText
        username
      }
    }
  }
`;

export const QUERY_SEARCH_EVENTS = gql`
  query searchEvents($city: String!) {
    searchEvents(city: $city) {
      _id
      name
      date
      time
      address
      city
      state
      zip
      description
      createdAt
      username
      comments {
        _id
        createdAt
        commentText
        username
      }
    }
  }
`;

export const QUERY_ALL_EVENTS = gql`
  query events {
    events {
      _id
      name
      date
      time
      address
      city
      state
      zip
      description
      createdAt
      username
      comments {
        _id
        createdAt
        commentText
        username
      }
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
        name
        date
        time
        address1
        city
        state
        zip
        description
        createdAt
        username
        comments {
          _id
          createdAt
          commentText
          username
        }
        createdAt
    }
  }
}
`;