import { expect } from 'chai';
import { createApolloServer } from '../../src/server/apollo.server';

describe('apollo server check', () => {
    const server = createApolloServer({ mocks: true });

    it('should return Hello world', async () => {
        const GREETING = `query Hello {
            hello
        }`;
        const res = await server.executeOperation({ query: GREETING });
        expect(res.data?.hello).to.equal('Hello World');
    });
});
