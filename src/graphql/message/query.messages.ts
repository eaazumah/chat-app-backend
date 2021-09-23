import { QueryMessagesArgs } from '../../@types/schema';
import Message from '../../models/model.message';
import formatPage from '../../util/formatPage';

const messages = async (_: any, args: QueryMessagesArgs) => {
    const { filters } = args;

    const limit = filters.limit || 10;
    const offset = filters.offset || 0;

    const messages = await Message.find({ ...filters, limit }, null, { skip: offset });

    return formatPage(messages, limit, offset);
};

export default messages;
