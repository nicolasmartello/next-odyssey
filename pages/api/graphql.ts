import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import TrackTypeDefs  from '../../graphql/schemas/track-schemas';
import TrackResolvers from '../../graphql/resolvers/track-resolvers';
import TrackApi from '../../graphql/datasources/track-api';

const cors = Cors();
const apolloServer = new ApolloServer({
  typeDefs: [TrackTypeDefs],
  resolvers: [TrackResolvers],
  dataSources: () => ({
    trackAPI: new TrackApi()
  })
})
const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};