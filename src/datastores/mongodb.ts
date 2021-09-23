import mongoose from 'mongoose';

const mongooseConnect = async () => {
    return await mongoose.connect(process.env.MONGO_DB_URI!);
};

export default mongooseConnect;
