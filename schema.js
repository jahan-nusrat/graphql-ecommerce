export const typeDefs = `
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: OnSaleProducts): [Product!]!
  }

  type Review {
    id: ID!
    date: String
    title: String!
    comment: String
    rating: Float!
    productId: ID!
  }

  input OnSaleProducts {
    onSale: Boolean
  }

  type Query {
    products(filter: OnSaleProducts): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    reviews: [Review!]!
    review(id: ID!): Review
  }
`;
