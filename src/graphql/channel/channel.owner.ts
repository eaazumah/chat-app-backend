import { IContext } from '../../@types/decelerations';
import { Channel } from '../../@types/schema';

const owner = (parent: Channel, _args: any, ctx: IContext) => {
    const { loaders } = ctx;
    return loaders.userById.load(parent.ownerId);
};

export default owner;
