import dotenv from 'dotenv';

const initEnv = () => {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    if (isDevelopment) dotenv.config();
};

export default initEnv;
