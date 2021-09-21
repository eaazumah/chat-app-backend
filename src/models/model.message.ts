import mongoose from 'mongoose';

export const messageSchema = new mongoose.Schema({
    text: String,
    sender: String
});

const message = mongoose.model('Message', messageSchema);

export default message;
