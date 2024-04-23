import '../styles/global.css';
import '../components/Navbar/Navbar.css'
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '@/utils/apolloClient';

import 'react-h5-audio-player/lib/styles.css';


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  
  <ApolloProvider client={client}>

      <Component {...pageProps} />
  
  </ApolloProvider>
);

export default MyApp;
