import { execute, GraphQLSchema, subscribe } from 'graphql';
import { Server } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import createLoaders from '../loaders';
import { createApolloServer } from './apollo.server';

const onConnect = () => {
    const loaders = createLoaders();
    return { loaders };
};

const createSubscriptionServer = ({ httpServer, schema }: { httpServer: Server; schema: GraphQLSchema }) => {
    const server = createApolloServer({
        schema
    });

    const subscriptionServer = SubscriptionServer.create(
        {
            schema,
            execute,
            subscribe,
            onConnect
        },
        {
            server: httpServer,
            path: server.graphqlPath
        }
    );

    return subscriptionServer;
};

export default createSubscriptionServer;
