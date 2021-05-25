import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Header from './components/Header';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
<<<<<<< HEAD
=======
import Login from './pages/Login';
import SignUp from './pages/SignUp';
>>>>>>> be546c6d469d07ffb29649bfcf4755b506b3a38d

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
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/create-event" component={CreateEvent} />
              <Route exact path ='/login' component={Login} />
              <Route exact path ='/signup' component={SignUp} />
            </Switch>
          </main>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
