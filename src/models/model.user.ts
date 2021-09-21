import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    name: String
});

const user = mongoose.model('User', userSchema);

export default user;
