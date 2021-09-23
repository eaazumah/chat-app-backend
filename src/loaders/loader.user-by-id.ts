import DataLoader from 'dataloader';
import User from '../models/model.user';

const getBatchUsersByIds = async (_ids: readonly string[]) => {
    const ids = [..._ids];
    const users = await User.find({
        _id: {
            $in: ids
        }
    });
    return ids.map((key) => users.find((item) => item.id === key));
};

const createUserByIdLoader = () => new DataLoader(getBatchUsersByIds, {});

export default createUserByIdLoader;
