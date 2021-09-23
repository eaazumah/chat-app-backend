import { ApolloServer } from 'apollo-server-express';
import { execute, GraphQLSchema, subscribe } from 'graphql';
import { Server } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import createLoaders from '../loaders';

const onConnect = () => {
    const loaders = createLoaders();
    return { loaders };
};

const createSubscriptionServer = ({ httpServer, schema }: { httpServer: Server; schema: GraphQLSchema }) => {
    const server = new ApolloServer({
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
