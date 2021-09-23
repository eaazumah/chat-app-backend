import id from '../general/id.resolver';
import createMessage from './mutation.create-message';
import messages from './query.messages';

const messagesResolvers = {
    Message: {
        id
    },
    Query: {
        messages
    },
    Mutation: {
        createMessage
    }
};

export default messagesResolvers;
