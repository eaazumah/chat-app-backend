import { nanoid } from 'nanoid';
import { MutationCreateUserArgs } from '../../@types/schema';
import User from '../../models/model.user';

const createUser = async (_: any, args: MutationCreateUserArgs) => {
    const { data } = args;

    const _id = data.id || nanoid();

    const user = await User.findByIdAndUpdate(
        _id,
        { ...data, _id },
        {
            new: true,
            upsert: true,
            runValidators: true,
            setDefaultsOnInsert: true
        }
    );
    return user;
};

export default createUser;
