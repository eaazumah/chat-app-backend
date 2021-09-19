import { makeExecutableSchema } from '@graphql-tools/schema';
import { GeneralResolvers, GeneralTypeDefs } from './general';

const typeDefs = [GeneralTypeDefs];

const resolvers = [GeneralResolvers];

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
