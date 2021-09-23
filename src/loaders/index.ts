import createChannelByIdLoader from './loader.channel-by-id';
import createUserByIdLoader from './loader.user-by-id';

const createLoader = () => ({
    userById: createUserByIdLoader(),
    channelById: createChannelByIdLoader()
});

export default createLoader;
