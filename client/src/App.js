import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';

import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

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
<<<<<<< HEAD
        <Switch>
          <Route exact path ='/login' component={Login} />
          <Route exact path ='/signup' component={SignUp} />
          <Route exact path="/create-event" component={CreateEvent} />
        </Switch>
=======
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/create-event" component={CreateEvent} />
            </Switch>
          </main>
        </div>
>>>>>>> 7738a6f83f0876f592962b39ebf1f2533ebe2b12
      </Router>
    </ApolloProvider>
  );
}

export default App;
