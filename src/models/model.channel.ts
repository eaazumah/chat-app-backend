import { model, Schema } from 'mongoose';

export const channelSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        ownerId: {
            ref: 'User',
            type: Schema.Types.ObjectId
        }
    },
    {
        timestamps: true
    }
);

const Channel = model('Channel', channelSchema);

export default Channel;
