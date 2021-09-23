import { model, Schema } from 'mongoose';

export const channelSchema = new Schema(
    {
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        ownerId: {
            ref: 'User',
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Channel = model('Channel', channelSchema);

export default Channel;
