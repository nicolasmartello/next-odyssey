import type { AppProps } from 'next/app'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import GlobalStyles from '../styles/global';

const client = new ApolloClient({
  uri: process.env.apiBaseUri,
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  return (  
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
