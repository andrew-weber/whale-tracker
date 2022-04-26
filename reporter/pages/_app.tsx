import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import ApolloClient from '../apollo-client'
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={ApolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  ) 
}

export default MyApp
