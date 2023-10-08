import '../styles/global.css';
import '../components/Navbar/Navbar.css'
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '@/utils/apolloClient';

const MyApp = ({ Component, pageProps }: AppProps) => (
  
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default MyApp;
