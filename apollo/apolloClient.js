import { ApolloClient } from "apollo-client";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import introspectionQueryResultData from "../fragmentTypes.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  let link;
  if (typeof window === "undefined") {
    link = new HttpLink({
      uri: process.env.MAGENTO_GRAPHQL_ENDPOINT,
      fetch,
    });
  } else {
    link = new HttpLink({
      uri: "/api/graphql",
      fetch,
    });
  }
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link,
    cache: new InMemoryCache({ fragmentMatcher }).restore(initialState),
  });
}
