import mongoose from 'mongoose';

const mongoDBConnect = async () => {
    return await mongoose.connect(process.env.MONGO_DB_URI!);
};

export default mongoDBConnect;
