import { model, Schema } from 'mongoose';
import User from './model.user';

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

channelSchema.path('ownerId').validate(async (value: string) => {
    return await User.findById(value);
}, 'User does not exist');

const Channel = model('Channel', channelSchema);

export default Channel;
