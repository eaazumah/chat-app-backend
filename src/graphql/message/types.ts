import { gql } from 'apollo-server-core';

const messageTypeDefs = gql`
    type Message {
        id: ID!
        text: string!
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
`;

export default messageTypeDefs;
