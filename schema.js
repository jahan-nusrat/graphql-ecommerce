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

  type Mutation {
    addCategory(input: inputAddCategory): Category!,
    updateCategory(id: ID!): Category!
  }

  input OnSaleProducts {
    onSale: Boolean
    rating: Int
  }

  input inputAddCategory {
    name: String!
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
