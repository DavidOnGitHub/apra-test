import React from 'react';
import PhotoList from './components/PhotoList';
import { ApolloProvider } from '@apollo/client';
import { Container, Main, Header } from './App.styles';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { apiEndpoint } from './configs/appConfig';

const client = new ApolloClient({
  uri: apiEndpoint,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          photos: {
            keyArgs: false,
            merge(existing = { data: [] }, incoming) {
              return Object.assign({}, incoming, {
                data: [...existing.data, ...incoming.data],
              });
            },
          },
        },
      },
    },
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <Container>
      <Header>Photo List</Header>
      <Main>
        <PhotoList />
      </Main>
    </Container>
  </ApolloProvider>
);

export default App;
