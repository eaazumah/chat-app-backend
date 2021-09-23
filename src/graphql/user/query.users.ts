import { QueryUsersArgs } from '../../@types/schema';
import Users from '../../models/model.user';
import formatPage from '../../util/formatPage';

const users = async (_: any, args: QueryUsersArgs) => {
    const { filters } = args;

    const limit = filters.limit || 10;
    const offset = filters.offset || 0;

    const users = await Users.find({ ...filters, limit }, null, { skip: offset });

    return formatPage(users, limit, offset);
};

export default users;
