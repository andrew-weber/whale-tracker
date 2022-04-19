import { gql, ApolloServer } from 'apollo-server-micro';
import resolvers from './resolvers'

const typeDefs = gql`
  type Position {
    id: ID
    tweet_id: String
    ticker: String
    expiry: String
    option_type: String
    strike_price: String
    # tweeted_at: DateTime
  }

  type Query {
    getPositions: [Position]
  }
`;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default async function handler(req: any, res: any) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
