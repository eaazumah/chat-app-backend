import { gql } from 'apollo-server-express';

const typeDef = gql`
    scalar Date

    scalar Upload

    scalar PhoneNumber

    enum CacheControlScope {
        PUBLIC
        PRIVATE
    }

    type PageInfo {
        total: Int!
        limit: Int!
        offset: Int!
        hasNextPage: Boolean!
        hasPreviousPage: Boolean
    }

    type Query {
        _empty: String
        hello: String
    }

    type Subscription {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
    directive @cacheControl(maxAge: Int, scope: CacheControlScope) on OBJECT | FIELD | FIELD_DEFINITION
`;

export default typeDef;
