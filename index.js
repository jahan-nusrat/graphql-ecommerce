import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { Query } from './resolvers/Query.js';
import { Product } from './resolvers/Product.js';
import { Category } from './resolvers/Category.js';
import { Mutation } from './resolvers/Mutations.js';

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Product, Category, Mutation },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
