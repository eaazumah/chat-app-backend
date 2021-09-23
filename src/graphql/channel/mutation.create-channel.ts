import { nanoid } from 'nanoid';
import { MutationCreateChannelArgs } from '../../@types/schema';
import Channel from '../../models/model.channel';

const createChannel = async (_: any, args: MutationCreateChannelArgs) => {
    const { data } = args;

    const _id = data.id || nanoid();

    const channel = await Channel.findByIdAndUpdate(
        _id,
        { ...data, _id },
        {
            new: true,
            upsert: true,
            runValidators: true,
            setDefaultsOnInsert: true
        }
    );
    return channel;
};

export default createChannel;
