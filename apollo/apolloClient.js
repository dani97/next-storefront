// import {
//   InMemoryCache,
//   IntrospectionFragmentMatcher,
// } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";
// import introspectionQueryResultData from "../fragmentTypes.json";
//
// const fragmentMatcher = new IntrospectionFragmentMatcher({
//   introspectionQueryResultData,
// });
//
// export default function createApolloClient(initialState, ctx) {
//   // The `ctx` (NextPageContext) will only be present on the server.
//   // use it to extract auth headers (ctx.req) or similar.
//   let link;
//   if (typeof window === "undefined") {
//     link = new HttpLink({
//       uri: process.env.MAGENTO_GRAPHQL_ENDPOINT,
//       fetch,
//     });
//   } else {
//     link = new HttpLink({
//       uri: "/api/graphql",
//       fetch,
//     });
//   }
//   return new ApolloClient({
//     ssrMode: Boolean(ctx),
//     link,
//     cache: new InMemoryCache({ fragmentMatcher }).restore(initialState),
//   });
// }

import { useMemo } from 'react';
import { ApolloClient, IntrospectionFragmentMatcher } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import introspectionQueryResultData from "../fragmentTypes.json";

let apolloClient;

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

function createApolloClient() {
    const uri = (typeof window === "undefined") ? process.env.MAGENTO_GRAPHQL_ENDPOINT: "/api/graphql";
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri,
      fetch,
    }),
    cache: new InMemoryCache({fragmentMatcher}),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
