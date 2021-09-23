import { gql } from 'apollo-server-core';

const messageTypeDefs = gql`
    type Message {
        id: ID!
        _id: ID!
        text: String!
        senderId: ID!
        channelId: ID!
        deletedAt: Date
        createdAt: Date!
        updatedAt: Date!

        # relations
        sender: User
        channel: Channel
    }

    type MessagesConnection {
        edges: [Message!]!
        pageInfo: PageInfo!
    }

    input QueryMessagesFilters {
        id: ID
        limit: Int
        offset: Int
        text: String
        senderId: ID
        channelId: ID
        deleted: Boolean
    }

    input MutationCreateMessageData {
        id: ID
        text: String!
        senderId: ID!
        channelId: ID!
    }

    extend type Query {
        messages(filters: QueryMessagesFilters!): MessagesConnection!
    }

    extend type Mutation {
        createMessage(data: MutationCreateMessageData!): Message!
    }

    input SubscriptionOnNewMessageFilters {
        senderId: ID
        channelId: ID
    }
    input SubscriptionOnMessageUpdateFilters {
        id: ID
        senderId: ID
        channelId: ID
    }

    extend type Subscription {
        onMessageUpdated(filters: SubscriptionOnMessageUpdateFilters!): Message!
    }
`;

export default messageTypeDefs;
