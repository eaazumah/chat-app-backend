import { makeExecutableSchema } from '@graphql-tools/schema';
import channelResolvers from './channel/resolvers';
import channelTypeDefs from './channel/types';
import { GeneralResolvers, GeneralTypeDefs } from './general';
import messagesResolvers from './message/resolvers';
import messageTypeDefs from './message/types';
import usersResolvers from './user/resolvers';
import userTypeDefs from './user/types';

const typeDefs = [GeneralTypeDefs, userTypeDefs, channelTypeDefs, messageTypeDefs];

const resolvers = [GeneralResolvers, usersResolvers, channelResolvers, messagesResolvers];

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
