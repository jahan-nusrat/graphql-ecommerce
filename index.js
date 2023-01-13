import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { categories, products } from './data.js';

const resolvers = {
  Query: {
    products: () => products,
    product: (parent, args, context) => {
      const { id } = args;
      return products.find(product => product.id === id);
    },
    categories: () => categories,
    category: (parent, args, context) => {
      const { id: categoryId } = args;
      return categories.find(category => category.id === categoryId);
    },
  },
  Category: {
    products: (parent, args, context) => {
      const { id: parentid } = parent;
      return products.filter(product => product.categoryId === parentid);
    },
  },
  Product: {
    category: (parent, args, context) => {
      console.log(parent);
      const { categoryId } = parent;
      return categories.find(category => category.id === categoryId);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
