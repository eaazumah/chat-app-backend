import { nanoid } from 'nanoid';
import { MutationCreateMessageArgs } from '../../@types/schema';
import Message from '../../models/model.message';

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
    return message;
};

export default createMessage;
