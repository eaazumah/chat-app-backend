const createContext = async ({ _, __, connection }: any) => {
    if (connection) {
        return {
            ...connection.context
        };
    }
    return {};
};

export default createContext;
