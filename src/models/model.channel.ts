import mongoose from 'mongoose';

export const channelSchema = new mongoose.Schema({
    name: String
});

const channel = mongoose.model('Channel', channelSchema);

export default channel;
