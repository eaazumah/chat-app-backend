import { model, Schema } from 'mongoose';
import Channel from './model.channel';
import User from './model.user';

export const messageSchema = new Schema(
    {
        _id: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        channelId: {
            ref: 'Channel',
            type: String,
            required: true
        },
        senderId: {
            ref: 'User',
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);
messageSchema.path('senderId').validate(async (value: string) => {
    return await User.findById(value);
}, 'User does not exist');

messageSchema.path('channelId').validate(async (value: string) => {
    return await Channel.findById(value);
}, 'Channel does not exist');

const Message = model('Message', messageSchema);

export default Message;
