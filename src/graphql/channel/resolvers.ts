import id from '../general/id.resolver';
import owner from './channel.owner';
import createChannel from './mutation.create-channel';
import channels from './query.channels';

const channelResolvers = {
    Channel: {
        id,
        owner
    },
    Query: {
        channels
    },
    Mutation: {
        createChannel
    }
};

export default channelResolvers;
