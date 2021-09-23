import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis from 'ioredis';
import initEnv from './init.env';

initEnv();

const options = {
    connectTimeout: 40000,
    host: process.env.REDIS_HOST!,
    password: process.env.REDIS_PASSWORD!,
    port: parseInt(process.env.REDIS_PORT!),
    retryStrategy: (times: number) => {
        return Math.min(times * 50, 2000);
    }
};

const pubsub = new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options)
});

export default pubsub;
