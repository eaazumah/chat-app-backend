import { nanoid } from 'nanoid';
import { MutationCreateMessageArgs } from '../../@types/schema';
import Message from '../../models/model.message';
import pubsub from '../../services/services.pubsub';
import { ON_MESSAGE_UPDATED } from '../../util/constants';

const createMessage = async (_: any, args: MutationCreateMessageArgs) => {
    const { data } = args;

    const _id = data.id || nanoid();

    const message = await Message.findByIdAndUpdate(
        _id,
        { ...data, _id },
        {
            new: true,
            upsert: true,
            runValidators: true,
            setDefaultsOnInsert: true
        }
    );

    pubsub.publish(ON_MESSAGE_UPDATED, message);
    return message;
};

export default createMessage;
