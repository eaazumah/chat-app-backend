import { model, Schema } from 'mongoose';

export const messageSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        channelId: {
            ref: 'Channel',
            type: Schema.Types.ObjectId
        },
        senderId: {
            ref: 'User',
            type: Schema.Types.ObjectId
        }
    },
    {
        timestamps: true
    }
);

const Message = model('Message', messageSchema);

export default Message;
