const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type Sales {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type Purchases {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type Buyer {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    purchases: [Purchases]
  }
  type Seller {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    purchases: [Purchases]
    sales: [Sales]
  }
  type Auth {
    token: ID
    buyer: Buyer
    seller: Seller
  }
  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    buyer: Buyer
    seller: Seller
    order(_id: ID!): Order
    sales(_id: ID!): Sales
    purchases(_id: ID!): Purchases
    checkout(products: [ID]!): Checkout 
  }
  type Mutation {
    addBuyer(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addSeller(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateBuyer(firstName: String, lastName: String, email: String, password: String): Buyer
    updateSeller(firstName: String, lastName: String, email: String, password: String): Seller
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
  type Checkout {
    session: ID
  }
`;

module.exports = typeDefs;