import id from '../general/id.resolver';
import createChannel from './mutation.create-channel';
import channels from './query.channels';

const channelResolvers = {
    Channel: {
        id
    },
    Query: {
        channels
    },
    Mutation: {
        createChannel
    }
};

export default channelResolvers;
