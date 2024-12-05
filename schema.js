export const typeDefs = `#gRAPhQL
      type Movie {
        id: ID!,
        title: String!,
        releaseDate: String!
        type: [String]
      }
      type Review {
        id: ID!,
        rating: Int!,
        comment: String!
      }
      type Author {
        id: ID!,
        name: String!,
        verified: Boolean!
      }
      type Query {
        reviews: [Review]
        review(id: ID!): Review
        movies: [Movie]
        authors: [Author]
      }
        
`
