import { gql } from 'apollo-server-core';

const userTypeDefs = gql`
    type User {
        id: ID!
        _id: ID!
        name: String!
        deletedAt: Date
        createdAt: Date!
        updatedAt: Date!
        phone: PhoneNumber!
    }

    type UsersConnection {
        edges: [User!]!
        pageInfo: PageInfo!
    }

    input QueryUsersFilters {
        id: ID
        ids: [ID!]
        limit: Int
        offset: Int
        name: String
        deleted: Boolean
        phone: PhoneNumber
    }

    input MutationCreateUserData {
        id: ID
        name: String!
        phone: String!
    }

    extend type Query {
        users(filters: QueryUsersFilters!): UsersConnection!
    }

    extend type Mutation {
        createUser(data: MutationCreateUserData!): User!
    }
`;

export default userTypeDefs;
