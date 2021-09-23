import { IContext } from '../../@types/decelerations';
import { Message } from '../../@types/schema';

const channel = (parent: Message, _args: any, ctx: IContext) => {
    const { loaders } = ctx;
    return loaders.channelById.load(parent.channelId);
};

export default channel;
