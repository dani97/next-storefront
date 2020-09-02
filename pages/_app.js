import "../styles.css";
import React from "react";
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../lib/apolloClient'
import "react-responsive-carousel/lib/styles/carousel.min.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  const getLayout = Component.getLayout || (page => page);
  return getLayout(<ApolloProvider client={apolloClient}>
    <Component {...pageProps}/>
  </ApolloProvider>);
}
