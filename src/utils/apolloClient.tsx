import { ApolloClient, HttpLink, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient({  
  credentials:'include',  
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    fetchOptions: {
      mode: 'no-cors'
    }
}),
 
  cache:new InMemoryCache(),
  
})

export default client




/*
 * For server components
 */
