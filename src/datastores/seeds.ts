import faker from 'faker';
import { nanoid } from 'nanoid';
import Channel from '../models/model.channel';
import Message from '../models/model.message';
import User from '../models/model.user';
import initEnv from '../services/init.env';
import mongooseConnect from './mongodb';

interface IUserSeed {
    _id: string;
    name: string;
    phone: string;
}

interface IChannelSeed {
    _id: string;
    name: string;
    ownerId: string;
}

interface IMessageSeed {
    _id: string;
    text: string;
    senderId: string;
    channelId: string;
}

const createUsersSeed = (count: number): IUserSeed[] => {
    return Array(count)
        .fill('')
        .map(() => {
            return {
                _id: nanoid(12),
                name: faker.name.findName() + faker.name.lastName(),
                phone: faker.phone.phoneNumber('+23354#######')
            };
        });
};

const createChannelsSeed = (users: IUserSeed[]): IChannelSeed[] => {
    return users.map((user) => {
        return {
            _id: nanoid(12),
            ownerId: user._id,
            name: faker.name.jobArea()
        };
    });
};

const createMessagesSeed = (users: IUserSeed[], channels: IChannelSeed[]): IMessageSeed[] => {
    return users.reduce((acc, user) => {
        const randomNumber = Math.floor(Math.random() * channels.length);
        const selectedChannels = channels.sort(() => 0.5 - Math.random()).slice(0, randomNumber);

        const userMessages: IMessageSeed[] = selectedChannels.map((channel) => {
            return {
                _id: nanoid(12),
                senderId: user._id,
                channelId: channel._id,
                text: faker.lorem.paragraph()
            };
        });

        return [...acc, ...userMessages];
    }, [] as IMessageSeed[]);
};

const syncSeeds = async () => {
    try {
        initEnv();
        console.log('###### contenting to mongo DB ###########');
        const db = await mongooseConnect();
        console.log('#### connected mongo DB successfully #####');

        const usersSeed = createUsersSeed(20);
        console.log('###### seeding users ###########');
        await User.collection.drop();
        await User.create(usersSeed);

        console.log('###### seeding channels ###########');
        const channelsSeed = createChannelsSeed(usersSeed);
        await Channel.collection.drop();
        await Channel.create(channelsSeed);

        console.log('###### seeding messages ###########');
        const messagesSeed = createMessagesSeed(usersSeed, channelsSeed);
        await Message.collection.drop();
        await Message.create(messagesSeed);

        await db.disconnect();
    } catch (error) {
        console.log(error);
    }
};

syncSeeds();
