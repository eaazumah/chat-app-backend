import { UserInputError } from 'apollo-server-express';
import { GraphQLScalarType } from 'graphql';
import { GraphQLUpload } from 'graphql-upload';
import { Kind } from 'graphql/language';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const resolvers = {
    Query: {
        hello: () => 'Hello world!'
    },

    Upload: GraphQLUpload!,

    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value: number) {
            const date = new Date(value);
            return date.getTime(); // value from the client
        },
        serialize(value: number) {
            const date = new Date(value);
            return date.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                const date = new Date(parseInt(ast.value, 10));
                if (isNaN(date.getTime())) throw new UserInputError('Field error: value is an invalid Date');
                return date.getTime(); // Convert hard-coded AST string to integer and then to Date
            }
            if (ast.kind === Kind.STRING) {
                const date = new Date(ast.value);
                if (isNaN(date.getTime())) throw new UserInputError('Field error: value is an invalid Date');
                return date.getTime(); // Convert hard-coded AST string to integer and then to Date
            }
            return null;
        }
    }),

    PhoneNumber: new GraphQLScalarType({
        name: 'PhoneNumber',
        description: 'PhoneNumber custom scalar type',
        parseValue(value: string) {
            const phoneNumber = parsePhoneNumberFromString(value);
            if (!phoneNumber?.isValid()) throw new UserInputError('Field error: value is an invalid PhoneNumber');
            return phoneNumber?.number; // value from the client
        },
        serialize(value: string) {
            const phoneNumber = parsePhoneNumberFromString(value);
            if (!phoneNumber?.isValid()) throw new UserInputError('Field error: value is an invalid PhoneNumber');
            return phoneNumber?.number; // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.STRING) {
                const phoneNumber = parsePhoneNumberFromString(ast.value);
                if (!phoneNumber?.isValid()) throw new UserInputError('Field error: value is an invalid PhoneNumber');
                return phoneNumber?.number; // ast value is always in string format
            }
            return null;
        }
    })
};

export default resolvers;
