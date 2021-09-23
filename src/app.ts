import { createServer } from 'http';
import mongoDBConnect from './datastores/mongodb';
import schema from './graphql/schema';
import startApolloServer from './server/apollo.server';
import createExpressApp from './server/create.express.app';
import createSubscriptionServer from './server/subscription.server';
import initEnv from './services/init.env';

const startApp = async () => {
    try {
        initEnv();

        const db = await mongoDBConnect();

        const PORT = process.env.PORT || 8000;

        const app = createExpressApp();
        const httpServer = createServer(app);

        const subscriptionServer = createSubscriptionServer({ httpServer, schema });

        const server = await startApolloServer({ app, schema, subscriptionServer });

        app.use((_req, res) => {
            res.status(404).send('Unable to find the requested resource!');
        });

        httpServer.listen(PORT, () => {
            console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
            console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.graphqlPath}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startApp();
