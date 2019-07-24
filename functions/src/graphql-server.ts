import express from 'express';
// import {ApolloServer} from 'apollo-server-express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

function gqlServer() {
  const app = express();
  app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  }));

//   const apolloServer = new ApolloServer({
//     typeDefs: schema,
//     resolvers,
//     // Enable graphiql gui
//     introspection: true,
//     playground: true
//   });

//   apolloServer.applyMiddleware({app, path: '/', cors: true});

  return app;
}

export default gqlServer;