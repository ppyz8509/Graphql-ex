import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";  
import { typeDefs } from "./schema.js";
import db from "./_db.js";

// Resolvers

const resolvers = {
    Query: {
        movies() {
            return db.movies;
        },
        authors() {
            return db.authors;
        },
        reviews() {
            return db.reviews;
        },
        review(_, args) {
            return db.reviews.find((review)=> review.id === args.id);
        }
      }
    };
///server setup 
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 8000 }
})

console.log(`Server is ready at port ${url}`)