import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cloob78ungntd01t74tszhc5k/master',
  cache: new InMemoryCache(),
})
