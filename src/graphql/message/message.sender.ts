import { IContext } from '../../@types/decelerations';
import { Message } from '../../@types/schema';

const sender = (parent: Message, _args: any, ctx: IContext) => {
    const { loaders } = ctx;
    return loaders.userById.load(parent.senderId);
};

export default sender;
