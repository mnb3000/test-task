import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';
import { AppLayout } from './components/AppLayout';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppLayout />
    </ApolloProvider>
  );
}

export default App;
