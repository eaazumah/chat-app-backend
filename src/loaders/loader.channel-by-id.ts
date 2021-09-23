import DataLoader from 'dataloader';
import Channel from '../models/model.channel';

const getBatchChannelsByIds = async (_ids: readonly string[]) => {
    const ids = [..._ids];
    const channels = await Channel.find({
        _id: {
            $in: ids
        }
    });
    return ids.map((key) => channels.find((item) => item.id === key));
};

const createChannelByIdLoader = () => new DataLoader(getBatchChannelsByIds, {});

export default createChannelByIdLoader;
