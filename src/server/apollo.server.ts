import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';
import { Application } from 'express';
import depthLimit from 'graphql-depth-limit';
import schema from '../graphql/schema';
import createContext from './create.context';

const createApolloSever = (config: ApolloServerExpressConfig) => {
    const server = new ApolloServer({
        schema,
        introspection: true,
        context: createContext,
        validationRules: [depthLimit(6)],
        ...config
    });

    return server;
};

const startApolloServer = async (app: Application) => {
    const server = createApolloSever({
        schema,
        introspection: true,
        context: createContext,
        validationRules: [depthLimit(6)]
    });
    await server.start();
    server.applyMiddleware({ app });
    return server;
};

export default startApolloServer;
