import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import CreateEvent from './pages/CreateEvent';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path ='/login' component={Login} />
          <Route exact path ='/signup' component={SignUp} />
          <Route exact path="/create-event" component={CreateEvent} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
