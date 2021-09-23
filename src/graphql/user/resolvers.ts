import id from '../general/id.resolver';
import createUser from './mutation.create-user';
import users from './query.users';

const usersResolvers = {
    User: {
        id
    },
    Query: {
        users
    },
    Mutation: {
        createUser
    }
};

export default usersResolvers;
