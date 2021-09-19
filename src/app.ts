import { createServer } from 'http';
import 'reflect-metadata';
import startApolloServer from './server/apollo.server';
import createApp from './server/create.app';

const startApp = async () => {
    const app = createApp();

    const httpServer = createServer(app);

    const server = await startApolloServer(app);

    httpServer.listen(4000, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
        // console.log(`🚀 Subscriptions ready at ws://localhost:${process.env.PORT}${server.subscriptionsPath}`);
    });
};

startApp();
