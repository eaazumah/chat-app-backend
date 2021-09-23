import { withFilter } from 'graphql-subscriptions';
import { Message, SubscriptionOnMessageUpdatedArgs } from '../../@types/schema';
import pubsub from '../../services/services.pubsub';
import { ON_MESSAGE_UPDATED } from '../../util/constants';

const onMessageUpdated = {
    resolve: async (payload: any) => {
        return payload;
    },
    subscribe: withFilter(
        () => pubsub.asyncIterator(ON_MESSAGE_UPDATED),
        (payload: Message, variables: SubscriptionOnMessageUpdatedArgs) => {
            const { filters } = variables;
            const { id, channelId, senderId } = filters;

            if (id === payload._id) return true;
            if (senderId === payload.senderId) return true;
            if (channelId === payload.channelId) return true;
            return false;
        }
    )
};

export default onMessageUpdated;
