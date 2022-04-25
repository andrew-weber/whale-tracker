import { gql, ApolloServer } from 'apollo-server-micro';
import resolvers from './resolvers'
import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
} from 'graphql-scalars';

const typeDefs = gql`
  type Position {
    id: ID
    tweet_id: String
    ticker: String
    expiry: String
    option_type: String
    strike_price: String
    underlying: String
    bid: String
    ask: String
    tweeted_at: DateTime
  }

  type Query {
    getPositions: [Position]
  }
`;

const apolloServer = new ApolloServer({
  typeDefs: [
    ...scalarTypeDefs,
    typeDefs,
  ],
  resolvers: [
    scalarResolvers,
    resolvers,
  ],
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
