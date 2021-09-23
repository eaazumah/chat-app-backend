import id from '../general/id.resolver';
import channels from './query.channels';

const channelResolvers = {
    Query: {
        channels
    },
    Mutation: {},
    Channel: {
        id
    }
};

export default channelResolvers;
