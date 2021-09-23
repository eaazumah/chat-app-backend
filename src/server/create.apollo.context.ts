import createLoaders from '../loaders';

const createContext = async ({ _, __, connection }: any) => {
    if (connection) {
        return {
            ...connection.context
        };
    }
    const loaders = createLoaders();

    return { loaders };
};
export default createContext;
