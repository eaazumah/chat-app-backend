import { QueryChannelsArgs } from '../../@types/schema';
import Channel from '../../models/model.channel';
import formatPage from '../../util/formatPage';

const channels = async (_: any, args: QueryChannelsArgs) => {
    const { filters } = args;

    const limit = filters.limit || 10;
    const offset = filters.offset || 0;

    const channels = await Channel.find({ ...filters, limit }, null, { skip: offset });

    return formatPage(channels, limit, offset);
};

export default channels;
