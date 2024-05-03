
"use client";
import '../styles/global.css';
import '../components/Navbar/Navbar.css'
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import  client from '@/utils/apolloClient';

import 'react-h5-audio-player/lib/styles.css';
import {Poppins} from '@next/font/google'

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ParallaxProvider } from 'react-scroll-parallax';
import { AppProvider } from '@/context';

const poppins = Poppins({
  subsets:["latin"],  
  variable:"--font-poppins",
  weight:['100','200','300','400','500','600','700','800','900']
})



const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={`${poppins.variable} font-sans `} style={{scrollBehavior:'smooth'}}>
    <ApolloProvider client={client}>
      <AppProvider>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </AppProvider>
    </ApolloProvider>
  </main>
);

export default MyApp;
