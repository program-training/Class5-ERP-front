import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { setContext } from "@apollo/client/link/context";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const BASE_URI = import.meta.env.VITE_BASE_URL || "http://192.168.66.99:4000";

const httpLink = createHttpLink({
  uri: `http://${BASE_URI}`,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: `ws://${BASE_URI}`,
    connectionParams: {
      Authorization: localStorage.getItem("ERP_TOKEN") || '',
    },
  })
);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("ERP_TOKEN");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `${token}` : "",
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
