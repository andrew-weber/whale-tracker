import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log('here', process.env.PORT)
const client = new ApolloClient({
    uri: `http://localhost:${process.env.PORT || '1337'}/api/graphql`,
    cache: new InMemoryCache(),
});

export default client;
