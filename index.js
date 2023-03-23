import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloServer, gql } from 'apollo-server';
import { ApolloClient, 
  InMemoryCache, 
  ApolloProvider, gql } from '@apollo/client';
import App from './App';

import { Provider } from 'react-redux';
import store from './utils/store';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
