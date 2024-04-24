// import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// const client = new ApolloClient({
//   uri:process.env.NEXT_PUBLIC_GRAPHQL_URL,
//   credentials:'include',  
 
//   cache:new InMemoryCache(),
  
// })

// export default client



import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { ApolloClient, HttpLink, from } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  credentials: "include",
  
});

const client = new ApolloClient({
  cache:new NextSSRInMemoryCache(),
  link:httpLink
})

export default client
/*
 * For server components
 */
