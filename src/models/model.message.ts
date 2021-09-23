import { model, Schema } from 'mongoose';

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

const Message = model('Message', messageSchema);

export default Message;
