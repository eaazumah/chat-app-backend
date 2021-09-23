import { gql } from 'apollo-server-core';

const channelTypeDefs = gql`
    type Channel {
        id: ID!
        _id: ID!
        ownerId: ID!
        name: String!
        deletedAt: Date
        createdAt: Date!
        updatedAt: Date!

        # relations
        owner: User
    }

    type ChannelsConnection {
        edges: [Channel!]!
        pageInfo: PageInfo!
    }

    input QueryChannelsFilters {
        id: ID
        ids: [ID!]
        limit: Int
        offset: Int
        ownerId: ID
        name: String
        deleted: Boolean
    }

    input MutationCreateChannelData {
        id: ID
        ownerId: ID!
        name: String!
    }

    extend type Query {
        channels(filters: QueryChannelsFilters!): ChannelsConnection!
    }

    extend type Mutation {
        createChannel(data: MutationCreateChannelData!): Channel!
    }
`;

export default channelTypeDefs;
