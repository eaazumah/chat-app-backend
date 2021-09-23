import id from '../general/id.resolver';
import users from './query.users';

const usersResolvers = {
    Query: {
        users
    },
    Mutation: {},
    User: {
        id
    }
};

export default usersResolvers;
