import id from '../general/id.resolver';
import channel from './message.channel';
import sender from './message.sender';
import createMessage from './mutation.create-message';
import messages from './query.messages';
import onMessageUpdated from './subscription.on-message-updated';

const messagesResolvers = {
    Message: {
        id,
        sender,
        channel
    },
    Query: {
        messages
    },
    Mutation: {
        createMessage
    },
    Subscription: {
        onMessageUpdated
    }
};

export default messagesResolvers;
