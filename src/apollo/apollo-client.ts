import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const BASE_URI = import.meta.env.VITE_BASE_URL || "http://192.168.66.99:4000";

const httpLink = createHttpLink({
  uri: BASE_URI,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('ERP_TOKEN');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
