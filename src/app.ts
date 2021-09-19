import { createServer } from 'http';
import 'reflect-metadata';
import startApolloServer from './server/apollo.server';
import createExpressApp from './server/create.express.app';

const startApp = async () => {
    const PORT = process.env.PORT || 8000;

    const app = createExpressApp();
    const httpServer = createServer(app);

    const server = await startApolloServer(app);

    app.use((_req, res) => {
        res.status(404).send('Unable to find the requested resource!');
    });

    httpServer.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
        // console.log(`🚀 Subscriptions ready at ws://localhost:${process.env.PORT}${server.subscriptionsPath}`);
    });
};

startApp();
