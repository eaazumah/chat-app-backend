import { gql } from 'apollo-server-core';

const channelTypeDefs = gql`
    type Channel {
        id: ID!
        ownerId: ID!
        name: string!
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
        name: string
        deleted: Boolean
    }

    input MutationCreateChannelData {
        name: String!
        phone: string!
    }

    extend type Query {
        orders(filters: QueryChannelsFilters!): ChannelsConnection!
    }

    extend type Mutation {
        createChannel(data: MutationCreateChannelData!): Channel!
    }
`;

export default channelTypeDefs;
